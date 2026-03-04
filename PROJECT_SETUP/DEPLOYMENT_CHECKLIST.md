# DEPLOYMENT CHECKLIST
## Synergistic Interaction Website — Pre-Launch Verification

> No item is marked complete without explicit verification. Execute in sequence on launch day.

---

## 1. PERFORMANCE TESTING

- [ ] WebGPU visualization achieves **60fps on Samsung Galaxy A54**
- [ ] WebGL fallback renders correctly on Safari 15+
- [ ] Page load time **<3 seconds on 4G network** (test via WebPageTest)
- [ ] Lighthouse score **>90** on all four pages (Performance, Accessibility, Best Practices, SEO)
- [ ] JS bundle initial load **<200KB** (verified in Vercel build output)
- [ ] Images all served as WebP
- [ ] `next/font` loading correctly (no FOUT)

---

## 2. FUNCTIONAL TESTING

- [ ] All four pages load without errors: `/`, `/our-approach`, `/why-compliance-matters`, `/get-started`
- [ ] Language toggle "Change Language 中文" visible on all pages in English mode
- [ ] Language toggle switches to full Mandarin site (all copy translated)
- [ ] Component accordion: all 9 components expand and collapse correctly
- [ ] ISO 37301 badges link correctly to `/why-compliance-matters`
- [ ] Regulatory feed displays current entries
- [ ] Regulatory feed filter by category works
- [ ] ProofBar stat counters animate on scroll
- [ ] FAQ accordion on `/get-started` works
- [ ] Contact form: valid submission succeeds
- [ ] Contact form: invalid inputs show validation errors
- [ ] All internal navigation links work
- [ ] Mobile hamburger menu works on all pages
- [ ] 3D visualization loads and animates on scroll

---

## 3. MANDARIN LOCALIZATION TESTING

- [ ] All text is transcreated (not machine-translated) — reviewed by native speaker
- [ ] Chinese characters display correctly (Noto Sans SC font loaded)
- [ ] No broken or missing characters on any page
- [ ] Transcreation strategy applied to headlines and CTAs
- [ ] `hreflang` tags present: `en-AU` and `zh-CN`
- [ ] Baidu bot can crawl all pages (SSR confirmed — view page source, check for content)
- [ ] Mandarin sitemap valid and complete

---

## 4. BROWSER COMPATIBILITY

| Browser | Version | WebGPU | Status |
|---------|---------|--------|--------|
| Chrome | 113+ | ✅ Primary | [ ] Tested |
| Edge | 113+ | ✅ Primary | [ ] Tested |
| Firefox | 141+ | ⚠️ Experimental | [ ] Tested |
| Safari | 15+ | ❌ WebGL fallback | [ ] Tested |
| iOS Safari | Latest | ❌ WebGL fallback | [ ] Tested |
| Chrome Mobile | Latest | ✅ Primary | [ ] Tested |

---

## 5. CONTENT REVIEW

- [ ] Zero direct Panda Mart attribution in any copy (full site review)
- [ ] Implicit retrospective messaging is present and effective
- [ ] All nine component descriptions match approved §3.3 copy
- [ ] "Compliance-as-catalyst" messaging is prominent on `/why-compliance-matters`
- [ ] Differentiation language from §8 is integrated
- [ ] Project owner Joshua Thompson has approved final copy

---

## 6. SEO & INDEXING

- [ ] `sitemap.xml` generated and accessible at `/sitemap.xml`
- [ ] Mandarin sitemap accessible at `/sitemap-zh.xml`
- [ ] Meta title and description on all four pages
- [ ] Open Graph tags on all four pages (Facebook/LinkedIn sharing preview verified)
- [ ] Google Search Console: English sitemap submitted
- [ ] Baidu Webmaster Tools: Mandarin sitemap submitted

---

## 7. SECURITY

- [ ] HTTPS enforced on all pages (Vercel automatic)
- [ ] Content Security Policy headers configured in `next.config.ts`
- [ ] No API keys or secrets in client-side code (check with `grep -r "OPENAI_API_KEY" ./app`)
- [ ] Contact form has CSRF protection
- [ ] Environment variables stored in Vercel environment settings (not `.env` committed)

---

## 8. INFRASTRUCTURE

- [ ] Vercel deployment: production branch `main` connected
- [ ] Custom domain configured on Vercel (if applicable)
- [ ] Cloudflare CDN active and routing Asia-Pacific traffic
- [ ] Page load from Shanghai verified: TTFB <100ms
- [ ] Vercel Analytics enabled
- [ ] Error monitoring configured (Sentry or Vercel error tracking)

---

## 9. LAUNCH DAY SEQUENCE

1. [ ] Run final `npm run build` locally — zero errors
2. [ ] Push to `main` branch — Vercel auto-deploys
3. [ ] Verify deployment in Vercel dashboard
4. [ ] Run through full functional testing checklist on live URL
5. [ ] Test from mobile device (Samsung Galaxy A54 or equivalent)
6. [ ] Verify TTFB from Shanghai (use WebPageTest with Shanghai location)
7. [ ] Submit sitemaps to Google Search Console
8. [ ] Submit Mandarin sitemap to Baidu Webmaster Tools
9. [ ] Notify Joshua Thompson: website is live ✓
10. [ ] **Do not send Panda Mart proposal until step 9 is confirmed**
