// V7 §4: Automated Regulatory Intelligence Pipeline — API Route
// Fetches from ACCC, CAV, TGA feeds and summarises via OpenAI
import { NextRequest, NextResponse } from 'next/server';

// V7 §4: Revalidate every hour
export const revalidate = 3600;

export interface RegulatoryUpdate {
  id: string;
  source: 'ACCC' | 'CAV' | 'TGA';
  title: string;
  summary: string;
  url: string;
  publishedAt: string;
  categories: string[];
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '5'), 20);
  const categoriesParam = searchParams.get('categories');
  const filterCategories = categoriesParam ? categoriesParam.split(',') : [];

  try {
    // V7 §4: Fetch from regulatory sources
    // TODO: Implement actual RSS/API fetching from ACCC, CAV, TGA
    // Replace with real feed URLs from REGULATORY_INTELLIGENCE_PIPELINE.md
    const updates = await fetchRegulatoryUpdates();

    // Apply category filter if specified
    const filtered = filterCategories.length > 0
      ? updates.filter((u) => u.categories.some((c) => filterCategories.includes(c)))
      : updates;

    return NextResponse.json({
      updates: filtered.slice(0, limit),
      updatedAt: new Date().toISOString(),
      total: filtered.length,
    });
  } catch (error) {
    console.error('[regulatory-feed] Error fetching updates:', error);
    return NextResponse.json(
      { updates: [], updatedAt: new Date().toISOString(), total: 0, error: 'Feed unavailable' },
      { status: 200 } // Return 200 with empty array — non-critical feature
    );
  }
}

// V7 §4: Regulatory feed fetcher
// TODO: Implement real feed fetching and OpenAI summarisation
async function fetchRegulatoryUpdates(): Promise<RegulatoryUpdate[]> {
  // Placeholder — replace with actual ACCC/CAV/TGA RSS feed parsing
  // and OpenAI API summarisation per REGULATORY_INTELLIGENCE_PIPELINE.md
  return [];
}
