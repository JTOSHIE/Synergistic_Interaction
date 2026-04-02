# SYNERGISTIC INTERACTION — SESSION 7: CATEGORY MANAGEMENT TRANSFORMATION
## Claude Code Directive: Build four new/updated pages. Do not stop. Deploy when complete.
### Live site: https://synergistic-interaction.vercel.app
### Working directory: ~/Documents/Synergistic_Interaction/DEVELOPMENT

---

## CONTEXT

The site is live but reads as a compliance specialist. It needs to read as a category management
specialist whose compliance capability is what makes growth sustainable. This session adds the
commercial, growth, and expertise dimensions that are currently invisible.

**Do not remove or alter:**
- /our-approach (nine components — unchanged)
- /why-compliance-matters (unchanged)
- /get-started (unchanged)
- /zh Mandarin pages (unchanged)
- All API routes (unchanged)

**Do not mention Panda Mart anywhere. Zero direct references.**
**Do not name specific retailers — describe by scale and market position only.**

---

## TASK 1: UPDATE NAVIGATION — HEADER AND FOOTER

**File:** `DEVELOPMENT/components/Header.tsx`

Replace the `navLinks` array with:

```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/category-expertise', label: 'Category Expertise' },
  { href: '/our-approach', label: 'Our Approach' },
  { href: '/why-compliance-matters', label: 'Why Compliance Matters' },
  { href: '/get-started', label: 'Get Started' },
];
```

Because there are now 7 nav items, update the desktop nav to use smaller text and tighter spacing. Find the desktop nav div and update its className:

```typescript
<div className="hidden lg:flex items-center gap-0.5">
  {navLinks.map((link) => {
    const isActive = pathname === link.href;
    return (
      <Link
        key={link.href}
        href={link.href}
        className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal ${
          isActive
            ? 'text-si-teal bg-si-teal/10'
            : 'text-si-white-muted hover:text-si-white hover:bg-white/5'
        }`}
        aria-current={isActive ? 'page' : undefined}
      >
        {link.label}
      </Link>
    );
  })}
</div>
```

Also update the mobile nav to include the two new links — they are already in the navLinks array so the mobile menu will pick them up automatically if it maps over navLinks.

**File:** `DEVELOPMENT/components/Footer.tsx`

Replace the Services footerLinks array:

```typescript
Services: [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Category Expertise', href: '/category-expertise' },
  { label: 'Our Approach', href: '/our-approach' },
  { label: 'Why Compliance Matters', href: '/why-compliance-matters' },
  { label: 'Get Started', href: '/get-started' },
],
```

---

## TASK 2: REWRITE HOME PAGE — `app/page.tsx`

Replace the entire file with the following. This keeps the existing component imports but
rewrites the content to lead with category management and commercial growth:

**File:** `DEVELOPMENT/app/page.tsx`

```typescript
import type { Metadata } from 'next';
import Link from 'next/link';
import ProofBar from '@/components/ProofBar';
import ComponentAccordion from '@/components/ComponentAccordion';
import RegulatoryFeed from '@/components/RegulatoryFeed';
import VisualizationWrapper from '@/components/VisualizationWrapper';
import { complianceComponents } from '@/lib/compliance-data';

export const metadata: Metadata = {
  title: 'Synergistic Interaction — Category Management Consultancy',
  description:
    'End-to-end category management for Australian retailers and global suppliers. Range architecture, supplier negotiation, planogram design, compliance, and in-store execution. Cornell-validated methodology.',
};

// Retailer credentials — described by scale, not brand name
const credentials = [
  {
    stat: '330+',
    description: "Australia's largest hardware retailer",
    detail: 'Stores managed simultaneously across ANZ',
  },
  {
    stat: '2,800+',
    description: "USA tri-state retail network",
    detail: "World's largest retailer + major pharmacy chains",
  },
  {
    stat: '3,500+',
    description: 'American national dairy program',
    detail: 'Cornell University independently validated 4% ADV uplift',
  },
  {
    stat: '13 yrs',
    description: 'First client retained',
    detail: 'The only meaningful measure of sustained delivery',
  },
];

// Five-phase methodology summary
const methodology = [
  {
    phase: '01',
    title: 'Discovery & Analysis',
    description:
      'Market research, competitive benchmarking, compliance requirements, store audit, POS data analysis. The factual foundation every category decision is built on.',
  },
  {
    phase: '02',
    title: 'Range Architecture',
    description:
      'SKU selection using sell-through data, margin analysis, and compliance scoring. The right 10–15 products at launch beats 50 wrong ones every time.',
  },
  {
    phase: '03',
    title: 'Supplier Negotiation',
    description:
      'Established distributor relationships across ten product categories. Faster timelines, better initial terms, and trade marketing support a new entrant cannot access cold.',
  },
  {
    phase: '04',
    title: 'Planogram & Merchandising',
    description:
      'Bay layout, product placement, cross-merchandising, signage, and staff training materials. Every placement decision made for a commercial reason.',
  },
  {
    phase: '05',
    title: 'Implementation & Launch',
    description:
      'Consultant on-site for launch day. Planogram installed correctly. Staff trained. Stock rotated. Performance monitored from week one.',
  },
];

