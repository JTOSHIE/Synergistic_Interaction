import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryGridVisual from '@/components/CategoryGridVisual';

export const metadata: Metadata = {
  title: 'Category Expertise — Synergistic Interaction',
  description:
    'Category management expertise across hardware, electrical, gardening, cleaning, furniture, barbecue, baby products, personal care, children\'s products, beverages, and more.',
};

const categories = [
  {
    number: '01',
    name: 'Hardware and Building Products',
    summary:
      'Thirteen years managing hardware at scale across Australia and New Zealand built deep familiarity with the full product spectrum — tools, power equipment, insulation, skylights, decking, storage, and building accessories. Store-specific ranging, supplier coordination across 20+ product lines, and in-store execution across 330+ locations.',
    compliance: 'RCM compliance for power tools and electrical equipment. SDS documentation for chemical products.',
  },
  {
    number: '02',
    name: 'Electrical, Batteries, and Power',
    summary:
      'A compliance-intensive category requiring EESS registration and RCM documentation for every electrical article. Experience across power tools, small appliances, lighting, and batteries — including the compliance documentation architecture that differentiates retailers operating confidently in this space from those carrying unmanaged risk.',
    compliance: 'EESS registration mandatory. RCM mark required. NATA-accredited test reports for applicable product types.',
  },
  {
    number: '03',
    name: 'Gardening, Outdoor, and Seasonal',
    summary:
      'The full gardening category extends from seasonal plants and potting mix through to garden chemicals, worm farms, outdoor accessories, and heating products. A strongly seasonal category requiring demographic-sensitive ranging and supplier coordination timed to planting and entertaining seasons.',
    compliance: 'APVMA registration for pesticides and herbicides. Safety Data Sheets and correct labelling for chemicals.',
  },
  {
    number: '04',
    name: 'Cleaning, Household, and Storage',
    summary:
      'Cleaning, mops and buckets, storage containers, and household chemicals managed as a unified home maintenance category. High-frequency, high-loyalty when the range is right and in-stock position is maintained consistently. GMROI analysis applied to identify which products are earning their shelf space.',
    compliance: 'GHS chemical labelling mandatory. Safety Data Sheets required. Dangerous Goods classification for transport and storage.',
  },
  {
    number: '05',
    name: 'Furniture, Homewares, and Flat-Pack',
    summary:
      'Category management experience that extends into physical implementation — new store setups, flat-pack cabinet installation, and store refit coordination. Range curation, planogram design, and the fitout capability to execute at scale under real operational conditions.',
    compliance: 'Mandatory safety standards for children\'s furniture. RCM compliance for electrical homewares. Flammability requirements for upholstered furniture.',
  },
  {
    number: '06',
    name: 'Personal Care and Cosmetics',
    summary:
      'A category where store-specific demographic profiling determines range architecture. The personal care customer in a multicultural urban store and a regional suburban store have materially different requirements. Experience with TGA-listed therapeutic goods alongside standard cosmetic ranging.',
    compliance: 'TGA listing required for products making therapeutic claims. Sunscreen SPF 15+ classified as therapeutic goods.',
  },
  {
    number: '07',
    name: 'Barbecue, Pizza Ovens, and Outdoor Fuel',
    summary:
      'The outdoor cooking category spans barbecues, pizza ovens, and a full fuel sub-category — eco logs, firelighters, fire starters, and kindling. Each segment carries different supplier relationships, compliance requirements, and ranging considerations. Gas appliance compliance is the primary market entry consideration for international suppliers.',
    compliance: 'AS/NZS 5601 compliance for gas appliances. RCM compliance for electrical outdoor cooking products.',
  },
  {
    number: '08',
    name: 'Baby Products',
    summary:
      'A category combining strong consumer brand loyalty with Australia and New Zealand\'s most demanding mandatory safety standards. Well-established distributor networks across all major sub-categories provide both compliance buffer and supply chain reliability. In-stock consistency is the primary retention driver.',
    compliance: 'Consumer Goods Infant Sleep Products Safety Standard 2024 — mandatory. Specific standards apply across all sub-categories.',
  },
  {
    number: '09',
    name: "Children's Products and Textiles",
    summary:
      'Children\'s clothing, toys, and accessories each operate under distinct compliance frameworks. The mandatory standards for children\'s products are among the most demanding in Australian retail. Compliance documentation requirements are intensive — suppliers who cannot provide current accredited test reports are not suitable for this category.',
    compliance: 'Nightwear flammability requirements mandatory. Toy safety standards applicable. Textile content and size labelling required.',
  },
  {
    number: '10',
    name: 'Water, Beverages, and Consumables',
    summary:
      'High-frequency, high-repurchase categories where in-stock consistency drives retention and accurate performance measurement. FSANZ Food Standards Code compliance applies to all food and beverage products, including specific requirements for health claims, ingredient labelling, and country of origin.',
    compliance: 'FSANZ Food Standards Code compliance required. Health and nutrition claims regulated. Country of origin labelling mandatory.',
  },
];

