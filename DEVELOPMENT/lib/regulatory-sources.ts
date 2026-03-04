// V7 §4.2: Regulatory feed source configuration — official Australian sources
// V7 LAUNCH RECOMMENDATION: Free official RSS/API sources only at launch
// Evaluate commercial intelligence (Thomson Reuters, LexisNexis) after 6 months

export interface RegulatorySource {
  id: string;
  name: string;
  acronym: 'ACCC' | 'CAV' | 'TGA' | 'ESV' | 'LEGISLATION';
  feedUrls: string[];      // Multiple feeds per source
  feedType: 'rss' | 'atom' | 'api';
  updateFrequency: 'daily' | 'weekly';
  categories: string[];
  relevanceNote: string;
}

// V7 §4.2: All six official Australian regulatory feed sources
export const regulatorySources: RegulatorySource[] = [
  {
    id: 'accc-media',
    name: 'Australian Competition and Consumer Commission — Media Releases',
    acronym: 'ACCC',
    // V7 §4.2: Exact feed URLs from brief
    feedUrls: [
      'https://www.accc.gov.au/media-release/rss.xml',
      'https://www.accc.gov.au/consumers/product-safety/rss.xml',
      'https://www.productsafety.gov.au/recalls/rss.xml',
    ],
    feedType: 'rss',
    updateFrequency: 'daily',
    categories: ['Product Safety', 'Pricing', 'Supplier Conduct', 'Consumer Protection', 'Recalls'],
    relevanceNote: 'Primary enforcement authority. Covers all ACCC enforcement actions and product safety recalls.',
  },
  {
    id: 'cav',
    name: 'Consumer Affairs Victoria',
    acronym: 'CAV',
    feedUrls: ['https://www.consumer.vic.gov.au/rss.xml'],
    feedType: 'rss',
    updateFrequency: 'weekly',
    categories: ['Product Safety', 'Labelling', 'Consumer Rights', 'Product Safety Warnings'],
    relevanceNote: 'Victoria-specific enforcement actions — most relevant to Panda Mart\'s Victorian operations.',
  },
  {
    id: 'tga',
    name: 'Therapeutic Goods Administration',
    acronym: 'TGA',
    feedUrls: ['https://www.tga.gov.au/safety-alerts/rss.xml'],
    feedType: 'rss',
    updateFrequency: 'weekly',
    categories: ['Product Safety', 'Baby Products', 'Personal Care', 'Recalls', 'Healthcare-adjacent'],
    relevanceNote: 'Safety alerts and recalls relevant to baby skincare, personal care, and healthcare-adjacent product categories.',
  },
  {
    id: 'esv',
    name: 'Energy Safe Victoria',
    acronym: 'ESV',
    // V7 §4.2: ESV — specifically covers RCM and EESS electrical compliance
    feedUrls: ['https://www.esv.vic.gov.au/news/rss.xml'],
    feedType: 'rss',
    updateFrequency: 'weekly',
    categories: ['Electrical Goods', 'Product Safety', 'RCM', 'EESS'],
    relevanceNote: 'Electrical safety enforcement and compliance guidance. Directly relevant to the 130 ESV charges context. Covers RCM and EESS electrical compliance.',
  },
  {
    id: 'legislation',
    name: 'Federal Register of Legislation',
    acronym: 'LEGISLATION',
    // V7 §4.2: Catches new mandatory standards before ACCC enforcement commentary
    feedUrls: ['https://www.legislation.gov.au/api/'], // API endpoint — see legislation.gov.au for current API docs
    feedType: 'api',
    updateFrequency: 'daily',
    categories: ['Regulatory Framework', 'Mandatory Standards', 'Consumer Goods Safety Standards'],
    relevanceNote: 'New and amended legislation including Consumer Goods Safety Standards. Catches new mandatory standards before ACCC enforcement commentary.',
  },
];

// V7 §4.3: OpenAI model for AI parsing — use GPT-4o-mini for cost efficiency
export const AI_PARSING_MODEL = 'gpt-4o-mini';

// V7 §4.3: System prompt for regulatory intelligence parsing
export const REGULATORY_AI_SYSTEM_PROMPT = `You are a regulatory intelligence analyst for an Australian retail compliance consultancy. Assess the following regulatory update:

1. RELEVANCE: Is this relevant to Australian consumer goods retail compliance?
   (Exclude: energy regulation, financial services, telecommunications.)
   (Include: product safety standards, ACCC enforcement, consumer goods recall, electrical safety, children's product safety, baby product compliance.)

2. If RELEVANT: Summarise in 50-100 words. Neutral tone. State what changed, what it means for retailers, and whether immediate action is required.

3. RISK TIER: Critical | High | Medium | Low

4. CATEGORY TAGS: Children's Products | Electrical Goods | Baby Products | Personal Care | Household Chemicals | General Consumer Goods | Regulatory Framework

Return JSON: { relevant: boolean, headline: string, description: string, urgency: "Critical" | "High" | "Medium" | "Low", categories: string[], sourceUrl: string }`;
