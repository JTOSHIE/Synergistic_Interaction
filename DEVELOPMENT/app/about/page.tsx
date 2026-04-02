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
    body: "The systems, discipline, and supplier relationships built to manage 330+ stores simultaneously — applied to a single retailer with the rigour it deserves. Clients get a team's capability from a single engagement.",
  },
  {
    title: 'Cornell-Validated Methodology',
    body: 'A 4% ADV sales uplift is not a claim — it is an independently published, peer-reviewed academic finding. Clients are investing in a proven methodology, not an experiment.',
  },
  {
    title: 'Technology as a Multiplier',
    body: "Where other consultants deliver reports, Synergistic Interaction delivers systems: field data applications, Power BI dashboards, compliance-by-exception monitoring. Technology extends the impact of every engagement beyond the consultant's physical presence.",
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
            execution — from the world&apos;s most competitive retail environments to
            Australia&apos;s most demanding retail networks. Cornell-validated methodology.
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
