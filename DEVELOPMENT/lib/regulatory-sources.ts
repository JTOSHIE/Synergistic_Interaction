// V7 §4: Regulatory feed source configuration
// Update feed URLs with actual sources from brief

export interface RegulatorySource {
  id: string;
  name: string;
  acronym: 'ACCC' | 'CAV' | 'TGA';
  feedUrl: string;
  feedType: 'rss' | 'json' | 'atom';
  updateFrequency: 'daily' | 'weekly';
  categories: string[];
}

// V7 §4: Australian regulatory bodies — update URLs from brief §4
export const regulatorySources: RegulatorySource[] = [
  {
    id: 'accc',
    name: 'Australian Competition and Consumer Commission',
    acronym: 'ACCC',
    feedUrl: process.env['ACCC_FEED_URL'] ?? 'https://www.accc.gov.au/media-release/rss',
    feedType: 'rss',
    updateFrequency: 'daily',
    categories: ['Pricing', 'Supplier Conduct', 'Consumer Protection'],
  },
  {
    id: 'cav',
    name: 'Consumer Affairs Victoria',
    acronym: 'CAV',
    feedUrl: process.env['CAV_FEED_URL'] ?? 'https://www.consumer.vic.gov.au/rss',
    feedType: 'rss',
    updateFrequency: 'weekly',
    categories: ['Product Safety', 'Labelling', 'Consumer Rights'],
  },
  {
    id: 'tga',
    name: 'Therapeutic Goods Administration',
    acronym: 'TGA',
    feedUrl: process.env['TGA_FEED_URL'] ?? 'https://www.tga.gov.au/news/rss',
    feedType: 'rss',
    updateFrequency: 'weekly',
    categories: ['Product Safety', 'Compliance', 'Recalls'],
  },
];
