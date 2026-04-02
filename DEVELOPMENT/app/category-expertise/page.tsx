import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Category Expertise — Synergistic Interaction',
  description:
    "Category management expertise across ten product categories. Baby products, hardware, gardening, barbecue, electrical, personal care, cleaning, children's textiles, beverages, and homewares.",
};

const categories = [
  {
    number: '01',
    name: 'Baby Products',
    pilot: true,
    overview:
      "The highest compliance complexity category in Australian retail. Mandatory safety standards covering infant sleep products, button battery safety, and children's product requirements create an obligation landscape that requires specific architecture before any product is ranged.",
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
      "Global brands with established ANZ distribution. Supplier relationships across paint, tools, storage, lighting, and seasonal hardware developed over a 13-year operational period in Australia's largest hardware retail network.",
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
      "A category with specific mandatory flammability and size labelling requirements under Australian Consumer Law. The children's apparel category requires age-appropriate sizing standards and textile content labelling compliance.",
    commercialOpportunity:
      "Value-oriented children's clothing has strong demand in demographics served by discount and variety retailers. The category benefits from seasonal transitions and back-to-school activation.",
    supplierLandscape:
      'Mix of Australian importers representing global brands and direct-import suppliers. Australian distributor arrangements provide compliance buffer for the mandatory standards framework.',
    complianceNote:
      "Consumer Goods (Children's Nightwear and Limited Daywear) Safety Standard — flammability requirements mandatory. Textile content labelling required under ACL. Size labelling per AS/NZS 1182.",
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
      "Children's furniture subject to mandatory safety standards. Electrical homewares require RCM compliance. Upholstered furniture subject to flammability requirements. Structural furniture should carry load rating documentation.",
  },
];

export default function CategoryExpertisePage() {
  return (
    <main>
      {/* Header */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-6">
            Ten Categories · Retail &amp; Supplier Perspectives
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
                className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-si-teal/30 hover:bg-white/[0.08] transition-all text-center"
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