export default function CategoryExpertisePage() {
  return (
    <main>
      {/* Header */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-6">
            Ten Categories · Australia · New Zealand · Global Markets
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight">
            Category Management Across the{' '}
            <span className="text-si-teal">Full Product Spectrum</span>
          </h1>
          <p className="text-lg text-si-white-muted max-w-2xl leading-relaxed">
            Twenty-five years of global retail experience across hardware, electrical, garden, barbecue,
            personal care, cleaning, baby products, and more — applied to every engagement regardless of scale.
          </p>
        </div>
      </section>

      {/* Category grid visual */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-si-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <CategoryGridVisual />
        </div>
      </section>

      {/* Jump navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {categories.map((cat) => (
              <a
                key={cat.number}
                href={`#cat-${cat.number}`}
                className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-si-teal/30 hover:bg-si-teal/5 transition-all text-center group"
              >
                <p className="text-xs font-mono text-si-teal mb-1">{cat.number}</p>
                <p className="text-si-white text-xs font-medium leading-tight group-hover:text-si-teal transition-colors">
                  {cat.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category listings */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {categories.map((cat, i) => (
              <div
                key={cat.number}
                id={`cat-${cat.number}`}
                className={`py-8 scroll-mt-20 ${i < categories.length - 1 ? 'border-b border-white/5' : ''}`}
              >
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  {/* Number + name */}
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-si-teal/25 font-mono flex-shrink-0 w-10">
                        {cat.number}
                      </span>
                      <h2 className="text-si-white font-semibold leading-snug">{cat.name}</h2>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="md:col-span-5">
                    <p className="text-si-white-muted text-sm leading-relaxed">{cat.summary}</p>
                  </div>

                  {/* Compliance note */}
                  <div className="md:col-span-3">
                    <div className="p-3 rounded-lg border border-si-teal/15 bg-si-teal/5">
                      <p className="text-si-teal text-xs font-semibold uppercase tracking-wide mb-1.5">
                        Compliance
                      </p>
                      <p className="text-si-white-dim text-xs leading-relaxed">{cat.compliance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Setup and Fitout */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-si-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-si-teal/25 font-mono flex-shrink-0 w-10">+</span>
                <h2 className="text-si-white font-semibold">Store Setup and Fitout</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-si-white-muted text-sm leading-relaxed">
                Approximately 25% of the G-Force Australia and New Zealand operation covered new store setups,
                store refits, and fitout coordination — physically representing every supplier in the range during
                a new store setup, to planogram specification, with a live go-live deadline. The assembly division
                also covered flat-pack cabinet and melamine storage installation across the network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-si-white mb-4">Your category is here</h2>
          <p className="text-si-white-muted mb-8 text-sm">
            The first conversation maps the specific requirements, supplier landscape,
            and commercial opportunity for your situation.
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
