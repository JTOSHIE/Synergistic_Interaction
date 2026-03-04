// V7 §6: next-i18next configuration — English and Mandarin Chinese
import type { UserConfig } from 'next-i18next';

const i18nConfig: UserConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  defaultNS: 'common',
  ns: ['common', 'pages', 'components'],
  localePath: './public/locales',
  // V7 §6: Baidu requires SSR — never use client-only localization
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

export default i18nConfig;
