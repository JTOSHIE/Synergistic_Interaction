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
    overview:
      'Hardware and building products spans a broader product footprint than the name implies — tools, power equipment, insulation, skylights and roof vents, decking and timber, storage solutions, and the building accessories that make up a significant portion of any hardware category. Managing hardware at scale across Australia and New Zealand required store-specific demographic intelligence: a metropolitan renovation-focused store and a regional trade-focused store require different range architecture from the same category.',
    commercialOpportunity:
      'Hardware is a high-frequency destination category. Customers who come for one item are customers for adjacent categories. Range architecture that reflects the local trade and DIY demographic split, supported by off-location seasonal displays, bulk stack hero products, and end-cap promotional positions, drives significantly higher category revenue than a generic national planogram.',
    supplierLandscape:
      'Global brands with established Australia and New Zealand distribution. Direct supplier experience across paint, tools, storage, lighting, insulation, skylights, decking, and building accessories developed over 13 years across the network. Optimal hardware ranges almost always draw from multiple suppliers — the strongest hardware category is never a single-supplier solution.',
    complianceNote:
      'Power tools and electrical equipment require RCM compliance. Insulation products require compliance with applicable building codes. Chemical products require SDS documentation and labelling compliance under Dangerous Goods requirements.',
  },
  {
    number: '02',
    name: 'Electrical, Batteries, and Power',
    overview:
      'A category spanning power tools, small appliances, lighting, and batteries — all requiring specific compliance documentation. Batteries as a standalone sub-category represent a significant opportunity that is frequently underserved. A customer who finds their full battery format range — AA, AAA, C, D, 9V — reliably in stock becomes a repeat destination buyer in a category that otherwise goes to the supermarket.',
    commercialOpportunity:
      'Off-location battery placement near products that use them drives impulse purchase reliably. Power tools and small appliances have strong attachment to renovation activity and seasonal gifting. The compliance documentation requirement creates a market differentiation — retailers with clean EESS and RCM records can range confidently where others face constraints.',
    supplierLandscape:
      'Strong Australia and New Zealand distributor networks for global electrical brands. EESS registration and RCM compliance is a pre-condition for any distributor engagement. Electrical ranges draw from multiple suppliers — tools, accessories, safety equipment, and consumables each have optimal supply relationships.',
    complianceNote:
      'EESS registration mandatory for all electrical articles. RCM mark required. Third-party test reports from NATA-accredited laboratories required for applicable product types. Button battery products carry specific mandatory child-safety requirements.',
  },
  {
    number: '03',
    name: 'Gardening, Outdoor, and Seasonal',
    overview:
      'The full gardening range extends well beyond seasonal plants and potting mix. Garden chemicals and pesticides, worm farms and garden accessories, outdoor furniture and entertaining, fire pit and heating products, and the consumable items that bring customers back repeatedly across the growing season each require separate supplier relationships and compliance understanding.',
    commercialOpportunity:
      'The customer who buys a worm farm is a customer for worm castings, potting mix, garden tools, and watering equipment. Adjacencies that support the gardening customer\'s full journey through the category outperform a shelf organised by product type. Seasonal off-location activation — spring planting walls, summer entertaining displays — drives category revenue significantly above main-shelf performance.',
    supplierLandscape:
      'Mix of national distributors and regional suppliers. Local sourcing achievable above 40% in most sub-categories. Optimal garden ranges require multiple supplier relationships to cover the full category correctly.',
    complianceNote:
      'Pesticides and herbicides require APVMA registration. Chemical products require Safety Data Sheets and correct labelling. Electrical garden products require RCM compliance.',
  },
  {
    number: '04',
    name: 'Cleaning, Household, and Storage',
    overview:
      'Cleaning, mops and buckets, storage containers, and household chemicals managed as a unified home maintenance destination reflect how the customer actually shops this area. In-stock consistency is the primary retention driver here — a customer who cannot find their regular product twice will go elsewhere permanently and is unlikely to return.',
    commercialOpportunity:
      'Range rationalization — cutting underperforming SKUs through GMROI analysis and deepening inventory on proven performers — reliably improves both sell-through and in-stock consistency simultaneously. Storage containers benefit strongly from seasonal display activation, particularly approaching winter and at the start of the year.',
    supplierLandscape:
      'Major Australia and New Zealand distributors for branded cleaning. Australian manufacturers accessible for private label and local brand ranging. Storage draws from multiple suppliers across format and material types.',
    complianceNote:
      'GHS chemical labelling mandatory. Safety Data Sheets required for all hazardous substances. Dangerous Goods classification affects transport and storage requirements.',
  },
  {
    number: '05',
    name: 'Furniture, Homewares, and Flat-Pack',
    overview:
      'Furniture and homewares includes not just ranging and planogram work but the physical implementation capability — new store setups, flat-pack cabinet installation, melamine storage assembly, and store refit coordination. This dimension of category management expertise goes beyond selecting the range into executing it at scale under real operational conditions.',
    commercialOpportunity:
      'Range curation outperforms broad ranging in furniture. Hero pieces positioned in high-traffic off-location displays drive category awareness and destination shopping. Gifting season proximity placement — near checkout during key periods — lifts category revenue above what the main aisle achieves alone.',
    supplierLandscape:
      'Mix of Australian importers and direct-import suppliers. The distributor network for furniture is thinner than most categories — importer-of-record verification and compliance documentation are more consequential here.',
    complianceNote:
      'Children\'s furniture subject to mandatory safety standards. Electrical homewares require RCM compliance. Upholstered furniture subject to flammability requirements. Structural furniture should carry load rating documentation.',
  },
  {
    number: '06',
    name: 'Personal Care and Cosmetics',
    overview:
      'A category where demographic profiling determines range architecture more than almost any other factor. The personal care customer in a high-density multicultural urban area and the customer in a regional suburban store have genuinely different requirements. Getting this right requires store-specific demographic intelligence, not a national average planogram applied uniformly.',
    commercialOpportunity:
      'Consistent year-round demand with seasonal peaks in sun care and gifting. Australian-made products carry genuine consumer confidence in skincare sub-categories. Proximity to complementary categories — baby care, health accessories — drives basket attachment.',
    supplierLandscape:
      'Strong Australian manufacturing base for skincare. TGA-listed products available through established pharmaceutical distributors.',
    complianceNote:
      'Products making therapeutic claims require TGA listing. Sunscreen SPF 15+ classified as therapeutic goods. Ingredient labelling compliance required for cosmetic products.',
  },
  {
    number: '07',
    name: 'Barbecue, Pizza Ovens, and Outdoor Fuel',
    overview:
      'The outdoor cooking category in Australia and New Zealand is more than barbecues. Pizza ovens, outdoor entertaining accessories, and a full fuel sub-category — eco logs, firelighters, fire starters, matches, and kindling — represent significant repeat-purchase revenue that many retailers treat as an afterthought. The customer who buys a barbecue or pizza oven is a customer for fuel, accessories, covers, and tools for the life of the product.',
    commercialOpportunity:
      'Off-location activation during peak season — a full outdoor cooking display in a high-traffic entrance position — significantly amplifies sell-through across the whole category. Eco logs and fuel products benefit from seasonal bulk stack displays. Loss leaders in the entry barbecue segment can initiate a multi-year accessory and fuel purchasing relationship.',
    supplierLandscape:
      'Mix of global brands with Australia and New Zealand distribution and local manufacturers. Gas appliance compliance is the primary market entry requirement for international suppliers. Fuel and consumable products require separate supplier relationships from the appliances.',
    complianceNote:
      'Gas appliances require compliance with AS/NZS 5601 and must be certified before supply. RCM compliance required for electrical outdoor cooking products.',
  },
  {
    number: '08',
    name: 'Baby Products',
    overview:
      'A category with strong brand loyalty, specific mandatory safety requirements, and well-established Australia and New Zealand distributor networks across all major sub-categories. In-stock consistency in baby products is non-negotiable — parents who find their preferred product reliably available return automatically. Two out-of-stock events in a row is typically enough to permanently redirect their purchasing to a competitor.',
    commercialOpportunity:
      'Value-oriented retail channels are attracting parents responding to cost-of-living pressures who are unwilling to compromise on product quality. Retailers who provide recognised, locally-distributed brands at competitive pricing with consistent in-stock position build category loyalty that is difficult to displace.',
    supplierLandscape:
      'Established Australia and New Zealand distributor networks across nappies and wipes, feeding accessories, baby skincare, health and safety products, and soothers. Optimal baby ranges draw from multiple supplier relationships — no single supplier covers every sub-category with equal strength.',
    complianceNote:
      'Consumer Goods Infant Sleep Products Safety Standard 2024 — mandatory. Specific mandatory standards apply across all baby product sub-categories. Third-party test reports required for higher-risk product types.',
  },
  {
    number: '09',
    name: "Children's Products and Textiles",
    overview:
      'A category spanning children\'s clothing, toys, and accessories — each with its own compliance framework. The mandatory standards framework for children\'s products is demanding, and the consequences of sourcing non-compliant products are significant. Compliance documentation requirements here are among the most intensive on this list.',
    commercialOpportunity:
      'Seasonal transitions — back to school, end of summer, winter layering — drive concentrated purchase activity. Off-location seasonal displays at high-traffic positions during peak transition periods significantly increase sell-through. Toy and game sub-categories benefit from gifting season activation.',
    supplierLandscape:
      'Mix of Australian importers and direct-import suppliers. Suppliers who cannot provide current, accredited test reports are not suitable for this category.',
    complianceNote:
      'Children\'s nightwear flammability requirements mandatory. Toy safety standards applicable across the range. Textile content labelling and size labelling required.',
  },
  {
    number: '10',
    name: 'Water, Beverages, and Consumables',
    overview:
      'High-frequency, high-repurchase categories where in-stock consistency is the primary retention driver. A customer who finds their preferred product reliably in stock returns automatically. GMROI in beverages is highly sensitive to in-stock position — an out-of-stock product produces a distorted return reading and obscures the true category potential.',
    commercialOpportunity:
      'The adjacency opportunity — positioning beverages near snack, personal care, or cleaning based on the actual shopper flow in the specific store — is reliably overlooked and reliably profitable. Functional water and convenience beverages have a strong growth trajectory in value-oriented retail channels.',
    supplierLandscape:
      'Australian water distributors and beverage manufacturers accessible for local sourcing. Imported beverages require importer-of-record identification and FSANZ label compliance.',
    complianceNote:
      'FSANZ Food Standards Code compliance required for all food and beverage products. Health and nutrition claims regulated. Country of origin labelling mandatory.',
  },
];

