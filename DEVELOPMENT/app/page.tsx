// V7 §11: Home page — four sections per content map
// V7 §7: Compliance-as-catalyst messaging integrated throughout
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ProofBar from '@/components/ProofBar';
import ComponentAccordion from '@/components/ComponentAccordion';
import RegulatoryFeed from '@/components/RegulatoryFeed';
import { complianceComponents } from '@/lib/compliance-data';

// V7 §5: WebGPU visualization — dynamic import, no SSR
const ComplianceVisualization = dynamic(
  () => import('@/components/ComplianceVisualization'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-video bg-si-bg-secondary rounded-2xl animate-pulse" />
    ),
  }
);

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
            {/* V7 §8: Differentiation headline — replace with actual §8 copy */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-si-white leading-tight">
              {/* [REPLACE: Extract headline from §8 of brief] */}
              Category Management Built on{' '}
              <span className="text-si-teal">Compliance Infrastructure</span>
            </h1>
            {/* V7 §7: Catalyst sub-headline — replace with actual §7 copy */}
            <p className="mt-6 text-lg text-si-white-muted leading-relaxed max-w-xl">
              {/* [REPLACE: Extract sub-headline from §7 of brief] */}
              Compliance isn&apos;t a constraint on category performance. It&apos;s the foundation that gives you licence to go faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/our-approach"
                className="px-6 py-3 bg-si-teal text-si-bg-primary font-semibold rounded-lg
                           hover:bg-si-teal-light transition-colors focus:outline-none
                           focus:ring-2 focus:ring-si-teal focus:ring-offset-2 focus:ring-offset-si-bg-primary"
              >
                See Our Approach
              </a>
              <a
                href="/get-started"
                className="px-6 py-3 border border-si-teal/50 text-si-teal font-semibold rounded-lg
                           hover:border-si-teal hover:bg-si-teal/10 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* V7 §5: 3D WebGPU visualization */}
          <div className="relative">
            <ComplianceVisualization />
          </div>
        </div>
      </section>

      {/* Section 2: ProofBar */}
      {/* V7 §11: Scroll-triggered stat counters */}
      <ProofBar />

      {/* Section 3: Nine-Component Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* V7 §2: Nine-component framework intro — replace with actual §2 copy */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-si-white">
              {/* [REPLACE: Extract from §2 of brief] */}
              The Nine-Component Compliance Framework
            </h2>
            <p className="mt-4 text-si-white-muted max-w-2xl mx-auto">
              ISO 37301:2021 aligned. Built for Australian retail. Designed to turn compliance obligation into category advantage.
            </p>
          </div>
          {/* V7 §2: Show first 3 components on homepage */}
          <ComponentAccordion
            components={complianceComponents.slice(0, 3)}
            showViewAll
          />
        </div>
      </section>

      {/* Section 4: Compliance-as-Catalyst Panel */}
      {/* V7 §7: "Licence to go faster" messaging */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-si-bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-si-white">
            {/* [REPLACE: Extract headline from §7 of brief] */}
            Compliance is Your Licence to Go Faster
          </h2>
          <p className="mt-4 text-si-white-muted max-w-3xl mx-auto">
            {/* [REPLACE: Extract growth enablement arguments from §7 of brief] */}
            Organisations with mature compliance infrastructure execute category strategies faster,
            negotiate from a position of strength, and avoid the costly interventions that set competitors back.
          </p>
          <a
            href="/why-compliance-matters"
            className="mt-8 inline-block px-6 py-3 bg-si-teal text-si-bg-primary
                       font-semibold rounded-lg hover:bg-si-teal-light transition-colors"
          >
            Why Compliance Matters
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
