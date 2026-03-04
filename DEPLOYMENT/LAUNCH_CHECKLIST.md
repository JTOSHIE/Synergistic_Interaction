# LAUNCH CHECKLIST
## Synergistic Interaction Website — Final Pre-Launch Sequence

> **CRITICAL:** Website must be live and fully verified BEFORE Panda Mart proposal is sent.
> Do not send proposal until item #10 below is confirmed.

---

## Pre-Launch (Day 13)

- [ ] 1. All DEVELOPMENT_CHECKLIST.md P1 items marked complete
- [ ] 2. All DEVELOPMENT_CHECKLIST.md P2 items marked complete
- [ ] 3. Mandarin copy reviewed and approved by native speaker
- [ ] 4. Zero Panda Mart direct attribution — content reviewed by Joshua Thompson
- [ ] 5. "Change Language 中文" toggle verified on all pages
- [ ] 6. All nine components display correctly in accordion
- [ ] 7. ISO 37301 badges present and linking correctly
- [ ] 8. Contact form submits and sends notification email
- [ ] 9. WebGPU/WebGL visualization loads on Chrome and Safari
- [ ] 10. Performance: Lighthouse >90 on all four pages
- [ ] 11. `npm run build` completes with zero errors locally

---

## Launch Day (Day 14)

### Step 1: Final Build
```bash
cd DEVELOPMENT
npm run build
# Must complete with zero errors and zero TypeScript errors
```

### Step 2: Deploy to Vercel
```bash
git add -A
git commit -m "Launch: Synergistic Interaction v1.0"
git push origin main
# Vercel auto-deploys from main branch
```

### Step 3: Verify Deployment (15 minutes after push)
- [ ] Vercel dashboard shows deployment "Ready"
- [ ] Custom domain accessible: `https://synergisticinteraction.com.au`
- [ ] HTTPS certificate active (padlock in browser)
- [ ] All four pages load without errors

### Step 4: Smoke Test (Live Site)
- [ ] Homepage loads with visualization
- [ ] "Change Language 中文" toggle works
- [ ] Navigation between all four pages works
- [ ] Component accordion works
- [ ] Regulatory feed loads (or gracefully shows empty state)
- [ ] Contact form loads correctly
- [ ] Mobile: load on physical phone and verify

### Step 5: Performance Verification
- [ ] Run Lighthouse on live URL — score >90
- [ ] Test on Samsung Galaxy A54 (or equivalent mobile)
- [ ] Test TTFB from Singapore via WebPageTest

### Step 6: SEO Submission
- [ ] Submit sitemap to Google Search Console
- [ ] Submit Mandarin sitemap to Baidu Webmaster Tools

### Step 7: Confirm Launch ✓
- [ ] Notify Joshua Thompson: **"Website is live at [URL]"**
- [ ] Provide launch summary (pages, features, performance scores)

---

## CRITICAL: Panda Mart Proposal Timing

**DO NOT** send the Panda Mart proposal until:
1. Website is live ✅
2. Joshua Thompson has confirmed it is live ✅
3. All four pages are accessible and functional ✅

The website must be live **before** the proposal — this is a non-negotiable absolute from V7 §12.
