import { NextRequest, NextResponse } from 'next/server';

interface RegulatoryUpdate {
  id: string;
  source: 'ACCC' | 'CAV' | 'TGA' | 'ESV' | 'LEGISLATION';
  title: string;
  summary: string;
  urgency: 'Critical' | 'High' | 'Medium' | 'Low';
  url: string;
  publishedAt: string;
  categories: string[];
}

// No placeholder items — feed shows live data from regulatory RSS sources
// or empty state when KV has not yet been populated
const items: RegulatoryUpdate[] = [];

export async function GET(request: NextRequest) {
  const limit = Math.min(
    parseInt(request.nextUrl.searchParams.get('limit') ?? '10', 10),
    50
  );

  // Return empty state until Vercel KV is provisioned and first cron ingest runs
  return NextResponse.json({
    updates: items.slice(0, limit),
    source: 'pending',
    lastUpdated: null,
    status: 'pending',
    message: 'Regulatory feed initialising — live data will appear after first scheduled ingest.',
  });
}
