# SYNERGISTIC INTERACTION — SESSION 8+9: FULL VISUAL REBUILD + CONTENT FIX
## PRE-AUTHORISED — Execute everything. Zero confirmation stops. Deploy at end.
### All decisions approved. Overwrite all files. Install packages. Push to GitHub. Deploy to Vercel.

---

## PRE-AUTHORISATIONS (already confirmed — do not ask about any of these)

- ✅ Overwrite app/page.tsx, components/ComplianceVisualization.tsx, lib/compliance-data.ts, app/our-approach/page.tsx, app/why-compliance-matters/page.tsx, app/category-expertise/page.tsx
- ✅ Create new component files: HomepageHero.tsx, PlanogramVisual.tsx, CategoryGridVisual.tsx, AboutVisual.tsx, ServicesVisual.tsx, OurApproachVisual.tsx
- ✅ Install npm packages without asking
- ✅ Run vercel --prod at end without asking
- ✅ Git commit and push to main without asking
- ✅ Remove all "Prevention architecture" subsections from compliance-data.ts
- ✅ Remove "130 electrical safety charges" reference
- ✅ Remove "button battery accessibility charges" reference
- ✅ Remove "30% locally-sourced product range" specific target language
- ✅ Remove "pilot ready" label from baby products
- ✅ Reorder categories: Hardware → Electrical → Gardening → Cleaning → Furniture → Personal Care → Barbecue & Gas → Baby Products → Children's Textiles → Water & Beverages
- ✅ Keep $50M and 1,736× figures on Why Compliance Matters page
- ✅ Dark/teal aesthetic, minimal geometric, code-generated visuals only

**Working directory:** `~/Documents/Synergistic_Interaction/DEVELOPMENT`

---

## TASK 1: INSTALL ANY MISSING DEPENDENCIES

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
npm install
npm list gsap 2>/dev/null | grep gsap || npm install gsap
npm list @vercel/analytics 2>/dev/null | grep analytics || npm install @vercel/analytics
```

---

## TASK 2: UPDATE `lib/compliance-data.ts` — REMOVE ALL TARGETED LANGUAGE

Replace the entire file. Key changes:
- All `preventionExample` fields replaced with neutral operational descriptions
- Remove "30% locally-sourced product range" target from Component 8
- Remove specific enforcement charge references from Components 3 and 7
- `approvedCopy` flags removed — all copy is now clean

**File:** `DEVELOPMENT/lib/compliance-data.ts`

```typescript
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
```

---

## TASK 3: CREATE `components/HomepageHero.tsx` — THE PLANOGRAM SEQUENCE

This is the centrepiece visual. A five-act canvas animation that tells the category management story: data → decisions → planogram builds → shelf complete → performance metrics.

**File:** `DEVELOPMENT/components/HomepageHero.tsx`

```typescript
'use client';

import { useEffect, useRef, useState } from 'react';

interface Product {
  col: number;
  row: number;
  shelf: number;
  label: string;
  category: string;
  placed: boolean;
  complianceChecked: boolean;
  color: string;
}

const SHELF_COUNT = 4;
const COLS_PER_SHELF = 8;
const TEAL = '#00c9a7';
const TEAL_DIM = 'rgba(0,201,167,0.3)';
const WHITE = '#f0f4f8';
const WHITE_DIM = 'rgba(240,244,248,0.15)';
const RED_DIM = 'rgba(239,68,68,0.6)';

// Product definitions for the planogram
const PRODUCT_DATA = [
  { label: 'HW-001', category: 'Hardware', color: 'rgba(0,201,167,0.7)' },
  { label: 'HW-002', category: 'Hardware', color: 'rgba(0,201,167,0.6)' },
  { label: 'EL-001', category: 'Electrical', color: 'rgba(0,180,230,0.7)' },
  { label: 'EL-002', category: 'Electrical', color: 'rgba(0,180,230,0.6)' },
  { label: 'GD-001', category: 'Garden', color: 'rgba(80,200,100,0.7)' },
  { label: 'GD-002', category: 'Garden', color: 'rgba(80,200,100,0.6)' },
  { label: 'CL-001', category: 'Cleaning', color: 'rgba(180,100,220,0.6)' },
  { label: 'BP-001', category: 'Baby', color: 'rgba(240,180,80,0.6)' },
  { label: 'HW-003', category: 'Hardware', color: 'rgba(0,201,167,0.5)' },
  { label: 'EL-003', category: 'Electrical', color: 'rgba(0,180,230,0.5)' },
  { label: 'GD-003', category: 'Garden', color: 'rgba(80,200,100,0.5)' },
  { label: 'PC-001', category: 'Personal Care', color: 'rgba(220,120,160,0.6)' },
  { label: 'FN-001', category: 'Furniture', color: 'rgba(180,140,100,0.6)' },
  { label: 'BB-001', category: 'Barbecue', color: 'rgba(240,100,60,0.6)' },
  { label: 'HW-004', category: 'Hardware', color: 'rgba(0,201,167,0.65)' },
  { label: 'EL-004', category: 'Electrical', color: 'rgba(0,180,230,0.65)' },
  { label: 'GD-004', category: 'Garden', color: 'rgba(80,200,100,0.65)' },
  { label: 'CL-002', category: 'Cleaning', color: 'rgba(180,100,220,0.5)' },
  { label: 'BP-002', category: 'Baby', color: 'rgba(240,180,80,0.5)' },
  { label: 'FN-002', category: 'Furniture', color: 'rgba(180,140,100,0.5)' },
  { label: 'PC-002', category: 'Personal Care', color: 'rgba(220,120,160,0.5)' },
  { label: 'HW-005', category: 'Hardware', color: 'rgba(0,201,167,0.55)' },
  { label: 'BB-002', category: 'Barbecue', color: 'rgba(240,100,60,0.5)' },
  { label: 'EL-005', category: 'Electrical', color: 'rgba(0,180,230,0.55)' },
  { label: 'GD-005', category: 'Garden', color: 'rgba(80,200,100,0.55)' },
  { label: 'CL-003', category: 'Cleaning', color: 'rgba(180,100,220,0.45)' },
  { label: 'HW-006', category: 'Hardware', color: 'rgba(0,201,167,0.45)' },
  { label: 'PC-003', category: 'Personal Care', color: 'rgba(220,120,160,0.45)' },
  { label: 'EL-006', category: 'Electrical', color: 'rgba(0,180,230,0.45)' },
  { label: 'FN-003', category: 'Furniture', color: 'rgba(180,140,100,0.45)' },
  { label: 'GD-006', category: 'Garden', color: 'rgba(80,200,100,0.45)' },
  { label: 'BP-003', category: 'Baby', color: 'rgba(240,180,80,0.45)' },
];

// Data stream particles
interface DataParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  value: string;
  opacity: number;
  size: number;
}