// Services overview — three panels
const servicesSummary = [
  {
    title: 'Strategic Category Transformation',
    audience: 'For retailers',
    description:
      'End-to-end category implementation from discovery through to in-store launch. Range architecture, supplier sourcing, planogram design, compliance, and ongoing performance monitoring.',
    href: '/services#category-transformation',
  },
  {
    title: 'Supplier & Retailer Partnership',
    audience: 'For suppliers & retailers',
    description:
      'Acting as the expert conduit between major retailers and their suppliers. Navigating buying structures, negotiating terms, building the commercial relationships that produce long-term results.',
    href: '/services#supplier-retailer',
  },
  {
    title: 'New Market Entry',
    audience: 'For global suppliers',
    description:
      'For international brands entering the ANZ retail market. Channel strategy, compliance preparation, range architecture, and retailer buyer engagement from an operator who has done it across three countries.',
    href: '/services#market-entry',
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-si-bg">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 65% 40%, rgba(0,201,167,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-si-teal" />
              25 Years · Three Markets · Ten Categories
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-si-white leading-tight mb-6">
              Category Management{' '}
              <span className="text-si-teal">That Delivers.</span>
            </h1>

            <p className="text-xl text-si-white-muted leading-relaxed mb-4 max-w-xl">
              From range architecture and supplier negotiation to planogram installation
              and compliance — Synergistic Interaction delivers end-to-end category
              management across Australia, the USA, and the UK.
            </p>

            <p className="text-base text-si-white-muted leading-relaxed mb-8 max-w-xl">
              We work with retailers building new categories and suppliers seeking access
              to the retail network. The methodology is Cornell-validated. The relationships
              are established. The execution is in-field, not in a presentation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors"
              >
                Our Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/category-expertise"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-si-white rounded-xl hover:border-si-teal hover:text-si-teal transition-colors"
              >
                Category Expertise
              </Link>
            </div>
          </div>

          <div className="relative">
            <VisualizationWrapper />
            <p className="text-xs text-si-white-dim text-center mt-3">
              Compliance-by-exception supply chain network — non-compliant nodes
              intercepted before distribution
            </p>
          </div>
        </div>
      </section>

      {/* ── PROOF BAR ────────────────────────────────────────── */}
      <ProofBar />

      {/* ── CREDENTIALS STRIP ────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-si-white-dim text-center mb-10">
            Delivered across the world's most demanding retail environments
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((c) => (
              <div
                key={c.stat}
                className="p-5 rounded-xl border border-white/10 bg-white/5 text-center"
              >
                <p className="text-3xl font-bold text-si-teal mb-2">{c.stat}</p>
                <p className="text-si-white text-sm font-medium mb-1">{c.description}</p>
                <p className="text-si-white-dim text-xs leading-snug">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-si-bg-secondary border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-si-white mb-4">
              Who We Work With
            </h2>
            <p className="text-si-white-muted max-w-2xl leading-relaxed">
              Synergistic Interaction works on both sides of the retailer-supplier
              relationship. Retailers building categories. Suppliers entering markets.
              Both need the same thing — someone who understands the commercial landscape
              and has the relationships to navigate it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {servicesSummary.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-si-teal/30 hover:bg-white/8 transition-all"
              >
                <span className="inline-block text-xs font-medium text-si-teal bg-si-teal/10 border border-si-teal/20 rounded px-2 py-0.5 mb-4">
                  {s.audience}
                </span>
                <h3 className="text-si-white font-semibold mb-3 group-hover:text-si-teal transition-colors">
                  {s.title}
                </h3>
                <p className="text-si-white-muted text-sm leading-relaxed">
                  {s.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-si-teal text-xs font-medium">
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-si-teal hover:text-si-teal-light transition-colors font-medium text-sm"
            >
              View all services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FIVE-PHASE METHODOLOGY ───────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-si-white mb-4">
              End-to-End. In-Field. Not a Report.
            </h2>
            <p className="text-si-white-muted leading-relaxed max-w-2xl">
              The five-phase methodology covers every stage of category implementation —
              from market research to launch day. The consultant is on-site at launch.
              The planogram is installed correctly. The staff are trained. That is the
              standard, not the exception.
            </p>
          </div>

          <div className="space-y-4">
            {methodology.map((m) => (
              <div
                key={m.phase}
                className="flex gap-5 p-5 rounded-xl border border-white/10 bg-white/5"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-si-teal/10 border border-si-teal/20 flex items-center justify-center text-si-teal text-xs font-mono font-bold">
                  {m.phase}
                </span>
                <div>
                  <p className="text-si-white font-semibold mb-1">{m.title}</p>
                  <p className="text-si-white-muted text-sm leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/our-approach"
              className="inline-flex items-center gap-2 text-si-teal hover:text-si-teal-light transition-colors font-medium text-sm"
            >
              The compliance architecture behind the methodology
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CORNELL PROOF CALLOUT ────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-si-bg-secondary border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-6">
                Independently Validated
              </div>
              <h2 className="text-3xl font-bold text-si-white mb-6">
                4% Average Daily Volume Uplift.{' '}
                <span className="text-si-teal">61 Stores. Cornell University.</span>
              </h2>
              <p className="text-si-white-muted leading-relaxed mb-4">
                The category management methodology used by Synergistic Interaction was
                independently evaluated by Cornell University researchers. The published
                finding: a 4% average daily volume increase across 61 retail stores in a
                competitive US market — covering 85% of all stores in that market and 91%
                of total category sales.
              </p>
              <p className="text-si-white-muted leading-relaxed mb-6">
                This is not a case study produced by the consultant. It is an independent,
                peer-reviewed academic finding. The same systematic approach applied to
                every Synergistic Interaction engagement.
              </p>
              <p className="text-xs text-si-white-dim">
                Schmit, T.M., Kaiser, H.M. & Chung, C. (2004). Cornell University,
                Department of Applied Economics and Management. R.B. 2004-02.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '4%', label: 'Average daily volume uplift', sub: 'Across all store formats' },
                { value: '5.3%', label: 'Supermarkets & mass merchants', sub: 'Highest performing format' },
                { value: '61', label: 'Stores in the study', sub: '85% of the market' },
                { value: '91%', label: 'Of total category sales', sub: 'Covered by the study' },
              ].map((item) => (
                <div
                  key={item.value}
                  className="p-5 rounded-xl border border-si-teal/20 bg-si-teal/5 text-center"
                >
                  <p className="text-3xl font-bold text-si-teal mb-1">{item.value}</p>
                  <p className="text-si-white text-xs font-medium mb-1">{item.label}</p>
                  <p className="text-si-white-dim text-xs">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ARCHITECTURE PREVIEW ─────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-si-white mb-4">
              The Architecture Underneath the Growth
            </h2>
            <p className="text-si-white-muted max-w-2xl leading-relaxed">
              Every category Synergistic Interaction manages is built on a nine-component
              compliance architecture. Not because compliance is the goal — because it is
              the structural foundation that makes growth sustainable and scalable without
              regulatory ceiling.
            </p>
          </div>
          <ComponentAccordion
            components={complianceComponents.slice(0, 3)}
            expandFirst={false}
          />
          <div className="text-center mt-8">
            <Link
              href="/our-approach"
              className="inline-flex items-center gap-2 text-si-teal hover:text-si-teal-light transition-colors font-medium text-sm"
            >
              View all nine components
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── REGULATORY FEED PREVIEW ──────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl font-bold text-si-white mb-2">
                Live Regulatory Intelligence
              </h2>
              <p className="text-si-white-muted text-sm">
                Monitoring ACCC, Consumer Affairs Victoria, TGA, and Energy Safe Victoria daily.
              </p>
            </div>
            <Link
              href="/why-compliance-matters#regulatory-feed"
              className="flex-shrink-0 text-si-teal text-sm hover:underline"
            >
              View all updates →
            </Link>
          </div>
          <RegulatoryFeed showFilter={false} limit={3} />
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-si-bg-secondary border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-si-white mb-4">
            Ready to build the category?
          </h2>
          <p className="text-si-white-muted mb-8 leading-relaxed">
            Whether you are a retailer launching a new category or a supplier seeking
            access to the Australian retail market — the first conversation maps the
            opportunity and the path to it.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors"
          >
            Start the Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
```

---

## TASK 3: CREATE `/app/about/page.tsx`

**File:** `DEVELOPMENT/app/about/page.tsx`

```typescript
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Synergistic Interaction',
  description:
    'Twenty-five years of category management across the USA, UK, and Australia. Cornell-validated methodology. In-field execution across ten product categories.',
};

const timeline = [
  {
    period: '1997 – 2006',
    market: 'United States & International',
    headline: 'Digital Transformation of Category Management',
    body: `At a time when category management was a paper-based, manually processed discipline, Synergistic Interaction's principal designed and built the world's first real-time, web-based category management system. Paper-based information collection was replaced with live field data entry. Manual planogramming was replaced with store-specific digital planogram generation. Static compliance checking became live exception-based auditing.

The system was deployed across more than 2,800 stores in the New York, New Jersey, and Massachusetts tri-state area — managing the world's largest retailer, major national pharmacy chains, and supermarket groups. Its effectiveness was so demonstrable it was adopted nationally by the American Dairy Association and Dairy Council to manage the dairy category across more than 3,500 retail stores.

Cornell University independently evaluated the results: a 4% average daily volume increase across 61 stores, covering 85% of the market and 91% of total category sales. Published as a peer-reviewed research bulletin in 2004.

International work during this period extended to the UK — providing category management and merchandising strategy consulting for the UK's two largest grocery retailers — and to Australia, managing meat planogramming and FMCG category work for Australia's largest supermarket chains.`,
    stats: [
      { value: '2,800+', label: 'Stores managed, tri-state USA' },
      { value: '3,500+', label: 'Stores in national dairy program' },
      { value: '4%', label: 'Cornell-validated ADV uplift' },
    ],
  },
  {
    period: '2007 – 2019',
    market: 'Australia & New Zealand',
    headline: 'Enterprise Category Management at Scale',
    body: `G-Force Category Solutions was co-founded to manage the category function for global suppliers within Australia's largest hardware retail network. From a single-supplier starting point, the business grew to simultaneously manage 330+ retail locations across Australia and New Zealand — coordinating more than 2,000 product lines across 20 global suppliers, with 300+ field representatives managed via a bespoke data collection application.

Custom Power BI analytics dashboards converted raw field data into store-specific, demographic-specific, and supplier-specific actionable insights. Clients included major global brands across hardware, electrical, household, and garden categories.

The defining metric of this period is not the revenue or headcount. It is the client retention record: the first client signed when the business launched remained a client for the full thirteen-year operational period. That single fact — verifiable and documented — is the most credible signal of sustained delivery that a category management consultancy can offer.`,
    stats: [
      { value: '330+', label: "Stores in Australia's largest hardware network" },
      { value: '2,000+', label: 'Product lines under active management' },
      { value: '13 yrs', label: 'First client retention record' },
    ],
  },
  {
    period: '2019 – Present',
    market: 'Australia',
    headline: 'Synergistic Interaction',
    body: `The evolution from an operational leadership role to an independent strategic consultancy brought the full depth of enterprise-scale category management methodology to individual retail engagements. The same discipline applied to 330 stores simultaneously — range architecture, supplier negotiation, planogram design, compliance verification, in-store execution — now applied to a single retailer's category with undivided focus.

Synergistic Interaction works across ten product categories and serves both retailers building new categories and global suppliers seeking access to the Australian retail market. The methodology is documented, repeatable, and compliance-integrated at every stage. The relationships with Australian distributors across baby products, hardware, garden, electrical, barbecue, personal care, cleaning, and homewares categories are established and active.

The brand represents a deliberate elevation — from a practitioner delivering projects to a consultancy capable of scaling engagements, building associate networks, and serving enterprise clients without the structural limitations of a sole-trader positioning.`,
    stats: [
      { value: '10', label: 'Product categories served' },
      { value: '3', label: 'Countries of retail operation' },
      { value: '25+', label: 'Years of category management methodology' },
    ],
  },
];

const differentiators = [
  {
    title: 'Enterprise Scale, Single-Store Precision',
    body: 'The systems, discipline, and supplier relationships built to manage 330+ stores simultaneously — applied to a single retailer with the rigour it deserves. Clients get a team\'s capability from a single engagement.',
  },
  {
    title: 'Cornell-Validated Methodology',
    body: 'A 4% ADV sales uplift is not a claim — it is an independently published, peer-reviewed academic finding. Clients are investing in a proven methodology, not an experiment.',
  },
  {
    title: 'Technology as a Multiplier',
    body: 'Where other consultants deliver reports, Synergistic Interaction delivers systems: field data applications, Power BI dashboards, compliance-by-exception monitoring. Technology extends the impact of every engagement beyond the consultant\'s physical presence.',
  },
  {
    title: 'Both Sides of the Relationship',
    body: 'Twenty-five years managing both the retail buying side and the supplier selling side creates a commercial perspective that neither party can access alone. Synergistic Interaction has sat at both tables.',
  },
  {
    title: 'In-Field, Not In a Presentation',
    body: 'The consultant is on-site at launch day. The planogram is installed correctly. The staff are trained. The methodology is not delivered as a document — it is executed on the shelf.',
  },
  {
    title: 'Compliance Embedded, Not Adjacent',
    body: 'Compliance is not a separate workstream bolted onto category management. It is embedded in every product decision, every supplier selection, and every ranging choice from day one.',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Header */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-6">
            25 Years · USA · UK · Australia
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight">
            A Track Record Built Across{' '}
            <span className="text-si-teal">Three Markets</span>
          </h1>
          <p className="text-xl text-si-white-muted max-w-2xl leading-relaxed">
            Synergistic Interaction brings twenty-five years of category management
            execution — from the world's most competitive retail environments to
            Australia's most demanding retail networks. Cornell-validated methodology.
            In-field execution. Compliance integrated at every stage.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto space-y-16">
          {timeline.map((act, i) => (
            <div key={i} className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <p className="text-si-teal text-sm font-mono font-medium mb-1">
                  {act.period}
                </p>
                <p className="text-si-white-dim text-xs mb-4">{act.market}</p>
                <div className="space-y-3">
                  {act.stats.map((s) => (
                    <div
                      key={s.value}
                      className="p-3 rounded-xl border border-white/10 bg-white/5"
                    >
                      <p className="text-2xl font-bold text-si-teal">{s.value}</p>
                      <p className="text-si-white-dim text-xs mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-si-white mb-4">
                  {act.headline}
                </h2>
                {act.body.split('\n\n').map((para, j) => (
                  <p key={j} className="text-si-white-muted leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Six Differentiators */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-si-bg-secondary border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-si-white mb-4">
            What Makes the Difference
          </h2>
          <p className="text-si-white-muted mb-12 max-w-xl">
            These are not positioning statements. They are structural differences in
            how the work gets done.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="p-6 rounded-2xl border border-white/10 bg-white/5"
              >
                <h3 className="text-si-white font-semibold mb-3">{d.title}</h3>
                <p className="text-si-white-muted text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-si-white mb-4">
            See the methodology in action
          </h2>
          <p className="text-si-white-muted mb-8">
            The five-phase implementation process, the nine-component compliance
            architecture, and the ten categories we operate across.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/category-expertise"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-si-white rounded-xl hover:border-si-teal hover:text-si-teal transition-colors"
            >
              Category Expertise
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

## TASK 4: CREATE `/app/services/page.tsx`

**File:** `DEVELOPMENT/app/services/page.tsx`

```typescript
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — Synergistic Interaction',
  description:
    'Category management services for retailers and suppliers. Strategic category transformation, supplier-retailer partnership, retail systems, and new market entry.',
};

const services = [
  {
    id: 'category-transformation',
    number: '01',
    title: 'Strategic Category Transformation',
    audience: ['For retailers'],
    tagline: 'End-to-end category implementation. In-field execution. Measurable results.',
    body: `A complete category transformation covers five phases: discovery and market analysis, range architecture and SKU selection, supplier negotiation and sourcing, planogram and merchandising design, and in-store implementation and launch.

Each phase builds directly on the previous one. Every decision — from SKU selection to supplier terms to shelf placement — is evidence-based and documented for ongoing management. The consultant is on-site at launch day, not sending instructions for the store team to follow.

This service is appropriate for retailers launching a new category from scratch, repositioning an existing underperforming category, transitioning from direct import to locally distributed product, or building the compliance documentation infrastructure a category requires.`,
    deliverables: [
      'Category opportunity assessment and competitive benchmarking',
      'Consumer decision tree and top SKU recommendation matrix',
      'Local sourcing plan with distributor identification and pre-screening',
      'Negotiated supplier agreements with pricing, terms, and trade support',
      'Compliance documentation package — certificate of compliance, test reports, importer verification',
      'Planogram drawn to store bay dimensions — executable by store staff',
      'Post-launch performance report within 48 hours of launch day',
      'Ongoing KPI dashboard with weekly tracking',
    ],
    kpis: [
      '>97% on-shelf availability',
      '<3% stockout incidents per week',
      '≥30% locally-sourced product mix',
      '100% compliance verification before ranging',
      '4% ADV uplift target (Cornell-validated benchmark)',
    ],
  },
  {
    id: 'supplier-retailer',
    number: '02',
    title: 'Supplier & Retailer Partnership Synergy',
    audience: ['For suppliers', 'For retailers'],
    tagline: 'Acting as the expert conduit between both sides of the commercial relationship.',
    body: `Synergistic Interaction sits at the intersection of the retailer-supplier relationship with established relationships and operational experience on both sides. For suppliers, this means access to a navigator who understands retail buying structures, compliance requirements, and the commercial language that major retailers respond to. For retailers, it means access to supplier relationship capital and negotiation expertise that accelerates outcomes and improves terms.

For suppliers seeking to place products into Australian retail: the Australian distribution landscape is not transparent to international brands. Understanding which categories have viable local distributor networks, which retailers are actively seeking new suppliers in a given category, and how to present a product in a way that meets both the commercial and compliance requirements of major Australian buyers — this is the specific expertise Synergistic Interaction brings.

For retailers managing existing supplier relationships: annual trading term renegotiation, supplier performance management, trade marketing activation, and compliance documentation requirements are ongoing operational demands. This service provides the expertise to manage them at a professional level without the overhead of dedicated internal resources.`,
    deliverables: [
      'Supplier landscape mapping for target categories and retail channels',
      'Distributor identification and pre-qualification',
      'Commercial presentation development for retailer buyer meetings',
      'Trading terms negotiation — cost price, payment terms, MOQ, return policy, promotional support',
      'Compliance documentation requirements by retailer and category',
      'Supplier performance scorecard and annual review framework',
      'Trade marketing activation planning and execution',
    ],
    kpis: [
      'Supplier onboarding timeline reduction',
      'Trading terms improvement vs. baseline',
      'Compliance documentation completeness rate',
      'Supplier fill rate >95%',
    ],
  },
  {
    id: 'retail-systems',
    number: '03',
    title: 'Retail Systems & Data Analytics Architecture',
    audience: ['For retailers', 'For suppliers'],
    tagline: 'The technology infrastructure that makes category management scalable.',
    body: `Category management without data infrastructure is a service that ends when the consultant leaves. Synergistic Interaction designs the systems that make category performance visible, manageable, and improvable after every engagement concludes.

This service covers the design and implementation of data-driven category management systems — from custom Power BI reporting frameworks to field data collection workflows to compliance documentation management platforms. The approach is platform-agnostic: the methodology integrates with existing ERP systems, purpose-built GRC platforms, or structured spreadsheet environments depending on the retailer's scale and existing infrastructure.

For smaller independent retailers, this may mean a structured Notion or Airtable workspace for compliance file management — low-cost, accessible, and sufficient for a 40–60 SKU pilot category. For larger operations, it means integration with existing ERP or GRC platforms. The compliance architecture is the methodology. The platform is the container.`,
    deliverables: [
      'Current systems assessment and gap analysis',
      'Platform recommendation by retailer scale (from structured spreadsheet to enterprise GRC)',
      'Compliance documentation file structure and template design',
      'Power BI dashboard framework for category KPI tracking',
      'Field data collection process design',
      'Staff training on system use and ongoing maintenance',
    ],
    kpis: [
      'Compliance file completeness: 100% of ranged products',
      'Regulatory response time: compliance file retrievable within 15 minutes',
      'KPI reporting frequency: weekly automated',
    ],
  },
  {
    id: 'market-entry',
    number: '04',
    title: 'New Market & Product Launch Strategy',
    audience: ['For global suppliers'],
    tagline: 'Entering the Australian retail market with the right strategy, the right channel, and the right compliance foundation.',
    body: `The Australian retail market has specific structural characteristics that international suppliers regularly underestimate. Retail buying structures differ significantly from European and North American equivalents. Compliance requirements — mandatory safety standards, RCM registration for electrical goods, ACCC consumer protection obligations — are materially different from other markets and carry penalties that can be existential for a brand without proper preparation.

Synergistic Interaction provides international suppliers with a complete market entry capability: understanding the Australian retail landscape, identifying the right retail channel for the product category, building the compliance documentation foundation required before the first buyer meeting, and facilitating the commercial introductions that a cold approach cannot achieve.

The combination of established retailer relationships and compliance expertise in the Australian market is not widely available from a single source. Strategy firms understand the market but do not execute. Implementation firms execute but do not have the buyer relationships. Synergistic Interaction does both.`,
    deliverables: [
      'Australian retail landscape assessment for target category',
      'Channel strategy recommendation — which retailer types, in which sequence',
      'Australian compliance requirements audit for product range',
      'Compliance documentation preparation for Australian market entry',
      'Commercial presentation developed for Australian retail buyer expectations',
      'Distributor or direct-import pathway recommendation',
      'Launch timeline with compliance milestones built in',
    ],
    kpis: [
      'Time to first buyer meeting',
      'Compliance documentation completeness before first ranging conversation',
      'Number of retailer relationships activated',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-6">
            Retailers · Suppliers · Both
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight">
            Services Built for{' '}
            <span className="text-si-teal">Both Sides of the Market</span>
          </h1>
          <p className="text-xl text-si-white-muted max-w-2xl leading-relaxed">
            Synergistic Interaction works with retailers building categories and suppliers
            seeking market access. Four service lines covering every stage of the
            retailer-supplier commercial relationship.
          </p>
        </div>
      </section>

      {/* Service listings */}
      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 scroll-mt-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-start gap-4 mb-6">
              <span className="text-4xl font-bold text-si-teal/20 font-mono">
                {service.number}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  {service.audience.map((a) => (
                    <span
                      key={a}
                      className="text-xs font-medium text-si-teal bg-si-teal/10 border border-si-teal/20 rounded px-2 py-0.5"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-si-white">{service.title}</h2>
                <p className="text-si-white-muted mt-1">{service.tagline}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                {service.body.split('\n\n').map((para, i) => (
                  <p key={i} className="text-si-white-muted leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-si-white text-sm font-semibold uppercase tracking-wide mb-3">
                    Deliverables
                  </h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex gap-2 text-xs text-si-white-muted">
                        <span className="text-si-teal mt-0.5 flex-shrink-0">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-si-white text-sm font-semibold uppercase tracking-wide mb-3">
                    Success Metrics
                  </h3>
                  <ul className="space-y-2">
                    {service.kpis.map((k) => (
                      <li key={k} className="flex gap-2 text-xs text-si-white-dim">
                        <span className="text-si-teal/50 mt-0.5 flex-shrink-0">—</span>
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-si-white mb-4">
            Not sure which service fits?
          </h2>
          <p className="text-si-white-muted mb-8">
            The first conversation identifies which service line, which phase, and which
            investment level makes sense for your specific situation.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
```

---

## TASK 5: CREATE `/app/category-expertise/page.tsx`

**File:** `DEVELOPMENT/app/category-expertise/page.tsx`

```typescript
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Category Expertise — Synergistic Interaction',
  description:
    'Category management expertise across ten product categories. Baby products, hardware, gardening, barbecue, electrical, personal care, cleaning, children\'s textiles, beverages, and homewares.',
};

const categories = [
  {
    number: '01',
    name: 'Baby Products',
    pilot: true,
    overview:
      'The highest compliance complexity category in Australian retail. Mandatory safety standards covering infant sleep products, button battery safety, and children\'s product requirements create an obligation landscape that requires specific architecture before any product is ranged.',
    commercialOpportunity:
      'Cost-of-living pressures are driving parents from specialist retailers toward value-oriented discount channels. The category rewards compliance confidence — retailers who can demonstrate verified, locally-distributed ranges capture loyalty that competitors without documentation cannot sustain.',
    supplierLandscape:
      'Established Australian distributor networks exist for all major sub-categories. Nappies and wipes, feeding accessories, baby skincare, health and safety products, and dummies all have accessible Australian distributor pathways that transfer compliance liability and accelerate onboarding.',
    complianceNote:
      'Consumer Goods (Infant Sleep Products) Safety Standard 2024 — mandatory. Button battery accessibility requirements — mandatory. All baby products require verified compliance documentation before ranging.',
  },
  {
    number: '02',
    name: 'Hardware & Home Improvement',
    overview:
      'A category built on supplier relationships and planogram precision. Managing hardware at scale requires store-specific ranging decisions, supplier coordination across 20+ product lines, and compliance verification for electrical tools and chemical products.',
    commercialOpportunity:
      'DIY home improvement remains a high-frequency category with strong basket correlation. Range architecture that reflects local trade and DIY split drives significantly higher category revenue than generic national planograms.',
    supplierLandscape:
      'Global brands with established ANZ distribution. Supplier relationships across paint, tools, storage, lighting, and seasonal hardware developed over a 13-year operational period in Australia\'s largest hardware retail network.',
    complianceNote:
      'Power tools and electrical equipment require RCM compliance. Chemical products require SDS documentation and labelling compliance under Australian Dangerous Goods requirements.',
  },
  {
    number: '03',
    name: 'Gardening & Outdoor',
    overview:
      'A strongly seasonal category requiring quarterly planogram rotations and supplier coordination timed to planting seasons. The local sourcing story is strong — Australian-grown plants and locally formulated soils and fertilisers have genuine provenance advantage.',
    commercialOpportunity:
      'Seasonal peaks (spring, Easter) drive disproportionate category revenue. Retailers who execute the spring transition at the right time with the right range consistently outperform those with generic year-round setups.',
    supplierLandscape:
      'Mix of national distributors for branded chemicals and tools, and regional suppliers for growing media. Local sourcing targets achievable above 40% in most sub-categories.',
    complianceNote:
      'Pesticides and herbicides require APVMA registration. Chemical products require correct labelling and Safety Data Sheets. Garden tools with electrical components require RCM compliance.',
  },
  {
    number: '04',
    name: 'Barbecue & Gas Products',
    overview:
      'A safety-critical category with specific Australian Standards compliance requirements for gas appliances and connections. The category rewards depth of range in the premium segment and tight compliance management in the entry segment.',
    commercialOpportunity:
      'Australian outdoor living culture sustains year-round demand with a clear summer peak. The category has strong accessory and consumable attachment — charcoal, gas cylinders, covers, and tools drive repeat purchase from a hardware barbecue sale.',
    supplierLandscape:
      'Mix of global brands with Australian distribution and local manufacturers. Gas appliance compliance (AS/NZS 5601) is the primary market entry requirement for international suppliers.',
    complianceNote:
      'Gas appliances require compliance with AS/NZS 5601 and must be certified to Australian Standards before supply. RCM compliance required for electrical barbecue products.',
  },
  {
    number: '05',
    name: 'Electrical & Power Tools',
    overview:
      'The highest enforcement activity category in the current ACCC and Energy Safe Victoria enforcement priorities. Every electrical product must be registered on the EESS database and display the RCM mark. Direct-import electrical goods without Australian distributor of record create 100% retailer liability.',
    commercialOpportunity:
      'Power tools and small electrical appliances have high attachment to renovation activity and seasonal gifting. The compliance barrier creates market differentiation — retailers with clean compliance architecture can range confidently where competitors cannot.',
    supplierLandscape:
      'Strong Australian distributor networks for global brands. EESS registration and RCM compliance is a pre-condition for any distributor engagement and filters the supplier landscape before commercial conversations begin.',
    complianceNote:
      'EESS registration mandatory. RCM mark required on all electrical articles. Energy Safe Victoria enforcement activity highest in this category. Third-party test reports from NATA-accredited laboratories required.',
  },
  {
    number: '06',
    name: "Children's Textiles & Clothing",
    overview:
      'A category with specific mandatory flammability and size labelling requirements under Australian Consumer Law. The children\'s apparel category requires age-appropriate sizing standards and textile content labelling compliance.',
    commercialOpportunity:
      'Value-oriented children\'s clothing has strong demand in demographics served by discount and variety retailers. The category benefits from seasonal transitions and back-to-school activation.',
    supplierLandscape:
      'Mix of Australian importers representing global brands and direct-import suppliers. Australian distributor arrangements provide compliance buffer for the mandatory standards framework.',
    complianceNote:
      'Consumer Goods (Children\'s Nightwear and Limited Daywear) Safety Standard — flammability requirements mandatory. Textile content labelling required under ACL. Size labelling per AS/NZS 1182.',
  },
  {
    number: '07',
    name: 'Personal Care & Cosmetics',
    overview:
      'A category that spans consumer goods and therapeutic goods depending on product claims. Sunscreen, medicated products, and therapeutic-claim items require TGA compliance. The category benefits from brand recognition and local sourcing credentials.',
    commercialOpportunity:
      'Personal care has consistent year-round demand with seasonal peaks in sun care and gifting periods. Australian-made products carry genuine consumer confidence advantage in skin care sub-categories.',
    supplierLandscape:
      'Strong Australian manufacturing base for skincare (particularly Queensland and Victoria). TGA-listed products available through established pharmaceutical distributors.',
    complianceNote:
      'Products making therapeutic claims require TGA listing (AUST L or AUST R). Sunscreen SPF 15+ classified as therapeutic goods. Cosmetic-only products require ingredient labelling compliance under NICNAS.',
  },
  {
    number: '08',
    name: 'Cleaning & Household Chemicals',
    overview:
      'A compliance-intensive category with chemical hazard labelling, Safety Data Sheet, and Dangerous Goods transport requirements layered on top of standard consumer goods obligations. The category has strong private label opportunity alongside established brand ranging.',
    commercialOpportunity:
      'Cleaning products are high-frequency, high-repeat purchase. Category management that gets the range architecture right — the right SKU count, the right format mix, the right price ladder — drives consistent basket attachment.',
    supplierLandscape:
      'Major Australian and global distributors cover the branded segment. Australian manufacturers are accessible for white-label and local brand ranging.',
    complianceNote:
      'GHS chemical labelling mandatory. Safety Data Sheets required for all hazardous substances. Dangerous Goods classification affects transport and storage requirements.',
  },
  {
    number: '09',
    name: 'Water & Beverages',
    overview:
      'A category requiring Food Standards Australia New Zealand (FSANZ) compliance for labelling, health claims, and ingredient declarations. The category has strong private label potential and local sourcing advantage for water products.',
    commercialOpportunity:
      'Convenience beverages and functional water have strong growth trajectory. Discount retailers can compete effectively in this category with the right range architecture and shelf placement.',
    supplierLandscape:
      'Australian water distributors and beverage manufacturers accessible for local sourcing. Imported beverages require importer-of-record identification and FSANZ label compliance.',
    complianceNote:
      'FSANZ Food Standards Code compliance required for all food and beverage products. Health and nutrition claims regulated. Country of origin labelling mandatory.',
  },
  {
    number: '10',
    name: 'Furniture & Homewares',
    overview:
      'A category with significant direct-import activity and corresponding compliance liability concentration. Furniture with structural load requirements, children\'s furniture with safety standards, and electrical homewares each carry specific compliance frameworks.',
    commercialOpportunity:
      'The category has strong attachment to home improvement activity and gifting occasions. Range curation — a focused selection of high sell-through items rather than broad ranging — drives significantly better category returns.',
    supplierLandscape:
      'Mix of Australian importers and direct-import suppliers. The Australian distributor network for furniture is thinner than other categories — making importer-of-record verification more critical.',
    complianceNote:
      'Children\'s furniture subject to mandatory safety standards. Electrical homewares require RCM compliance. Upholstered furniture subject to flammability requirements. Structural furniture should carry load rating documentation.',
  },
];

export default function CategoryExpertisePage() {
  return (
    <main>
      {/* Header */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-6">
            Ten Categories · Retail & Supplier Perspectives
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight">
            Category Management Across{' '}
            <span className="text-si-teal">Ten Product Areas</span>
          </h1>
          <p className="text-xl text-si-white-muted max-w-2xl leading-relaxed">
            Each category has its own compliance framework, supplier landscape, and
            commercial dynamics. What follows is what category management actually looks
            like in each one — for retailers building the category and suppliers seeking
            to place products into it.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <a
                key={cat.number}
                href={`#cat-${cat.number}`}
                className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-si-teal/30 hover:bg-white/8 transition-all text-center"
              >
                <p className="text-xs font-mono text-si-teal mb-1">{cat.number}</p>
                <p className="text-si-white text-xs font-medium leading-tight">
                  {cat.name}
                </p>
                {cat.pilot && (
                  <span className="inline-block mt-1 text-[10px] text-si-teal bg-si-teal/10 rounded px-1.5 py-0.5">
                    Pilot ready
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category detail sections */}
      {categories.map((cat) => (
        <section
          key={cat.number}
          id={`cat-${cat.number}`}
          className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 scroll-mt-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <span className="text-4xl font-bold text-si-teal/20 font-mono flex-shrink-0">
                {cat.number}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h2 className="text-2xl font-bold text-si-white">{cat.name}</h2>
                  {cat.pilot && (
                    <span className="text-xs text-si-teal bg-si-teal/10 border border-si-teal/20 rounded px-2 py-0.5">
                      Pilot category ready
                    </span>
                  )}
                </div>
                <p className="text-si-white-muted leading-relaxed">{cat.overview}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="p-5 rounded-xl border border-white/10 bg-white/5">
                <p className="text-si-white text-xs font-semibold uppercase tracking-wide mb-3">
                  Commercial Opportunity
                </p>
                <p className="text-si-white-muted text-sm leading-relaxed">
                  {cat.commercialOpportunity}
                </p>
              </div>
              <div className="p-5 rounded-xl border border-white/10 bg-white/5">
                <p className="text-si-white text-xs font-semibold uppercase tracking-wide mb-3">
                  Supplier Landscape
                </p>
                <p className="text-si-white-muted text-sm leading-relaxed">
                  {cat.supplierLandscape}
                </p>
              </div>
              <div className="p-5 rounded-xl border border-si-teal/20 bg-si-teal/5">
                <p className="text-si-teal text-xs font-semibold uppercase tracking-wide mb-3">
                  Compliance Notes
                </p>
                <p className="text-si-white-muted text-sm leading-relaxed">
                  {cat.complianceNote}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-si-white mb-4">
            Your category is on this list
          </h2>
          <p className="text-si-white-muted mb-8">
            The first conversation identifies the compliance requirements, the supplier
            landscape, and the commercial opportunity specific to your situation.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
```

---

## TASK 6: UPDATE SITEMAP

**File:** `DEVELOPMENT/app/sitemap.ts`

```typescript
import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://synergisticinteraction.com.au';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/category-expertise`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/our-approach`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/why-compliance-matters`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/get-started`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/zh`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${BASE_URL}/zh/get-started`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
```

---

## TASK 7: BUILD, VERIFY, DEPLOY

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
rm -rf .next
npm run build 2>&1
```

Fix any TypeScript errors before proceeding. Common issues:
- Missing `'use client'` — not needed on any of these pages (all server components)
- Import path casing — ensure exact match with filesystem

After build passes:

```bash
vercel --prod
```

Verify all new pages return HTTP 200:

```bash
LIVE="https://synergistic-interaction.vercel.app"
for path in "" "/about" "/services" "/category-expertise" "/our-approach" "/why-compliance-matters" "/get-started"; do
  echo "$path: $(curl -s -o /dev/null -w '%{http_code}' $LIVE$path)"
done
```

---

## TASK 8: COMMIT AND UPDATE STATUS

```bash
cd ~/Documents/Synergistic_Interaction
git add -A
git commit -m "Session 7: Category management transformation

- Homepage rewritten: growth-first narrative, credentials strip, Cornell proof, five-phase methodology
- /about: company track record across USA, UK, Australia — three-act narrative
- /services: four service lines, dual retailer/supplier audience
- /category-expertise: ten categories with commercial, supplier, and compliance detail
- Navigation: added About, Services, Category Expertise
- Sitemap updated with all new routes
- No brand names used — described by scale and market position"

git push origin main
```

---

## TASK 9: PRINT COMPLETION REPORT

```
═══════════════════════════════════════════════════════
SYNERGISTIC INTERACTION — SESSION 7 COMPLETE
═══════════════════════════════════════════════════════

PAGES BUILT:
  Homepage rewritten:          [ yes / no ]
  /about created:              [ yes / no ]
  /services created:           [ yes / no ]
  /category-expertise created: [ yes / no ]
  Navigation updated:          [ yes / no ]

LIVE SITE: https://synergistic-interaction.vercel.app
All pages HTTP 200:            [ yes / no ]
Build errors:                  [ none / list ]

NEXT REVIEW POINTS:
  - Check homepage credentials strip renders correctly
  - Check /about three-act timeline layout on mobile
  - Check /services deliverables list formatting
  - Check /category-expertise jump navigation (anchor links)
  - Confirm no brand names appear anywhere on the site
═══════════════════════════════════════════════════════
```
