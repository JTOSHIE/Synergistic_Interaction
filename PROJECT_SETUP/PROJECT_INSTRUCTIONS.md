# PROJECT INSTRUCTIONS
## Synergistic Interaction — Category Management Consultancy Website
### Version 7.0 Implementation

---

## 1. PROJECT OVERVIEW

**Project Name:** Synergistic Interaction Website
**Project Owner:** Joshua Thompson, Principal Consultant
**Timeline:** 14 days (Phase 0 website deployment)
**Authoritative Source:** `SI_Master_Brief_v7.docx` (FINAL — March 2026)

### Objectives
- Position Synergistic Interaction as the preeminent authority in compliance-first category management
- Communicate the nine-component compliance architecture with ISO 37301 alignment
- Integrate implicit Panda Mart retrospective messaging (zero direct attribution)
- Website must be live and fully functional **before** the Panda Mart proposal is submitted (Week 3)

### Success Metrics
| Metric | Target |
|--------|--------|
| Launch date | Day 14 |
| Pages complete | 4 (Home, Our Approach, Why Compliance Matters, Get Started) |
| Mobile performance | 60fps on Samsung Galaxy A54 |
| Mandarin localization | Complete with Baidu SEO |
| Regulatory pipeline | Operational |
| Critical bugs on launch | 0 |

---

## 2. DEVELOPMENT PHASES

### Phase 0: Website Deployment (Days 1–14)

#### Week 1 (Days 1–3): Copy & Content
- Extract all website copy from V7 brief Sections 3, 7, 8, 11
- Create WEBSITE_CONTENT_MAP.md with page-by-page copy
- Commission Mandarin transcreation (not literal translation)
- Verify zero Panda Mart attribution in all copy

#### Week 2 (Days 4–7): Design & Architecture
- Establish Next.js 15 project with TypeScript and Tailwind
- Build component library (Header, Footer, Accordion, ProofBar)
- Implement glassmorphism design system
- Build WebGPU/Three.js visualization with WebGL fallback

#### Week 3 (Days 8–11): Development & Integration
- Integrate automated regulatory intelligence pipeline
- Implement next-i18next localization (EN/ZH)
- Connect API routes (regulatory feed, contact form)
- Performance optimization to meet mobile targets

#### Week 4 (Days 12–14): QA & Launch
- Full DEVELOPMENT_CHECKLIST.md verification
- Cross-browser and device testing
- Baidu SEO configuration
- Vercel deployment and CDN configuration

---

## 3. TECHNOLOGY STACK

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 15 (App Router) |
| UI Library | React | 19 |
| Language | TypeScript | 5.x (strict mode) |
| Styling | Tailwind CSS | 3.x |
| 3D Visualization | Three.js | r171 |
| Renderer | WebGPU (WebGL fallback) | — |
| Localization | next-i18next | latest |
| Animations | GSAP | 3.x |
| Deployment | Vercel | — |
| CDN | Cloudflare | Asia-Pacific PoPs |
| AI Integration | OpenAI API | GPT-4o |
| Forms | React Hook Form | latest |

---

## 4. VERSION 7.0 BRIEF INTEGRATION

### Code Comment Protocol
Every component and function must include a reference comment:
```typescript
// V7 §{section}: {description}
// Example: // V7 §5: WebGPU renderer with WebGL fallback for Safari
```

### Section-to-Task Mapping
| Brief Section | Development Area | Priority |
|--------------|-----------------|----------|
| §2 Nine-Component Architecture | compliance-data.ts, ComponentAccordion.tsx | P1 |
| §3 Panda Mart Retrospective | Component copy, content review | P1 |
| §4 Regulatory Intelligence Pipeline | api/regulatory-feed/route.ts | P2 |
| §5 WebGPU 3D Visualization | ComplianceVisualization.tsx | P2 |
| §6 Mandarin Infrastructure | i18n.ts, zh/ locale files | P2 |
| §7 Compliance-as-Catalyst | Homepage copy, approach page copy | P1 |
| §8 Competitive Positioning | Differentiation copy throughout | P1 |
| §9 Pricing & ROI | Get Started page ROI section | P3 |
| §10 Engagement Roadmap | Get Started page phase overview | P3 |
| §11 Website Architecture | All page layouts, navigation | P1 |
| §12 Enhancement Map | DEVELOPMENT_CHECKLIST.md | P1 |

### Deviation Protocol
If any implementation deviates from the brief:
1. Document the deviation with a `// V7 DEVIATION:` comment
2. State the reason (technical constraint, performance, etc.)
3. Note the original brief specification
4. Log the deviation in `PROJECT_SETUP/DEVIATIONS.md`

---

## 5. DEVELOPMENT STANDARDS

### Code Style
- ESLint: `@typescript-eslint/recommended` + `next/core-web-vitals`
- Prettier: 2-space indent, single quotes, trailing commas
- Run `next lint` before every commit

### Component Conventions
- Filename: `PascalCase.tsx`
- One component per file
- Props interface named `{ComponentName}Props`
- Export: named default export

### Performance Budgets
| Asset | Budget |
|-------|--------|
| JS bundle (total) | <3MB |
| JS bundle (initial) | <200KB |
| CSS bundle | <100KB |
| Images (per image) | <200KB (WebP) |
| LCP | <2.5s |
| CLS | <0.1 |
| FID | <100ms |

### Accessibility
- WCAG 2.1 AA compliance on all pages
- All interactive elements keyboard-navigable
- ARIA labels on icon-only buttons
- Color contrast ratio ≥ 4.5:1

---

## 6. TESTING REQUIREMENTS

- **Performance:** Lighthouse CI score >90, 60fps on Samsung Galaxy A54
- **WebGPU:** Verify fallback to WebGL on Safari 15+ and Firefox <141
- **Localization:** Mandarin copy reviewed by native speaker; hreflang verified
- **Browser matrix:** Chrome 113+, Edge 113+, Firefox 141+, Safari 15+, iOS Safari, Chrome Mobile
- **Forms:** Contact form submission tested with valid and invalid inputs

---

## 7. DEPLOYMENT & LAUNCH

1. Deploy to Vercel (connect GitHub repo `JTOSHIE/Synergistic_Interaction`)
2. Configure Cloudflare CDN with Asia-Pacific PoP routing
3. Submit English and Mandarin sitemaps to Google Search Console and Baidu Webmaster Tools
4. Verify page load <3s from Shanghai via latency test
5. Confirm all DEPLOYMENT_CHECKLIST.md items checked before notifying project owner

---

## NON-NEGOTIABLE ABSOLUTES (V7 §12)

1. **No double work** — Complete website built once, deployed once
2. **Language toggle always visible** — "Change Language 中文" in English header at all times
3. **Compliance narrative is central** — `/why-compliance-matters` is the most important page
4. **Zero Panda Mart attribution** — Regulatory context with full impact, no direct reference
5. **Website live before proposal** — Not simultaneously, not after
