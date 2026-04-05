# SYNERGISTIC INTERACTION — SESSION 10: FULL CONTENT UPDATE
## All 15 changes from TTS review sessions 1–4
## Compaction-proof: CLAUDE.md created first, authorisations repeated throughout

---

## TASK 0 — CREATE CLAUDE.md (PERSISTENT STANDING INSTRUCTIONS)

This file survives context compaction. Claude Code reads it at session start and after any compaction event.

**File:** `~/Documents/Synergistic_Interaction/DEVELOPMENT/CLAUDE.md`

```markdown
# Synergistic Interaction — Claude Code Standing Instructions

## Pre-Authorised Actions (no confirmation required, ever)
- Overwrite ANY existing file without asking
- Create ANY new file without asking
- Run npm install for any package without asking
- Run vercel --prod without asking
- Run git add, git commit, git push without asking
- Fix TypeScript errors autonomously without asking
- Continue past any build warning without asking

## Project Context
- Framework: Next.js 15 App Router, React 19, TypeScript strict
- Styling: Tailwind CSS with si-teal, si-navy, si-bg tokens
- Live URL: https://synergistic-interaction.vercel.app
- GitHub: https://github.com/JTOSHIE/Synergistic_Interaction
- Working directory: ~/Documents/Synergistic_Interaction/DEVELOPMENT

## Non-Negotiable Content Rules
- Never mention Panda Mart anywhere in code or copy
- Never name specific retailers — describe by scale and market position
- Copyright year is 2025 (business established)
- G-Force is a currently operating business — do not imply closure or sale
- Cornell University framing: experience within programs independently validated, not ownership of research
- Four international retail markets: USA, UK, Australia, New Zealand
```

---

## ⚡ STANDING AUTHORISATION REMINDER (read after every compaction)
All file overwrites, installs, deployments, and commits are pre-authorised.
Do not ask for confirmation on anything. Execute every task without stopping.

---

## TASK 1 — UPDATE `components/Footer.tsx` — COPYRIGHT YEAR

Find the copyright line in Footer.tsx. Replace 2026 with 2025.

```bash
sed -i 's/© 2026 Synergistic/© 2025 Synergistic/g' components/Footer.tsx
```

Verify:
```bash
grep "©" components/Footer.tsx
```

Should show: `© 2025 Synergistic Interaction`

---

## TASK 2 — UPDATE `components/ProofBar.tsx` — STAT THREE

The third proof bar metric changes from "penalty exposure mitigated" to "annual portfolio value managed."

Open `components/ProofBar.tsx`. Find the stats array. The third stat (index 2) currently reads something like:

```typescript
{
  prefix: '$',
  value: 100,
  suffix: 'M+',
  label: 'Penalty exposure mitigated',
  sublabel: 'ACL s.224 — across client category portfolios',
```

Replace with:

```typescript
{
  prefix: '$',
  value: 100,
  suffix: 'M+',
  label: 'Annual portfolio value managed',
  sublabel: 'G-Force — peak Australia and New Zealand portfolio',
  decimals: 0,
  href: null,
},
```

---

## TASK 3 — UPDATE `app/page.tsx` — HOMEPAGE CREDENTIALS AND GLOBAL FRAMING

Open `app/page.tsx`. Make the following targeted changes:

**Change 1:** The badge label near the hero heading that reads `25 Years · Three Markets · Ten Categories` — update to:
```typescript
'25 Years · Global Retail Markets · Ten Categories'
```

**Change 2:** In the credentials array, find the card with `description: 'USA tri-state retail network'`. Update the full card to:

```typescript
{
  stat: '4',
  description: 'International retail markets',
  detail: 'USA · UK · Australia · New Zealand — across three continents',
},
```

**Change 3:** Find the credentials card with `description: 'American national dairy program'`. Update the `detail` field to:
```typescript
detail: 'Experience within programs independently validated by Cornell University research',
```

