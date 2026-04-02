import type { Metadata } from 'next';
import Link from 'next/link';
import AboutVisual from '@/components/AboutVisual';

export const metadata: Metadata = {
  title: 'About — Synergistic Interaction',
  description:
    'Twenty-five years across four international retail markets — USA, UK, Australia, and New Zealand. In-field execution across ten product categories.',
};

const timeline = [
  {
    period: '2001 – 2006',
    market: 'United States & International',
    headline: 'Digital Transformation of Category Management',
    stats: [
      { value: '2,800+', label: 'Stores managed, USA tri-state area' },
      { value: '3,500+', label: 'Stores in national dairy program' },
      { value: '4%', label: 'ADV uplift — independently validated' },
    ],
    paragraphs: [
      'The career foundation was built in the most demanding data-driven retail environment in the world: the United States tri-state area of New York, New Jersey, and Massachusetts. Beginning in January 2001, this period progressed from key account management through to global systems development — a trajectory reflecting an unusual combination of front-line commercial capability and deep technical systems thinking.',
      'At a time when category management was a paper-based, manually processed discipline, a world-first real-time web-based category management system was designed and built. Paper-based information collection was replaced with live field data entry. Manual planogramming was replaced with store-specific digital planogram generation. Static compliance checking became live exception-based auditing. The system was deployed across more than 2,800 stores — managing the world\'s largest retailer, major national pharmacy chains, and supermarket groups across the tri-state area.',
      'The system\'s effectiveness was so demonstrable it was adopted by the American Dairy Association and Dairy Council to manage the dairy category across more than 3,500 retail stores nationally. Cornell University independently evaluated the outcomes of programs using this systematic approach, publishing a finding of 4% average daily volume increase across 61 stores covering 85% of the market. Citation: Schmit, T.M., Kaiser, H.M. & Chung, C. (2004). Cornell University, Department of Applied Economics and Management. R.B. 2004-02.',
      'International work during this period extended to the United Kingdom — category management and merchandising strategy for the UK\'s two largest grocery retailers — and to Australia, covering planogramming and FMCG category management for Australia\'s largest supermarket chains. By the end of 2006, the foundation spanned four international retail markets across three continents.',
    ],
  },
  {
    period: '2007 – 2019',
    market: 'Australia & New Zealand',
    headline: 'Enterprise Category Management at Scale',
    stats: [
      { value: '330+', label: 'Stores across Australia and New Zealand' },
      { value: '2,000+', label: 'Product lines under active management' },
      { value: '13 yrs', label: 'First client retained — G-Force ANZ' },
    ],
    paragraphs: [
      'G-Force Category Solutions was co-founded to manage the category function for global suppliers within Australia\'s largest hardware retail network. From a single-supplier starting point, the business grew to simultaneously manage more than 330 retail locations across Australia and New Zealand — coordinating more than 2,000 product lines across 20 global suppliers, with more than 300 field representatives managed via a bespoke mobile application built specifically for the operation.',
      'The analytical capability went significantly beyond planogram design. Every store had its own demographic profile, its own trade area characteristics, and its own performance pattern. Custom Power BI analytics dashboards converted raw field data into store-specific, demographic-specific, and supplier-specific actionable insights. Range rationalization — identifying which products were genuinely earning their shelf space through GMROI analysis and which were underperforming — was a continuous process, not a quarterly event.',
      'One of the operating principles that underpinned every category managed across this period was in-stock, all day, every day. Without consistent in-stock position, true sales potential cannot be measured — and GMROI data becomes unreliable. Buffer stock strategy, forecasting accuracy, and replenishment cycle management were foundational to understanding what a category was actually capable of commercially.',
      'The defining metric of this period is the client retention record: the first client signed when the business launched in Australia and New Zealand remained a client for the full thirteen-year period. That single fact — verifiable and documented — is the most credible signal of sustained delivery that a category management consultancy can offer.',
    ],
  },
  {
    period: '2019 – Present',
    market: 'Australia',
    headline: 'Synergistic Interaction',
    stats: [
      { value: '10+', label: 'Product categories served' },
      { value: '4', label: 'International retail markets' },
      { value: '25+', label: 'Years of global retail experience' },
    ],
    paragraphs: [
      'The transition from co-leading a large Australia and New Zealand category management operation to independent strategic consulting brought the full depth of global retail experience to individual retail engagements. The same analytical discipline, supplier relationship network, and in-store execution capability developed across four international retail markets — applied to a single retailer\'s category with undivided focus.',
      'Synergistic Interaction works across more than ten product categories and serves both retailers building new categories and global suppliers seeking access to the Australian and New Zealand retail market. The methodology is documented, repeatable, and compliance-integrated at every stage. Relationships with distributors and suppliers across hardware, electrical, garden, barbecue, personal care, cleaning, baby products, children\'s products, furniture, and homewares are established and active.',
      'The objective in every engagement: the right products, sourced from the right suppliers, placed in the right locations for the specific demographic, in-stock all day every day, with the GMROI data to confirm performance at its true commercial potential.',
    ],
  },
];

