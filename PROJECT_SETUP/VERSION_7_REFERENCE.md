# VERSION 7.0 BRIEF REFERENCE
## SI_Master_Brief_v7.docx — Section-by-Section Task Mapping

> **Source document:** `SI_Master_Brief_v7.docx` (FINAL — March 2026, 31 pages)
> Place the actual brief in `/STRATEGIC_BRIEF/SI_Master_Brief_v7.docx` when received.

---

## §2: Nine-Component Architecture
**Pages:** 1–7 | **Priority:** P1 — Critical

**Key Specifications:**
- Nine components (evolved from eight — Component 9 is new)
- Component 9: Compliance Culture & Continuous Improvement
- ISO 37301:2021 alignment mapped to each component
- Each component has 2–5 sub-components

**Implementation Tasks:**
- [ ] Create `lib/compliance-data.ts` with all 9 components + sub-components
- [ ] Create `components/ComponentAccordion.tsx` with progressive disclosure
- [ ] Add ISO 37301 badge to each accordion item (links to `/why-compliance-matters`)
- [ ] Implement click/hover expansion with GSAP animation
- [ ] Add component-specific copy from §3.3

**Code Location:** `DEVELOPMENT/components/ComponentAccordion.tsx`, `DEVELOPMENT/lib/compliance-data.ts`

---

## §3: Panda Mart Retrospective
**Pages:** 8–9 | **Priority:** P1 — Critical

**Key Specifications:**
- Five failure vectors, each mapped to nine components
- All website language is **implicit** — zero direct Panda Mart attribution
- §3.3 contains approved website copy for each component description

**Implementation Tasks:**
- [ ] Extract approved website language from §3.3 into `WEBSITE_CONTENT_MAP.md`
- [ ] Integrate language into `ComponentAccordion` descriptions
- [ ] Conduct content review: confirm zero direct Panda Mart references
- [ ] Document implicit messaging strategy in `PANDA_MART_RETROSPECTIVE.md`

**Code Location:** `DEVELOPMENT/lib/compliance-data.ts` (component descriptions)

---

## §4: Automated Regulatory Intelligence Pipeline
**Pages:** 10–13 | **Priority:** P2 — High

**Key Specifications:**
- Australian regulatory feeds: ACCC, CAV, TGA (others TBC in brief)
- Next.js Server Action for feed fetching
- OpenAI API for parsing/summarising regulatory updates
- Displayed in `RegulatoryFeed.tsx` component on homepage and `/why-compliance-matters`

**Implementation Tasks:**
- [ ] Create `lib/regulatory-sources.ts` with feed URLs and schemas
- [ ] Create `app/api/regulatory-feed/route.ts` Server Action
- [ ] Integrate OpenAI API for summary parsing
- [ ] Create `components/RegulatoryFeed.tsx` with filter UI
- [ ] Cache feed results with Next.js `revalidate`

**Code Location:** `DEVELOPMENT/app/api/regulatory-feed/route.ts`, `DEVELOPMENT/components/RegulatoryFeed.tsx`

---

## §5: WebGPU 3D Visualization
**Pages:** 14–17 | **Priority:** P2 — High

**Key Specifications:**
- Three.js r171
- Primary renderer: WebGPU; fallback: WebGL (for Safari 15+, Firefox <141)
- **Mobile performance target: 60fps on Samsung Galaxy A54**
- Visualization represents the nine-component compliance network
- Scroll-triggered animation on homepage

**Implementation Tasks:**
- [ ] Install Three.js r171 with WebGPU renderer
- [ ] Create `components/ComplianceVisualization.tsx` with dynamic import (`ssr: false`)
- [ ] Implement WebGPU detection with WebGL fallback
- [ ] Implement nine-node network visualization
- [ ] Performance test on Samsung Galaxy A54 (physical or BrowserStack)
- [ ] Implement scroll trigger via GSAP ScrollTrigger

**Code Location:** `DEVELOPMENT/components/ComplianceVisualization.tsx`

---

## §6: Mandarin Infrastructure Optimization
**Pages:** 18–20 | **Priority:** P2 — High

**Key Specifications:**
- Language toggle: "Change Language 中文" visible at all times in English mode header
- Transcreation (not literal translation) — cultural adaptation required
- Baidu SEO: SSR required (Baidu bot does not execute JavaScript)
- CDN: Cloudflare with Asia-Pacific PoPs for <100ms TTFB from Shanghai
- `hreflang` tags: `en-AU` and `zh-CN`

