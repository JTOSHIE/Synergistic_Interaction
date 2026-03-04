# MANDARIN LOCALIZATION TESTING
## Synergistic Interaction Website — V7 §6 QA Guide

---

## Test 1: Content Quality (Native Speaker Review)

All Mandarin content must be reviewed by a native Mandarin speaker
with business/procurement vocabulary.

### Review Checklist
- [ ] Homepage hero headline — culturally resonant, not literal
- [ ] Homepage sub-headline — "licence to go faster" concept correctly transcreated
- [ ] All nine component names — using correct Chinese procurement terminology
- [ ] ISO 37301 explanation — standard correctly described in Chinese context
- [ ] Navigation labels — natural Chinese business language
- [ ] CTA buttons — compelling in Chinese (not awkward literal translation)
- [ ] Footer copy — appropriate formality level
- [ ] Contact form labels — standard business form language

---

## Test 2: Typography & Rendering

- [ ] Noto Sans SC font loads correctly (check Network tab)
- [ ] No missing/placeholder characters (□ or ? symbols)
- [ ] Line height adequate for CJK text (should be 1.8 minimum)
- [ ] No text overflow in buttons or headings
- [ ] Numbers display correctly (Arabic numerals standard in Chinese business)

---

## Test 3: Baidu Bot Crawlability (SSR Verification)

Baidu's crawler does not execute JavaScript. Content must be in HTML source.

### How to Test
1. Right-click page → "View Page Source" (Ctrl+U)
2. Search for Chinese characters (Ctrl+F → type any Chinese text)
3. Confirm: Chinese content is present in raw HTML (not injected by JS)

If Chinese text is NOT in the page source, SSR is broken — fix before launch.

- [ ] Homepage Mandarin content in page source
- [ ] Our Approach Mandarin content in page source
- [ ] Why Compliance Matters Mandarin content in page source
- [ ] Get Started Mandarin content in page source

---

## Test 4: hreflang Tags

```bash
# Check hreflang tags with curl
curl -s https://synergisticinteraction.com.au/ | grep -i hreflang
```

Expected output:
```html
<link rel="alternate" hreflang="en-AU" href="https://synergisticinteraction.com.au/" />
<link rel="alternate" hreflang="zh-CN" href="https://synergisticinteraction.com.au/zh/" />
<link rel="alternate" hreflang="x-default" href="https://synergisticinteraction.com.au/" />
```

- [ ] en-AU hreflang present
- [ ] zh-CN hreflang present
- [ ] x-default hreflang present

---

## Test 5: Language Toggle UX

- [ ] "Change Language 中文" visible in English mode header
- [ ] Clicking toggle switches ALL content to Mandarin (not just some)
- [ ] Clicking toggle again returns to English
- [ ] Browser back/forward preserves language state
- [ ] Language preference persists on navigation between pages

---

## Test 6: Baidu Webmaster Tools Submission

After launch:
1. Log in to Baidu Webmaster Tools (ziyuan.baidu.com)
2. Add and verify site ownership
3. Submit Mandarin sitemap: `https://synergisticinteraction.com.au/sitemap-zh.xml`
4. Verify Baidu can crawl all Mandarin pages

- [ ] Site verified in Baidu Webmaster Tools
- [ ] Mandarin sitemap submitted
- [ ] No crawl errors reported
