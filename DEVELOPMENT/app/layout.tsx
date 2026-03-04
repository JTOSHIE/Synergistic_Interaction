// V7 §6 + §11: Root layout — language toggle, fonts, metadata, hreflang
import type { Metadata } from 'next';
import { Inter, Noto_Sans_SC } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// V7 §6: CJK font for Mandarin localization
const notoSansSC = Noto_Sans_SC({
  subsets: ['chinese-simplified'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-sc',
});

export const metadata: Metadata = {
  title: {
    default: 'Synergistic Interaction | Compliance-First Category Management',
    template: '%s | Synergistic Interaction',
  },
  description:
    'Australia\'s leading compliance-first category management consultancy. ISO 37301 aligned methodology. Nine-component framework.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    alternateLocale: 'zh_CN',
    siteName: 'Synergistic Interaction',
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang?: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const lang = params.lang ?? 'en';

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${notoSansSC.variable}`}
    >
      <head>
        {/* V7 §6: hreflang tags for Baidu and Google */}
        <link rel="alternate" hrefLang="en-AU" href="https://synergisticinteraction.com.au/" />
        <link rel="alternate" hrefLang="zh-CN" href="https://synergisticinteraction.com.au/zh/" />
        <link rel="alternate" hrefLang="x-default" href="https://synergisticinteraction.com.au/" />
      </head>
      <body className="bg-si-bg-primary text-si-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50
                     focus:px-4 focus:py-2 focus:bg-si-teal focus:text-si-bg-primary focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
