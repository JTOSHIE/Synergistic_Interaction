// V7 §4: Public regulatory feed GET endpoint
// Returns approved items from staging store, or fallback placeholder items
// In production: items come from Vercel KV (after ingest + human approval)
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

// Placeholder items displayed until live feed is operational
const PLACEHOLDER_ITEMS: RegulatoryUpdate[] = [
  {
    id: 'ph-1',
    source: 'ACCC',
    title: 'ACCC Compliance and Enforcement Priorities 2025–2026',
    summary: "The ACCC has published its annual compliance and enforcement priorities identifying button battery safety, children's product standards, and electrical goods RCM requirements as primary enforcement focus areas. Retailers in scope should conduct immediate compliance file reviews for all relevant product categories and ensure third-party test report currency.",
    urgency: 'High',
    url: 'https://www.accc.gov.au/business/business-rights-protections/product-safety/compliance-and-enforcement',
    publishedAt: new Date().toISOString(),
    categories: ["Children's Products", 'Electrical Goods', 'Baby Products'],
  },
  {
    id: 'ph-2',
    source: 'ESV',
    title: 'Energy Safe Victoria: RCM Compliance Reminder for Retailers',
    summary: 'Energy Safe Victoria has reiterated compliance obligations for all electrical articles supplied in Victoria. Products must be registered on the EESS database and display the RCM mark. ESV has indicated increased retail inspection activity for the current quarter, with particular focus on variety and discount retailers sourcing directly from overseas manufacturers.',
    urgency: 'Critical',
    url: 'https://www.esv.vic.gov.au/electrical-safety/electrical-equipment/',
    publishedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    categories: ['Electrical Goods'],
  },
  {
    id: 'ph-3',
    source: 'ACCC',
    title: 'Button Battery Safety Standard — Mandatory Requirements Reminder',
    summary: 'Reminder that button battery safety requirements under AS/NZS 62368.1:2022 are now mandatory for all relevant products. Products containing accessible button batteries must meet child-resistant packaging requirements. Retailers should verify that all in-scope products carry current test reports from NATA-accredited laboratories confirming compliance with accessibility requirements.',
    urgency: 'Critical',
    url: 'https://www.productsafety.gov.au/products/electrical/batteries',
    publishedAt: new Date(Date.now() - 86400000 * 4).toISOString(),
    categories: ["Children's Products", 'Baby Products', 'Electrical Goods'],
  },
  {
    id: 'ph-4',
    source: 'TGA',
    title: 'TGA Safety Alert: Sunscreen Products — Compliance Guidance',
    summary: 'The TGA has issued updated guidance for retailers of sunscreen products classified as therapeutic goods. SPF 15 and above sunscreens require TGA listing as a therapeutic good and must display the AUST L or AUST R number on packaging. Retailers should verify that all sunscreen products carry current regulatory documentation before continued supply.',
    urgency: 'Medium',
    url: 'https://www.tga.gov.au/resources/resource/guidance/sunscreen-products-regulation',
    publishedAt: new Date(Date.now() - 86400000 * 7).toISOString(),
    categories: ['Personal Care'],
  },
  {
    id: 'ph-5',
    source: 'CAV',
    title: 'Consumer Affairs Victoria: Toy Safety Inspection Outcomes',
    summary: 'Consumer Affairs Victoria has published outcomes from its recent toy safety inspection program. Non-compliant products identified include toys with excessive long cord lengths, toys with small parts incorrectly age-graded as suitable for under-3s, and projectile toys without adequate warnings. Retailers are reminded that ignorance of mandatory standards is not a compliance defence under Australian Consumer Law.',
    urgency: 'High',
    url: 'https://www.consumer.vic.gov.au/products-and-services/product-safety',
    publishedAt: new Date(Date.now() - 86400000 * 10).toISOString(),
    categories: ["Children's Products"],
  },
  {
    id: 'ph-6',
    source: 'LEGISLATION',
    title: 'Consumer Goods (Cots) Safety Standard 2023 — Compliance Deadline',
    summary: "The updated Consumer Goods (Cots) Safety Standard includes revised requirements for cot dimensions, slat spacing, and mattress base stability. All cots supplied in Australia must comply with the updated standard. Retailers with existing stock purchased prior to the standard's commencement date should verify compliance status with their supplier and obtain updated test documentation where required.",
    urgency: 'High',
    url: 'https://www.legislation.gov.au/Series/F2023L01066',
    publishedAt: new Date(Date.now() - 86400000 * 14).toISOString(),
    categories: ['Baby Products'],
  },
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '10', 10), 50);

  try {
    // Attempt to read from Vercel KV when available
    // TODO: Uncomment after KV is provisioned
    // const { kv } = await import('@vercel/kv');
    // const items = await kv.get<RegulatoryUpdate[]>('regulatory-feed:approved') ?? [];
    // if (items.length > 0) {
    //   return NextResponse.json({ updates: items.slice(0, limit), source: 'live' });
    // }

    // Return placeholder items until live feed is operational
    return NextResponse.json({
      updates: PLACEHOLDER_ITEMS.slice(0, limit),
      source: 'placeholder',
      message: 'Live feed operational after Vercel KV is provisioned and first cron run completes.',
    });
  } catch {
    return NextResponse.json({
      updates: PLACEHOLDER_ITEMS.slice(0, limit),
      source: 'fallback',
    });
  }
}