export default function CategoryExpertisePage() {
  return (
    <main>
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-6">
            Ten Categories · Retail and Supplier Perspectives
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight">
            Category Management Across the{' '}
            <span className="text-si-teal">Full Product Spectrum</span>
          </h1>
          <p className="text-xl text-si-white-muted max-w-2xl leading-relaxed">
            The expertise built across 13 years managing the full product range across Australia and New
            Zealand — and 25 years across global retail markets — spans a broader product footprint than a
            standard category list conveys. Right product, right location, in-stock all day every day.
          </p>
        </div>
      </section>

      {/* Category grid visual */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-si-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <CategoryGridVisual />
        </div>
      </section>

      {/* Jump nav */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {categories.map((cat) => (
              <a
                key={cat.number}
                href={`#cat-${cat.number}`}
                className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-si-teal/30 hover:bg-white/8 transition-all text-center"
              >
                <p className="text-xs font-mono text-si-teal mb-1">{cat.number}</p>
                <p className="text-si-white text-xs font-medium leading-tight">{cat.name}</p>
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
          className="py-14 px-4 sm:px-6 lg:px-8 border-b border-white/5 scroll-mt-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <span className="text-4xl font-bold text-si-teal/20 font-mono flex-shrink-0">{cat.number}</span>
              <div>
                <h2 className="text-2xl font-bold text-si-white mb-2">{cat.name}</h2>
                <p className="text-si-white-muted text-sm leading-relaxed">{cat.overview}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl border border-white/10 bg-white/5">
                <p className="text-si-white text-xs font-semibold uppercase tracking-wide mb-3">Commercial Opportunity</p>
                <p className="text-si-white-muted text-xs leading-relaxed">{cat.commercialOpportunity}</p>
              </div>
              <div className="p-5 rounded-xl border border-white/10 bg-white/5">
                <p className="text-si-white text-xs font-semibold uppercase tracking-wide mb-3">Supplier Landscape</p>
                <p className="text-si-white-muted text-xs leading-relaxed">{cat.supplierLandscape}</p>
              </div>
              <div className="p-5 rounded-xl border border-si-teal/20 bg-si-teal/5">
                <p className="text-si-teal text-xs font-semibold uppercase tracking-wide mb-3">Compliance Notes</p>
                <p className="text-si-white-muted text-xs leading-relaxed">{cat.complianceNote}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Assembly and fitout */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-si-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <span className="text-4xl font-bold text-si-teal/20 font-mono flex-shrink-0">+</span>
            <div>
              <h2 className="text-2xl font-bold text-si-white mb-4">Store Setup and Fitout Experience</h2>
              <p className="text-si-white-muted text-sm leading-relaxed max-w-2xl">
                Approximately 25% of the G-Force Australia and New Zealand operation was dedicated to new store
                setups, store refits, and fitout coordination across the hardware retail network. This meant
                physically representing every supplier in the range during a new store setup — assembling,
                positioning, and merchandising every product category simultaneously, to planogram specification,
                in a live construction environment with a go-live deadline. The assembly division also covered
                flat-pack cabinet and melamine storage installation across the network. This experience — understanding
                what category implementation looks like at scale under real operational pressure — informs every
                engagement Synergistic Interaction takes on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-si-white mb-4">Your category is on this list</h2>
          <p className="text-si-white-muted mb-8 text-sm">
            The first conversation identifies the compliance requirements, the supplier landscape, and the
            commercial opportunity specific to your situation.
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
