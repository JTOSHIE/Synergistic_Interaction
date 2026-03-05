// V7 §4: Vercel Cron Job — runs daily at 6:00 AM AEST (20:00 UTC)
// Stage 1 (Ingestion) + Stage 2 (AI Triage) of the automated pipeline
// Stage 3 (Human validation) happens via the staging dashboard
// vercel.json cron: { "path": "/api/regulatory-feed/ingest", "schedule": "0 20 * * *" }

import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { regulatorySources, AI_PARSING_MODEL, REGULATORY_AI_SYSTEM_PROMPT } from '@/lib/regulatory-sources';

// V7 §4.4: Protect with cron secret in production
export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (
    process.env.NODE_ENV === 'production' &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const results: StagedItem[] = [];
  const errors: string[] = [];

  for (const source of regulatorySources) {
    if (source.feedType === 'api') continue;

    for (const feedUrl of source.feedUrls) {
      try {
        const feedItems = await fetchRSSFeed(feedUrl);

        for (const item of feedItems.slice(0, 8)) {
          try {
            const response = await openai.chat.completions.create({
              model: AI_PARSING_MODEL,
              messages: [
                { role: 'system', content: REGULATORY_AI_SYSTEM_PROMPT },
                {
                  role: 'user',
                  content: `Title: ${item.title}\n\nContent: ${item.description}\n\nSource URL: ${item.link}`,
                },
              ],
              response_format: { type: 'json_object' },
              max_tokens: 300,
            });

            const parsed = JSON.parse(
              response.choices[0]?.message?.content ?? '{}'
            ) as ParsedItem;

            if (parsed.relevant) {
              results.push({
                id: `${source.id}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                source: source.acronym,
                title: parsed.headline || item.title,
                summary: parsed.description,
                urgency: parsed.urgency || 'Medium',
                url: item.link || feedUrl,
                publishedAt: item.pubDate || new Date().toISOString(),
                categories: parsed.categories || [],
                status: 'pending',
                feedUrl,
              });
            }
          } catch (parseErr) {
            errors.push(`AI parse error for "${item.title}": ${String(parseErr)}`);
          }
        }
      } catch (fetchErr) {
        errors.push(`Fetch error for ${feedUrl}: ${String(fetchErr)}`);
      }
    }
  }

  // V7 §4.4: Store in Vercel KV staging store (pending human approval)
  // Uncomment when Vercel KV is provisioned:
  // const { kv } = await import('@vercel/kv');
  // const existing = await kv.get<StagedItem[]>('regulatory-feed:staging') ?? [];
  // await kv.set('regulatory-feed:staging', [...existing, ...results], { ex: 60 * 60 * 24 * 7 });

  return NextResponse.json({
    processed: results.length,
    errors: errors.length,
    errorDetails: errors,
    timestamp: new Date().toISOString(),
  });
}

async function fetchRSSFeed(url: string): Promise<FeedItem[]> {
  const response = await fetch(url, {
    headers: { 'User-Agent': 'SynergisticInteraction-RegulatoryBot/1.0' },
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);

  const text = await response.text();
  const items: FeedItem[] = [];
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
  const cdataMatch = xml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`));
  if (cdataMatch?.[1]) return cdataMatch[1].trim();
  const plainMatch = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  return (plainMatch?.[1] ?? '').trim();
}

interface FeedItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
}
interface ParsedItem {
  relevant: boolean;
  headline: string;
  description: string;
  urgency: 'Critical' | 'High' | 'Medium' | 'Low';
  categories: string[];
  sourceUrl: string;
}
interface StagedItem {
  id: string;
  source: string;
  title: string;
  summary: string;
  urgency: string;
  url: string;
  publishedAt: string;
  categories: string[];
  status: 'pending' | 'approved' | 'rejected';
  feedUrl: string;
}
