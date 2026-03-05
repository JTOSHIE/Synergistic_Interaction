// V7 §11: Home page — four sections per content map
// V7 §7: Compliance-as-catalyst messaging integrated throughout
import type { Metadata } from 'next';
import ProofBar from '@/components/ProofBar';
import ComponentAccordion from '@/components/ComponentAccordion';
import RegulatoryFeed from '@/components/RegulatoryFeed';
import VisualizationWrapper from '@/components/VisualizationWrapper';
import { complianceComponents } from '@/lib/compliance-data';

export const metadata: Metadata = {
  title: 'Compliance-First Category Management | Synergistic Interaction',
  description:
    'Synergistic Interaction delivers compliance-first category management with ISO 37301 alignment. The nine-component framework that turns regulatory obligation into competitive advantage.',
};

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            {/* V7 §8.4: Differentiation headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-si-white leading-tight">
              Compliance Architecture.{' '}
              <span className="text-si-teal">Not Compliance Theatre.</span>
            </h1>
            {/* V7 §7: Catalyst positioning — compliance as growth infrastructure */}
            <p className="mt-6 text-lg text-si-white-muted leading-relaxed max-w-xl">
              Synergistic Interaction designs the nine-component compliance framework that turns your
              regulatory obligation into category advantage — then trains your team to run it.
            </p>
            {/* V7 §4.1: Penalty exposure — the urgency signal */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-si-error/10 border border-si-error/20">
              <span className="text-si-error font-bold text-sm">$50M+</span>
              <span className="text-si-white-muted text-sm">maximum civil penalty per contravention — ACL s.224</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/our-approach"
                className="px-6 py-3 bg-si-teal text-si-bg-primary font-semibold rounded-lg
                           hover:bg-si-teal-light transition-colors focus:outline-none
                           focus:ring-2 focus:ring-si-teal focus:ring-offset-2 focus:ring-offset-si-bg-primary"
              >
                See the Nine-Component Framework
              </a>
              <a
                href="/get-started"
                className="px-6 py-3 border border-si-teal/50 text-si-teal font-semibold rounded-lg
                           hover:border-si-teal hover:bg-si-teal/10 transition-colors"
              >
                Start the Scoping Conversation
              </a>
            </div>
          </div>
          {/* V7 §5: 3D WebGPU supply chain visualization */}
          <div className="relative">
            <VisualizationWrapper />
          </div>
        </div>
      </section>

      {/* Section 2: ProofBar */}
      {/* V7 §11: Scroll-triggered stat counters */}
      <ProofBar />

      {/* Section 3: Nine-Component Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* V7 §2.1: Nine-component framework */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-si-white">
              The Nine-Component Compliance Architecture
            </h2>
            <p className="mt-4 text-si-white-muted max-w-2xl">
              ISO 37301:2021 aligned. Built for Australian retail. Each component addresses a specific
              compliance failure vector — all nine are required for a complete compliance architecture.
            </p>
          </div>
          {/* V7 §2: Show first 3 components on homepage, expandFirst on component 1 */}
          <ComponentAccordion
            components={complianceComponents.slice(0, 3)}
            showViewAll
            expandFirst
          />
        </div>
      </section>

      {/* Section 4: Compliance-as-Catalyst Panel */}
      {/* V7 §7: "Licence to go faster" messaging */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-si-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-si-white mb-6">
            Compliance is Your Licence to Go Faster
          </h2>
          <p className="text-si-white-muted max-w-3xl leading-relaxed mb-4">
            Synergistic Interaction&apos;s compliance architecture is not designed to slow retailers down.
            It is designed to remove the compliance-related obstacles that slow them down — while
            competitors without compliance infrastructure reach the same obstacles unprepared.
          </p>
          <p className="text-si-white-muted max-w-3xl leading-relaxed mb-8">
            Retailers with mature compliance infrastructure execute category strategies faster,
            negotiate from a position of documented liability strength, and face materially different
            outcomes when regulators visit.
          </p>
          <a
            href="/why-compliance-matters"
            className="inline-flex items-center gap-2 px-6 py-3 bg-si-teal text-si-bg-primary
                       font-semibold rounded-lg hover:bg-si-teal-light transition-colors"
          >
            Why Compliance Matters
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Section 5: Regulatory Intelligence Feed Preview */}
      {/* V7 §4: Live regulatory feed — 3 items, no filter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-si-white">Live Regulatory Intelligence</h2>
            <a
              href="/why-compliance-matters#regulatory-feed"
              className="text-si-teal hover:text-si-teal-light transition-colors text-sm font-medium"
            >
              View All Updates →
            </a>
          </div>
          <RegulatoryFeed maxItems={3} showFilter={false} />
        </div>
      </section>
    </>
  );
}