**Change 4:** In the `servicesSummary` array, find the New Market Entry card. Update its description to:
```typescript
description:
  'For international brands entering the ANZ retail market. Channel strategy, compliance preparation, range architecture, and retailer buyer engagement from an operator with experience across four international retail markets.',
```

**Change 5:** In the Cornell proof section, find the heading. Replace:
```typescript
'4% Average Daily Volume Uplift.{' '}<span className="text-si-teal">61 Stores. Cornell University.</span>'
```
With:
```typescript
'4% Average Daily Volume Uplift.{' '}<span className="text-si-teal">Cornell University Research.</span>'
```

**Change 6:** In the Cornell proof section, paragraph one. Replace:
```typescript
'The category management methodology used by Synergistic Interaction was independently evaluated by Cornell University researchers.'
```
With:
```typescript
'The category management programs Synergistic Interaction\'s principal worked within were independently evaluated by Cornell University researchers.'
```

**Change 7:** The final CTA section paragraph. Replace:
```typescript
'Whether you are a retailer launching a new category or a supplier seeking access to the Australian retail market'
```
With:
```typescript
'Whether you are a retailer launching a new category or a supplier seeking access to the Australian and New Zealand retail market'
```

---

## ⚡ AUTHORISATION REMINDER — continue without stopping, overwrite all files

---

## TASK 4 — FULLY REWRITE `app/about/page.tsx`

Replace the entire file content with the version below. This incorporates: G-Force professional framing, four international retail markets, Cornell reframing, GMROI reference, global language, and duplication reduction.

**File:** `DEVELOPMENT/app/about/page.tsx`

```typescript
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
```

---

## ⚡ AUTHORISATION REMINDER — keep executing, no stopping, no confirmation

---

## TASK 5 — FULLY REWRITE `app/category-expertise/page.tsx`

Replace the entire file with the expanded version below. Key changes: Hardware expanded to include insulation/skylights/decking, Barbecue includes pizza ovens and fuels, Gardening includes worm farms, Cleaning includes mops/buckets, Assembly section added, in-stock emphasis throughout.

**File:** `DEVELOPMENT/app/category-expertise/page.tsx`

```typescript
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
```

---

## ⚡ AUTHORISATION REMINDER — keep executing, overwrite all files, no stops

---

## TASK 6 — UPDATE `app/our-approach/page.tsx` — ADD GMROI SECTION

Open `app/our-approach/page.tsx`. After the ComponentAccordion section and before the "Why This Approach Is Different" section, insert the following new section. Find the comment or section that starts the competitive differentiation / why-different content and insert above it:

