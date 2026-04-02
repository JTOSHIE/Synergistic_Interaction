// Root layout — all pages share this structure
// V7 §6: hreflang for en and zh-Hans
// Vercel Analytics included (no Google Analytics — blocked by Great Firewall, V7 §6.1 Option C)
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://synergisticinteraction.com.au';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Synergistic Interaction — Compliance-First Category Management',
    template: '%s — Synergistic Interaction',
  },
  description:
    'Nine-component compliance architecture for Australian retailers. ISO 37301:2021 aligned. The structural foundation that gives retailers the licence to go faster.',
  keywords: [
    'category management consultant Australia',
    'retail compliance architecture',
    'ACCC compliance consulting',
    'product safety compliance Australia',
    'ISO 37301 retail compliance',
    'baby products compliance Australia',
    'electrical goods RCM compliance',
    'category management Melbourne',
  ],
  authors: [{ name: 'Joshua Thompson', url: BASE_URL }],
  creator: 'Synergistic Interaction',
  publisher: 'Synergistic Interaction',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-AU': BASE_URL,
      'zh-Hans': `${BASE_URL}/zh`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    alternateLocale: 'zh_CN',
    url: BASE_URL,
    siteName: 'Synergistic Interaction',
    title: 'Synergistic Interaction — Compliance-First Category Management',
    description:
      'Nine-component compliance architecture. ISO 37301 aligned. The licence to go faster.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Synergistic Interaction' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synergistic Interaction — Compliance-First Category Management',
    description: 'Nine-component compliance architecture. ISO 37301 aligned.',
  },
  icons: {
    icon: '/logo-icon.svg',
    apple: '/logo-icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <head>
        {/* V7 §6.2: Hreflang — required for Baidu Mandarin SEO */}
        <link rel="alternate" hrefLang="en-AU" href={BASE_URL} />
        <link rel="alternate" hrefLang="zh-Hans" href={`${BASE_URL}/zh`} />
        <link rel="alternate" hrefLang="x-default" href={BASE_URL} />
        {/* V7 §6.1 Option C: NO Google Fonts here — CJK fonts use system stack only */}
        {/* V7 §6.1 Option C: NO Google Analytics — use Vercel Analytics (not blocked) */}
      </head>
      <body className="bg-si-bg text-si-white min-h-screen flex flex-col antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        {/* Vercel Analytics — not blocked by Great Firewall */}
        <Analytics />
        <ScrollToTop />
      </body>
    </html>
  );
}