**Implementation Tasks:**
- [ ] Configure `next-i18next` with `en` and `zh` locales
- [ ] Create all locale JSON files in `public/locales/en/` and `public/locales/zh/`
- [ ] Add "Change Language 中文" toggle to `Header.tsx`
- [ ] Commission Mandarin transcreation for all page copy
- [ ] Configure Cloudflare CDN for Asia-Pacific routing
- [ ] Add `hreflang` tags in `app/layout.tsx`
- [ ] Submit Mandarin sitemap to Baidu Webmaster Tools

**Code Location:** `DEVELOPMENT/lib/i18n.ts`, `DEVELOPMENT/components/Header.tsx`

---

## §7: Compliance-as-Innovation-Catalyst
**Pages:** 21–22 | **Priority:** P1 — Critical

**Key Specifications:**
- Five growth enablement arguments ("licence to go faster" framework)
- Homepage: dedicated panel with growth enablement messaging
- `/our-approach`: growth enablement section
- `/why-compliance-matters`: full catalyst argument

**Implementation Tasks:**
- [ ] Extract five growth enablement arguments from §7
- [ ] Create homepage "licence to go faster" panel
- [ ] Add growth enablement section to `/our-approach`
- [ ] Build full catalyst argument section on `/why-compliance-matters`

**Code Location:** `DEVELOPMENT/app/page.tsx`, `DEVELOPMENT/app/our-approach/page.tsx`, `DEVELOPMENT/app/why-compliance-matters/page.tsx`

---

## §8: Competitive Positioning
**Pages:** 23–24 | **Priority:** P1 — Critical

**Key Specifications:**
- Differentiation: compliance-first vs. compliance-as-afterthought
- Position Synergistic Interaction as category management architects, not auditors
- Specific differentiation language provided in §8

**Implementation Tasks:**
- [ ] Extract differentiation language from §8
- [ ] Integrate into homepage hero and sub-hero sections
- [ ] Add differentiation callout to `/our-approach`
- [ ] Create competitive comparison section on `/why-compliance-matters`

---

## §9: Pricing Strategy & ROI
**Pages:** 25–26 | **Priority:** P3 — Medium

**Key Specifications:**
- ROI calculation framework (cost avoidance + revenue uplift)
- Pricing tiers for Phase 0–4 engagements
- Present as investment framing, not cost framing

**Implementation Tasks:**
- [ ] Create ROI calculator component on `/get-started`
- [ ] Add pricing tier overview (Phase 0–4) to `/get-started`
- [ ] Use investment language throughout

---

## §10: Phased Engagement Roadmap
**Pages:** 27–28 | **Priority:** P3 — Medium

**Key Specifications:**
- Phase 0–4 engagement model
- Platform recommendations per phase
- Timeline expectations per phase

**Implementation Tasks:**
- [ ] Create phase timeline component on `/get-started`
- [ ] Link Phase 0 (website) to live demonstration of capabilities

---

## §11: Website Architecture & Design Patterns
**Pages:** 29–30 | **Priority:** P1 — Critical

**Key Specifications:**
- Four pages: Home, Our Approach, Why Compliance Matters, Get Started
- Progressive disclosure pattern throughout
- Glassmorphism accents on component cards
- Scroll-triggered stat counters (GSAP)
- ISO 37301 alignment badges
- FAQ section on Get Started page
- ProofBar with statistics

**Implementation Tasks:**
- [ ] Build all four pages per content map
- [ ] Implement glassmorphism card design
- [ ] Implement GSAP scroll-triggered stat counters in `ProofBar.tsx`
- [ ] Implement FAQ accordion on `/get-started`
- [ ] Verify navigation hierarchy and internal linking

---

## §12: Complete Enhancement Map
**Pages:** 31 | **Priority:** P1 — Critical

**Key Specifications:**
- Full priority checklist with non-negotiable absolutes
- See `DEVELOPMENT_CHECKLIST.md` for complete implementation

**Non-Negotiable Absolutes:**
1. No double work
2. "Change Language 中文" always visible
3. `/why-compliance-matters` is the most important page
4. Zero Panda Mart attribution
5. Website live before proposal submission
