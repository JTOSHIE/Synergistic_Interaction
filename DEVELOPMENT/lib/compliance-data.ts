// V7 §2.1 + §3.3: Complete nine-component data — all website copy approved or draft-ready for sign-off
// Components 3, 8, 9: verbatim §3.3 approved copy
// Components 1, 2, 4, 5, 6, 7: draft copy written to §3.3 style — requires Principal sign-off

export interface ComplianceSubComponent {
  id: string;
  title: string;
  description: string;
}

export interface ComplianceComponentData {
  id: number;
  name: string;
  tagline: string;
  isoClause: string;
  isoTitle: string;
  riskTier: 'Hard Gate' | 'Preventative' | 'Monitoring' | 'Cultural';
  websiteCopy: string;
  subComponents: ComplianceSubComponent[];
  preventionExample?: string; // V7 §3 — implicit Panda Mart retrospective (no attribution)
  approvedCopy: boolean; // false = draft, needs Principal sign-off
}

export const complianceComponents: ComplianceComponentData[] = [
  {
    id: 1,
    name: 'Product Compliance Verification',
    tagline: 'Every product verified before any purchase order.',
    isoClause: 'Clause 8',
    isoTitle: 'Operational Controls',
    riskTier: 'Hard Gate',
    websiteCopy:
      'A purchase order is a legal commitment. Before that commitment is made, every product must pass a structured verification process against the applicable mandatory safety standards, labelling requirements, and documentation obligations. Component 1 is the hard gate that separates the product range from the regulatory risk landscape — not a review process that happens after products arrive in the warehouse, but a structured pre-commitment verification that happens before a single unit is ordered.',
    subComponents: [
      { id: '1a', title: 'Mandatory Standard Identification', description: 'Every product category is mapped to the applicable Australian mandatory safety standards before procurement begins.' },
      { id: '1b', title: 'Documentation Checklist', description: 'Each product requires a defined documentation set before PO issuance — certificates of compliance, test reports, labelling verification.' },
      { id: '1c', title: 'Hard Gate Enforcement', description: 'Products that cannot satisfy the verification checklist are not ranged. No exceptions. No retrospective remediation.' },
      { id: '1d', title: 'Compliance File Initiation', description: "Passing the verification gate initiates the product's compliance file (Component 5), creating the evidentiary record from day one." },
    ],
    preventionExample:
      "Electrical goods, children's toys, and baby products require specific mandatory standard verification before any commercial commitment. The verification gate catches non-compliant products at the only point in the process where stopping them costs nothing.",
    approvedCopy: false,
  },
  {
    id: 2,
    name: 'Supply Chain Compliance Auditing',
    tagline: 'Every supplier assessed before engagement.',
    isoClause: 'Clause 8 + Clause 4.2',
    isoTitle: 'Operational Controls + Understanding Interested Parties',
    riskTier: 'Hard Gate',
    websiteCopy:
      "The retailer's compliance exposure does not begin when the product reaches the shelf. It begins when the supplier relationship is formed. Component 2 treats every new supplier as a compliance entity — not merely a commercial partner — and requires a structured audit before any purchase order is issued. Supplier longevity is not a substitute for supplier compliance. A ten-year supplier relationship provides no legal protection against a product that fails a mandatory safety standard.",
    subComponents: [
      { id: '2a', title: 'Supplier Pre-Qualification', description: 'New suppliers must complete a structured compliance capability assessment before their first purchase order is issued.' },
      { id: '2b', title: 'Documentation Capacity Assessment', description: 'The audit determines whether the supplier can produce the compliance documentation their product categories require — certificates, test reports, EESS registrations.' },
      { id: '2c', title: 'Risk Tiering', description: "Suppliers are assigned a compliance risk tier based on audit outcomes. Tier 1 suppliers (baby, electrical, children's categories) face the most rigorous pre-qualification requirements." },
      { id: '2d', title: 'Annual Re-Audit', description: 'Supplier compliance status is not permanent. Annual re-audits verify that documentation is current and that no product formulation or sourcing changes have created new compliance exposures.' },
    ],
    preventionExample:
      'Overseas manufacturers without an Australian distributor of record create a direct-import liability structure that places 100% of ACCC enforcement exposure on the retailer. Component 2 identifies this structure before any commercial relationship is formalised.',
    approvedCopy: false,
  },
  {
    id: 3,
    name: 'Category-Specific Compliance Mapping',
    tagline: 'Risk tier by category, continuously monitored.',
    isoClause: 'Clause 4.1 + Clause 6.1',
    isoTitle: 'Contextual Understanding + Risk Assessment',
    riskTier: 'Preventative',
    // V7 §3.3: Approved copy — verbatim
    websiteCopy:
      "Electrical goods. Baby products. Children's toys. These categories carry Australia's most demanding mandatory safety frameworks and the highest maximum penalties for non-compliance. Our category-specific risk mapping ensures that Tier 1 categories receive the depth of compliance architecture they legally require — including mandatory EESS registration verification for all electrical goods and RCM confirmation before any purchase order is issued.",
    subComponents: [
      { id: '3a', title: 'Tier 1 Category Identification', description: "Electrical goods, baby products, and children's toys are classified as Tier 1 — requiring the most intensive compliance architecture." },
      { id: '3b', title: 'EESS Registration Verification', description: 'For all electrical goods: mandatory check against the Electrical Equipment Safety System (EESS) database before any purchase order. RCM mark confirmation required.' },
      { id: '3c', title: 'Mandatory Standards Database', description: 'A complete, current map of all applicable Australian mandatory safety standards for every ranged category — updated as the regulatory environment changes.' },
      { id: '3d', title: 'Category Risk Reassessment', description: "Quarterly review of category risk classifications — new mandatory standards, updated enforcement priorities, and changed product formulations can alter a category's compliance architecture requirements." },
    ],
    preventionExample:
      '130 electrical safety charges in a single enforcement action is the documented consequence of sourcing electrical goods without EESS database verification and RCM confirmation. Component 3 makes this check mandatory before the first purchase order.',
    approvedCopy: true, // §3.3 approved
  },
  {
    id: 4,
    name: 'Regulatory Risk Assessment',
    tagline: 'Quantified exposure, prioritised quarterly.',
    isoClause: 'Clause 4 + Clause 6',
    isoTitle: 'Context + Planning',
    riskTier: 'Preventative',
    websiteCopy:
      'Compliance risk is not an abstract concern. Under the Australian Consumer Law, maximum civil penalties for corporations are $50 million or more per contravention. Component 4 translates this statutory reality into a precise, quantified risk profile for the specific product range — calculating actual penalty exposure by category, identifying the highest-priority compliance vulnerabilities, and producing the prioritised action plan that allocates compliance investment proportionately to risk. The architecture should be proportionate to the exposure. Component 4 is how that proportion is calculated.',
    subComponents: [
      { id: '4a', title: 'Penalty Exposure Calculation', description: 'For each non-compliant product category: applicable standard, maximum penalty per contravention (s.224, Competition and Consumer Act 2010), and estimated range-level exposure.' },
      { id: '4b', title: 'Enforcement Priority Mapping', description: 'Annual review of ACCC and state consumer affairs enforcement priorities — which categories and practices are under active regulatory scrutiny in the current year.' },
      { id: '4c', title: 'Prioritised Remediation Sequencing', description: 'Compliance vulnerabilities are addressed in penalty-exposure order. Tier 1 exposures are resolved first, regardless of operational convenience.' },
      { id: '4d', title: 'Quarterly Risk Refresh', description: 'The regulatory environment changes. New mandatory standards, updated penalty provisions, changed enforcement focus. The risk assessment is refreshed quarterly to remain current.' },
    ],
    preventionExample:
      'A retailer who has never calculated their actual penalty exposure under the Australian Consumer Law does not know what they are managing. Component 4 makes the exposure concrete — and in doing so, makes the consulting investment obviously proportionate.',
    approvedCopy: false,
  },
  {
    id: 5,
    name: 'Compliance Documentation Management',
    tagline: 'Complete digital file per product, audit-ready.',
    isoClause: 'Clause 7',
    isoTitle: 'Documented Information',
    riskTier: 'Monitoring',
    websiteCopy:
      "When the ACCC or a state consumer affairs officer requests compliance documentation, the question is not whether the retailer believes their products are compliant. It is whether they can prove it. Component 5 ensures that every ranged product has a complete, current, and retrievable digital compliance file — not a folder of PDFs on a shared drive, but a structured documentation architecture that can produce the evidentiary record for any product, any supplier, and any category within minutes of a regulator's request.",
    subComponents: [
      { id: '5a', title: 'Digital Compliance File Structure', description: 'Standardised file structure for every SKU: applicable standard, certificate of compliance, test report, labelling verification, importer-of-record documentation, and audit history.' },
      { id: '5b', title: 'Expiry Tracking', description: 'Third-party test reports and certificates of compliance have defined validity periods. Component 5 tracks expiry dates and triggers renewal 90 days before expiry.' },
      { id: '5c', title: 'Platform-Agnostic Architecture', description: 'The documentation system integrates with any existing ERP or stock management platform. At smaller scales: structured Notion or Airtable workspace. At larger scales: ZenGRC or OneTrust integration.' },
      { id: '5d', title: 'Audit-Ready Retrieval', description: "The documentation architecture is designed for enforcement response: any product's complete compliance file is retrievable within minutes, not hours." },
    ],
    preventionExample:
      'The ACCC treats the existence and quality of a compliance management system as a material factor in both the decision to prosecute and in penalty quantum. A complete, retrievable compliance file is the difference between a managed enforcement response and an unmanaged one.',
    approvedCopy: false,
  },
  {
    id: 6,
    name: 'Real-Time Compliance Monitoring',
    tagline: 'Exception-based alerts, ongoing.',
    isoClause: 'Clause 9 + Clause 9.2',
    isoTitle: 'Performance Evaluation + Internal Audit',
    riskTier: 'Monitoring',
    websiteCopy:
      'Compliance is not a point-in-time event. Regulatory updates, product reformulations, supplier changes, and new mandatory standards create ongoing compliance risk for products that were fully compliant when they were first ranged. Component 6 implements exception-based monitoring — the architecture is quiet when everything is compliant, and immediately active when it is not. The monitoring system flags exceptions before they become enforcement exposure, not after.',
    subComponents: [
      { id: '6a', title: 'Regulatory Change Alerts', description: 'Integration with the automated regulatory intelligence pipeline (ACCC, CAV, TGA, ESV) triggers compliance file review for affected categories within 48 hours of a relevant update.' },
      { id: '6b', title: 'Product Recall Monitoring', description: 'Real-time monitoring of the ACCC product safety recall database for products matching ranged categories or suppliers.' },
      { id: '6c', title: 'Exception Escalation Protocol', description: 'When a compliance exception is flagged, the escalation protocol defines the response: immediate purchase order hold, supplier communication, compliance file review, and management notification.' },
      { id: '6d', title: 'Monthly Compliance Status Report', description: 'Monthly KPI report covering compliance verification rate, exception volume, supplier response quality, and open compliance actions. Trend data identifies emerging risks before they become enforcement exposure.' },
    ],
    preventionExample:
      'The regulatory environment for consumer goods does not stand still. New product safety recalls, updated mandatory standards, and changed enforcement priorities require ongoing monitoring. Component 6 ensures the compliance architecture remains current without requiring constant manual review.',
    approvedCopy: false,
  },
  {
    id: 7,
    name: 'Third-Party Test Report Requirements',
    tagline: 'Mandatory for Tier 1 categories, expiry tracked.',
    isoClause: 'Clause 8',
    isoTitle: 'Operational Controls',
    riskTier: 'Hard Gate',
    websiteCopy:
      "A Certificate of Compliance issued by a supplier is a representation, not independent evidence. For Tier 1 product categories — baby products, electrical goods, children's toys — the compliance architecture requires independent verification from a NATA-accredited testing laboratory. Component 7 mandates third-party test reports for all Tier 1 category products, tracks report expiry dates, and ensures that no product remains in the range with an expired or missing independent verification. Supplier assurances are not a substitute for laboratory evidence.",
    subComponents: [
      { id: '7a', title: 'NATA-Accredited Lab Requirement', description: 'For Tier 1 categories: test reports must be issued by a NATA-accredited laboratory or internationally recognised equivalent. Supplier-provided test reports from non-accredited sources are not accepted.' },
      { id: '7b', title: 'Test Report Validity Tracking', description: 'Test reports have defined validity periods. Component 7 tracks expiry dates across the entire range and triggers renewal 90 days before expiry — before the documentation gap creates a compliance exposure.' },
      { id: '7c', title: 'Button Battery Specific Testing', description: 'Products containing accessible button batteries require specific accessibility testing per AS/NZS standards. This testing is mandatory before any purchase order is issued for in-scope products.' },
      { id: '7d', title: "Children's Product Specific Requirements", description: "All children's products require test reports verifying compliance with the applicable toy safety standard (AS/NZS ISO 8124 series). Products without current, valid test reports cannot be ranged." },
    ],
    preventionExample:
      'Button battery accessibility charges and unlabelled projectile toy violations share a common root cause: products entered the range without independent test verification. Component 7 makes third-party testing a hard gate — no test report, no purchase order.',
    approvedCopy: false,
  },
  {
    id: 8,
    name: 'Importer-of-Record Verification',
    tagline: 'Legal liability mapping before any commercial relationship.',
    isoClause: 'Clause 4.2',
    isoTitle: 'Understanding Interested Parties',
    riskTier: 'Hard Gate',
    // V7 §3.3: Approved copy — verbatim
    websiteCopy:
      'We do not merely verify products. We verify the entire liability chain. The structural decision of whether to source through an established Australian distributor or to import directly determines who bears legal responsibility when a mandatory safety standard is breached. We map this liability architecture before the first commercial relationship is established — not after enforcement action makes the question urgent.',
    subComponents: [
      { id: '8a', title: 'Liability Chain Mapping', description: 'Before any supplier engagement: identify who holds the importer-of-record status for each product. Direct-import arrangements place 100% of ACCC liability on the retailer.' },
      { id: '8b', title: 'Australian Distributor Preference', description: 'Where an established Australian distributor exists, the compliance architecture structurally favours that arrangement — it transfers the majority of import compliance liability from the retailer to the distributor.' },
      { id: '8c', title: 'Direct-Import Compliance Protocol', description: 'Where direct importation is unavoidable, the direct-import compliance protocol applies: full documentation package required, EESS verification mandatory for electrical goods, third-party test reports mandatory for Tier 1 categories.' },
      { id: '8d', title: 'Local Sourcing Strategy', description: 'Targeting a minimum 30% locally-sourced product range systematically reduces direct-import exposure and creates a structural compliance buffer across the category architecture.' },
    ],
    preventionExample:
      'Direct importation from overseas manufacturers without an Australian distributor creates a liability structure where the retailer becomes the de facto importer of record — bearing 100% of ACCC enforcement liability for every product in that supply chain.',
    approvedCopy: true, // §3.3 approved
  },
  {
    id: 9,
    name: 'Compliance Culture & Continuous Improvement',
    tagline: 'ISO 37301 aligned. Durable beyond any single engagement.',
    isoClause: 'Clause 8.3 + Clause 10',
    isoTitle: 'Compliance Awareness & Culture + Improvement',
    riskTier: 'Cultural',
    // V7 §3.3: Approved copy — verbatim
    websiteCopy:
      'Compliance architecture is only as durable as the culture it operates within. We install the human infrastructure — staff training, confidential reporting channels, post-incident root-cause analysis — that makes compliance a living organisational capability rather than a consultant-dependent process. When we leave an engagement, the compliance culture remains.',
    subComponents: [
      { id: '9a', title: 'Role-Specific Staff Training', description: 'Procurement, merchandising, warehouse, and management training — each role receives the specific compliance capability it requires. Not generic training repurposed from another engagement.' },
      { id: '9b', title: 'Confidential Reporting Channel', description: 'ISO 37301 Clause 8.3 mandates confidential reporting mechanisms. A safe, non-retaliatory channel for staff to report compliance concerns — particularly important where supplier relationships involve long-standing commercial loyalties.' },
      { id: '9c', title: 'Post-Incident Root-Cause Analysis', description: 'Every compliance incident triggers a structured 48-hour review using five-why methodology. The analysis identifies which component(s) failed and drives corrective action with defined owner, timeline, and verification.' },
      { id: '9d', title: 'Continuous Improvement Formalisation', description: 'Quarterly architecture reviews, annual framework assessments, and regulatory intelligence integration ensure the compliance architecture evolves as the regulatory environment, supplier landscape, and product range change.' },
      { id: '9e', title: 'Regulatory Liaison', description: 'Proactive communication with ACCC and Consumer Affairs Victoria — annual enforcement priority review, voluntary compliance program participation, and where enforcement action has previously occurred, documented engagement that regulators treat as a material factor in penalty submissions.' },
    ],
    preventionExample:
      'Without a systemic improvement mechanism, the same compliance gaps that caused an initial enforcement action persist until the next one. Component 9 installs post-incident root-cause analysis as a standing process — a second violation from the same root cause represents a systemic failure of Component 9.',
    approvedCopy: true, // §3.3 approved
  },
];

