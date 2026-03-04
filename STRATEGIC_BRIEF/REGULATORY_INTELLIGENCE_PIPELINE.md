# REGULATORY INTELLIGENCE PIPELINE — ARCHITECTURE
## Synergistic Interaction — V7 §4 Implementation Guide

> **Source:** SI_Master_Brief_v7.docx §4 (Pages 10–13)

---

## Overview

The automated regulatory intelligence pipeline fetches, parses, and summarises
updates from Australian regulatory bodies. It runs server-side in Next.js and
is displayed in the `RegulatoryFeed` component.

---

## Data Sources

| Regulator | Acronym | Feed Type | Update Frequency |
|-----------|---------|-----------|-----------------|
| Australian Competition and Consumer Commission | ACCC | RSS/API | Daily |
| Consumer Affairs Victoria | CAV | RSS | Weekly |
| Therapeutic Goods Administration | TGA | RSS | Weekly |
| [Additional sources from §4] | — | — | — |

---

## Architecture

```
[Regulatory Feeds]
      ↓ (RSS / JSON API)
[app/api/regulatory-feed/route.ts]
      ↓ (Next.js Route Handler with revalidation)
[OpenAI API — GPT-4o]
      ↓ (Summarise + categorise update)
[Cached response — Next.js revalidate: 3600]
      ↓
[components/RegulatoryFeed.tsx]
      ↓
[Homepage + /why-compliance-matters]
```

---

## Route Handler Specification

```typescript
// V7 §4: Automated Regulatory Intelligence Pipeline
// app/api/regulatory-feed/route.ts

import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const revalidate = 3600; // Revalidate every hour

interface RegulatoryUpdate {
  id: string;
  source: string;        // 'ACCC' | 'CAV' | 'TGA'
  title: string;
  summary: string;       // OpenAI-generated summary
  relevanceScore: number; // 1-10 relevance to category management
  url: string;
  publishedAt: string;
  categories: string[];  // ['supplier', 'product-safety', 'pricing', etc.]
}

export async function GET() {
  // 1. Fetch from all regulatory sources
  // 2. Parse RSS/JSON feeds
  // 3. Send to OpenAI for summarisation and categorisation
  // 4. Return sorted by relevance and date
  return NextResponse.json({ updates: [] });
}
```

---

## RegulatoryFeed Component Specification

```typescript
// V7 §4: Regulatory Feed UI component
// components/RegulatoryFeed.tsx

interface RegulatoryFeedProps {
  maxItems?: number;       // Default: 5 for homepage, 20 for /why-compliance-matters
  showFilter?: boolean;    // Default: false for homepage, true for /why-compliance-matters
  categories?: string[];   // Filter to specific categories
}
```

### UI Requirements
- Display source badge (ACCC / CAV / TGA) with colour coding
- Display AI-generated summary (2–3 sentences max)
- Display publish date (relative: "2 days ago")
- Link to original regulatory document
- Category filter chips when `showFilter={true}`
- Loading skeleton while fetching
- "Updated {time}" timestamp in feed header

---

## OpenAI Integration

```typescript
// V7 §4: OpenAI summary generation
const prompt = `
You are a regulatory compliance expert for Australian retail category management.
Summarise this regulatory update in 2-3 sentences for a retail procurement audience.
Focus on: impact to category managers, compliance obligations, timeline.
Output format: plain text summary only.

Regulatory update:
${rawFeedItem.title}
${rawFeedItem.content}
`;
```

---

## Environment Variables Required

```bash
# .env.local (never commit to git)
OPENAI_API_KEY=sk-...
ACCC_FEED_URL=https://...
CAV_FEED_URL=https://...
TGA_FEED_URL=https://...
```

---

## Caching Strategy

- Next.js route handler: `revalidate = 3600` (1 hour)
- Client-side: SWR or React Query with 30-minute stale time
- Fallback: Last cached response if all feeds fail