const differentiators = [
  {
    title: 'Global Experience, Local Precision',
    body: 'Category management experience across four international retail markets — USA, UK, Australia, and New Zealand — applied to a single retailer\'s category with the rigour of managing 330+ stores simultaneously.',
  },
  {
    title: 'Experience Within Independently Validated Programs',
    body: 'The systematic category management approach reflects experience within programs independently evaluated by Cornell University, documenting a 4% average daily volume increase across 61 retail stores. Proven methodology, not theory.',
  },
  {
    title: 'Technology and Analytics as a Multiplier',
    body: 'Field data applications, Power BI dashboards, GMROI analysis, demographic profiling, and compliance-by-exception monitoring. Technology extends the impact of every engagement beyond the consultant\'s physical presence.',
  },
  {
    title: 'The Expert Conduit',
    body: 'Twenty-five years managing both the retail buying side and the supplier selling side creates a commercial perspective that neither party can access alone. Acting as conduit between supplier and retailer — facilitating the relationships and negotiations that produce optimal range outcomes.',
  },
  {
    title: 'In-Field, Not In a Presentation',
    body: 'The consultant is on-site at launch day. The planogram is installed correctly. The off-location displays are set. The staff are trained. The methodology is executed on the shelf.',
  },
  {
    title: 'Compliance Embedded, Not Adjacent',
    body: 'Compliance is not a separate workstream bolted onto category management. It is embedded in every product decision, every supplier selection, and every ranging choice from day one.',
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-6">
            25 Years · Global Retail Markets
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight">
            A Track Record Built Across{' '}
            <span className="text-si-teal">Global Retail Markets</span>
          </h1>
          <p className="text-xl text-si-white-muted max-w-2xl leading-relaxed">
            Twenty-five years of progressive category management experience across the USA, UK, Australia,
            and New Zealand. Deep analytical capability. In-field execution. Compliance integrated at every stage.
          </p>
        </div>
      </section>

      {/* Global footprint visual */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <AboutVisual />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto space-y-16">
          {timeline.map((act, i) => (
            <div key={i} className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-si-teal text-sm font-mono font-medium mb-1">{act.period}</p>
                <p className="text-si-white-dim text-xs mb-6">{act.market}</p>
                <div className="space-y-3">
                  {act.stats.map((s) => (
                    <div key={s.value} className="p-3 rounded-xl border border-white/10 bg-white/5">
                      <p className="text-2xl font-bold text-si-teal">{s.value}</p>
                      <p className="text-si-white-dim text-xs mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-si-white mb-4">{act.headline}</h2>
                {act.paragraphs.map((para, j) => (
                  <p key={j} className="text-si-white-muted leading-relaxed mb-4 text-sm">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-si-bg-secondary border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-si-white mb-3">What Makes the Difference</h2>
          <p className="text-si-white-muted mb-10 max-w-xl text-sm">
            Structural differences in how the work gets done — not positioning statements.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {differentiators.map((d) => (
              <div key={d.title} className="p-5 rounded-2xl border border-white/10 bg-white/5">
                <h3 className="text-si-white font-semibold mb-2 text-sm">{d.title}</h3>
                <p className="text-si-white-muted text-xs leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-si-white mb-4">See the methodology in action</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors">
              Our Services
            </Link>
            <Link href="/category-expertise" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-si-white rounded-xl hover:border-si-teal hover:text-si-teal transition-colors">
              Category Expertise
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
