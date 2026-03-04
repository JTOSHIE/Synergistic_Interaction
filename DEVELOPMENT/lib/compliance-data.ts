// V7 §2: Nine-component compliance architecture — compliance-by-exception methodology
// V7 §3.3: Approved website copy integrated for Components 3, 8, 9

export interface ComplianceComponentData {
  id: number;
  slug: string;
  name: string;
  function: string;         // One-line function description (from V7 §2.1)
  tagline: string;          // Short headline for accordion header
  isoClause: string;        // Primary ISO 37301 clause(s)
  isoDescription: string;   // Clause description
  subComponents: string[];
  websiteCopy: string;      // V7 §3.3 approved language
}

// V7 §2.1: Nine components — complete framework (Component 9 is NEW in V7)
export const complianceComponents: ComplianceComponentData[] = [
  {
    id: 1,
    slug: 'product-compliance-verification',
    name: 'Product Compliance Verification',
    // V7 §2.1
    function: 'Every product verified before any purchase order',
    tagline: 'A hard gate before every purchase order — no exceptions',
    // V7 §2.3
    isoClause: '8',
    isoDescription: 'Operational Controls — preventative barriers before product enters retail supply chain',
    subComponents: [
      'Mandatory standard identification per product type',
      'RCM mark verification against EESS database (electrical goods)',
      'AS/NZS standards check before PO issuance',
      'Button battery accessibility testing for applicable products',
      'Compliance documentation request and review',
    ],
    // V7 §3.3: [Approved copy — extract exact language from brief §3.3 for Components 1, 2, 4, 5, 6, 7]
    websiteCopy: 'Every product that enters our category management process passes through a documented compliance verification gate before any purchase order is issued. No product reaches a retail shelf without a verified compliance file. This is not an audit function that runs after the range is built. It is a structural hard gate that runs before commercial commitment is made.',
  },
  {
    id: 2,
    slug: 'supply-chain-compliance-auditing',
    name: 'Supply Chain Compliance Auditing',
    function: 'Every supplier assessed before engagement',
    tagline: 'Supplier compliance assessed before the first commercial relationship',
    isoClause: '8 + 4.2',
    isoDescription: 'Operational Controls + Understanding Interested Parties — supplier assessment as formalised compliance obligation',
    subComponents: [
      'Supplier compliance pre-qualification',
      'Compliance documentation package request',
      'Red-flag identification in supplier representations',
      'Supplier risk tier classification',
      'Ongoing supplier performance monitoring against compliance KPIs',
    ],
    websiteCopy: 'A supplier with a 10-year commercial relationship is not a supplier with a compliance guarantee. We assess every supplier\'s compliance capability before the first purchase order and monitor it continuously. Established relationships are valuable. They are not a substitute for a verified compliance file.',
  },
  {
    id: 3,
    slug: 'category-specific-compliance-mapping',
    name: 'Category-Specific Compliance Mapping',
    function: 'Risk tier by category, continuously monitored',
    tagline: 'Tier 1 categories receive the compliance architecture they legally require',
    isoClause: '4.1 + 6.1',
    isoDescription: 'Contextual Understanding + Risk Assessment — category-level risk classification drives proportionate compliance investment',
    subComponents: [
      'Mandatory safety framework identification by category',
      'Risk tier classification (Tier 1: electrical, baby, children\'s toys)',
      'EESS registration verification for all electrical goods',
      'RCM confirmation before any electrical purchase order',
      'Continuous category risk monitoring for regulatory changes',
    ],
    // V7 §3.3: APPROVED WEBSITE COPY — do not alter without Principal sign-off
    websiteCopy: 'Electrical goods. Baby products. Children\'s toys. These categories carry Australia\'s most demanding mandatory safety frameworks and the highest maximum penalties for non-compliance. Our category-specific risk mapping ensures that Tier 1 categories receive the depth of compliance architecture they legally require — including mandatory EESS registration verification for all electrical goods and RCM confirmation before any purchase order is issued.',
  },
  {
    id: 4,
    slug: 'regulatory-risk-assessment',
    name: 'Regulatory Risk Assessment',
    function: 'Quantified exposure, prioritised quarterly',
    tagline: 'Quantified penalty exposure — not theoretical risk language',
    isoClause: '4 + 6',
    isoDescription: 'Context + Planning — quantified risk exposure is the foundational input to all planning decisions',
    subComponents: [
      'Maximum penalty exposure calculation per product category',
      'Regulatory priority mapping against ACCC enforcement agenda',
      'Quarterly risk reassessment as regulatory environment evolves',
      'Exposure quantification for executive decision-making',
      'Before/after compliance architecture comparison reporting',
    ],
    websiteCopy: 'Under the Australian Consumer Law, maximum civil penalties for corporations reach $50 million or more per contravention. We quantify the specific penalty exposure in your product categories — by mandatory standard, by product type, and by sourcing structure — before implementation begins. This is the \'before\' number that makes the compliance investment decision arithmetic rather than abstract.',
  },
  {
    id: 5,
    slug: 'compliance-documentation-management',
    name: 'Compliance Documentation Management',
    function: 'Complete digital file per product, audit-ready',
    tagline: 'A complete compliance file for every product — audit-ready on day one',
    isoClause: '7',
    isoDescription: 'Documented Information — digital compliance files satisfy ISO 37301 documented information requirements',
    subComponents: [
      'Digital compliance file per SKU',
      'Third-party test report storage and expiry tracking',
      'Certificate of conformity management',
      'Audit-ready documentation architecture',
      'Compliance file accessibility for regulatory review',
    ],
    websiteCopy: 'When the ACCC conducts an enforcement visit, the first question is: where is your compliance documentation? The retailers with complete, organised, current compliance files face materially different regulatory outcomes than those who cannot produce them. We build the compliance file architecture before enforcement makes the question urgent.',
  },
  {
    id: 6,
    slug: 'real-time-compliance-monitoring',
    name: 'Real-Time Compliance Monitoring',
    function: 'Exception-based alerts, ongoing',
    tagline: 'Compliance exceptions surfaced before they reach the shelf',
    isoClause: '9 + 9.2',
    isoDescription: 'Performance Evaluation + Internal Audit — exception-based monitoring as continuous performance evaluation',
    subComponents: [
      'Exception-based compliance alert system',
      'Automated regulatory intelligence feed (ACCC, CAV, TGA, ESV)',
      'New mandatory standard identification and impact assessment',
      'Near-miss compliance incident tracking',
      'Real-time supplier compliance status monitoring',
    ],
    websiteCopy: 'Compliance is not a status achieved once at the beginning of a supplier relationship. Mandatory standards change. Test report validity expires. New regulatory guidance is issued. Our real-time monitoring architecture surfaces compliance exceptions before they become enforcement exposure — not after a regulatory visit makes them visible.',
  },
  {
    id: 7,
    slug: 'third-party-test-report-requirements',
    name: 'Third-Party Test Report Requirements',
    function: 'Mandatory for Tier 1 categories, expiry tracked',
    tagline: 'Independent test evidence — the evidentiary foundation for compliance claims',
    isoClause: '8',
    isoDescription: 'Operational Controls — independent test reports provide evidentiary foundation for compliance claims',
    subComponents: [
      'Third-party test report requirement by category tier',
      'NATA-accredited laboratory verification',
      'Test report validity period tracking and renewal scheduling',
      'AS/NZS standards scope verification',
      'Button battery, toy safety, and electrical goods test requirements',
    ],
    websiteCopy: 'A supplier\'s self-declaration that their product meets mandatory safety standards is not compliance evidence. It is a commercial statement. Third-party test reports from NATA-accredited laboratories are the evidentiary standard that regulatory bodies recognise — and the standard that Synergistic Interaction requires for all Tier 1 category products before any purchase order is issued.',
  },
  {
    id: 8,
    slug: 'importer-of-record-verification',
    name: 'Importer-of-Record Verification',
    function: 'Legal liability mapping, distributor preference',
    tagline: 'The liability chain mapped before any purchase order — not after enforcement',
    isoClause: '4.2',
    isoDescription: 'Understanding Interested Parties — legal liability mapping ensures the correct party bears compliance obligations',
    subComponents: [
      'Direct import vs. Australian distributor liability analysis',
      'Importer-of-record identification per supplier relationship',
      'Local sourcing strategy (30% target) to reduce direct-import exposure',
      'Distributor compliance responsibility documentation',
      'Pre-commercial liability architecture mapping',
    ],
    // V7 §3.3: APPROVED WEBSITE COPY — do not alter without Principal sign-off
    websiteCopy: 'We do not merely verify products. We verify the entire liability chain. The structural decision of whether to source through an established Australian distributor or to import directly determines who bears legal responsibility when a mandatory safety standard is breached. We map this liability architecture before the first commercial relationship is established — not after enforcement action makes the question urgent.',
  },
  {
    id: 9,
    slug: 'compliance-culture-continuous-improvement',
    name: 'Compliance Culture & Continuous Improvement',
    // V7 §2: Component 9 is NEW in Version 7 — added via Gemini deep research, ISO 37301 aligned
    function: 'ISO 37301 aligned; training, whistleblowing, root-cause analysis, regulatory liaison',
    tagline: 'Compliance that outlasts the engagement — embedded in organisational culture',
    isoClause: '8.3 + 10',
    isoDescription: 'Compliance Awareness/Culture + Improvement — training, whistleblowing, root-cause analysis, and continuous improvement',
    subComponents: [
      'Role-specific compliance training (procurement, merchandising, receiving, management)',
      'Confidential whistleblowing mechanism (ISO 37301 Clause 8.3)',
      'Post-incident root-cause analysis (48-hour structured review)',
      'Continuous improvement formalisation (quarterly architecture review)',
      'Regulatory liaison (ACCC voluntary compliance programs)',
    ],
    // V7 §3.3: APPROVED WEBSITE COPY — do not alter without Principal sign-off
    websiteCopy: 'Compliance architecture is only as durable as the culture it operates within. We install the human infrastructure — staff training, confidential reporting channels, post-incident root-cause analysis — that makes compliance a living organisational capability rather than a consultant-dependent process. When we leave an engagement, the compliance culture remains.',
  },
];
