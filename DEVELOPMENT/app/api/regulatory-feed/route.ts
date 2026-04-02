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

const PLACEHOLDER_ITEMS: RegulatoryUpdate[] = [
  {
    id: 'ph-1',
    source: 'ACCC',
    title: 'ACCC Compliance and Enforcement Priorities 2025–2026',
    summary:
      "The ACCC has published its annual compliance and enforcement priorities identifying button battery safety, children's product standards, and electrical goods RCM requirements as primary enforcement focus areas. Retailers should conduct immediate compliance file reviews for all relevant product categories.",
    urgency: 'High',
    url: 'https://www.accc.gov.au/business/business-rights-protections/product-safety/compliance-and-enforcement',
    publishedAt: new Date().toISOString(),
    categories: ["Children's Products", 'Electrical Goods', 'Baby Products'],
  },
  {
    id: 'ph-2',
    source: 'ESV',
    title: 'Energy Safe Victoria: RCM Compliance Reminder for Retailers',
    summary:
      'Energy Safe Victoria has reiterated compliance obligations for all electrical articles supplied in Victoria. Products must be registered on the EESS database and display the RCM mark. ESV has indicated increased retail inspection activity for the current quarter.',
    urgency: 'Critical',
    url: 'https://www.esv.vic.gov.au/electrical-safety/electrical-equipment/',
    publishedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    categories: ['Electrical Goods'],
  },
  {
    id: 'ph-3',
    source: 'ACCC',
    title: 'Button Battery Safety Standard — Mandatory Requirements',
    summary:
      'Reminder that button battery safety requirements are mandatory for all relevant products. Products containing accessible button batteries must meet child-resistant packaging requirements per AS/NZS 62368.1:2022. Retailers should verify all in-scope products carry current NATA-accredited test reports.',
    urgency: 'Critical',
    url: 'https://www.productsafety.gov.au/products/electrical/batteries',
    publishedAt: new Date(Date.now() - 86400000 * 4).toISOString(),
    categories: ["Children's Products", 'Baby Products'],
  },
  {
    id: 'ph-4',
    source: 'CAV',
    title: 'Consumer Affairs Victoria: Toy Safety Inspection Outcomes',
    summary:
      'Consumer Affairs Victoria has published outcomes from its recent toy safety inspection program. Non-compliant products identified include toys with excessive cord lengths, incorrectly age-graded products, and projectile toys without adequate warnings.',
    urgency: 'High',
    url: 'https://www.consumer.vic.gov.au/products-and-services/product-safety',
    publishedAt: new Date(Date.now() - 86400000 * 7).toISOString(),
    categories: ["Children's Products"],
  },
  {
    id: 'ph-5',
    source: 'TGA',
    title: 'TGA Guidance: Sunscreen Product Compliance for Retailers',
    summary:
      'The TGA has issued updated guidance for retailers of sunscreen products classified as therapeutic goods. SPF 15+ sunscreens require TGA listing and must display AUST L or AUST R numbers on packaging. Retailers should verify all sunscreen products carry current regulatory documentation.',
    urgency: 'Medium',
    url: 'https://www.tga.gov.au/resources/resource/guidance/sunscreen-products-regulation',
    publishedAt: new Date(Date.now() - 86400000 * 10).toISOString(),
    categories: ['Personal Care'],
  },
];

export async function GET(request: NextRequest) {
  const limit = Math.min(
    parseInt(request.nextUrl.searchParams.get('limit') ?? '10', 10),
    50
  );

  // Always return placeholder items until Vercel KV is provisioned
  // TODO: Replace with KV lookup after provisioning
  return NextResponse.json({
    updates: PLACEHOLDER_ITEMS.slice(0, limit),
    source: 'placeholder',
    lastUpdated: new Date().toISOString(),
  });
}
