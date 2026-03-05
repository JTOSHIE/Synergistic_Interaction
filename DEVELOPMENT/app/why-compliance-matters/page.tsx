// V7 §7 + §12: Why Compliance Matters — the most important page on the site
// V7 §12 non-negotiable: this page must outperform every other page
// $50M penalty equation + catalyst argument + regulatory feed + ISO 37301 explainer
import type { Metadata } from 'next';
import Link from 'next/link';
import RegulatoryFeed from '@/components/RegulatoryFeed';

export const metadata: Metadata = {
  title: 'Why Compliance Matters — $50M Penalty Exposure | Synergistic Interaction',
  description:
    'Under Australian Consumer Law, maximum civil penalties reach $50 million or more per contravention. Most retailers cannot describe their maximum penalty exposure. We can.',
  keywords: [
    'ACCC compliance',
    'Australian Consumer Law penalty',
    'product safety compliance',
    'ISO 37301 Australia',
    'retail compliance obligation',
    '$50 million penalty',
  ],
};

// V7 §4: Regulatory catalysts — five scenarios that trigger enforcement
const catalysts = [
  {
    title: 'A mandatory product recall',
    body: 'The ACCC issues a mandatory recall. Without a compliance architecture, the retailer cannot demonstrate they had a verification process. The enforcement question is not whether the product failed — it is whether the retailer took reasonable steps to prevent it.',
  },
  {
    title: 'A competitor enforcement action',
    body: 'A competitor in the same category receives an enforcement visit. Regulators do not limit enforcement to one retailer when a category-wide compliance problem exists. The question for every other retailer in that category is whether their compliance file is ready.',
  },
  {
    title: 'A product safety injury report',
    body: 'A consumer injury is reported to the ACCC. The investigation examines whether the retailer had a compliance verification process. A documented compliance file is the difference between a managed investigation and an enforcement action.',
  },
  {
    title: 'A new mandatory standard',
    body: 'A new mandatory standard is gazetted for a product category. Retailers without a monitoring architecture learn about it after it takes effect. Retailers with real-time compliance monitoring identify the change before stock arrives at the distribution centre.',
  },
  {
    title: 'A regulatory intelligence visit',
    body: 'The ACCC conducts a product safety audit of a category. The first document requested is the compliance file. Retailers who can produce a complete, current, organised compliance file face materially different outcomes than those who cannot.',
  },
];

