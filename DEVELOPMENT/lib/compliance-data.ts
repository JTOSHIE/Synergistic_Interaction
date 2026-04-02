// lib/compliance-data.ts — V8: All enforcement-specific language removed
// Compliance methodology preserved — framing is operational, not prosecutorial

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
  operationalNote: string;
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
      'A purchase order is a legal commitment. Before that commitment is made, every product passes a structured verification process against the applicable mandatory safety standards, labelling requirements, and documentation obligations. Component 1 is the hard gate at the front of the supply chain — a structured pre-commitment verification that happens before a single unit is ordered, not a review process that happens after products arrive in the warehouse.',
    subComponents: [
      { id: '1a', title: 'Mandatory Standard Identification', description: 'Every product category is mapped to the applicable Australian mandatory safety standards before procurement begins.' },
      { id: '1b', title: 'Documentation Checklist', description: 'Each product requires a defined documentation set before PO issuance — certificates of compliance, test reports, labelling verification.' },
      { id: '1c', title: 'Hard Gate Enforcement', description: 'Products that cannot satisfy the verification checklist are not ranged. The process is designed to be a fast gate for compliant products and a hard stop for non-compliant ones.' },
      { id: '1d', title: 'Compliance File Initiation', description: 'Passing the verification gate initiates the product\'s compliance file, creating the evidentiary record from day one of the commercial relationship.' },
    ],
    operationalNote: 'Verification runs in parallel with commercial negotiations — not after. Compliant products move at commercial speed. Non-compliant products are identified before any commercial commitment is made.',
  },
  {
    id: 2,
    name: 'Supply Chain Compliance Auditing',
    tagline: 'Every supplier assessed before engagement.',
    isoClause: 'Clause 8 + Clause 4.2',
    isoTitle: 'Operational Controls + Understanding Interested Parties',
    riskTier: 'Hard Gate',
    websiteCopy:
      'Compliance exposure does not begin when a product reaches the shelf. It begins when the supplier relationship is formed. Component 2 treats every new supplier as a compliance entity — not merely a commercial partner — and requires a structured assessment before any purchase order is issued. The length of a supplier relationship is not a substitute for documented compliance capability.',
    subComponents: [
      { id: '2a', title: 'Supplier Pre-Qualification', description: 'New suppliers complete a structured compliance capability assessment before their first purchase order is issued.' },
      { id: '2b', title: 'Documentation Capacity Assessment', description: 'The assessment determines whether the supplier can produce the compliance documentation their product categories require.' },
      { id: '2c', title: 'Risk Tiering', description: 'Suppliers are assigned a compliance risk tier based on assessment outcomes, determining the depth of ongoing oversight required.' },
      { id: '2d', title: 'Annual Re-Assessment', description: 'Supplier compliance status is reviewed annually. Product formulation changes, new sourcing arrangements, and regulatory updates can alter a supplier\'s compliance profile.' },
    ],
    operationalNote: 'A supplier pre-qualification framework means suppliers who have passed the assessment process are pre-approved for rapid ranging. Over time this creates a verified supplier pool that accelerates category expansion.',
  },
  {
    id: 3,
    name: 'Category-Specific Compliance Mapping',
    tagline: 'Risk tier by category, continuously monitored.',
    isoClause: 'Clause 4.1 + Clause 6.1',
    isoTitle: 'Contextual Understanding + Risk Assessment',
    riskTier: 'Preventative',
    websiteCopy:
      'Different product categories carry different regulatory obligations. Electrical goods, baby products, and children\'s toys operate under Australia\'s most demanding mandatory safety frameworks. Component 3 ensures that each category receives the compliance architecture proportionate to its regulatory requirements — including EESS registration verification for electrical goods and mandatory standard confirmation before any purchase order is issued.',
    subComponents: [
      { id: '3a', title: 'Tier Classification', description: 'Categories are classified by regulatory intensity. Higher-risk categories receive more intensive compliance architecture.' },
      { id: '3b', title: 'EESS Registration Verification', description: 'For all electrical goods: mandatory check against the Electrical Equipment Safety System database. RCM mark confirmation required before any purchase order.' },
      { id: '3c', title: 'Mandatory Standards Database', description: 'A complete, current map of all applicable Australian mandatory safety standards for every ranged category — updated as the regulatory environment changes.' },
      { id: '3d', title: 'Category Risk Reassessment', description: 'Quarterly review of category classifications. New mandatory standards and changed enforcement priorities can alter a category\'s compliance architecture requirements.' },
    ],
    operationalNote: 'Category risk mapping means a retailer entering any new category does so with complete knowledge of its compliance requirements on day one — not discovering them after the first enforcement contact.',
  },
  {
    id: 4,
    name: 'Regulatory Risk Assessment',
    tagline: 'Quantified exposure, prioritised quarterly.',
    isoClause: 'Clause 4 + Clause 6',
    isoTitle: 'Context + Planning',
    riskTier: 'Preventative',
    websiteCopy:
      'Compliance risk is a quantifiable commercial exposure. Under the Australian Consumer Law, maximum civil penalties for corporations are $50 million or more per contravention. Component 4 translates this statutory framework into a precise risk profile for a specific product range — calculating penalty exposure by category, identifying the highest-priority compliance gaps, and producing the prioritised action plan that allocates compliance investment proportionately to actual exposure.',
    subComponents: [
      { id: '4a', title: 'Penalty Exposure Calculation', description: 'For each product category: applicable standard, maximum penalty per contravention under ACL s.224, and estimated range-level exposure.' },
      { id: '4b', title: 'Enforcement Priority Mapping', description: 'Annual review of ACCC and state consumer affairs enforcement priorities — which categories and practices are under active scrutiny in the current year.' },
      { id: '4c', title: 'Prioritised Remediation', description: 'Compliance gaps are addressed in penalty-exposure order. The highest-risk exposures are resolved first.' },
      { id: '4d', title: 'Quarterly Refresh', description: 'New mandatory standards, updated penalty provisions, and changed enforcement focus require regular reassessment to keep the risk profile current.' },
    ],
    operationalNote: 'Quantifying the penalty exposure makes the compliance investment decision straightforward. The architecture is sized proportionately to the actual exposure — not to a generic compliance template.',
  },
  {
    id: 5,
    name: 'Compliance Documentation Management',
    tagline: 'Complete digital file per product, audit-ready.',
    isoClause: 'Clause 7',
    isoTitle: 'Documented Information',
    riskTier: 'Monitoring',
    websiteCopy:
      'When compliance documentation is requested — by a regulator, a buyer, or an auditor — the question is not whether the products are compliant. It is whether compliance can be demonstrated. Component 5 ensures every ranged product has a complete, current, and retrievable digital compliance file. Structured documentation that produces the evidentiary record for any product, any supplier, and any category within minutes of a request.',
    subComponents: [
      { id: '5a', title: 'Digital Compliance File Structure', description: 'Standardised file structure for every SKU: applicable standard, certificate of compliance, test report, labelling verification, importer-of-record documentation, and audit history.' },
      { id: '5b', title: 'Expiry Tracking', description: 'Test reports and compliance certificates have defined validity periods. Component 5 tracks expiry dates and triggers renewal 90 days before expiry.' },
      { id: '5c', title: 'Platform-Agnostic Architecture', description: 'The documentation system integrates with any existing ERP or stock management platform — from structured Notion workspaces to enterprise GRC platforms.' },
      { id: '5d', title: 'Audit-Ready Retrieval', description: 'Any product\'s complete compliance file is retrievable within minutes. The architecture is designed for response speed.' },
    ],
    operationalNote: 'The quality of a compliance management system is a documented factor in regulatory outcomes. Complete, retrievable compliance files demonstrate genuine compliance intent — not retrospective documentation.',
  },
  {
    id: 6,
    name: 'Real-Time Compliance Monitoring',
    tagline: 'Exception-based alerts, ongoing.',
    isoClause: 'Clause 9 + Clause 9.2',
    isoTitle: 'Performance Evaluation + Internal Audit',
    riskTier: 'Monitoring',
    websiteCopy:
      'Compliance is not a point-in-time event. Regulatory updates, product reformulations, supplier changes, and new mandatory standards create ongoing compliance considerations for products that were fully verified at the time of ranging. Component 6 implements exception-based monitoring — the system is quiet when everything is in order, and immediately active when it is not. Exceptions are visible before they become commercial problems.',
    subComponents: [
      { id: '6a', title: 'Regulatory Change Alerts', description: 'Integration with the regulatory intelligence pipeline triggers compliance file review for affected categories within 48 hours of a relevant update.' },
      { id: '6b', title: 'Product Recall Monitoring', description: 'Monitoring of the ACCC product safety recall database for products matching ranged categories or active suppliers.' },
      { id: '6c', title: 'Exception Escalation Protocol', description: 'A defined response pathway when a compliance exception is flagged: purchase order review, supplier communication, compliance file update, management notification.' },
      { id: '6d', title: 'Monthly Compliance Report', description: 'Monthly KPI report covering verification rate, exception volume, supplier documentation currency, and open compliance actions.' },
    ],
    operationalNote: 'Exception-based monitoring means the compliance architecture scales without scaling the manual workload. The system flags what needs attention and stays quiet on everything that is in order.',
  },
  {
    id: 7,
    name: 'Third-Party Test Report Requirements',
    tagline: 'Independent verification for high-risk categories.',
    isoClause: 'Clause 8',
    isoTitle: 'Operational Controls',
    riskTier: 'Hard Gate',
    websiteCopy:
      'A supplier\'s own certificate of compliance is a representation, not independent evidence. For higher-risk product categories, the compliance architecture requires independent verification from accredited testing laboratories. Component 7 mandates third-party test reports for applicable categories, tracks report validity periods, and ensures no product remains in the range with expired or absent independent verification.',
    subComponents: [
      { id: '7a', title: 'Accredited Laboratory Requirement', description: 'Test reports must be issued by a NATA-accredited laboratory or internationally recognised equivalent. Supplier-provided reports from non-accredited sources are not accepted for higher-risk categories.' },
      { id: '7b', title: 'Test Report Validity Tracking', description: 'Test reports have defined validity periods. Component 7 tracks expiry dates across the range and triggers renewal 90 days before expiry.' },
      { id: '7c', title: 'Category-Specific Testing Standards', description: 'Each product category has applicable testing standards. The verification process confirms that test reports address the specific standards relevant to the product.' },
      { id: '7d', title: 'Children\'s Product Requirements', description: 'Children\'s products require test reports verifying compliance with the applicable safety standards. Products without current, valid test reports are not ranged.' },
    ],
    operationalNote: 'Independent test reports create the evidentiary foundation for compliance claims. They also act as a supplier pre-qualification signal — suppliers who can provide current NATA-accredited test reports signal a compliance-capable operation.',
  },
  {
    id: 8,
    name: 'Importer-of-Record Verification',
    tagline: 'Legal liability mapped before any commercial relationship.',
    isoClause: 'Clause 4.2',
    isoTitle: 'Understanding Interested Parties',
    riskTier: 'Hard Gate',
    websiteCopy:
      'We do not merely verify products. We verify the entire liability chain. The structural decision of whether to source through an established Australian distributor or to import directly determines who bears legal responsibility when a mandatory safety standard is breached. We map this liability architecture before the first commercial relationship is established — not after enforcement action makes the question urgent.',
    subComponents: [
      { id: '8a', title: 'Liability Chain Mapping', description: 'Before any supplier engagement: identify who holds the importer-of-record status for each product and what compliance obligations that status carries.' },
      { id: '8b', title: 'Australian Distributor Preference', description: 'Where an established Australian distributor exists, the compliance architecture structurally favours that arrangement for its compliance liability and supply chain reliability advantages.' },
      { id: '8c', title: 'Direct-Import Compliance Protocol', description: 'Where direct importation is the chosen pathway, a full compliance protocol applies: complete documentation package, verification against all applicable mandatory standards, and importer obligations clearly defined.' },
      { id: '8d', title: 'Local Sourcing Strategy', description: 'Building a meaningful locally-sourced product component creates supply chain resilience, compliance buffer, and consumer trust advantages across the category.' },
    ],
    operationalNote: 'Understanding the liability architecture before the first commercial relationship is formed is one of the most consequential decisions in category management. Component 8 makes it a structured process, not an afterthought.',
  },
  {
    id: 9,
    name: 'Compliance Culture & Continuous Improvement',
    tagline: 'Durable beyond any single engagement.',
    isoClause: 'Clause 8.3 + Clause 10',
    isoTitle: 'Compliance Awareness & Culture + Improvement',
    riskTier: 'Cultural',
    websiteCopy:
      'Compliance architecture is only as durable as the culture it operates within. We install the human infrastructure — staff training, confidential reporting channels, post-incident root-cause analysis — that makes compliance a living organisational capability rather than a consultant-dependent process. When we leave an engagement, the compliance culture remains.',
    subComponents: [
      { id: '9a', title: 'Role-Specific Staff Training', description: 'Procurement, merchandising, warehouse, and management training — each role receives the specific compliance capability it requires, built around the actual product categories and supplier relationships in play.' },
      { id: '9b', title: 'Confidential Reporting Channel', description: 'A safe, non-retaliatory channel for staff to report compliance concerns. ISO 37301 Clause 8.3 establishes this as a foundational element of compliance culture.' },
      { id: '9c', title: 'Post-Incident Root-Cause Analysis', description: 'Every compliance incident triggers a structured review. The analysis identifies which part of the architecture the incident exposed and drives corrective action with defined owner, timeline, and verification.' },
      { id: '9d', title: 'Continuous Improvement', description: 'Quarterly architecture reviews and annual framework assessments ensure the compliance system evolves with the regulatory environment, the supplier landscape, and the product range.' },
      { id: '9e', title: 'Regulatory Liaison', description: 'Proactive communication with ACCC and state consumer affairs bodies — annual enforcement priority review and participation in voluntary compliance programs where available.' },
    ],
    operationalNote: 'The engagement ends when the architecture is embedded and the team can run it independently. Component 9 is what makes that independence possible.',
  },
];

export interface PrincipleData {
  id: number;
  title: string;
  description: string;
}

export const sevenPrinciples: PrincipleData[] = [
  { id: 1, title: 'Prevention Over Remediation', description: 'The compliance architecture prevents non-compliant products from entering the supply chain rather than managing the consequences after they do.' },
  { id: 2, title: 'Documentation is the Foundation', description: 'Every compliance activity generates documentation. The evidentiary record is built continuously, not assembled retrospectively.' },
  { id: 3, title: 'Proportionate to Exposure', description: 'Compliance investment is sized proportionately to actual penalty exposure and category risk — not to a generic compliance template.' },
  { id: 4, title: 'Independent Verification', description: 'Supplier representations are not compliance evidence for higher-risk categories. Accredited laboratory test reports are the standard.' },
  { id: 5, title: 'Liability Clarity First', description: 'The liability structure is mapped before the commercial relationship is formed.' },
  { id: 6, title: 'Culture Over Process', description: 'A process without cultural embedding is fragile. Component 9 installs the human infrastructure that makes compliance durable.' },
  { id: 7, title: 'Architecture Outlasts Engagement', description: 'The client owns a documented, operational, audit-ready compliance architecture when the engagement concludes.' },
];
