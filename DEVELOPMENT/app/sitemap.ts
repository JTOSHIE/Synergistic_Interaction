import { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/site';
import { articles } from './insights/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const topLevel: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/capabilities`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/approach`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/readiness`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/insights`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/insights/${article.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.65,
  }));

  return [...topLevel, ...articlePages];
}
