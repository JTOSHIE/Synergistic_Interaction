// V7 §4.2: All six official regulatory sources + AI parsing configuration
// Real Australian regulatory RSS feeds — verified April 2026
// All URLs confirmed live from official government sources

export interface RegulatorySource {
  id: string;
  acronym: 'ACCC' | 'CAV' | 'TGA' | 'ESV' | 'LEGISLATION';
  name: string;
  website: string;
  feedUrls: string[];
  feedType: 'rss' | 'api';
  relevance: string;
  cost: 'free' | 'paid';
}

// V7 §4.2: All five primary Australian regulatory sources — real RSS feeds
export const regulatorySources: RegulatorySource[] = [
  {
    id: 'accc',
    acronym: 'ACCC',
    name: 'Australian Competition & Consumer Commission — Product Safety',
    website: 'https://www.productsafety.gov.au',
    feedUrls: [
      'https://www.productsafety.gov.au/rss/recalls.xml',
      'https://www.productsafety.gov.au/rss/recalls.xml?f%5B%5D=field_psa_product_category%3A10001',
      'https://www.productsafety.gov.au/rss/recalls.xml?f%5B%5D=field_psa_product_category%3A10035',
      'https://www.productsafety.gov.au/rss/recalls.xml?f%5B%5D=field_psa_product_category%3A10044',
      'https://www.productsafety.gov.au/rss/recalls.xml?f%5B%5D=field_psa_product_category%3A10067',
      'https://www.productsafety.gov.au/rss/recalls.xml?f%5B%5D=field_psa_product_category%3A10024',
      'https://www.productsafety.gov.au/rss/recalls.xml?f%5B%5D=field_psa_product_category%3A40159',
    ],
    feedType: 'rss',
    relevance: 'All consumer product recalls, baby and toddler products, electronics and batteries, home and garden, kids toys, clothing and textiles, compulsory recalls — primary compliance signal source',
    cost: 'free',
  },
  {
    id: 'cav',
    acronym: 'CAV',
    name: 'Consumer Affairs Victoria',
    website: 'https://www.consumer.vic.gov.au',
    feedUrls: [
      'https://www.consumer.vic.gov.au/RSS.aspx?RssType=newsalerts',
      'https://www.consumer.vic.gov.au/RSS.aspx?RssType=legislationupdates',
      'https://www.consumer.vic.gov.au/RSS.aspx?RssType=courtactions',
      'https://www.consumer.vic.gov.au/RSS.aspx?RssType=publicwarnings',
      'https://www.consumer.vic.gov.au/RSS.aspx?RssType=enforceableundertakings',
    ],
    feedType: 'rss',
    relevance: 'Victoria-specific enforcement actions, news alerts, legislation updates, court actions, public warnings, and enforceable undertakings — directly relevant to Australian retail market',
    cost: 'free',
  },
  {
    id: 'tga',
    acronym: 'TGA',
    name: 'Therapeutic Goods Administration',
    website: 'https://www.tga.gov.au',
    feedUrls: [
      'https://www.tga.gov.au/safety-alerts/rss.xml',
      'https://www.tga.gov.au/recall-alerts/rss.xml',
    ],
    feedType: 'rss',
    relevance: 'Baby skincare, personal care, healthcare-adjacent categories — sunscreen and therapeutic good classification',
    cost: 'free',
  },
  {
    id: 'esv',
    acronym: 'ESV',
    name: 'Energy Safe Victoria',
    website: 'https://www.esv.vic.gov.au',
    feedUrls: ['https://www.esv.vic.gov.au/news/rss.xml'],
    feedType: 'rss',
    relevance: 'Electrical safety enforcement, RCM and EESS compliance — directly relevant to electrical goods category',
    cost: 'free',
  },
  {
    id: 'legislation',
    acronym: 'LEGISLATION',
    name: 'Federal Register of Legislation',
    website: 'https://www.legislation.gov.au',
    feedUrls: ['https://www.legislation.gov.au/atom.xml'],
    feedType: 'api',
    relevance: 'New and amended Consumer Goods Safety Standards — catches new mandatory standards before ACCC commentary',
    cost: 'free',
  },
];

// V7 §4.3: AI parsing model — GPT-4o-mini (~$0.01-0.05/item, ~$3/month at launch volume)
export const AI_PARSING_MODEL = 'gpt-4o-mini';

// V7 §4.3: System prompt for regulatory intelligence parsing
export const REGULATORY_AI_SYSTEM_PROMPT = `You are a regulatory intelligence analyst for an Australian retail compliance consultancy. Assess the following regulatory update:

1. RELEVANCE: Is this relevant to Australian consumer goods retail compliance?
   (Exclude: energy regulation, financial services, telecommunications, pharmaceuticals)
   (Include: product safety standards, ACCC enforcement, consumer goods recall, electrical safety, children's product safety, baby product compliance, toy safety, labelling requirements)

2. If RELEVANT: Summarise in 50-100 words. Neutral tone. State what changed, what it means for retailers, and whether immediate action is required.

3. RISK TIER:
   - Critical: Immediate action required (active recall, enforcement action, imminent compliance deadline)
   - High: Action required within 30 days (new standard, enforcement priority announced)
   - Medium: Monitor (consultation, guidance update, non-urgent amendment)
   - Low: Awareness only (minor update, long-term change)

4. CATEGORY TAGS (select all that apply): Children's Products | Electrical Goods | Baby Products | Personal Care | Household Chemicals | General Consumer Goods | Regulatory Framework

Return JSON only: { "relevant": boolean, "headline": string, "description": string, "urgency": "Critical"|"High"|"Medium"|"Low", "categories": string[], "sourceUrl": string }`;