```typescript
{/* GMROI — Analytical Foundation */}
<section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-si-bg-secondary">
  <div className="max-w-4xl mx-auto">
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-4">
        Analytical Methodology
      </div>
      <h2 className="text-2xl font-bold text-si-white mb-4">
        GMROI — Measuring What the Category Actually Delivers
      </h2>
    </div>
    <div className="grid md:grid-cols-3 gap-5">
      {[
        {
          heading: 'What GMROI Measures',
          body: 'Gross Margin Return on Investment incorporates stock on hand, weeks of stock on hand, inventory turns, and gross margin generated into a single return measurement. For every dollar invested in category inventory, what gross margin is being returned? This is the metric that confirms whether the category architecture is working commercially.',
        },
        {
          heading: 'Why In-Stock Integrity Matters',
          body: 'GMROI is only accurate when the product is in a consistent in-stock position. An out-of-stock product produces a distorted reading — it appears to be a lower performer than it is, because you are measuring sales against inventory that was not available to sell. This is the analytical foundation of the in-stock all day every day principle.',
        },
        {
          heading: 'Range Rationalization',
          body: 'GMROI analysis surfaces the products consuming inventory investment without returning proportionate gross margin. Removing these and reallocating investment to higher-performing items is one of the most reliable routes to improving category profitability — without increasing the total range size or shelf space.',
        },
      ].map((item) => (
        <div key={item.heading} className="p-5 rounded-xl border border-white/10 bg-white/5">
          <p className="text-si-white text-sm font-semibold mb-3">{item.heading}</p>
          <p className="text-si-white-muted text-xs leading-relaxed">{item.body}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## TASK 7 — UPDATE `app/services/page.tsx` — ANZ AND GMROI REFERENCES

Make the following targeted replacements in `app/services/page.tsx`:

**Replace 1:** Any instance of `'three countries'` → `'four international retail markets'`

**Replace 2:** Any instance of `'Australia and New Zealand'` in service descriptions where it says "Australia and New Zealand market" — ensure New Zealand is included wherever Australia is mentioned as a market.

**Replace 3:** In Service 1 (Strategic Category Transformation), find the deliverables list and add after the existing items:
```typescript
'GMROI analysis framework — identifying which products are earning their shelf space and which are candidates for range rationalization.',
'Off-location display strategy — bulk stacks, side stacks, seasonal drops, and hero product positioning.',
```

**Replace 4:** In Service 3 (Retail Systems), find the deliverables list and update the Power BI line to read:
```typescript
'Power BI dashboard framework — OSA, GMROI, sell-through, margin, supplier fill rate, demographic performance.',
```

**Replace 5:** In Service 4 (Market Entry), first paragraph — update the opening line to:
```typescript
'The Australian and New Zealand retail market has specific structural characteristics that international suppliers regularly underestimate.'
```

---

## TASK 8 — UPDATE `app/get-started/page.tsx` — PHASE LABELS AND FAQ

**Change 1:** Find the Phase 0 item in the phases array. Update the `description` field to:
```typescript
description: 'Website established and live. The professional foundation is in place for the engagement conversation to begin.',
```

**Change 2:** Find FAQ question four answer. Replace the last sentence:
```typescript
'Non-compliance discovered during a regulator\'s inspection is not.'
```
With:
```typescript
'Non-compliance discovered during a regulator\'s visit is a fundamentally different situation — one the compliance assessment is specifically designed to prevent.'
```

---

## TASK 9 — UPDATE `app/why-compliance-matters/page.tsx` — GLOBAL FRAMING

Find any instance in why-compliance-matters that refers to "Australian retail market" in isolation where it should include New Zealand. Make this replacement:

Find:
```
'the Australian retail market'
```
Replace the first two instances with:
```
'the Australian and New Zealand retail market'
```

Leave the ACL/ACCC statutory references as "Australian Consumer Law" — that is the correct legal name and should not change.

---

## TASK 10 — ADD TRUST SIGNALS TO `app/get-started/page.tsx`

Find the investment framing note div near the submit button. After it, add:

```typescript
{/* Trust signals */}
<div className="flex flex-wrap gap-3 pt-2">
  {[
    { label: 'Professional Indemnity Insurance', icon: '✓' },
    { label: 'ABN Registered', icon: '✓' },
    { label: 'ISO 37301:2021 Aligned', icon: '✓' },
  ].map((signal) => (
    <div
      key={signal.label}
      className="flex items-center gap-1.5 text-xs text-si-white-dim border border-white/10 rounded-lg px-3 py-1.5"
    >
      <span className="text-si-teal text-xs">{signal.icon}</span>
      {signal.label}
    </div>
  ))}
</div>
```

Also add to the footer of get-started, after the investment framing note, a Cornell citation link:

```typescript
<p className="text-xs text-si-white-dim text-center mt-4">
  Category management methodology reflects experience within programs independently validated by Cornell University.{' '}
  <a
    href="https://ideas.repec.org/p/ags/cornwp/185581.html"
    target="_blank"
    rel="noopener noreferrer"
    className="text-si-teal hover:underline"
  >
    Schmit, Kaiser & Chung (2004), R.B. 2004-02
  </a>