export default function WhyComplianceMattersPage() {
  return (
    <>
      {/* Page header — $50M equation */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-si-white tracking-tight">
              The Compliance Obligation Is Not Optional
            </h1>
            <p className="mt-6 text-lg text-si-white-muted leading-relaxed max-w-3xl mx-auto">
              Under the Australian Consumer Law, the maximum civil penalty for a corporation in a single
              product safety contravention is $50 million or more. Most retailers cannot describe their
              maximum penalty exposure. We can.
            </p>
          </div>

          {/* $50M equation panel */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10">
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 items-center text-center">
              <div>
                <div className="text-4xl font-bold text-si-error mb-2">$50M+</div>
                <div className="text-sm text-si-white-muted">Maximum civil penalty per contravention</div>
                <div className="text-xs text-si-white-dim mt-1">Australian Consumer Law s.224</div>
              </div>
              <div className="hidden sm:flex items-center justify-center">
                <div className="text-3xl text-si-white-dim font-light">vs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-si-teal mb-2">1,736×</div>
                <div className="text-sm text-si-white-muted">Return on compliance investment</div>
                <div className="text-xs text-si-white-dim mt-1">Based on $21,600–$28,800 engagement investment</div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              {/* V7 §7.2: Approved copy */}
              <p className="text-si-white-muted leading-relaxed text-center">
                We calculate it, by category, before implementation begins — then reduce it systematically
                across all nine components. The compliance investment decision becomes arithmetic rather than abstract.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five enforcement catalysts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-si-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-si-white mb-2">
            What Triggers an Enforcement Action
          </h2>
          <p className="text-si-white-muted mb-10">
            Five scenarios that turn a theoretical compliance obligation into an active regulatory investigation.
          </p>
          <div className="space-y-4">
            {catalysts.map((catalyst, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-si-error/10 border border-si-error/30
                               flex items-center justify-center text-si-error font-bold text-xs"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-si-white font-semibold mb-2">{catalyst.title}</h3>
                    <p className="text-si-white-muted leading-relaxed text-sm">{catalyst.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO 37301 explainer */}
      <section id="iso-37301" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-si-gold/10 border border-si-gold/30 text-si-gold text-xs font-semibold uppercase tracking-wider mb-4">
                ISO 37301:2021
              </span>
              <h2 className="text-2xl font-bold text-si-white mb-4">
                The International Compliance Management Standard
              </h2>
              <p className="text-si-white-muted leading-relaxed mb-4">
                ISO 37301:2021 is the international standard for compliance management systems. It provides
                the structural framework that organisations use to build, implement, and continuously improve
                their compliance obligations — across all regulatory domains.
              </p>
              <p className="text-si-white-muted leading-relaxed mb-4">
                For Australian retailers, ISO 37301:2021 alignment means the compliance architecture maps
                to internationally recognised requirements. When a regulatory body reviews the compliance
                file, ISO 37301 alignment is a demonstrable capability signal — not a marketing claim.
              </p>
              <p className="text-si-white-muted leading-relaxed">
                Every component in the Synergistic Interaction nine-component framework maps to a specific
                ISO 37301:2021 clause. This creates a documented, auditable compliance management system
                from the first day of implementation.
              </p>
            </div>

            {/* ISO clause map */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-si-white uppercase tracking-wider mb-4">
                  Key ISO 37301 Clauses
                </h3>
                <ul className="space-y-3">
                  {[
                    { clause: '4', label: 'Context of the organisation' },
                    { clause: '4.1', label: 'Contextual understanding' },
                    { clause: '4.2', label: 'Interested parties' },
                    { clause: '6', label: 'Planning & risk assessment' },
                    { clause: '6.1', label: 'Risk identification' },
                    { clause: '7', label: 'Documented information' },
                    { clause: '8', label: 'Operational controls' },
                    { clause: '8.3', label: 'Compliance awareness & culture' },
                    { clause: '9', label: 'Performance evaluation' },
                    { clause: '9.2', label: 'Internal audit' },
                    { clause: '10', label: 'Improvement' },
                  ].map(({ clause, label }) => (
                    <li key={clause} className="flex items-center gap-3">
                      <span className="flex-shrink-0 inline-flex items-center px-1.5 py-0.5 rounded bg-si-gold/10 border border-si-gold/20 text-si-gold text-xs font-mono font-semibold">
                        §{clause}
                      </span>
                      <span className="text-sm text-si-white-muted">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live regulatory feed */}
      <section id="regulatory-feed" className="py-20 px-4 sm:px-6 lg:px-8 bg-si-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-si-white mb-2">
              Live Regulatory Intelligence
            </h2>
            <p className="text-si-white-muted">
              Australian regulatory updates relevant to retail product safety and compliance — sourced
              daily from ACCC, CAV, TGA, and ESV feeds.
            </p>
          </div>
          <RegulatoryFeed maxItems={8} showFilter limit={8} />
        </div>
      </section>

      {/* Compliance-as-catalyst argument — V7 §7 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-si-white mb-6">
            Compliance Is Your Licence to Go Faster
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-si-error font-semibold mb-3">Without compliance architecture</h3>
              <ul className="space-y-2">
                {[
                  'Range decisions delayed by ad hoc compliance checks',
                  'Supplier negotiations without documented liability framework',
                  'Enforcement visits expose undocumented compliance gaps',
                  'New mandatory standards discovered after stock arrives',
                  'Each new category requires compliance from scratch',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-si-white-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-si-error flex-shrink-0 mt-1.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-si-teal/20 rounded-xl p-6">
              <h3 className="text-si-teal font-semibold mb-3">With compliance architecture</h3>
              <ul className="space-y-2">
                {[
                  'Purchase orders issued with compliance pre-cleared',
                  'Supplier negotiations from a documented liability position',
                  'Audit-ready compliance files on the day of enforcement visit',
                  'Real-time monitoring surfaces regulatory changes before impact',
                  'Nine-component framework scales across every new category',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-si-white-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-si-teal flex-shrink-0 mt-1.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-si-bg-secondary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-si-white mb-4">
            Calculate Your Penalty Exposure
          </h2>
          <p className="text-si-white-muted mb-8 leading-relaxed">
            The first step is understanding the specific compliance obligations in your category portfolio.
            The scoping conversation is free, structured, and produces a documented output.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-si-teal text-si-bg-primary
                         font-semibold rounded-lg hover:bg-si-teal-light transition-colors
                         focus:outline-none focus:ring-2 focus:ring-si-teal focus:ring-offset-2 focus:ring-offset-si-bg-secondary"
            >
              Start the Scoping Conversation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/our-approach"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-si-white
                         font-semibold rounded-lg hover:border-white/40 hover:bg-white/5 transition-colors"
            >
              See Our Approach
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
