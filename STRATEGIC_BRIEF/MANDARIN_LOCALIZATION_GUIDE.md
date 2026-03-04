# MANDARIN LOCALIZATION GUIDE
## Synergistic Interaction — V7 §6 Implementation Guide

> **Source:** SI_Master_Brief_v7.docx §6 (Pages 18–20)

---

## Localization Strategy

This is **transcreation**, not translation. Chinese business culture and procurement
audiences require culturally adapted messaging — not word-for-word translation.

---

## Technical Configuration

### next-i18next Setup

```typescript
// V7 §6: Mandarin localization configuration
// lib/i18n.ts
import { UserConfig } from 'next-i18next';

const config: UserConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  defaultNS: 'common',
  localePath: './public/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

export default config;
```

### next.config.ts

```typescript
// V7 §6: i18n routing configuration
const nextConfig = {
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
  },
};
```

### hreflang Tags (app/layout.tsx)

```html
<!-- V7 §6: hreflang for Baidu and Google -->
<link rel="alternate" hreflang="en-AU" href="https://synergisticinteraction.com.au/" />
<link rel="alternate" hreflang="zh-CN" href="https://synergisticinteraction.com.au/zh/" />
<link rel="alternate" hreflang="x-default" href="https://synergisticinteraction.com.au/" />
```

---

## Locale File Structure

```
public/locales/
├── en/
│   ├── common.json      — Navigation, footer, buttons, language toggle
│   ├── pages.json       — Page titles, meta descriptions, hero content
│   └── components.json  — Component-specific copy (accordion, proofbar, FAQ)
└── zh/
    ├── common.json      — 导航、页脚、按钮
    ├── pages.json       — 页面标题、描述
    └── components.json  — 组件文案
```

---

## Language Toggle Component

```tsx
// V7 §6 + §12: Language toggle — MUST be visible at all times in English mode
// In Header.tsx

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = i18n.language === 'en' ? 'zh' : 'en';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-medium text-si-teal hover:text-white transition-colors"
      aria-label={i18n.language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
    >
      {i18n.language === 'en' ? 'Change Language 中文' : 'Change Language English'}
    </button>
  );
};
```

---

## Chinese Typography

```typescript
// V7 §6: CJK font stack
import { Noto_Sans_SC } from 'next/font/google';

export const notoSansSC = Noto_Sans_SC({
  subsets: ['chinese-simplified'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-sc',
});
```

```css
/* styles/typography.css */
/* V7 §6: CJK typography */
:lang(zh) {
  font-family: var(--font-noto-sans-sc), 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', sans-serif;
  line-height: 1.8; /* CJK text needs more line height */
  letter-spacing: 0.05em;
}
```

---

## Baidu SEO Requirements

| Requirement | Implementation |
|-------------|---------------|
| SSR required | Next.js App Router (SSR by default) |
| No client-side rendering for content | Server Components for all page content |
| Baidu Analytics | Add `baidu-analytics` script tag |
| Sitemap | `/sitemap-zh.xml` submitted to Baidu Webmaster Tools |
| Meta keywords | Add `<meta name="keywords">` (Baidu uses this, Google ignores) |
| Domain | Consider `synergisticinteraction.cn` for Chinese audience |

### Baidu Analytics Script
```html
<!-- Add to app/layout.tsx for zh locale only -->
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?[BAIDU_ID]";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
```

---

## CDN Configuration (Cloudflare)

```
Asia-Pacific PoP routing:
- Singapore (SIN) — primary APAC hub
- Tokyo (NRT) — Japan/Korea
- Sydney (SYD) — Australia primary
- Hong Kong (HKG) — Greater China
- Shanghai (SHA) — Mainland China

Target: TTFB < 100ms from Shanghai
Cache rules:
- Static assets: 1 year cache
- HTML pages: 1 hour cache (for SSR freshness)
- API routes: No cache (dynamic)
```

---

## Transcreation Notes

| English Concept | Transcreation Approach |
|----------------|----------------------|
| "Compliance-first" | 合规优先 (hé guī yōu xiān) — culturally resonant in post-regulation era |
| "Licence to go faster" | 合规赋能，快速增长 — compliance enables growth |
| "Category management" | 品类管理 — standard industry term in China |
| ISO 37301 | 国际合规管理体系标准 — explain the standard, not just cite it |
| "Retrospective" | Avoid — culturally implies blame; use "经验总结" (lessons learned) |

---

## Mandarin QA Checklist

- [ ] All Chinese text reviewed by native Mandarin speaker (not Google Translate)
- [ ] Business terminology verified against Chinese procurement industry standards
- [ ] No culturally inappropriate idioms or metaphors
- [ ] Number formatting: use Chinese number conventions where appropriate
- [ ] Date formatting: YYYY年MM月DD日 for Chinese locale
- [ ] Currency: AUD with Chinese label where applicable