</p>
```

---

## ⚡ AUTHORISATION REMINDER — final stretch, keep going, no stops

---

## TASK 11 — UPDATE `components/Footer.tsx` — ADD LINKEDIN AND TRUST SIGNALS

In the Footer component, find the bottom bar section with the copyright and disclaimer. Add after the copyright paragraph:

```typescript
<div className="flex flex-wrap items-center gap-4 mt-3">
  <a
    href="https://www.linkedin.com/in/joshuathompson"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs text-si-white-dim hover:text-si-teal transition-colors flex items-center gap-1.5"
    aria-label="Joshua Thompson on LinkedIn"
  >
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
    LinkedIn
  </a>
  <a
    href="https://www.abr.business.gov.au"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs text-si-white-dim hover:text-si-teal transition-colors"
  >
    ABN: [pending registration]
  </a>
</div>
```

---

## TASK 12 — BUILD CHECK

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
rm -rf .next
npm run build 2>&1
```

Fix any TypeScript errors immediately without asking. Common issues at this stage:
- Missing imports (add at top of file)
- `'use client'` missing on files using hooks — not needed on any of these (all server components)
- Escaped quote issues in template strings — use `&apos;` in JSX or escape with `\'`

Rebuild after each fix until the build passes with zero errors.

---

## TASK 13 — DEPLOY

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
vercel --prod
```

---

## TASK 14 — VERIFY

```bash
LIVE="https://synergistic-interaction.vercel.app"
for path in "" "/about" "/services" "/category-expertise" "/our-approach" "/why-compliance-matters" "/get-started"; do
  echo "$path: $(curl -s -o /dev/null -w '%{http_code}' $LIVE$path)"
done
```

All must return 200. If any return 500, check `vercel logs --prod` and fix.

---

## TASK 15 — COMMIT AND PUSH

```bash
cd ~/Documents/Synergistic_Interaction
git add -A
git commit -m "Session 10: Full content update from TTS review sessions 1-4

CONTENT CHANGES:
- Copyright 2025 throughout
- Proof bar stat 3: annual portfolio value (not penalty exposure)
- Four international retail markets: USA, UK, Australia, New Zealand
- Global retail markets framing throughout (not three countries/markets)
- Cornell: experience within independently validated programs (not owned methodology)
- G-Force: professional career chapter framing, currently operating business
- About page: full rewrite with timeline, GMROI reference, global framing
- Category expertise: expanded categories (insulation, skylights, pizza ovens, fuels, worm farms, mops/buckets)
- Assembly and fitout capability section added
- GMROI analytical methodology section added to Our Approach
- Off-location display strategy added to Services deliverables
- Multiple supplier sourcing nuance added
- Trust signals added to Get Started and Footer
- Cornell citation with working link added
- LinkedIn link in footer
- Duplication reduced across all pages"

git push origin main
```

---

## TASK 16 — PRINT COMPLETION REPORT

```
═══════════════════════════════════════════════════════════
SYNERGISTIC INTERACTION — SESSION 10 COMPLETE
═══════════════════════════════════════════════════════════

CLAUDE.md created: [ yes ]

CONTENT UPDATES:
  Copyright 2025:                    [ done ]
  Proof bar stat 3 updated:          [ done ]
  Four international markets:        [ done ]
  Global retail markets framing:     [ done ]
  Cornell reframing:                 [ done ]
  G-Force professional framing:      [ done ]
  About page rewritten:              [ done ]
  Category expertise expanded:       [ done ]
  Assembly section added:            [ done ]
  GMROI section added:               [ done ]
  Off-location strategy added:       [ done ]
  Trust signals added:               [ done ]
  Duplication reduced:               [ done ]

LIVE: https://synergistic-interaction.vercel.app
All pages 200:    [ yes / no ]
Build errors:     [ none / list ]
═══════════════════════════════════════════════════════════
```
