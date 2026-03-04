# DEVELOPMENT CHECKLIST
## Synergistic Interaction Website — Priority-Based Task List

> Mark tasks `[x]` only when **testing requirements are met**, not just when code is written.

---

## PRIORITY 1 — CRITICAL (Complete by Day 10)

### P1.1: Nine-Component Architecture & Website Copy
**Deadline:** Day 7 | **Brief:** §2 & §3
- [ ] Create `lib/compliance-data.ts` with all 9 components and sub-components
- [ ] Create `components/ComponentAccordion.tsx` with progressive disclosure
- [ ] Implement ISO 37301 badge system (links to `/why-compliance-matters`)
- [ ] Add all component descriptions from §3.3 copy
- [ ] Test accordion expand/collapse on mobile and desktop
- [ ] Test ISO 37301 badge links

### P1.2: Panda Mart Retrospective Messaging
**Deadline:** Day 7 | **Brief:** §3
- [ ] Extract five failure vectors from §3
- [ ] Integrate implicit website language into component descriptions
- [ ] Create content verification checklist (zero direct attribution)
- [ ] Conduct content review with project owner Joshua Thompson
- [ ] Document in `STRATEGIC_BRIEF/PANDA_MART_RETROSPECTIVE.md`

### P1.3: Compliance-as-Catalyst Messaging
**Deadline:** Day 8 | **Brief:** §7
- [ ] Extract five growth enablement arguments from §7
- [ ] Create homepage "licence to go faster" panel
- [ ] Create `/our-approach` growth enablement section
- [ ] Create `/why-compliance-matters` catalyst argument section
- [ ] Review messaging with project owner

### P1.4: Website Architecture & Design Patterns
**Deadline:** Day 9 | **Brief:** §11
- [ ] Implement four-page structure (Home, Our Approach, Why Compliance Matters, Get Started)
- [ ] Implement glassmorphism card design system
- [ ] Implement scroll-triggered stat counters (GSAP) in `ProofBar.tsx`
- [ ] Implement ISO 37301 alignment badges across all component displays
- [ ] Implement FAQ accordion on `/get-started`
- [ ] Verify all internal navigation links

### P1.5: Competitive Positioning Copy
**Deadline:** Day 8 | **Brief:** §8
- [ ] Extract differentiation language from §8
- [ ] Integrate into homepage hero section
- [ ] Add differentiation callout to `/our-approach`
- [ ] Add competitive comparison to `/why-compliance-matters`

### P1.6: Header with Language Toggle
**Deadline:** Day 5 | **Brief:** §6 + §12
- [ ] Build `components/Header.tsx` with navigation
- [ ] Add "Change Language 中文" toggle — **visible at all times in English mode**
- [ ] Test toggle on all four pages
- [ ] Test toggle on mobile (hamburger menu + toggle visible)

---

## PRIORITY 2 — HIGH (Complete by Day 12)

### P2.1: WebGPU 3D Visualization
**Deadline:** Day 11 | **Brief:** §5
- [ ] Install Three.js r171
- [ ] Create `components/ComplianceVisualization.tsx` (dynamic import, `ssr: false`)
- [ ] Implement WebGPU renderer with WebGL fallback
- [ ] Implement nine-node compliance network visualization
- [ ] Implement scroll-triggered animation (GSAP ScrollTrigger)
- [ ] **Performance test: 60fps on Samsung Galaxy A54**
- [ ] Test WebGL fallback on Safari 15+
- [ ] Test on Firefox 141 (experimental WebGPU)

### P2.2: Automated Regulatory Intelligence Pipeline
**Deadline:** Day 11 | **Brief:** §4
- [ ] Create `lib/regulatory-sources.ts` with ACCC, CAV, TGA feed configs
- [ ] Create `app/api/regulatory-feed/route.ts` with Next.js revalidation
- [ ] Integrate OpenAI API for regulatory summary parsing
- [ ] Create `components/RegulatoryFeed.tsx` with category filter UI
- [ ] Test feed on `/why-compliance-matters` page
- [ ] Test feed caching and revalidation

### P2.3: Mandarin Localization
**Deadline:** Day 12 | **Brief:** §6
- [ ] Configure `next-i18next` in `lib/i18n.ts`
- [ ] Create English locale files: `public/locales/en/{common,pages,components}.json`
- [ ] Create Mandarin locale files: `public/locales/zh/{common,pages,components}.json`
- [ ] Commission transcreation (cultural adaptation, not literal translation)
- [ ] Verify Mandarin copy with native speaker
- [ ] Add `hreflang` tags to `app/layout.tsx`
- [ ] Verify SSR for Baidu bot crawlability

### P2.4: CDN & Performance Infrastructure
**Deadline:** Day 13 | **Brief:** §6
- [ ] Configure Cloudflare CDN with Asia-Pacific PoPs
- [ ] Verify page load <100ms TTFB from Shanghai
- [ ] Verify WebP image optimization
- [ ] Configure `next/font` for Inter + Noto Sans SC

---

## PRIORITY 3 — MEDIUM (Complete by Day 14)

### P3.1: Pricing & ROI Section
**Deadline:** Day 13 | **Brief:** §9
- [ ] Create ROI framing section on `/get-started`
- [ ] Present Phase 0–4 pricing as investment framework
- [ ] Add Phase engagement overview timeline

### P3.2: Contact Form & API
**Deadline:** Day 12 | **Brief:** §11
- [ ] Build contact form in `app/get-started/page.tsx`
- [ ] Create `app/api/contact/route.ts`
- [ ] Implement form validation (React Hook Form)
- [ ] Test form submission with valid and invalid inputs
- [ ] Implement CSRF protection

### P3.3: SEO & Metadata
**Deadline:** Day 13 | **Brief:** §6
- [ ] Add page-level metadata to all four pages (Next.js Metadata API)
- [ ] Add Open Graph tags
- [ ] Generate `sitemap.xml` (English + Mandarin)
- [ ] Prepare Baidu Webmaster Tools submission

### P3.4: Footer
**Deadline:** Day 10 | **Brief:** §11
- [ ] Build `components/Footer.tsx`
- [ ] Include navigation links, contact info, compliance certifications
- [ ] Add language toggle in footer (redundant, for accessibility)

---

## DEPLOYMENT TASKS (Days 13–14)

- [ ] Run full DEPLOYMENT_CHECKLIST.md verification
- [ ] Deploy to Vercel (connect `JTOSHIE/Synergistic_Interaction`)
- [ ] Configure Cloudflare CDN
- [ ] Verify live site on desktop and mobile
- [ ] Submit sitemaps to Google Search Console
- [ ] Submit Mandarin sitemap to Baidu Webmaster Tools
- [ ] Notify project owner Joshua Thompson of successful launch