// V7 §7.1: Seven Principles — retained from V6 per §12 "All V6 content retained"
export interface PrincipleData {
  id: number;
  title: string;
  description: string;
}

export const sevenPrinciples: PrincipleData[] = [
  { id: 1, title: 'Prevention Over Remediation', description: 'The compliance architecture is designed to prevent non-compliant products from entering the supply chain — not to manage the consequences after they do.' },
  { id: 2, title: 'Documentation is the Defence', description: 'When enforcement action occurs, the evidentiary record is the only defence that matters. Every compliance activity generates documentation.' },
  { id: 3, title: 'Proportionality to Risk', description: 'Tier 1 categories receive Tier 1 compliance architecture. Compliance investment is proportionate to penalty exposure — not to operational convenience.' },
  { id: 4, title: 'Independence of Verification', description: 'Supplier representations are not compliance evidence. Independent, third-party verification from accredited laboratories is the standard for Tier 1 categories.' },
  { id: 5, title: 'Liability Clarity Before Commitment', description: 'The commercial relationship is not formed until the liability structure is mapped. Importer-of-record status is verified before the first purchase order.' },
  { id: 6, title: 'Culture Over Compliance Theatre', description: 'A technically perfect compliance process operated by staff who do not understand it is structurally incomplete. Component 9 installs the cultural substrate.' },
  { id: 7, title: 'Architecture Outlasts Engagement', description: 'When the engagement concludes, the client owns a documented, operational, audit-ready compliance architecture. The dependency is on the system, not the consultant.' },
];
