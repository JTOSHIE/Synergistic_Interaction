// V7 §2: Nine-component compliance architecture data
// V7 §3: Website copy sourced from §3.3 — update with exact copy from brief

export interface ComplianceComponentData {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  isoClause: string;
  isoDescription: string;
  subComponents: string[];
  // V7 §3.3: Approved website copy — replace placeholders with exact brief copy
  websiteCopy: string;
}

// V7 §2: All nine components — sub-component counts from brief
// IMPORTANT: Replace all websiteCopy values with exact §3.3 language before launch
export const complianceComponents: ComplianceComponentData[] = [
  {
    id: 1,
    slug: 'strategic-sourcing',
    name: 'Strategic Sourcing & Supplier Selection',
    // [REPLACE: Extract tagline from §3.3]
    tagline: 'Build supplier relationships on compliance foundations',
    isoClause: '8',
    isoDescription: 'Operational planning and control',
    subComponents: [
      'Supplier compliance pre-qualification',
      'Category market analysis',
      'Total cost of compliance modelling',
      'Strategic supplier tiering',
    ],
    // [REPLACE: Extract from SI_Master_Brief_v7.docx §3.3]
    websiteCopy: 'Placeholder — extract from §3.3 of brief',
  },
  {
    id: 2,
    slug: 'supplier-performance',
    name: 'Supplier Performance Management',
    tagline: 'Measure what matters: compliance KPIs that protect category performance',
    isoClause: '9',
    isoDescription: 'Performance evaluation',
    subComponents: [
      'Compliance KPI framework',
      'Supplier scorecard methodology',
      'Corrective action management',
      'Performance-linked contracting',
    ],
    websiteCopy: 'Placeholder — extract from §3.3 of brief',
  },
  {
    id: 3,
    slug: 'regulatory-compliance',
    name: 'Regulatory Compliance & Governance',
    tagline: 'Stay ahead of ACCC, CAV, and TGA — before they find you',
    isoClause: '6',
    isoDescription: 'Planning',
    subComponents: [
      'Regulatory obligation register',
      'Automated compliance monitoring',
      'Compliance calendar management',
      'Regulatory change impact assessment',
    ],
    websiteCopy: 'Placeholder — extract from §3.3 of brief',
  },
  {
    id: 4,
    slug: 'risk-management',
    name: 'Risk Management & Mitigation',
    tagline: 'Category risk heat mapping that prevents compliance surprises',
    isoClause: '6.1',
    isoDescription: 'Actions to address risks and opportunities',
    subComponents: [
      'Category risk heat mapping',
      'Supply chain risk assessment',
      'Compliance risk escalation protocols',
      'Business continuity planning',
    ],
    websiteCopy: 'Placeholder — extract from §3.3 of brief',
  },
  {
    id: 5,
    slug: 'data-analytics',
    name: 'Data Analytics & Intelligence',
    tagline: 'Turn compliance data into category intelligence',
    isoClause: '7',
    isoDescription: 'Support — documented information',
    subComponents: [
      'Category spend analytics',
      'Compliance data visualisation',
      'Automated regulatory intelligence feeds',
      'Predictive compliance modelling',
    ],
    websiteCopy: 'Placeholder — extract from §3.3 of brief',
  },
  {
    id: 6,
    slug: 'stakeholder-alignment',
    name: 'Stakeholder Alignment & Communication',
    tagline: 'Compliance governance that earns board confidence',
    isoClause: '7.4',
    isoDescription: 'Communication',
    subComponents: [
      'Executive compliance reporting',
      'Cross-functional compliance governance',
      'Supplier communication protocols',
      'Board-level compliance assurance',
    ],
    websiteCopy: 'Placeholder — extract from §3.3 of brief',
  },
  {
    id: 7,
    slug: 'contract-governance',
    name: 'Contract Governance & Management',
    tagline: 'Contracts that protect value and enforce compliance obligations',
    isoClause: '8',
    isoDescription: 'Operational planning — contractual controls',
    subComponents: [
      'Compliance clause library',
      'Contract performance monitoring',
      'Variation and amendment management',
      'Dispute resolution frameworks',
    ],
    websiteCopy: 'Placeholder — extract from §3.3 of brief',
  },
  {
    id: 8,
    slug: 'sustainability',
    name: 'Sustainability & Ethical Sourcing',
    tagline: 'ESG compliance that satisfies regulators and builds brand trust',
    isoClause: '6',
    isoDescription: 'Planning — ethical obligations',
    subComponents: [
      'Modern slavery compliance',
      'Environmental compliance monitoring',
      'Ethical sourcing certification management',
      'ESG reporting integration',
    ],
    websiteCopy: 'Placeholder — extract from §3.3 of brief',
  },
  {
    id: 9,
    slug: 'compliance-culture',
    name: 'Compliance Culture & Continuous Improvement',
    // V7 §2: Component 9 is NEW in Version 7 — evolved from eight-component framework
    tagline: 'Embed compliance into category DNA — not just process documentation',
    isoClause: '10',
    isoDescription: 'Improvement',
    subComponents: [
      'Compliance culture assessment',
      'Training and capability development',
      'Continuous improvement cycle (Plan-Do-Check-Act)',
      'Compliance maturity benchmarking',
    ],
    websiteCopy: 'Placeholder — extract from §3.3 of brief',
  },
];
