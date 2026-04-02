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