export default function HomepageHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const stateRef = useRef({ phase: 0, phaseProgress: 0, time: 0 });
  const productsRef = useRef<Product[]>([]);
  const dataParticlesRef = useRef<DataParticle[]>([]);
  const [prefersReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialise products grid
    productsRef.current = PRODUCT_DATA.slice(0, SHELF_COUNT * COLS_PER_SHELF).map((p, i) => ({
      ...p,
      col: i % COLS_PER_SHELF,
      row: Math.floor(i / COLS_PER_SHELF),
      shelf: Math.floor(i / COLS_PER_SHELF),
      placed: false,
      complianceChecked: false,
    }));

    // Initialise data particles
    function spawnParticle(): DataParticle {
      const values = ['OSA 97%', 'SKU 2,847', '4.4% ADV', 'GP 41%', 'TIER 1', 'RCM ✓', 'AS/NZS', 'EESS ✓', '$50M', '330+', 'ISO 37301', 'PO-4821', 'COMP ✓'];
      return {
        x: Math.random() * (canvas?.width ?? 800),
        y: Math.random() * (canvas?.height ?? 400),
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.4,
        value: values[Math.floor(Math.random() * values.length)],
        opacity: Math.random() * 0.5 + 0.1,
        size: Math.random() * 3 + 9,
      };
    }
    for (let i = 0; i < 40; i++) dataParticlesRef.current.push(spawnParticle());

    // DPI-aware sizing
    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function getSize() {
      const rect = canvas!.getBoundingClientRect();
      return { W: rect.width, H: rect.height };
    }

    // Draw shelf structure
    function drawShelf(
      ctx: CanvasRenderingContext2D,
      W: number,
      H: number,
      alpha: number
    ) {
      const shelfH = H * 0.12;
      const shelfStartY = H * 0.22;
      const shelfStartX = W * 0.05;
      const shelfWidth = W * 0.9;

      ctx.save();
      ctx.globalAlpha = alpha;

      // Back wall
      ctx.fillStyle = 'rgba(10,22,40,0.8)';
      ctx.fillRect(shelfStartX, shelfStartY, shelfWidth, shelfH * SHELF_COUNT + shelfH * 0.3);

      // Shelf boards
      for (let s = 0; s <= SHELF_COUNT; s++) {
        const sy = shelfStartY + s * shelfH;
        ctx.fillStyle = s === 0 ? 'rgba(0,201,167,0.3)' : 'rgba(255,255,255,0.06)';
        ctx.fillRect(shelfStartX, sy + shelfH - 4, shelfWidth, 4);

        // Shelf edge highlight
        ctx.fillStyle = s === 0 ? 'rgba(0,201,167,0.6)' : 'rgba(255,255,255,0.15)';
        ctx.fillRect(shelfStartX, sy + shelfH - 5, shelfWidth, 1);
      }

      // Side walls
      ctx.fillStyle = 'rgba(255,255,255,0.05)';
      ctx.fillRect(shelfStartX, shelfStartY, 3, shelfH * SHELF_COUNT + shelfH * 0.3);
      ctx.fillRect(shelfStartX + shelfWidth - 3, shelfStartY, 3, shelfH * SHELF_COUNT + shelfH * 0.3);

      ctx.restore();
    }

    // Draw a single product on shelf
    function drawProduct(
      ctx: CanvasRenderingContext2D,
      W: number,
      H: number,
      product: Product,
      dropY: number,
      alpha: number
    ) {
      const shelfH = H * 0.12;
      const shelfStartY = H * 0.22;
      const shelfStartX = W * 0.055;
      const shelfWidth = W * 0.89;
      const productW = (shelfWidth / COLS_PER_SHELF) * 0.82;
      const productH = shelfH * 0.72;

      const x = shelfStartX + product.col * (shelfWidth / COLS_PER_SHELF) + (shelfWidth / COLS_PER_SHELF) * 0.09;
      const targetY = shelfStartY + product.shelf * shelfH + shelfH - productH - 6;
      const y = targetY + dropY;

      ctx.save();
      ctx.globalAlpha = alpha;

      // Product body
      ctx.fillStyle = product.color;
      ctx.beginPath();
      ctx.roundRect(x, y, productW, productH, 3);
      ctx.fill();

      // Product highlight
      ctx.fillStyle = 'rgba(255,255,255,0.15)';
      ctx.beginPath();
      ctx.roundRect(x + 1, y + 1, productW - 2, productH * 0.3, 3);
      ctx.fill();

      // Compliance badge
      if (product.complianceChecked) {
        ctx.fillStyle = 'rgba(0,201,167,0.9)';
        ctx.beginPath();
        ctx.arc(x + productW - 5, y + 5, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#060d1a';
        ctx.font = `bold 5px monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('✓', x + productW - 5, y + 5.5);
      }

      // Label
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.font = `bold ${Math.max(productW * 0.18, 7)}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(product.label, x + productW / 2, y + productH / 2);

      ctx.restore();
    }

    // Phase timings (in seconds)
    const PHASE_DURATIONS = [2.5, 2.0, 5.0, 1.5, 2.0, 4.0]; // data, organise, planogram, complete, kpis, hold+loop

    let lastTime = performance.now();

    function render(now: number) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      const state = stateRef.current;
      state.time += dt;
      state.phaseProgress += dt;

      // Advance phase
      if (state.phaseProgress >= PHASE_DURATIONS[state.phase]) {
        state.phaseProgress = 0;
        state.phase = (state.phase + 1) % PHASE_DURATIONS.length;

        // Reset products when looping
        if (state.phase === 0) {
          productsRef.current.forEach(p => { p.placed = false; p.complianceChecked = false; });
        }
      }

      const { W, H } = getSize();
      ctx.clearRect(0, 0, W, H);

      // Background
      ctx.fillStyle = '#060d1a';
      ctx.fillRect(0, 0, W, H);

      const phase = state.phase;
      const progress = state.phaseProgress / PHASE_DURATIONS[phase];

      // ── PHASE 0: Data stream ──
      if (phase === 0 || (phase === 5 && progress > 0.7)) {
        const dataAlpha = phase === 0 ? 1 : 1 - (progress - 0.7) / 0.3;
        dataParticlesRef.current.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -50) p.x = W + 50;
          if (p.x > W + 50) p.x = -50;
          if (p.y < -20) p.y = H + 20;
          if (p.y > H + 20) p.y = -20;

          ctx.save();
          ctx.globalAlpha = p.opacity * dataAlpha;
          ctx.fillStyle = TEAL;
          ctx.font = `${p.size}px monospace`;
          ctx.textAlign = 'left';
          ctx.textBaseline = 'top';
          ctx.fillText(p.value, p.x, p.y);
          ctx.restore();
        });

        if (phase === 0) {
          // Central pulse
          const pulse = Math.sin(state.time * 4) * 0.5 + 0.5;
          ctx.save();
          ctx.globalAlpha = 0.2 + pulse * 0.3;
          ctx.strokeStyle = TEAL;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(W / 2, H / 2, 40 + pulse * 20, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();

          // Label
          ctx.save();
          ctx.globalAlpha = 0.8;
          ctx.fillStyle = WHITE;
          ctx.font = `bold ${Math.min(W * 0.025, 18)}px Inter, system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('Analysing category data...', W / 2, H / 2);
          ctx.restore();
        }
      }

      // ── PHASE 1: Organise / decisions ──
      if (phase === 1) {
        // Fade data particles out
        dataParticlesRef.current.forEach(p => {
          p.x += p.vx * (1 - progress);
          p.y += p.vy * (1 - progress);
          ctx.save();
          ctx.globalAlpha = p.opacity * (1 - progress);
          ctx.fillStyle = TEAL;
          ctx.font = `${p.size}px monospace`;
          ctx.fillText(p.value, p.x, p.y);
          ctx.restore();
        });

        // Shelf fading in
        drawShelf(ctx, W, H, progress * 0.6);

        // Decision nodes appearing
        const nodes = [
          { x: W * 0.2, y: H * 0.35, label: 'Range\nArchitecture' },
          { x: W * 0.5, y: H * 0.25, label: 'Supplier\nVerification' },
          { x: W * 0.8, y: H * 0.35, label: 'Compliance\nMapping' },
          { x: W * 0.35, y: H * 0.65, label: 'SKU\nSelection' },
          { x: W * 0.65, y: H * 0.65, label: 'Planogram\nDesign' },
        ];

        nodes.forEach((node, i) => {
          const nodeAlpha = Math.max(0, progress * 5 - i * 0.8);
          if (nodeAlpha <= 0) return;

          ctx.save();
          ctx.globalAlpha = Math.min(nodeAlpha, 1) * 0.9;
          ctx.strokeStyle = TEAL;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 28, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fillStyle = 'rgba(0,201,167,0.1)';
          ctx.fill();

          const lines = node.label.split('\n');
          ctx.fillStyle = WHITE;
          ctx.font = `bold ${Math.min(W * 0.018, 11)}px Inter, system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          lines.forEach((line, li) => {
            ctx.fillText(line, node.x, node.y + (li - (lines.length - 1) / 2) * 13);
          });
          ctx.restore();
        });

        // Connection lines between nodes
        if (progress > 0.5) {
          const lineAlpha = (progress - 0.5) / 0.5;
          ctx.save();
          ctx.globalAlpha = lineAlpha * 0.4;
          ctx.strokeStyle = TEAL;
          ctx.lineWidth = 0.75;
          ctx.setLineDash([4, 4]);
          const pairs = [[0, 1], [1, 2], [0, 3], [3, 4], [4, 2]];
          pairs.forEach(([a, b]) => {
            ctx.beginPath();
            ctx.moveTo(nodes[a].x, nodes[a].y);
            ctx.lineTo(nodes[b].x, nodes[b].y);
            ctx.stroke();
          });
          ctx.setLineDash([]);
          ctx.restore();
        }
      }

      // ── PHASE 2: Planogram builds ──
      if (phase === 2 || phase >= 3) {
        const shelfAlpha = phase === 2 ? 0.6 + progress * 0.4 : 1;
        drawShelf(ctx, W, H, shelfAlpha);

        const totalProducts = productsRef.current.length;
        const productsToPlace = phase === 2
          ? Math.floor(progress * totalProducts)
          : totalProducts;

        productsRef.current.forEach((product, i) => {
          if (i >= productsToPlace) return;

          if (!product.placed) {
            product.placed = true;
          }

          // Staggered compliance check appearance
          const checkDelay = i / totalProducts;
          if (phase === 2 && progress > checkDelay + 0.1) {
            product.complianceChecked = true;
          } else if (phase >= 3) {
            product.complianceChecked = true;
          }

          // Drop animation
          const placedProgress = phase === 2
            ? Math.min(1, (progress - i / totalProducts) * totalProducts * 2)
            : 1;

          const dropY = placedProgress < 1
            ? (1 - easeOutBounce(Math.max(0, placedProgress))) * -H * 0.4
            : 0;

          const productAlpha = phase === 2
            ? Math.min(1, placedProgress * 3)
            : 1;

          drawProduct(ctx, W, H, product, dropY, productAlpha);
        });

        if (phase === 2) {
          ctx.save();
          ctx.globalAlpha = 0.7;
          ctx.fillStyle = TEAL;
          ctx.font = `bold ${Math.min(W * 0.022, 14)}px Inter, system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText('Building planogram...', W / 2, H * 0.06);
          ctx.restore();
        }
      }

      // ── PHASE 3: Complete flash ──
      if (phase === 3) {
        const flashAlpha = Math.sin(progress * Math.PI) * 0.3;
        ctx.save();
        ctx.globalAlpha = flashAlpha;
        ctx.fillStyle = TEAL;
        ctx.fillRect(0, 0, W, H);
        ctx.restore();
      }

      // ── PHASE 4: KPIs appear ──
      if (phase >= 4 && phase < 5) {
        const kpis = [
          { label: 'On-Shelf Availability', value: '97.2%', x: W * 0.15 },
          { label: 'ADV Uplift', value: '+4.4%', x: W * 0.5 },
          { label: 'Compliance Verified', value: '100%', x: W * 0.85 },
        ];

        kpis.forEach((kpi, i) => {
          const kpiProgress = Math.min(1, Math.max(0, (progress - i * 0.2) * 3));
          if (kpiProgress <= 0) return;

          ctx.save();
          ctx.globalAlpha = kpiProgress;

          // KPI card
          const cardW = Math.min(W * 0.22, 130);
          ctx.fillStyle = 'rgba(6,13,26,0.92)';
          ctx.strokeStyle = 'rgba(0,201,167,0.4)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(kpi.x - cardW / 2, H * 0.06, cardW, H * 0.12, 6);
          ctx.fill();
          ctx.stroke();

          // Value
          ctx.fillStyle = TEAL;
          ctx.font = `bold ${Math.min(W * 0.032, 20)}px Inter, system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText(kpi.value, kpi.x, H * 0.075);

          // Label
          ctx.fillStyle = 'rgba(143,163,186,0.9)';
          ctx.font = `${Math.min(W * 0.016, 10)}px Inter, system-ui, sans-serif`;
          ctx.fillText(kpi.label, kpi.x, H * 0.075 + H * 0.04);

          ctx.restore();
        });
      }

      // ── PHASE 5: Hold and fade out ──
      if (phase === 5 && progress < 0.7) {
        // Hold the complete planogram with KPIs visible
        const kpis = [
          { label: 'On-Shelf Availability', value: '97.2%', x: W * 0.15 },
          { label: 'ADV Uplift', value: '+4.4%', x: W * 0.5 },
          { label: 'Compliance Verified', value: '100%', x: W * 0.85 },
        ];

        kpis.forEach((kpi) => {
          const cardW = Math.min(W * 0.22, 130);
          ctx.save();
          ctx.fillStyle = 'rgba(6,13,26,0.92)';
          ctx.strokeStyle = 'rgba(0,201,167,0.4)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(kpi.x - cardW / 2, H * 0.06, cardW, H * 0.12, 6);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = TEAL;
          ctx.font = `bold ${Math.min(W * 0.032, 20)}px Inter, system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText(kpi.value, kpi.x, H * 0.075);
          ctx.fillStyle = 'rgba(143,163,186,0.9)';
          ctx.font = `${Math.min(W * 0.016, 10)}px Inter, system-ui, sans-serif`;
          ctx.fillText(kpi.label, kpi.x, H * 0.075 + H * 0.04);
          ctx.restore();
        });
      }

      animRef.current = requestAnimationFrame(render);
    }

    animRef.current = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [prefersReduced]);

  function easeOutBounce(t: number): number {
    const n1 = 7.5625, d1 = 2.75;
    if (t < 1 / d1) return n1 * t * t;
    if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
    if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
    return n1 * (t -= 2.625 / d1) * t + 0.984375;
  }

  if (prefersReduced) {
    return (
      <div className="w-full aspect-video rounded-2xl border border-white/10 bg-si-bg-secondary flex items-center justify-center">
        <div className="text-center px-8">
          <p className="text-si-teal font-mono text-sm mb-2">PLANOGRAM COMPLETE</p>
          <p className="text-si-white-muted text-xs">End-to-end category management — from data to shelf.</p>
        </div>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="w-full aspect-video rounded-2xl border border-white/10"
      style={{ background: '#060d1a' }}
      aria-label="Animated category management visualisation: data analysis, range decisions, planogram assembly, and performance metrics"
      role="img"
    />
  );
}
```

---

## TASK 4: CREATE `components/AboutVisual.tsx` — ANIMATED GLOBAL TIMELINE

**File:** `DEVELOPMENT/components/AboutVisual.tsx`

```typescript
'use client';

import { useEffect, useRef } from 'react';

interface Market {
  x: number;
  y: number;
  label: string;
  period: string;
  stat: string;
  color: string;
}

export default function AboutVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
    }
    resize();

    const markets: Market[] = [
      { x: 0.18, y: 0.35, label: 'USA', period: '1997–2006', stat: '3,500+ stores', color: '#00c9a7' },
      { x: 0.42, y: 0.25, label: 'UK', period: '2003–2006', stat: 'Top 2 grocers', color: '#00b4e6' },
      { x: 0.78, y: 0.45, label: 'Australia', period: '2007–present', stat: '330+ stores', color: '#00c9a7' },
    ];

    let time = 0;
    let lineProgress = 0;

    function render() {
      const rect = canvas!.getBoundingClientRect();
      const W = rect.width, H = rect.height;
      ctx!.clearRect(0, 0, W, H);

      time += 0.016;
      lineProgress = Math.min(lineProgress + 0.008, 1);

      // Background
      ctx!.fillStyle = '#060d1a';
      ctx!.fillRect(0, 0, W, H);

      // Subtle grid
      ctx!.save();
      ctx!.globalAlpha = 0.04;
      ctx!.strokeStyle = '#00c9a7';
      ctx!.lineWidth = 0.5;
      for (let i = 0; i < 12; i++) {
        ctx!.beginPath();
        ctx!.moveTo(i * W / 12, 0);
        ctx!.lineTo(i * W / 12, H);
        ctx!.stroke();
      }
      ctx!.restore();

      // Connection lines between markets
      ctx!.save();
      ctx!.strokeStyle = 'rgba(0,201,167,0.25)';
      ctx!.lineWidth = 1;
      ctx!.setLineDash([6, 4]);
      for (let i = 0; i < markets.length - 1; i++) {
        const from = markets[i], to = markets[i + 1];
        const segProgress = Math.min(1, Math.max(0, (lineProgress - i * 0.3) / 0.4));
        if (segProgress <= 0) continue;
        const ex = from.x * W + (to.x - from.x) * W * segProgress;
        const ey = from.y * H + (to.y - from.y) * H * segProgress;
        ctx!.beginPath();
        ctx!.moveTo(from.x * W, from.y * H);
        ctx!.lineTo(ex, ey);
        ctx!.stroke();
      }
      ctx!.setLineDash([]);
      ctx!.restore();

      // Market nodes
      markets.forEach((m, i) => {
        const nodeProgress = Math.min(1, Math.max(0, lineProgress * 3 - i * 0.8));
        if (nodeProgress <= 0) return;

        const nx = m.x * W, ny = m.y * H;
        const pulse = Math.sin(time * 2 + i * 2.1) * 0.5 + 0.5;

        // Outer pulse ring
        ctx!.save();
        ctx!.globalAlpha = (0.15 + pulse * 0.15) * nodeProgress;
        ctx!.strokeStyle = m.color;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.arc(nx, ny, 30 + pulse * 8, 0, Math.PI * 2);
        ctx!.stroke();
        ctx!.restore();

        // Inner ring
        ctx!.save();
        ctx!.globalAlpha = nodeProgress * 0.8;
        ctx!.strokeStyle = m.color;
        ctx!.lineWidth = 1.5;
        ctx!.fillStyle = 'rgba(6,13,26,0.9)';
        ctx!.beginPath();
        ctx!.arc(nx, ny, 20, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.stroke();
        ctx!.restore();

        // Label text
        ctx!.save();
        ctx!.globalAlpha = nodeProgress;
        ctx!.fillStyle = m.color;
        ctx!.font = `bold ${Math.min(W * 0.028, 16)}px Inter, system-ui, sans-serif`;
        ctx!.textAlign = 'center';
        ctx!.textBaseline = 'middle';
        ctx!.fillText(m.label, nx, ny);
        ctx!.restore();

        // Info card
        const cardX = nx + (nx > W * 0.6 ? -140 : 35);
        const cardY = ny - 30;
        const cardW = 120;
        const cardH = 50;

        ctx!.save();
        ctx!.globalAlpha = nodeProgress * 0.95;
        ctx!.fillStyle = 'rgba(10,22,40,0.92)';
        ctx!.strokeStyle = `rgba(0,201,167,0.3)`;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.roundRect(cardX, cardY, cardW, cardH, 6);
        ctx!.fill();
        ctx!.stroke();

        ctx!.fillStyle = '#f0f4f8';
        ctx!.font = `bold ${Math.min(W * 0.018, 11)}px Inter, system-ui, sans-serif`;
        ctx!.textAlign = 'left';
        ctx!.textBaseline = 'top';
        ctx!.fillText(m.period, cardX + 10, cardY + 8);

        ctx!.fillStyle = m.color;
        ctx!.font = `bold ${Math.min(W * 0.022, 13)}px Inter, system-ui, sans-serif`;
        ctx!.fillText(m.stat, cardX + 10, cardY + 26);
        ctx!.restore();
      });

      // Title
      ctx!.save();
      ctx!.globalAlpha = 0.6;
      ctx!.fillStyle = 'rgba(143,163,186,0.7)';
      ctx!.font = `${Math.min(W * 0.018, 11)}px monospace`;
      ctx!.textAlign = 'center';
      ctx!.textBaseline = 'bottom';
      ctx!.fillText('25 years · 3 markets · 10 product categories', W / 2, H - 10);
      ctx!.restore();

      animRef.current = requestAnimationFrame(render);
    }

    animRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full rounded-2xl border border-white/10"
      style={{ height: '220px', background: '#060d1a' }}
      aria-label="Animated map showing Synergistic Interaction's market presence across USA, UK, and Australia"
      role="img"
    />
  );
}
```

---

## TASK 5: CREATE `components/OurApproachVisual.tsx` — NINE COMPONENTS DIAGRAM

**File:** `DEVELOPMENT/components/OurApproachVisual.tsx`

```typescript
'use client';

import { useEffect, useRef } from 'react';

const COMPONENTS = [
  { label: 'Product\nVerification', tier: 'gate' },
  { label: 'Supply Chain\nAudit', tier: 'gate' },
  { label: 'Category\nMapping', tier: 'preventative' },
  { label: 'Risk\nAssessment', tier: 'preventative' },
  { label: 'Documentation\nMgmt', tier: 'monitoring' },
  { label: 'Real-Time\nMonitoring', tier: 'monitoring' },
  { label: 'Test Report\nRequirements', tier: 'gate' },
  { label: 'Importer\nVerification', tier: 'gate' },
  { label: 'Compliance\nCulture', tier: 'cultural' },
];

const TIER_COLORS: Record<string, string> = {
  gate: '#ef4444',
  preventative: '#f59e0b',
  monitoring: '#3b82f6',
  cultural: '#a855f7',
};

export default function OurApproachVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
    }
    resize();

    let time = 0;

    function render() {
      const rect = canvas!.getBoundingClientRect();
      const W = rect.width, H = rect.height;
      ctx!.clearRect(0, 0, W, H);
      ctx!.fillStyle = '#060d1a';
      ctx!.fillRect(0, 0, W, H);

      if (!mq.matches) time += 0.016;

      // Draw 9 nodes in a 3×3 grid
      const cols = 3, rows = 3;
      const padX = W * 0.1, padY = H * 0.12;
      const cellW = (W - padX * 2) / cols;
      const cellH = (H - padY * 2) / rows;

      // Center node (component 9) gets special treatment
      COMPONENTS.forEach((comp, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cx = padX + col * cellW + cellW / 2;
        const cy = padY + row * cellH + cellH / 2;
        const r = Math.min(cellW, cellH) * 0.32;
        const color = TIER_COLORS[comp.tier];
        const pulse = Math.sin(time * 1.5 + i * 0.7) * 0.5 + 0.5;

        // Connection lines to adjacent nodes
        if (col < cols - 1) {
          const nx = padX + (col + 1) * cellW + cellW / 2;
          ctx!.save();
          ctx!.globalAlpha = 0.08;
          ctx!.strokeStyle = '#00c9a7';
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(cx, cy);
          ctx!.lineTo(nx, cy);
          ctx!.stroke();
          ctx!.restore();
        }
        if (row < rows - 1) {
          const ny = padY + (row + 1) * cellH + cellH / 2;
          ctx!.save();
          ctx!.globalAlpha = 0.08;
          ctx!.strokeStyle = '#00c9a7';
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(cx, cy);
          ctx!.lineTo(cx, ny);
          ctx!.stroke();
          ctx!.restore();
        }

        // Pulse ring
        ctx!.save();
        ctx!.globalAlpha = (0.06 + pulse * 0.08);
        ctx!.strokeStyle = color;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.arc(cx, cy, r + 6 + pulse * 4, 0, Math.PI * 2);
        ctx!.stroke();
        ctx!.restore();

        // Node circle
        ctx!.save();
        ctx!.fillStyle = `${color}18`;
        ctx!.strokeStyle = `${color}60`;
        ctx!.lineWidth = 1.5;
        ctx!.beginPath();
        ctx!.arc(cx, cy, r, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.stroke();
        ctx!.restore();

        // Number
        ctx!.save();
        ctx!.fillStyle = color;
        ctx!.font = `bold ${Math.min(r * 0.5, 14)}px monospace`;
        ctx!.textAlign = 'center';
        ctx!.textBaseline = 'middle';
        ctx!.fillText(String(i + 1).padStart(2, '0'), cx, cy - r * 0.2);
        ctx!.restore();

        // Label
        const lines = comp.label.split('\n');
        ctx!.save();
        ctx!.fillStyle = 'rgba(240,244,248,0.75)';
        ctx!.font = `${Math.min(r * 0.28, 9)}px Inter, system-ui, sans-serif`;
        ctx!.textAlign = 'center';
        ctx!.textBaseline = 'top';
        lines.forEach((line, li) => {
          ctx!.fillText(line, cx, cy + r * 0.15 + li * (r * 0.3));
        });
        ctx!.restore();
      });

      // Legend
      const legend = [
        { label: 'Hard Gate', tier: 'gate' },
        { label: 'Preventative', tier: 'preventative' },
        { label: 'Monitoring', tier: 'monitoring' },
        { label: 'Cultural', tier: 'cultural' },
      ];
      ctx!.save();
      legend.forEach((l, i) => {
        const lx = W * 0.08 + i * (W * 0.24);
        ctx!.fillStyle = TIER_COLORS[l.tier];
        ctx!.beginPath();
        ctx!.arc(lx, H - 14, 4, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = 'rgba(143,163,186,0.6)';
        ctx!.font = `${Math.min(W * 0.016, 9)}px Inter, system-ui, sans-serif`;
        ctx!.textAlign = 'left';
        ctx!.textBaseline = 'middle';
        ctx!.fillText(l.label, lx + 8, H - 14);
      });
      ctx!.restore();

      animRef.current = requestAnimationFrame(render);
    }

    animRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full rounded-2xl border border-white/10"
      style={{ height: '280px', background: '#060d1a' }}
      aria-label="Nine-component compliance architecture diagram"
      role="img"
    />
  );
}
```

---

## TASK 6: CREATE `components/ServicesVisual.tsx` — FOUR SERVICE ICONS ANIMATED

**File:** `DEVELOPMENT/components/ServicesVisual.tsx`

```typescript
'use client';

import { useEffect, useRef } from 'react';

export default function ServicesVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
    }
    resize();

    const services = [
      { label: 'Category\nTransformation', icon: '⬡', color: '#00c9a7' },
      { label: 'Supplier &\nRetailer Partnership', icon: '⇄', color: '#00b4e6' },
      { label: 'Retail Systems\n& Analytics', icon: '▤', color: '#7c3aed' },
      { label: 'New Market\nEntry', icon: '◎', color: '#f59e0b' },
    ];

    let time = 0;

    function render() {
      const rect = canvas!.getBoundingClientRect();
      const W = rect.width, H = rect.height;
      ctx!.clearRect(0, 0, W, H);
      ctx!.fillStyle = '#060d1a';
      ctx!.fillRect(0, 0, W, H);
      time += 0.016;

      const cellW = W / 4;

      services.forEach((s, i) => {
        const cx = cellW * i + cellW / 2;
        const cy = H / 2;
        const pulse = Math.sin(time * 1.2 + i * 1.5) * 0.5 + 0.5;
        const r = Math.min(cellW, H) * 0.3;

        // Divider
        if (i > 0) {
          ctx!.save();
          ctx!.globalAlpha = 0.1;
          ctx!.strokeStyle = '#f0f4f8';
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(cellW * i, H * 0.2);
          ctx!.lineTo(cellW * i, H * 0.8);
          ctx!.stroke();
          ctx!.restore();
        }

        // Pulse ring
        ctx!.save();
        ctx!.globalAlpha = 0.08 + pulse * 0.1;
        ctx!.strokeStyle = s.color;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.arc(cx, cy - H * 0.08, r + 4 + pulse * 6, 0, Math.PI * 2);
        ctx!.stroke();
        ctx!.restore();

        // Circle
        ctx!.save();
        ctx!.fillStyle = `${s.color}15`;
        ctx!.strokeStyle = `${s.color}50`;
        ctx!.lineWidth = 1.5;
        ctx!.beginPath();
        ctx!.arc(cx, cy - H * 0.08, r, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.stroke();
        ctx!.restore();

        // Icon
        ctx!.save();
        ctx!.fillStyle = s.color;
        ctx!.font = `${r * 0.7}px monospace`;
        ctx!.textAlign = 'center';
        ctx!.textBaseline = 'middle';
        ctx!.fillText(s.icon, cx, cy - H * 0.08);
        ctx!.restore();

        // Label
        const lines = s.label.split('\n');
        ctx!.save();
        ctx!.fillStyle = 'rgba(240,244,248,0.8)';
        ctx!.font = `${Math.min(W * 0.022, 11)}px Inter, system-ui, sans-serif`;
        ctx!.textAlign = 'center';
        ctx!.textBaseline = 'top';
        lines.forEach((line, li) => {
          ctx!.fillText(line, cx, cy + H * 0.22 + li * (H * 0.12));
        });
        ctx!.restore();
      });

      animRef.current = requestAnimationFrame(render);
    }

    animRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full rounded-2xl border border-white/10"
      style={{ height: '180px', background: '#060d1a' }}
      aria-label="Four service lines: Category Transformation, Supplier and Retailer Partnership, Retail Systems and Analytics, New Market Entry"
      role="img"
    />
  );
}
```

---

## TASK 7: CREATE `components/CategoryGridVisual.tsx` — ANIMATED CATEGORY TILES

**File:** `DEVELOPMENT/components/CategoryGridVisual.tsx`

```typescript
'use client';

import { useEffect, useRef } from 'react';

const CATS = [
  { label: 'Hardware', icon: '🔧', color: 'rgba(0,201,167,0.7)' },
  { label: 'Electrical', icon: '⚡', color: 'rgba(0,180,230,0.7)' },
  { label: 'Garden', icon: '🌿', color: 'rgba(80,200,100,0.7)' },
  { label: 'Cleaning', icon: '✦', color: 'rgba(180,100,220,0.7)' },
  { label: 'Furniture', icon: '▦', color: 'rgba(180,140,100,0.7)' },
  { label: 'Personal Care', icon: '◉', color: 'rgba(220,120,160,0.7)' },
  { label: 'Barbecue', icon: '◈', color: 'rgba(240,100,60,0.7)' },
  { label: 'Baby', icon: '◯', color: 'rgba(240,180,80,0.7)' },
  { label: 'Children\'s', icon: '◆', color: 'rgba(100,160,240,0.7)' },
  { label: 'Beverages', icon: '◌', color: 'rgba(60,200,180,0.7)' },
];

export default function CategoryGridVisual() {
  const canvasRef = useRef<HTMLCanvasRef>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
    }
    resize();

    let time = 0;

    function render() {
      const rect = canvas!.getBoundingClientRect();
      const W = rect.width, H = rect.height;
      ctx!.clearRect(0, 0, W, H);
      ctx!.fillStyle = '#060d1a';
      ctx!.fillRect(0, 0, W, H);
      time += 0.016;

      const cols = 5, rows = 2;
      const pad = 8;
      const cellW = (W - pad * (cols + 1)) / cols;
      const cellH = (H - pad * (rows + 1)) / rows;

      CATS.forEach((cat, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = pad + col * (cellW + pad);
        const y = pad + row * (cellH + pad);
        const pulse = Math.sin(time * 1.0 + i * 0.6) * 0.5 + 0.5;

        // Card background
        ctx!.save();
        ctx!.fillStyle = `rgba(10,22,40,0.8)`;
        ctx!.strokeStyle = cat.color.replace('0.7)', `${0.2 + pulse * 0.15})`);
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.roundRect(x, y, cellW, cellH, 6);
        ctx!.fill();
        ctx!.stroke();
        ctx!.restore();

        // Icon
        ctx!.save();
        ctx!.font = `${Math.min(cellH * 0.35, 18)}px monospace`;
        ctx!.textAlign = 'center';
        ctx!.textBaseline = 'middle';
        ctx!.fillStyle = cat.color;
        ctx!.fillText(cat.icon, x + cellW / 2, y + cellH * 0.38);
        ctx!.restore();

        // Label
        ctx!.save();
        ctx!.fillStyle = 'rgba(240,244,248,0.8)';
        ctx!.font = `${Math.min(cellW * 0.14, 9)}px Inter, system-ui, sans-serif`;
        ctx!.textAlign = 'center';
        ctx!.textBaseline = 'top';
        ctx!.fillText(cat.label, x + cellW / 2, y + cellH * 0.64);
        ctx!.restore();
      });

      animRef.current = requestAnimationFrame(render);
    }

    animRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full rounded-2xl border border-white/10"
      style={{ height: '160px', background: '#060d1a' }}
      aria-label="Ten product categories: Hardware, Electrical, Garden, Cleaning, Furniture, Personal Care, Barbecue, Baby, Children's Textiles, Beverages"
      role="img"
    />
  );
}
```

Fix the TypeScript ref type in CategoryGridVisual.tsx — replace `useRef<HTMLCanvasRef>` with `useRef<HTMLCanvasElement>`.

---

## TASK 8: UPDATE `app/page.tsx` — USE NEW HERO VISUAL

Replace the `VisualizationWrapper` with `HomepageHero` in the hero section of `app/page.tsx`:

```bash
grep -n "VisualizationWrapper" app/page.tsx
```

Replace the import line:
```typescript
import VisualizationWrapper from '@/components/VisualizationWrapper';
```
With:
```typescript
import HomepageHero from '@/components/HomepageHero';
```

Replace the component usage in the hero grid:
```typescript
<VisualizationWrapper />
```
With:
```typescript
<HomepageHero />
```

Remove the caption line below the visual (the `<p>` tag about "non-compliant nodes intercepted") — the new visual has its own built-in labels.

---

## TASK 9: UPDATE `app/about/page.tsx` — ADD ABOUT VISUAL

Add the `AboutVisual` component below the header section. After the closing `</section>` of the header section, add:

```typescript
import AboutVisual from '@/components/AboutVisual';
```
Add to imports at top of file.

Then after the header `</section>` and before the timeline `<section>`, insert:

```typescript
{/* Global footprint visual */}
<section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/5">
  <div className="max-w-4xl mx-auto">
    <AboutVisual />
  </div>
</section>
```

---

## TASK 10: UPDATE `app/services/page.tsx` — ADD SERVICES VISUAL

Add `ServicesVisual` to the services page header section. After the page header `</section>`, add:

```typescript
import ServicesVisual from '@/components/ServicesVisual';
```

Then after the header section closing tag, insert:

```typescript
<section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-si-bg-secondary">
  <div className="max-w-4xl mx-auto">
    <ServicesVisual />
  </div>
</section>
```

---

## TASK 11: UPDATE `app/category-expertise/page.tsx` — ADD CATEGORY GRID VISUAL + REORDER CATEGORIES

First add the import and visual after the header section:

```typescript
import CategoryGridVisual from '@/components/CategoryGridVisual';
```

After the header `</section>`, insert:

```typescript
<section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-si-bg-secondary">
  <div className="max-w-4xl mx-auto">
    <CategoryGridVisual />
  </div>
</section>
```

Then reorder the `categories` array in `app/category-expertise/page.tsx`. The new order is:

1. Hardware & Home Improvement (number: '01')
2. Electrical & Power Tools (number: '02')
3. Gardening & Outdoor (number: '03')
4. Cleaning & Household Chemicals (number: '04')
5. Furniture & Homewares (number: '05')
6. Personal Care & Cosmetics (number: '06')
7. Barbecue & Gas Products (number: '07')
8. Baby Products (number: '08') — remove `pilot: true` flag entirely
9. Children's Textiles & Clothing (number: '09')
10. Water & Beverages (number: '10')

Update the `number` field for each category to match its new position. Remove the `pilot` field and the `{cat.pilot && ...}` JSX from the page entirely.

---

## TASK 12: UPDATE `app/our-approach/page.tsx` — ADD VISUAL + REMOVE TARGETED LANGUAGE

Add import:
```typescript
import OurApproachVisual from '@/components/OurApproachVisual';
```

After the page header `</section>`, insert:

```typescript
<section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-si-bg-secondary">
  <div className="max-w-4xl mx-auto">
    <OurApproachVisual />
  </div>
</section>
```

Then update the `ComponentAccordion` in this page to use `operationalNote` instead of `preventionExample`. In `components/ComponentAccordion.tsx`, find the section that renders `component.preventionExample` and replace:

```typescript
{component.preventionExample && (
  <div className="p-4 rounded-xl bg-si-teal/5 border border-si-teal/10">
    <p className="text-si-teal text-xs font-semibold uppercase tracking-wide mb-2">
      Prevention architecture
    </p>
    <p className="text-si-white-muted text-sm leading-relaxed italic">
      {component.preventionExample}
    </p>
  </div>
)}
```

With:

```typescript
{'operationalNote' in component && (component as any).operationalNote && (
  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
    <p className="text-si-white-dim text-xs font-semibold uppercase tracking-wide mb-2">
      How this works in practice
    </p>
    <p className="text-si-white-muted text-sm leading-relaxed">
      {(component as any).operationalNote}
    </p>
  </div>
)}
```

---

## TASK 13: UPDATE `components/ComplianceVisualization.tsx` — REPLACE WITH UPGRADED VERSION

The existing canvas network is now only used on the Why Compliance Matters page. Replace it with a cleaner, more professional version:

**File:** `DEVELOPMENT/components/ComplianceVisualization.tsx`

```typescript
'use client';

import { useEffect, useRef } from 'react';

interface Node {
  id: string;
  type: 'supplier' | 'dc' | 'store';
  x: number;
  y: number;
  vx: number;
  vy: number;
  compliant: boolean;
}

interface Particle {
  fromIdx: number;
  toIdx: number;
  t: number;
  speed: number;
}

const NODE_DEFS: Omit<Node, 'vx' | 'vy'>[] = [
  { id: 's1', type: 'supplier', x: 0.08, y: 0.20, compliant: true },
  { id: 's2', type: 'supplier', x: 0.08, y: 0.40, compliant: true },
  { id: 's3', type: 'supplier', x: 0.08, y: 0.60, compliant: false },
  { id: 's4', type: 'supplier', x: 0.08, y: 0.80, compliant: true },
  { id: 's5', type: 'supplier', x: 0.20, y: 0.12, compliant: false },
  { id: 'd1', type: 'dc', x: 0.45, y: 0.35, compliant: true },
  { id: 'd2', type: 'dc', x: 0.45, y: 0.65, compliant: true },
  { id: 'r1', type: 'store', x: 0.82, y: 0.20, compliant: true },
  { id: 'r2', type: 'store', x: 0.82, y: 0.40, compliant: true },
  { id: 'r3', type: 'store', x: 0.82, y: 0.60, compliant: true },
  { id: 'r4', type: 'store', x: 0.82, y: 0.80, compliant: true },
];

const EDGES: [string, string][] = [
  ['s1', 'd1'], ['s2', 'd1'], ['s3', 'd1'],
  ['s4', 'd2'], ['s5', 'd2'],
  ['d1', 'r1'], ['d1', 'r2'],
  ['d2', 'r3'], ['d2', 'r4'],
];

export default function ComplianceVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    const nodes: Node[] = NODE_DEFS.map(n => ({
      ...n,
      vx: (Math.random() - 0.5) * 0.0004,
      vy: (Math.random() - 0.5) * 0.0004,
    }));

    const edgeObjects = EDGES.map(([a, b]) => ({
      from: nodes.findIndex(n => n.id === a),
      to: nodes.findIndex(n => n.id === b),
    })).filter(e => e.from >= 0 && e.to >= 0);

    const particles: Particle[] = edgeObjects.map((e, i) => ({
      fromIdx: e.from,
      toIdx: e.to,
      t: (i / edgeObjects.length),
      speed: 0.003 + Math.random() * 0.002,
    }));

    let time = 0;

    function render() {
      const rect = canvas!.getBoundingClientRect();
      const W = rect.width, H = rect.height;
      ctx!.clearRect(0, 0, W, H);
      ctx!.fillStyle = '#060d1a';
      ctx!.fillRect(0, 0, W, H);
      time += 0.016;

      // Subtle drift
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0.03 || n.x > 0.97) n.vx *= -1;
        if (n.y < 0.03 || n.y > 0.97) n.vy *= -1;
      });

      // Edges
      edgeObjects.forEach(e => {
        const from = nodes[e.from], to = nodes[e.to];
        if (!from || !to) return;
        const blocked = !from.compliant;
        ctx!.save();
        ctx!.globalAlpha = blocked ? 0.12 : 0.1;
        ctx!.strokeStyle = blocked ? '#ef4444' : '#00c9a7';
        ctx!.lineWidth = 0.75;
        ctx!.beginPath();
        ctx!.moveTo(from.x * W, from.y * H);
        ctx!.lineTo(to.x * W, to.y * H);
        ctx!.stroke();
        ctx!.restore();
      });

      // Particles
      particles.forEach(p => {
        const from = nodes[p.fromIdx], to = nodes[p.toIdx];
        if (!from || !to) return;
        const blocked = !from.compliant;
        const maxT = blocked ? 0.48 : 1;
        p.t += p.speed;
        if (p.t > maxT) p.t = 0;

        const px = from.x * W + (to.x - from.x) * W * p.t;
        const py = from.y * H + (to.y - from.y) * H * p.t;
        const fade = blocked && p.t > 0.4 ? 1 - (p.t - 0.4) / 0.08 : 1;

        ctx!.save();
        ctx!.globalAlpha = fade * 0.8;
        ctx!.fillStyle = blocked ? '#ef4444' : '#00c9a7';
        ctx!.beginPath();
        ctx!.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      });

      // Nodes
      nodes.forEach(n => {
        const nx = n.x * W, ny = n.y * H;
        const isNC = !n.compliant;
        const r = n.type === 'dc' ? 10 : 7;
        const pulse = Math.sin(time * 2.5 + nx) * 0.5 + 0.5;

        // Glow
        const grd = ctx!.createRadialGradient(nx, ny, r * 0.3, nx, ny, r + (isNC ? 10 + pulse * 6 : 5));
        grd.addColorStop(0, isNC ? 'rgba(239,68,68,0.3)' : 'rgba(0,201,167,0.2)');
        grd.addColorStop(1, 'rgba(0,0,0,0)');
        ctx!.save();
        ctx!.fillStyle = grd;
        ctx!.beginPath();
        ctx!.arc(nx, ny, r + (isNC ? 10 + pulse * 6 : 5), 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();

        // Node
        ctx!.save();
        ctx!.fillStyle = isNC ? 'rgba(25,8,8,0.95)' : 'rgba(6,13,26,0.95)';
        ctx!.strokeStyle = isNC ? `rgba(239,68,68,${0.7 + pulse * 0.3})` : 'rgba(0,201,167,0.6)';
        ctx!.lineWidth = isNC ? 1.5 : 1;
        if (n.type === 'dc') {
          ctx!.beginPath();
          ctx!.rect(nx - r, ny - r, r * 2, r * 2);
        } else {
          ctx!.beginPath();
          ctx!.arc(nx, ny, r, 0, Math.PI * 2);
        }
        ctx!.fill();
        ctx!.stroke();
        ctx!.restore();

        // X mark for non-compliant
        if (isNC) {
          ctx!.save();
          ctx!.fillStyle = `rgba(239,68,68,${0.8 + pulse * 0.2})`;
          ctx!.font = `bold ${r + 1}px monospace`;
          ctx!.textAlign = 'center';
          ctx!.textBaseline = 'middle';
          ctx!.fillText('✕', nx, ny + 0.5);
          ctx!.restore();
        }
      });

      // Legend
      const items = [
        { color: '#00c9a7', label: 'Compliant — flowing freely' },
        { color: '#ef4444', label: 'Non-compliant — intercepted' },
      ];
      items.forEach((item, i) => {
        ctx!.save();
        ctx!.globalAlpha = 0.7;
        ctx!.fillStyle = item.color;
        ctx!.fillRect(10, 10 + i * 18, 8, 8);
        ctx!.fillStyle = 'rgba(143,163,186,0.8)';
        ctx!.font = '10px Inter, system-ui, sans-serif';
        ctx!.textAlign = 'left';
        ctx!.textBaseline = 'top';
        ctx!.fillText(item.label, 24, 11 + i * 18);
        ctx!.restore();
      });

      animRef.current = requestAnimationFrame(render);
    }

    animRef.current = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full aspect-video rounded-2xl border border-white/10 bg-si-bg"
      aria-label="Compliance-by-exception supply chain network showing compliant flows and non-compliant supplier nodes being intercepted"
      role="img"
    />
  );
}
```

---

## TASK 14: BUILD CHECK

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
rm -rf .next
npm run build 2>&1
```

Fix any TypeScript errors immediately:

- `HTMLCanvasRef` → `HTMLCanvasElement` (in CategoryGridVisual.tsx)
- Missing `'use client'` on any file using hooks — add as first line
- `roundRect` not typed — add `ctx.beginPath(); (ctx as any).roundRect(...)` if needed
- Any `import type` issues with canvas components

Keep fixing and rebuilding until build passes with 0 errors.

---

## TASK 15: DEPLOY

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
vercel --prod
```

---

## TASK 16: VERIFY

```bash
LIVE="https://synergistic-interaction.vercel.app"
for path in "" "/about" "/services" "/category-expertise" "/our-approach" "/why-compliance-matters" "/get-started"; do
  echo "$path: $(curl -s -o /dev/null -w '%{http_code}' $LIVE$path)"
done
```

---

## TASK 17: COMMIT AND PUSH

```bash
cd ~/Documents/Synergistic_Interaction
git add -A
git commit -m "Session 8+9: Visual rebuild + content detargeting

VISUALS ADDED:
- HomepageHero.tsx: 5-act planogram sequence animation
- AboutVisual.tsx: animated global market timeline
- OurApproachVisual.tsx: 9-component architecture diagram
- ServicesVisual.tsx: 4 service icon animation
- CategoryGridVisual.tsx: 10-category animated grid
- ComplianceVisualization.tsx: upgraded network animation

CONTENT FIXED:
- lib/compliance-data.ts: all Prevention architecture sections removed
- Specific enforcement charge references removed throughout
- 30% local sourcing target removed from Component 8
- Pilot ready label removed from baby products
- Categories reordered: Hardware first, Baby Products 8th
- Operational note framing replaces enforcement framing

TONE:
- Site reads as established multi-category consultancy
- Compliance integrated as methodology, not as fear trigger
- Dual retailer/supplier audience maintained throughout"

git push origin main
```

---

## TASK 18: PRINT COMPLETION REPORT

```
═══════════════════════════════════════════════════════
SYNERGISTIC INTERACTION — SESSION 8+9 COMPLETE
═══════════════════════════════════════════════════════

VISUALS:
  Homepage planogram sequence:   [ built / error ]
  About global timeline:         [ built / error ]
  Our Approach 9-component:      [ built / error ]
  Services 4-icon animation:     [ built / error ]
  Category grid:                 [ built / error ]

CONTENT:
  Prevention architecture removed:  [ yes / no ]
  Enforcement refs removed:          [ yes / no ]
  30% local sourcing removed:        [ yes / no ]
  Pilot ready label removed:         [ yes / no ]
  Category order updated:            [ yes / no ]

LIVE: https://synergistic-interaction.vercel.app
All pages 200:   [ yes / no ]
Build errors:    [ none / list ]
═══════════════════════════════════════════════════════
```
