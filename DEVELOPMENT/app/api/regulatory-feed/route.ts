// V7 §4: Automated Regulatory Intelligence Pipeline — API Route
// Three-stage pipeline: Automated Ingestion → AI Triage → Human-in-Loop Validation
// V7 §4.4: Runs as Vercel Cron Job (daily at 6:00 AM AEST)
// Add to vercel.json: { "crons": [{ "path": "/api/regulatory-feed/ingest", "schedule": "0 20 * * *" }] }
// Note: 20:00 UTC = 06:00 AEST

import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { regulatorySources, AI_PARSING_MODEL, REGULATORY_AI_SYSTEM_PROMPT } from '@/lib/regulatory-sources';

// V7 §4: Revalidate every hour for live feed freshness
export const revalidate = 3600;

export interface RegulatoryUpdate {
  id: string;
  source: 'ACCC' | 'CAV' | 'TGA' | 'ESV' | 'LEGISLATION';
  title: string;
  summary: string;      // OpenAI-generated 50-100 word summary
  urgency: 'Critical' | 'High' | 'Medium' | 'Low';
  url: string;
  publishedAt: string;
  categories: string[];
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '5'), 20);
  const urgencyFilter = searchParams.get('urgency'); // Critical | High | Medium | Low
  const categoriesParam = searchParams.get('categories');
  const filterCategories = categoriesParam ? categoriesParam.split(',') : [];

  try {
    // In production: fetch from staging store populated by Vercel Cron
    // On first load or cache miss: fetch live
    const updates = await fetchApprovedUpdates();

    let filtered = updates;

    if (urgencyFilter) {
      filtered = filtered.filter((u) => u.urgency === urgencyFilter);
    }

    if (filterCategories.length > 0) {
      filtered = filtered.filter((u) =>
        u.categories.some((c) => filterCategories.includes(c))
      );
    }

    return NextResponse.json({
      updates: filtered.slice(0, limit),
      updatedAt: new Date().toISOString(),
      total: filtered.length,
    });
  } catch (error) {
    console.error('[regulatory-feed] Error:', error);
    // V7 §4: Graceful degradation — feed is non-critical to site functionality
    return NextResponse.json({
      updates: [],
      updatedAt: new Date().toISOString(),
      total: 0,
    });
  }
}

// V7 §4.2: Stage 1 + Stage 2 — fetch and AI-parse RSS feeds
// Called by Vercel Cron; output staged for human-in-loop validation
// Not exported — route files may only export HTTP method handlers
async function fetchAndParseFeeds(): Promise<RegulatoryUpdate[]> {
  const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] });
  const results: RegulatoryUpdate[] = [];

  for (const source of regulatorySources) {
    if (source.feedType === 'api') continue; // API sources handled separately

    for (const feedUrl of source.feedUrls) {
      try {
        const feedItems = await fetchRSSFeed(feedUrl);

        for (const item of feedItems.slice(0, 10)) { // Process max 10 items per feed
          const response = await openai.chat.completions.create({
            model: AI_PARSING_MODEL, // V7 §4.4: GPT-4o-mini — ~$0.01-0.05 per item
            messages: [
              { role: 'system', content: REGULATORY_AI_SYSTEM_PROMPT },
              { role: 'user', content: `Title: ${item.title}\n\nContent: ${item.description}` },
            ],
            response_format: { type: 'json_object' },
          });

          const parsed = JSON.parse(response.choices[0]?.message?.content ?? '{}') as {
            relevant: boolean;
            headline: string;
            description: string;
            urgency: 'Critical' | 'High' | 'Medium' | 'Low';
            categories: string[];
            sourceUrl: string;
          };

          if (parsed.relevant) {
            results.push({
              id: `${source.id}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
              source: source.acronym as RegulatoryUpdate['source'],
              title: parsed.headline || item.title,
              summary: parsed.description,
              urgency: parsed.urgency || 'Medium',
              url: item.link || feedUrl,
              publishedAt: item.pubDate || new Date().toISOString(),
              categories: parsed.categories || [],
            });
          }
        }
      } catch (err) {
        console.error(`[regulatory-feed] Failed to fetch ${feedUrl}:`, err);
      }
    }
  }

  return results;
}

// V7 §4.3: Stage 3 — fetch approved items from staging store
// TODO: Replace with actual KV store (Vercel KV or Upstash Redis)
async function fetchApprovedUpdates(): Promise<RegulatoryUpdate[]> {
  // Placeholder — implement with Vercel KV:
  // const { kv } = await import('@vercel/kv');
  // return await kv.get<RegulatoryUpdate[]>('regulatory-feed:approved') ?? [];
  return [];
}

// RSS feed parser (simplified — use rss-parser package in production)
async function fetchRSSFeed(url: string): Promise<Array<{
  title: string;
  description: string;
  link: string;
  pubDate: string;
}>> {
  const response = await fetch(url, {
    headers: { 'User-Agent': 'SynergisticInteraction-RegulatoryBot/1.0' },
    next: { revalidate: 3600 },
  });

  if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);

  const text = await response.text();

  // Simple XML extraction — replace with rss-parser package for production robustness
  const items: Array<{ title: string; description: string; link: string; pubDate: string }> = [];
  const itemMatches = text.matchAll(/<item>([\s\S]*?)<\/item>/g);

  for (const match of itemMatches) {
    const item = match[1] ?? '';
    items.push({
      title: extractXMLTag(item, 'title'),
      description: extractXMLTag(item, 'description'),
      link: extractXMLTag(item, 'link'),
      pubDate: extractXMLTag(item, 'pubDate'),
    });
  }

  return items;
}

function extractXMLTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>|<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return (match?.[1] ?? match?.[2] ?? '').trim();
}
