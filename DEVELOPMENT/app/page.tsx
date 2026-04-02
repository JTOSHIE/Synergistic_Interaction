import type { Metadata } from 'next';
import Link from 'next/link';
import ProofBar from '@/components/ProofBar';
import ComponentAccordion from '@/components/ComponentAccordion';
import RegulatoryFeed from '@/components/RegulatoryFeed';
import HomepageHero from '@/components/HomepageHero';
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
    stat: '4',
    description: 'International retail markets',
    detail: 'USA · UK · Australia · New Zealand — across three continents',
  },
  {
    stat: '3,500+',
    description: 'American national dairy program',
    detail: 'Experience within programs independently validated by Cornell University research',
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
      'For international brands entering the ANZ retail market. Channel strategy, compliance preparation, range architecture, and retailer buyer engagement from an operator with experience across four international retail markets.',
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
              25 Years · Global Retail Markets · Ten Categories
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
            <HomepageHero />
          </div>
        </div>
      </section>

      {/* ── PROOF BAR ────────────────────────────────────────── */}
      <ProofBar />

      {/* ── CREDENTIALS STRIP ────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-si-white-dim text-center mb-10">
            Delivered across the world&apos;s most demanding retail environments
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
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-si-teal/30 hover:bg-white/[0.08] transition-all"
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
                <span className="text-si-teal">Cornell University Research.</span>
              </h2>
              <p className="text-si-white-muted leading-relaxed mb-4">
                The category management programs Synergistic Interaction&apos;s principal worked within were
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
                Schmit, T.M., Kaiser, H.M. &amp; Chung, C. (2004). Cornell University,
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
          <RegulatoryFeed showFilter={false} maxItems={3} />
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
            access to the Australian and New Zealand retail market — the first conversation maps the
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
