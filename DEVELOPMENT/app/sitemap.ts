import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://synergisticinteraction.com.au';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/category-expertise`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/our-approach`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/why-compliance-matters`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/get-started`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/zh`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${BASE_URL}/zh/get-started`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
