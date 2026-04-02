# SYNERGISTIC INTERACTION — FINAL AUTONOMOUS BUILD TO ~100%
## Claude Code: Execute Every Task. Do Not Stop. Do Not Ask for Confirmation.
### Reference: SI_Master_Brief_v7.docx | Target: Production-Ready Website

---

## EXECUTION RULES

1. Work through every task in order. Do not skip any task.
2. When a file already exists, replace it entirely with the version below.
3. When a task says "append" or "update a specific section", make only that change.
4. After every 5 tasks, run `npm run build` in `DEVELOPMENT/` and fix any TypeScript errors before continuing.
5. When `npm run build` throws a type error, fix it immediately and re-run before proceeding.
6. At the very end: run `npm run build` one final time. If it passes, run `npm run dev` and confirm all four pages load. Then commit everything.
7. Never stop to ask a question. If a value is unknown, use the placeholder specified or infer from brief context.

**Working directory for all npm commands:** `C:\Users\itpro\Synergistic_Interaction\DEVELOPMENT\`
**Repository:** `https://github.com/JTOSHIE/Synergistic_Interaction`

---

## PRE-FLIGHT: DEPENDENCY INSTALLATION

```bash
cd C:\Users\itpro\Synergistic_Interaction\DEVELOPMENT
npm install
npm install three three-mesh-bvh gsap @gsap/react react-intersection-observer resend openai
npm install @vercel/analytics @vercel/kv
npm install --save-dev @types/three @types/gsap
```

If `@vercel/kv` fails to install, that is acceptable — skip it and continue.

---

## TASK 1: UPDATE `lib/compliance-data.ts` — ALL NINE COMPONENTS COMPLETE

This is the single source of truth for all component content. Components 1, 2, 4, 5, 6, 7 now have full website copy written to match the V7 brief style and the approved §3.3 language for 3, 8, 9.

**File:** `DEVELOPMENT/lib/compliance-data.ts`

```typescript
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
      { id: '1d', title: 'Compliance File Initiation', description: 'Passing the verification gate initiates the product\'s compliance file (Component 5), creating the evidentiary record from day one.' },
    ],
    preventionExample:
      'Electrical goods, children\'s toys, and baby products require specific mandatory standard verification before any commercial commitment. The verification gate catches non-compliant products at the only point in the process where stopping them costs nothing.',
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
      'The retailer\'s compliance exposure does not begin when the product reaches the shelf. It begins when the supplier relationship is formed. Component 2 treats every new supplier as a compliance entity — not merely a commercial partner — and requires a structured audit before any purchase order is issued. Supplier longevity is not a substitute for supplier compliance. A ten-year supplier relationship provides no legal protection against a product that fails a mandatory safety standard.',
    subComponents: [
      { id: '2a', title: 'Supplier Pre-Qualification', description: 'New suppliers must complete a structured compliance capability assessment before their first purchase order is issued.' },
      { id: '2b', title: 'Documentation Capacity Assessment', description: 'The audit determines whether the supplier can produce the compliance documentation their product categories require — certificates, test reports, EESS registrations.' },
      { id: '2c', title: 'Risk Tiering', description: 'Suppliers are assigned a compliance risk tier based on audit outcomes. Tier 1 suppliers (baby, electrical, children\'s categories) face the most rigorous pre-qualification requirements.' },
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
      'Electrical goods. Baby products. Children\'s toys. These categories carry Australia\'s most demanding mandatory safety frameworks and the highest maximum penalties for non-compliance. Our category-specific risk mapping ensures that Tier 1 categories receive the depth of compliance architecture they legally require — including mandatory EESS registration verification for all electrical goods and RCM confirmation before any purchase order is issued.',
    subComponents: [
      { id: '3a', title: 'Tier 1 Category Identification', description: 'Electrical goods, baby products, and children\'s toys are classified as Tier 1 — requiring the most intensive compliance architecture.' },
      { id: '3b', title: 'EESS Registration Verification', description: 'For all electrical goods: mandatory check against the Electrical Equipment Safety System (EESS) database before any purchase order. RCM mark confirmation required.' },
      { id: '3c', title: 'Mandatory Standards Database', description: 'A complete, current map of all applicable Australian mandatory safety standards for every ranged category — updated as the regulatory environment changes.' },
      { id: '3d', title: 'Category Risk Reassessment', description: 'Quarterly review of category risk classifications — new mandatory standards, updated enforcement priorities, and changed product formulations can alter a category\'s compliance architecture requirements.' },
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
      'When the ACCC or a state consumer affairs officer requests compliance documentation, the question is not whether the retailer believes their products are compliant. It is whether they can prove it. Component 5 ensures that every ranged product has a complete, current, and retrievable digital compliance file — not a folder of PDFs on a shared drive, but a structured documentation architecture that can produce the evidentiary record for any product, any supplier, and any category within minutes of a regulator\'s request.',
    subComponents: [
      { id: '5a', title: 'Digital Compliance File Structure', description: 'Standardised file structure for every SKU: applicable standard, certificate of compliance, test report, labelling verification, importer-of-record documentation, and audit history.' },
      { id: '5b', title: 'Expiry Tracking', description: 'Third-party test reports and certificates of compliance have defined validity periods. Component 5 tracks expiry dates and triggers renewal 90 days before expiry.' },
      { id: '5c', title: 'Platform-Agnostic Architecture', description: 'The documentation system integrates with any existing ERP or stock management platform. At smaller scales: structured Notion or Airtable workspace. At larger scales: ZenGRC or OneTrust integration.' },
      { id: '5d', title: 'Audit-Ready Retrieval', description: 'The documentation architecture is designed for enforcement response: any product\'s complete compliance file is retrievable within minutes, not hours.' },
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
      'A Certificate of Compliance issued by a supplier is a representation, not independent evidence. For Tier 1 product categories — baby products, electrical goods, children\'s toys — the compliance architecture requires independent verification from a NATA-accredited testing laboratory. Component 7 mandates third-party test reports for all Tier 1 category products, tracks report expiry dates, and ensures that no product remains in the range with an expired or missing independent verification. Supplier assurances are not a substitute for laboratory evidence.',
    subComponents: [
      { id: '7a', title: 'NATA-Accredited Lab Requirement', description: 'For Tier 1 categories: test reports must be issued by a NATA-accredited laboratory or internationally recognised equivalent. Supplier-provided test reports from non-accredited sources are not accepted.' },
      { id: '7b', title: 'Test Report Validity Tracking', description: 'Test reports have defined validity periods. Component 7 tracks expiry dates across the entire range and triggers renewal 90 days before expiry — before the documentation gap creates a compliance exposure.' },
      { id: '7c', title: 'Button Battery Specific Testing', description: 'Products containing accessible button batteries require specific accessibility testing per AS/NZS standards. This testing is mandatory before any purchase order is issued for in-scope products.' },
      { id: '7d', title: 'Children\'s Product Specific Requirements', description: 'All children\'s products require test reports verifying compliance with the applicable toy safety standard (AS/NZS ISO 8124 series). Products without current, valid test reports cannot be ranged.' },
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
```

---

## TASK 2: CREATE `public/logo.svg` — SYNERGISTIC INTERACTION LOGOTYPE

**File:** `DEVELOPMENT/public/logo.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 40" fill="none" aria-label="Synergistic Interaction">
  <!-- SI monogram mark -->
  <g>
    <!-- Outer ring -->
    <circle cx="20" cy="20" r="17" stroke="#00c9a7" stroke-width="1.5" fill="none" opacity="0.4"/>
    <!-- Inner network nodes — compliance network motif -->
    <circle cx="20" cy="8" r="2.5" fill="#00c9a7"/>
    <circle cx="30" cy="26" r="2.5" fill="#00c9a7" opacity="0.7"/>
    <circle cx="10" cy="26" r="2.5" fill="#00c9a7" opacity="0.7"/>
    <!-- Connecting lines -->
    <line x1="20" y1="8" x2="30" y2="26" stroke="#00c9a7" stroke-width="1" opacity="0.5"/>
    <line x1="20" y1="8" x2="10" y2="26" stroke="#00c9a7" stroke-width="1" opacity="0.5"/>
    <line x1="10" y1="26" x2="30" y2="26" stroke="#00c9a7" stroke-width="1" opacity="0.5"/>
    <!-- Centre node -->
    <circle cx="20" cy="20" r="3" fill="#00c9a7"/>
    <!-- Spokes to centre -->
    <line x1="20" y1="8" x2="20" y2="17" stroke="#00c9a7" stroke-width="0.75" opacity="0.6"/>
    <line x1="30" y1="26" x2="23" y2="21" stroke="#00c9a7" stroke-width="0.75" opacity="0.6"/>
    <line x1="10" y1="26" x2="17" y2="21" stroke="#00c9a7" stroke-width="0.75" opacity="0.6"/>
  </g>
  <!-- Wordmark -->
  <text x="48" y="15" font-family="'Inter', system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.08em" fill="#f0f4f8">SYNERGISTIC</text>
  <text x="48" y="30" font-family="'Inter', system-ui, sans-serif" font-size="11" font-weight="300" letter-spacing="0.12em" fill="#8fa3ba">INTERACTION</text>
</svg>
```

---

## TASK 3: CREATE `public/logo-icon.svg` — ICON-ONLY VERSION FOR FAVICON

**File:** `DEVELOPMENT/public/logo-icon.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <rect width="40" height="40" rx="10" fill="#060d1a"/>
  <circle cx="20" cy="20" r="16" stroke="#00c9a7" stroke-width="1.5" fill="none" opacity="0.4"/>
  <circle cx="20" cy="9" r="2.5" fill="#00c9a7"/>
  <circle cx="30" cy="27" r="2.5" fill="#00c9a7" opacity="0.7"/>
  <circle cx="10" cy="27" r="2.5" fill="#00c9a7" opacity="0.7"/>
  <line x1="20" y1="9" x2="30" y2="27" stroke="#00c9a7" stroke-width="1" opacity="0.5"/>
  <line x1="20" y1="9" x2="10" y2="27" stroke="#00c9a7" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="27" x2="30" y2="27" stroke="#00c9a7" stroke-width="1" opacity="0.5"/>
  <circle cx="20" cy="20" r="3.5" fill="#00c9a7"/>
  <line x1="20" y1="9" x2="20" y2="16.5" stroke="#00c9a7" stroke-width="0.75" opacity="0.7"/>
  <line x1="30" y1="27" x2="23.5" y2="21.5" stroke="#00c9a7" stroke-width="0.75" opacity="0.7"/>
  <line x1="10" y1="27" x2="16.5" y2="21.5" stroke="#00c9a7" stroke-width="0.75" opacity="0.7"/>
</svg>
```

---

## TASK 4: UPDATE `components/Header.tsx` — COMPLETE WITH LOGO, MOBILE NAV

**File:** `DEVELOPMENT/components/Header.tsx`

```typescript
// Header with logo, desktop nav, mobile hamburger, language toggle
// V7 Non-Negotiable Absolute #2: "Change Language 中文" always visible in English header
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/our-approach', label: 'Our Approach' },
  { href: '/why-compliance-matters', label: 'Why Compliance Matters' },
  { href: '/get-started', label: 'Get Started' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isZh = pathname?.startsWith('/zh');

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-si-bg/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal rounded" aria-label="Synergistic Interaction — Home">
          <Image
            src="/logo.svg"
            alt="Synergistic Interaction"
            width={200}
            height={33}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal ${
                  isActive
                    ? 'text-si-teal bg-si-teal/10'
                    : 'text-si-white-muted hover:text-si-white hover:bg-white/5'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side: language toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* V7 Non-Negotiable Absolute #2 — ALWAYS visible */}
          <Link
            href={isZh ? '/' : '/zh'}
            className="hidden sm:flex items-center gap-1.5 text-xs text-si-white-muted hover:text-si-teal transition-colors border border-white/10 rounded px-2.5 py-1.5 hover:border-si-teal/30"
            lang={isZh ? 'en' : 'zh-Hans'}
            aria-label={isZh ? 'Switch to English' : 'Switch to Mandarin Chinese'}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="0.75"/>
              <path d="M6 1c-1.5 1.5-2 3-2 5s.5 3.5 2 5M6 1c1.5 1.5 2 3 2 5s-.5 3.5-2 5M1 6h10" stroke="currentColor" strokeWidth="0.75"/>
            </svg>
            {isZh ? 'English' : '中文'}
          </Link>

          <Link
            href="/get-started"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-si-teal text-si-bg text-sm font-semibold rounded-lg hover:bg-si-teal-light transition-colors"
          >
            Get Started
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-si-white-muted hover:text-si-white hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path d="M4 4l12 12M4 16L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-si-bg/98 backdrop-blur-md" role="dialog" aria-label="Mobile navigation">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive ? 'text-si-teal bg-si-teal/10' : 'text-si-white-muted hover:text-si-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 flex items-center gap-3 border-t border-white/5 mt-3">
              <Link
                href={isZh ? '/' : '/zh'}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm text-si-white-muted border border-white/10 rounded-xl"
              >
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="0.75"/>
                  <path d="M6 1c-1.5 1.5-2 3-2 5s.5 3.5 2 5M6 1c1.5 1.5 2 3 2 5s-.5 3.5-2 5M1 6h10" stroke="currentColor" strokeWidth="0.75"/>
                </svg>
                {isZh ? 'English' : '中文'}
              </Link>
              <Link
                href="/get-started"
                className="flex-1 flex items-center justify-center py-2.5 bg-si-teal text-si-bg text-sm font-semibold rounded-xl"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
```

---

## TASK 5: UPDATE `components/Footer.tsx` — COMPLETE FOOTER

**File:** `DEVELOPMENT/components/Footer.tsx`

```typescript
// Footer — V7 brief: four pages, language toggle, compliance disclaimer
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  Services: [
    { label: 'Our Approach', href: '/our-approach' },
    { label: 'Why Compliance Matters', href: '/why-compliance-matters' },
    { label: 'Get Started', href: '/get-started' },
  ],
  Regulatory: [
    { label: 'ACCC', href: 'https://www.accc.gov.au', external: true },
    { label: 'Consumer Affairs Victoria', href: 'https://www.consumer.vic.gov.au', external: true },
    { label: 'Energy Safe Victoria', href: 'https://www.esv.vic.gov.au', external: true },
    { label: 'TGA', href: 'https://www.tga.gov.au', external: true },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-si-bg-secondary mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" aria-label="Synergistic Interaction — Home">
              <Image
                src="/logo.svg"
                alt="Synergistic Interaction"
                width={180}
                height={30}
                className="h-7 w-auto mb-4"
              />
            </Link>
            <p className="text-si-white-muted text-sm leading-relaxed max-w-xs mb-6">
              Compliance-first category management architecture for Australian retailers. ISO 37301:2021 aligned.
              Nine-component framework.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/zh"
                className="inline-flex items-center gap-1.5 text-xs text-si-white-dim hover:text-si-teal transition-colors border border-white/10 rounded px-2.5 py-1.5 hover:border-si-teal/30"
                lang="zh-Hans"
              >
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="0.75"/>
                  <path d="M6 1c-1.5 1.5-2 3-2 5s.5 3.5 2 5M6 1c1.5 1.5 2 3 2 5s-.5 3.5-2 5M1 6h10" stroke="currentColor" strokeWidth="0.75"/>
                </svg>
                中文版本
              </Link>
              <span className="text-si-white-dim text-xs px-2.5 py-1.5 border border-white/10 rounded">
                ISO 37301:2021
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-si-white text-xs font-semibold uppercase tracking-widest mb-4">{heading}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-si-white-muted text-sm hover:text-si-teal transition-colors flex items-center gap-1"
                      >
                        {link.label}
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                          <path d="M1.5 7.5l6-6M3.5 1.5h4v4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-si-white-muted text-sm hover:text-si-teal transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-si-white-dim text-xs">
              © {year} Synergistic Interaction. ABN: [pending registration].
              All rights reserved. synergisticinteraction.com.au
            </p>
            <p className="text-si-white-dim text-xs max-w-sm">
              This website contains general information only. It does not constitute legal, regulatory, or compliance
              advice. Engage Synergistic Interaction for advice specific to your circumstances.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## TASK 6: UPDATE `components/ProofBar.tsx` — GSAP COUNTER ANIMATION

**File:** `DEVELOPMENT/components/ProofBar.tsx`

```typescript
// V7 §11.2: Proof bar with GSAP scroll-triggered stat counters
// Stats: 330+ stores, 4.4% ADV uplift, $100M+ penalty mitigated, ISO 37301
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface StatItem {
  prefix: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  href?: string;
  decimals?: number;
}

// V7 §11.1: Corrected proof bar stats
const stats: StatItem[] = [
  {
    prefix: '',
    value: 330,
    suffix: '+',
    label: 'Stores managed simultaneously',
    sublabel: 'Australian retail network — Bunnings ANZ',
    decimals: 0,
  },
  {
    prefix: '',
    value: 4.4,
    suffix: '%',
    label: 'Average ADV uplift',
    sublabel: 'Cornell University category management benchmark',
    decimals: 1,
  },
  {
    prefix: '$',
    value: 100,
    suffix: 'M+',
    label: 'Penalty exposure mitigated',
    sublabel: 'ACL s.224 — across client category portfolios',
    decimals: 0,
  },
  {
    prefix: '',
    value: 1736,
    suffix: '×',
    label: 'Minimum compliance ROI',
    sublabel: '$50M ACL exposure ÷ consulting investment',
    href: '/why-compliance-matters',
    decimals: 0,
  },
];

export default function ProofBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  function animateCounters() {
    const elements = containerRef.current?.querySelectorAll<HTMLElement>('[data-counter]');
    if (!elements) return;

    elements.forEach((el) => {
      const target = parseFloat(el.dataset.counter ?? '0');
      const decimals = parseInt(el.dataset.decimals ?? '0', 10);
      const duration = 1500;
      const start = performance.now();

      function step(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * target;
        el.textContent = decimals > 0
          ? current.toFixed(decimals)
          : Math.floor(current).toString();
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(decimals);
      }

      requestAnimationFrame(step);
    });
  }

  return (
    <section
      ref={containerRef}
      className="py-8 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-si-bg-secondary"
      aria-label="Key metrics"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat, i) => {
            const content = (
              <div
                key={i}
                className={`px-0 lg:px-8 first:pl-0 last:pr-0 group ${stat.href ? 'cursor-pointer' : ''}`}
              >
                <div className="flex items-baseline gap-0.5 mb-1">
                  {stat.prefix && (
                    <span className="text-2xl font-bold text-si-teal">{stat.prefix}</span>
                  )}
                  <span
                    data-counter={stat.value}
                    data-decimals={stat.decimals ?? 0}
                    className="text-3xl sm:text-4xl font-bold text-si-teal tabular-nums"
                  >
                    0
                  </span>
                  <span className="text-2xl font-bold text-si-teal">{stat.suffix}</span>
                </div>
                <p className={`text-sm font-medium mb-0.5 transition-colors ${stat.href ? 'text-si-white group-hover:text-si-teal' : 'text-si-white'}`}>
                  {stat.label}
                </p>
                <p className="text-xs text-si-white-dim leading-snug">{stat.sublabel}</p>
              </div>
            );

            return stat.href ? (
              <Link key={i} href={stat.href} className="px-0 lg:px-8 first:pl-0 last:pr-0 group">
                <div>
                  <div className="flex items-baseline gap-0.5 mb-1">
                    {stat.prefix && <span className="text-2xl font-bold text-si-teal">{stat.prefix}</span>}
                    <span data-counter={stat.value} data-decimals={stat.decimals ?? 0} className="text-3xl sm:text-4xl font-bold text-si-teal tabular-nums">0</span>
                    <span className="text-2xl font-bold text-si-teal">{stat.suffix}</span>
                  </div>
                  <p className="text-sm font-medium mb-0.5 text-si-white group-hover:text-si-teal transition-colors">{stat.label}</p>
                  <p className="text-xs text-si-white-dim leading-snug">{stat.sublabel}</p>
                </div>
              </Link>
            ) : (
              <div key={i} className="px-0 lg:px-8 first:pl-0 last:pr-0">
                <div className="flex items-baseline gap-0.5 mb-1">
                  {stat.prefix && <span className="text-2xl font-bold text-si-teal">{stat.prefix}</span>}
                  <span data-counter={stat.value} data-decimals={stat.decimals ?? 0} className="text-3xl sm:text-4xl font-bold text-si-teal tabular-nums">0</span>
                  <span className="text-2xl font-bold text-si-teal">{stat.suffix}</span>
                </div>
                <p className="text-sm font-medium mb-0.5 text-si-white">{stat.label}</p>
                <p className="text-xs text-si-white-dim leading-snug">{stat.sublabel}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

---

## TASK 7: UPDATE `components/ComplianceVisualization.tsx` — FULL THREE.JS + CANVAS FALLBACK

Replace with a complete version that has a rich canvas-based fallback (works in all environments) and attempts WebGPU/WebGL Three.js as an enhancement:

**File:** `DEVELOPMENT/components/ComplianceVisualization.tsx`

```typescript
// V7 §5: Compliance-by-exception network visualisation
// Primary: Three.js WebGPU/WebGL (browser-only, ssr:false)
// Fallback: Canvas 2D animation (works in all browsers, no WebGL required)
// Accessibility: prefers-reduced-motion → static SVG
'use client';

import { useEffect, useRef, useState } from 'react';

interface Node {
  id: string;
  type: 'supplier' | 'dc' | 'store';
  x: number;
  y: number;
  vx: number;
  vy: number;
  compliant: boolean;
  label: string;
  pulsePhase: number;
}

interface Particle {
  nodeFrom: number;
  nodeTo: number;
  t: number; // 0..1 progress along edge
  speed: number;
  blocked: boolean;
}

const NODE_DEFS: Omit<Node, 'vx' | 'vy' | 'pulsePhase'>[] = [
  // Suppliers
  { id: 's1', type: 'supplier', x: 0.08, y: 0.20, compliant: true, label: 'Supplier A' },
  { id: 's2', type: 'supplier', x: 0.08, y: 0.40, compliant: true, label: 'Supplier B' },
  { id: 's3', type: 'supplier', x: 0.08, y: 0.60, compliant: false, label: 'Supplier C' }, // non-compliant
  { id: 's4', type: 'supplier', x: 0.08, y: 0.80, compliant: true, label: 'Supplier D' },
  { id: 's5', type: 'supplier', x: 0.22, y: 0.12, compliant: false, label: 'Supplier E' }, // non-compliant
  // Distribution centres
  { id: 'd1', type: 'dc', x: 0.45, y: 0.35, compliant: true, label: 'DC East' },
  { id: 'd2', type: 'dc', x: 0.45, y: 0.65, compliant: true, label: 'DC West' },
  // Retail stores
  { id: 'r1', type: 'store', x: 0.80, y: 0.20, compliant: true, label: 'Store 1' },
  { id: 'r2', type: 'store', x: 0.80, y: 0.40, compliant: true, label: 'Store 2' },
  { id: 'r3', type: 'store', x: 0.80, y: 0.60, compliant: true, label: 'Store 3' },
  { id: 'r4', type: 'store', x: 0.80, y: 0.80, compliant: true, label: 'Store 4' },
];

const EDGES: [string, string][] = [
  ['s1', 'd1'], ['s2', 'd1'], ['s3', 'd1'], // s3 non-compliant → intercepted
  ['s4', 'd2'], ['s5', 'd2'], // s5 non-compliant → intercepted
  ['d1', 'r1'], ['d1', 'r2'],
  ['d2', 'r3'], ['d2', 'r4'],
];

export default function ComplianceVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    if (mq.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // DPI-aware canvas sizing
    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    // Initialise nodes
    const nodes: Node[] = NODE_DEFS.map((n) => ({
      ...n,
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    // Initialise particles
    const particles: Particle[] = [];
    const edgeObjects = EDGES.map(([fromId, toId]) => ({
      from: nodes.findIndex((n) => n.id === fromId),
      to: nodes.findIndex((n) => n.id === toId),
    }));

    edgeObjects.forEach((edge, i) => {
      if (edge.from >= 0 && edge.to >= 0) {
        particles.push({
          nodeFrom: edge.from,
          nodeTo: edge.to,
          t: Math.random(),
          speed: 0.003 + Math.random() * 0.002,
          blocked: !nodes[edge.from].compliant,
        });
      }
    });

    let time = 0;

    function draw() {
      if (!canvas || !ctx) return;
      const W = canvas.getBoundingClientRect().width;
      const H = canvas.getBoundingClientRect().height;

      ctx.clearRect(0, 0, W, H);

      time += 0.016;

      // Update node micro-drift
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0.05 || node.x > 0.95) node.vx *= -1;
        if (node.y < 0.05 || node.y > 0.95) node.vy *= -1;
      });

      // Draw edges
      edgeObjects.forEach((edge) => {
        if (edge.from < 0 || edge.to < 0) return;
        const from = nodes[edge.from];
        const to = nodes[edge.to];
        const isBlocked = !from.compliant;

        ctx.beginPath();
        ctx.moveTo(from.x * W, from.y * H);
        ctx.lineTo(to.x * W, to.y * H);
        ctx.strokeStyle = isBlocked
          ? 'rgba(239, 68, 68, 0.15)'
          : 'rgba(0, 201, 167, 0.12)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw particles
      particles.forEach((p) => {
        const from = nodes[p.nodeFrom];
        const to = nodes[p.nodeTo];
        if (!from || !to) return;

        // Blocked particles only travel to midpoint (interception)
        const maxT = p.blocked ? 0.5 : 1;
        p.t += p.speed;
        if (p.t > maxT) p.t = 0;

        const px = from.x * W + (to.x - from.x) * W * p.t;
        const py = from.y * H + (to.y - from.y) * H * p.t;

        const alpha = p.blocked
          ? (p.t > 0.45 ? 1 - (p.t - 0.45) / 0.05 : 1)
          : 0.85;

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = p.blocked
          ? `rgba(239, 68, 68, ${alpha})`
          : `rgba(0, 201, 167, ${alpha * 0.8})`;
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach((node) => {
        const nx = node.x * W;
        const ny = node.y * H;
        const isNonCompliant = !node.compliant;
        const pulse = Math.sin(time * 3 + node.pulsePhase);

        const nodeRadius = node.type === 'dc' ? 10 : node.type === 'store' ? 7 : 6;
        const glowRadius = nodeRadius + (isNonCompliant ? 8 + pulse * 5 : 3 + pulse * 2);

        // Glow
        const grd = ctx.createRadialGradient(nx, ny, nodeRadius * 0.5, nx, ny, glowRadius);
        grd.addColorStop(0, isNonCompliant ? 'rgba(239,68,68,0.25)' : 'rgba(0,201,167,0.2)');
        grd.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(nx, ny, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Node body
        ctx.beginPath();
        if (node.type === 'dc') {
          // Square for DC
          ctx.rect(nx - nodeRadius, ny - nodeRadius, nodeRadius * 2, nodeRadius * 2);
        } else if (node.type === 'store') {
          // Circle for store
          ctx.arc(nx, ny, nodeRadius, 0, Math.PI * 2);
        } else {
          // Hexagon for supplier
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i - Math.PI / 6;
            const hx = nx + nodeRadius * Math.cos(angle);
            const hy = ny + nodeRadius * Math.sin(angle);
            i === 0 ? ctx.moveTo(hx, hy) : ctx.lineTo(hx, hy);
          }
          ctx.closePath();
        }

        ctx.fillStyle = isNonCompliant
          ? 'rgba(30, 10, 10, 0.95)'
          : node.type === 'dc'
          ? 'rgba(10, 22, 40, 0.95)'
          : 'rgba(6, 13, 26, 0.95)';
        ctx.strokeStyle = isNonCompliant ? 'rgba(239, 68, 68, 0.9)' : 'rgba(0, 201, 167, 0.6)';
        ctx.lineWidth = isNonCompliant ? 1.5 : 1;
        ctx.fill();
        ctx.stroke();

        // Interception indicator for blocked nodes
        if (isNonCompliant) {
          ctx.font = `bold ${nodeRadius + 2}px monospace`;
          ctx.fillStyle = 'rgba(239, 68, 68, 0.9)';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('✕', nx, ny);
        }
      });

      // Legend
      ctx.font = '10px system-ui';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      const legendItems = [
        { colour: 'rgba(0,201,167,0.8)', label: 'Compliant — flow active' },
        { colour: 'rgba(239,68,68,0.8)', label: 'Non-compliant — intercepted' },
      ];
      legendItems.forEach((item, i) => {
        ctx.fillStyle = item.colour;
        ctx.fillRect(8, 8 + i * 18, 8, 8);
        ctx.fillStyle = 'rgba(143,163,186,0.8)';
        ctx.fillText(item.label, 22, 8 + i * 18);
      });

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="w-full aspect-video rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
        <p className="text-si-white-muted text-sm text-center px-6">
          Compliance-by-exception network — nine-component architecture.
          Non-compliant supplier nodes intercepted before reaching distribution.
        </p>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="w-full aspect-video rounded-2xl border border-white/10 bg-si-bg"
      aria-label="Animated compliance network visualisation showing compliant product flows in teal and non-compliant supplier nodes intercepted before reaching distribution centres"
      role="img"
    />
  );
}
```

---

## TASK 8: UPDATE `components/ComponentAccordion.tsx` — COMPLETE WITH ISO BADGES

**File:** `DEVELOPMENT/components/ComponentAccordion.tsx`

```typescript
// V7 §11.2: Component accordion with progressive disclosure + ISO 37301 badges
// Clicking ISO badge navigates to /why-compliance-matters#iso-37301
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ComplianceComponentData } from '@/lib/compliance-data';

interface ComponentAccordionProps {
  components: ComplianceComponentData[];
  expandFirst?: boolean;
}

const RISK_TIER_COLOURS: Record<ComplianceComponentData['riskTier'], string> = {
  'Hard Gate': 'bg-red-500/15 text-red-400 border-red-500/20',
  'Preventative': 'bg-orange-500/15 text-orange-400 border-orange-500/20',
  'Monitoring': 'bg-blue-500/15 text-blue-400 border-blue-500/20',
  'Cultural': 'bg-purple-500/15 text-purple-400 border-purple-500/20',
};

export default function ComponentAccordion({ components, expandFirst = false }: ComponentAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(
    expandFirst && components[0] ? components[0].id : null
  );

  return (
    <div className="space-y-3" role="list">
      {components.map((component, index) => {
        const isOpen = openId === component.id;
        const componentNumber = String(component.id).padStart(2, '0');

        return (
          <div
            key={component.id}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'border-si-teal/30 bg-white/[0.06]'
                : 'border-white/10 bg-white/[0.03] hover:border-white/20'
            }`}
            role="listitem"
          >
            {/* Accordion trigger */}
            <button
              className="w-full flex items-start gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-si-teal focus-visible:ring-inset"
              onClick={() => setOpenId(isOpen ? null : component.id)}
              aria-expanded={isOpen}
              aria-controls={`component-panel-${component.id}`}
            >
              {/* Number */}
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-si-teal/10 border border-si-teal/20 flex items-center justify-center text-si-teal text-xs font-mono font-bold">
                {componentNumber}
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-si-white font-semibold">{component.name}</span>
                  {/* Risk tier badge */}
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded border ${RISK_TIER_COLOURS[component.riskTier]}`}
                  >
                    {component.riskTier}
                  </span>
                  {/* Draft indicator */}
                  {!component.approvedCopy && (
                    <span className="text-[10px] text-si-white-dim border border-white/10 rounded px-1.5 py-0.5">
                      Copy pending sign-off
                    </span>
                  )}
                </div>
                <p className="text-si-white-muted text-sm">{component.tagline}</p>
              </div>

              {/* ISO badge + chevron */}
              <div className="flex-shrink-0 flex items-center gap-2 ml-2">
                <Link
                  href="/why-compliance-matters#iso-37301"
                  onClick={(e) => e.stopPropagation()}
                  className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-si-teal/10 text-si-teal border border-si-teal/15 hover:bg-si-teal/20 transition-colors"
                  title={`ISO 37301 ${component.isoClause}: ${component.isoTitle}`}
                >
                  {component.isoClause}
                </Link>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className={`text-si-white-dim transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>

            {/* Accordion panel */}
            <div
              id={`component-panel-${component.id}`}
              role="region"
              hidden={!isOpen}
              aria-labelledby={`component-trigger-${component.id}`}
            >
              <div className="px-6 pb-6 border-t border-white/5 pt-5">
                {/* Website copy */}
                <p className="text-si-white-muted leading-relaxed mb-6">{component.websiteCopy}</p>

                {/* Sub-components */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {component.subComponents.map((sub) => (
                    <div
                      key={sub.id}
                      className="p-4 rounded-xl bg-white/5 border border-white/5"
                    >
                      <p className="text-si-white text-sm font-medium mb-1">{sub.title}</p>
                      <p className="text-si-white-dim text-xs leading-relaxed">{sub.description}</p>
                    </div>
                  ))}
                </div>

                {/* Prevention example */}
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

                {/* ISO alignment footer */}
                <div className="mt-4 flex items-center gap-2 text-xs text-si-white-dim">
                  <span className="font-mono text-si-teal">{component.isoClause}</span>
                  <span>—</span>
                  <span>{component.isoTitle}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
```

---

## TASK 9: CREATE `app/api/regulatory-feed/route.ts` — PUBLIC GET ENDPOINT

This is the endpoint `RegulatoryFeed.tsx` calls to display items:

**File:** `DEVELOPMENT/app/api/regulatory-feed/route.ts`

```typescript
// V7 §4: Public regulatory feed GET endpoint
// Returns approved items from staging store, or fallback placeholder items
// In production: items come from Vercel KV (after ingest + human approval)
import { NextRequest, NextResponse } from 'next/server';

interface RegulatoryUpdate {
  id: string;
  source: 'ACCC' | 'CAV' | 'TGA' | 'ESV' | 'LEGISLATION';
  title: string;
  summary: string;
  urgency: 'Critical' | 'High' | 'Medium' | 'Low';
  url: string;
  publishedAt: string;
  categories: string[];
}

// Placeholder items displayed until live feed is operational
const PLACEHOLDER_ITEMS: RegulatoryUpdate[] = [
  {
    id: 'ph-1',
    source: 'ACCC',
    title: 'ACCC Compliance and Enforcement Priorities 2025–2026',
    summary: 'The ACCC has published its annual compliance and enforcement priorities identifying button battery safety, children\'s product standards, and electrical goods RCM requirements as primary enforcement focus areas. Retailers in scope should conduct immediate compliance file reviews for all relevant product categories and ensure third-party test report currency.',
    urgency: 'High',
    url: 'https://www.accc.gov.au/business/business-rights-protections/product-safety/compliance-and-enforcement',
    publishedAt: new Date().toISOString(),
    categories: ["Children's Products", 'Electrical Goods', 'Baby Products'],
  },
  {
    id: 'ph-2',
    source: 'ESV',
    title: 'Energy Safe Victoria: RCM Compliance Reminder for Retailers',
    summary: 'Energy Safe Victoria has reiterated compliance obligations for all electrical articles supplied in Victoria. Products must be registered on the EESS database and display the RCM mark. ESV has indicated increased retail inspection activity for the current quarter, with particular focus on variety and discount retailers sourcing directly from overseas manufacturers.',
    urgency: 'Critical',
    url: 'https://www.esv.vic.gov.au/electrical-safety/electrical-equipment/',
    publishedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    categories: ['Electrical Goods'],
  },
  {
    id: 'ph-3',
    source: 'ACCC',
    title: 'Button Battery Safety Standard — Mandatory Requirements Reminder',
    summary: 'Reminder that button battery safety requirements under AS/NZS 62368.1:2022 are now mandatory for all relevant products. Products containing accessible button batteries must meet child-resistant packaging requirements. Retailers should verify that all in-scope products carry current test reports from NATA-accredited laboratories confirming compliance with accessibility requirements.',
    urgency: 'Critical',
    url: 'https://www.productsafety.gov.au/products/electrical/batteries',
    publishedAt: new Date(Date.now() - 86400000 * 4).toISOString(),
    categories: ["Children's Products", 'Baby Products', 'Electrical Goods'],
  },
  {
    id: 'ph-4',
    source: 'TGA',
    title: 'TGA Safety Alert: Sunscreen Products — Compliance Guidance',
    summary: 'The TGA has issued updated guidance for retailers of sunscreen products classified as therapeutic goods. SPF 15 and above sunscreens require TGA listing as a therapeutic good and must display the AUST L or AUST R number on packaging. Retailers should verify that all sunscreen products carry current regulatory documentation before continued supply.',
    urgency: 'Medium',
    url: 'https://www.tga.gov.au/resources/resource/guidance/sunscreen-products-regulation',
    publishedAt: new Date(Date.now() - 86400000 * 7).toISOString(),
    categories: ['Personal Care'],
  },
  {
    id: 'ph-5',
    source: 'CAV',
    title: 'Consumer Affairs Victoria: Toy Safety Inspection Outcomes',
    summary: 'Consumer Affairs Victoria has published outcomes from its recent toy safety inspection program. Non-compliant products identified include toys with excessive long cord lengths, toys with small parts incorrectly age-graded as suitable for under-3s, and projectile toys without adequate warnings. Retailers are reminded that ignorance of mandatory standards is not a compliance defence under Australian Consumer Law.',
    urgency: 'High',
    url: 'https://www.consumer.vic.gov.au/products-and-services/product-safety',
    publishedAt: new Date(Date.now() - 86400000 * 10).toISOString(),
    categories: ["Children's Products"],
  },
  {
    id: 'ph-6',
    source: 'LEGISLATION',
    title: 'Consumer Goods (Cots) Safety Standard 2023 — Compliance Deadline',
    summary: 'The updated Consumer Goods (Cots) Safety Standard includes revised requirements for cot dimensions, slat spacing, and mattress base stability. All cots supplied in Australia must comply with the updated standard. Retailers with existing stock purchased prior to the standard\'s commencement date should verify compliance status with their supplier and obtain updated test documentation where required.',
    urgency: 'High',
    url: 'https://www.legislation.gov.au/Series/F2023L01066',
    publishedAt: new Date(Date.now() - 86400000 * 14).toISOString(),
    categories: ['Baby Products'],
  },
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '10', 10), 50);

  try {
    // Attempt to read from Vercel KV when available
    // TODO: Uncomment after KV is provisioned
    // const { kv } = await import('@vercel/kv');
    // const items = await kv.get<RegulatoryUpdate[]>('regulatory-feed:approved') ?? [];
    // if (items.length > 0) {
    //   return NextResponse.json({ updates: items.slice(0, limit), source: 'live' });
    // }

    // Return placeholder items until live feed is operational
    return NextResponse.json({
      updates: PLACEHOLDER_ITEMS.slice(0, limit),
      source: 'placeholder',
      message: 'Live feed operational after Vercel KV is provisioned and first cron run completes.',
    });
  } catch {
    return NextResponse.json({
      updates: PLACEHOLDER_ITEMS.slice(0, limit),
      source: 'fallback',
    });
  }
}
```

---

## TASK 10: CREATE `app/admin/page.tsx` — STAGING VALIDATION DASHBOARD (V7 §4.4)

This is the human-in-the-loop validation interface. Password-protected via environment variable.

**File:** `DEVELOPMENT/app/admin/page.tsx`

```typescript
// V7 §4.4: Human-in-the-loop validation dashboard — Principal reviews and approves AI-triaged items
// Protected by ADMIN_SECRET environment variable
// Access via: /admin?secret=YOUR_SECRET
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feed Validation Dashboard — Synergistic Interaction',
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main className="pt-20 min-h-screen px-4">
      <div className="max-w-4xl mx-auto py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-si-white mb-2">Regulatory Feed Validation</h1>
          <p className="text-si-white-muted text-sm">
            V7 §4.4 Human-in-the-Loop Stage. Review AI-triaged regulatory items before they go live.
            Weekly maintenance target: 2 minutes.
          </p>
        </div>
        {/* Client component handles auth and item display */}
        <AdminDashboardClient />
      </div>
    </main>
  );
}

function AdminDashboardClient() {
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
      <p className="text-si-white-muted text-sm leading-relaxed">
        <strong className="text-si-white">Setup required:</strong> This dashboard requires Vercel KV to store
        pending items and the regulatory intelligence pipeline to be fully operational.
      </p>
      <div className="mt-4 space-y-2 text-xs text-si-white-dim">
        <p>1. Provision Vercel KV in your project dashboard (Storage → KV)</p>
        <p>2. Add KV_REST_API_URL and KV_REST_API_TOKEN to environment variables</p>
        <p>3. Add OPENAI_API_KEY to environment variables</p>
        <p>4. Add CRON_SECRET to environment variables</p>
        <p>5. Trigger the first cron run manually: GET /api/regulatory-feed/ingest</p>
        <p>6. Pending items will appear here for approval</p>
      </div>
      <div className="mt-6 p-4 rounded-xl bg-si-teal/5 border border-si-teal/10">
        <p className="text-si-teal text-xs font-medium mb-1">Weekly workflow (target: 2 minutes)</p>
        <p className="text-si-white-dim text-xs leading-relaxed">
          The Vercel Cron job runs daily at 6:00 AM AEST, ingests RSS feeds from ACCC/CAV/TGA/ESV/Legislation,
          uses GPT-4o-mini to triage for retail relevance, and stages approved items here. You review the AI summary,
          source link, and risk tier — then click Approve, Edit, or Reject. Approved items deploy instantly.
        </p>
      </div>
    </div>
  );
}
```

---

## TASK 11: CREATE `app/zh/page.tsx` — MANDARIN HOME PAGE

**File:** `DEVELOPMENT/app/zh/page.tsx`

```typescript
// V7 §6: Mandarin home page — transcreated per §6.3 guidelines
// NOT literal translation — compliance framed as competitive advantage, not regulatory burden
// V7 §6.2: SSR required for Baidu crawler compatibility
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '品类管理顾问 | 澳大利亚 — 协同互动',
  description: '专业澳大利亚零售合规架构顾问。九组件合规体系，符合ISO 37301:2021国际标准。助力零售商建立竞争优势，实现无上限规模扩张。',
  alternates: {
    canonical: 'https://synergisticinteraction.com.au/zh',
    languages: {
      'en': 'https://synergisticinteraction.com.au',
      'zh-Hans': 'https://synergisticinteraction.com.au/zh',
    },
  },
};

const components = [
  { num: '01', zh: '产品合规验证', en: 'Product Compliance Verification' },
  { num: '02', zh: '供应链合规审计', en: 'Supply Chain Compliance Auditing' },
  { num: '03', zh: '品类专项合规映射', en: 'Category-Specific Compliance Mapping' },
  { num: '04', zh: '监管风险评估', en: 'Regulatory Risk Assessment' },
  { num: '05', zh: '合规文件管理', en: 'Compliance Documentation Management' },
  { num: '06', zh: '实时合规监控', en: 'Real-Time Compliance Monitoring' },
  { num: '07', zh: '第三方检测报告要求', en: 'Third-Party Test Report Requirements' },
  { num: '08', zh: '进口商记录验证', en: 'Importer-of-Record Verification' },
  { num: '09', zh: '合规文化与持续改进', en: 'Compliance Culture & Continuous Improvement' },
];

export default function ZhHomePage() {
  return (
    <main lang="zh-Hans">
      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-si-gradient" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at 60% 30%, rgba(0,201,167,0.15) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-si-teal" />
            ISO 37301:2021 国际标准对齐 · 九组件合规体系
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            {/* V7 §6.3: Transcreated — compliance as competitive foundation, not regulatory burden */}
            合规架构，是您{' '}
            <span className="text-si-teal">无限扩张的竞争基础</span>
          </h1>

          <p className="text-xl text-si-white-muted mb-8 leading-relaxed max-w-2xl" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            {/* V7 §6.3: Transcreated — enable aggressive scaling, not avoid government penalties */}
            在澳大利亚零售市场，专业合规架构（合规架构）不是监管负担，而是实现快速规模扩张的竞争基础。
            拥有完善合规体系的零售商，能够更快引入供应商、更自信地进入新品类、抢占竞争对手因合规问题无法触达的市场份额。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/zh/get-started"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors"
              style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}
            >
              申请品类评估
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-si-white rounded-xl hover:border-si-teal hover:text-si-teal transition-colors text-sm"
            >
              English Version
            </Link>
          </div>
        </div>
      </section>

      {/* Nine Components — Mandarin */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-si-white mb-2" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            九组件合规架构
          </h2>
          <p className="text-si-white-muted mb-10 text-sm" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            符合ISO 37301:2021国际标准。每个组件均经过澳大利亚消费品法规环境验证。
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {components.map((c) => (
              <div key={c.num} className="p-4 rounded-xl border border-white/10 bg-white/5">
                <span className="text-xs font-mono text-si-teal mb-2 block">{c.num}</span>
                <p className="text-si-white font-medium text-sm mb-1" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
                  {c.zh}
                </p>
                <p className="text-si-white-dim text-xs">{c.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section — transcreated framing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-si-bg-secondary border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-si-white mb-6" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            {/* V7 §6.3: Frame as protected competitive position, not government threat */}
            未管理的合规风险 = 可规避的竞争劣势
          </h2>
          <p className="text-si-white-muted leading-relaxed mb-8 max-w-2xl" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            {/* V7 §6.3 approved transcreation */}
            在澳大利亚零售市场，未经管理的产品合规风险在财务上可能是毁灭性的——每项违规的财务敞口可达5000万澳元或以上。
            专业合规架构将这一敞口转化为受保护的竞争优势。
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { value: '5000万澳元+', label: '单项违规最高处罚', sub: '澳大利亚消费者法 s.224 条' },
              { value: '1,736×', label: '最低合规投资回报率', sub: '咨询投资 vs 法律风险敞口' },
              { value: '25年', label: '零售合规方法论积累', sub: '澳大利亚、美国、英国零售经验' },
            ].map((item) => (
              <div key={item.value} className="text-center p-6 rounded-xl border border-white/10 bg-white/5">
                <p className="text-3xl font-bold text-si-teal mb-2">{item.value}</p>
                <p className="text-si-white text-sm font-medium mb-1" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
                  {item.label}
                </p>
                <p className="text-si-white-dim text-xs" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-si-white mb-4" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            开始品类合规评估
          </h2>
          <p className="text-si-white-muted mb-8 text-sm" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            合规架构投资根据您的品类组合和合规风险敞口量身定制。初次咨询将针对您的具体情况进行架构映射。
          </p>
          <Link
            href="/zh/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors"
            style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}
          >
            申请评估
          </Link>
        </div>
      </section>
    </main>
  );
}
```

---

## TASK 12: CREATE `app/zh/get-started/page.tsx` — MANDARIN CONTACT PAGE

**File:** `DEVELOPMENT/app/zh/get-started/page.tsx`

```typescript
// V7 §6: Mandarin get-started page
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '申请品类评估 — 协同互动',
  description: '联系协同互动，开始您的澳大利亚零售合规架构评估。我们将在一个工作日内回复，提供针对您品类的架构建议。',
};

export default function ZhGetStartedPage() {
  return (
    <main lang="zh-Hans" className="pt-28 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-si-white mb-4" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
          申请品类评估
        </h1>
        <p className="text-si-white-muted mb-8 leading-relaxed" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
          请通过英文版表单提交评估申请。我们的团队会以您偏好的语言回复，提供针对您品类组合的具体合规架构建议。
        </p>
        <div className="p-6 rounded-2xl border border-si-teal/20 bg-si-teal/5 mb-8">
          <p className="text-si-teal text-sm font-medium mb-2" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            如需中文咨询
          </p>
          <p className="text-si-white-muted text-sm leading-relaxed" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            请在表单的"备注"栏注明"中文服务"，我们将安排普通话咨询。
          </p>
        </div>
        <Link
          href="/get-started"
          className="inline-flex items-center gap-2 px-8 py-4 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors"
        >
          英文申请表单 →
        </Link>
      </div>
    </main>
  );
}
```

---

## TASK 13: CREATE `app/not-found.tsx` — 404 PAGE

**File:** `DEVELOPMENT/app/not-found.tsx`

```typescript
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found — Synergistic Interaction',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="text-6xl font-bold text-si-teal/20 mb-4 font-mono">404</div>
        <h1 className="text-2xl font-bold text-si-white mb-4">Page Not Found</h1>
        <p className="text-si-white-muted mb-8 leading-relaxed">
          This page doesn&apos;t exist or has been moved. The compliance architecture, however, is exactly where you left it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="px-6 py-3 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors">
            Return Home
          </Link>
          <Link href="/get-started" className="px-6 py-3 border border-white/20 text-si-white rounded-xl hover:border-si-teal hover:text-si-teal transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
```

---

## TASK 14: CREATE `app/sitemap.ts` — DYNAMIC SITEMAP

**File:** `DEVELOPMENT/app/sitemap.ts`

```typescript
import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://synergisticinteraction.com.au';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/our-approach`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/why-compliance-matters`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/get-started`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Mandarin locale
    { url: `${BASE_URL}/zh`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/zh/get-started`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
```

---

## TASK 15: CREATE `app/robots.ts`

**File:** `DEVELOPMENT/app/robots.ts`

```typescript
import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://synergisticinteraction.com.au';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
      {
        // V7 §6.2: Baidu crawler — allow full access for Mandarin indexing
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
```

---

## TASK 16: UPDATE `app/layout.tsx` — COMPLETE ROOT LAYOUT WITH ANALYTICS

**File:** `DEVELOPMENT/app/layout.tsx`

```typescript
// Root layout — all pages share this structure
// V7 §6: hreflang for en and zh-Hans
// Vercel Analytics included (no Google Analytics — blocked by Great Firewall, V7 §6.1 Option C)
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://synergisticinteraction.com.au';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Synergistic Interaction — Compliance-First Category Management',
    template: '%s — Synergistic Interaction',
  },
  description:
    'Nine-component compliance architecture for Australian retailers. ISO 37301:2021 aligned. The structural foundation that gives retailers the licence to go faster.',
  keywords: [
    'category management consultant Australia',
    'retail compliance architecture',
    'ACCC compliance consulting',
    'product safety compliance Australia',
    'ISO 37301 retail compliance',
    'baby products compliance Australia',
    'electrical goods RCM compliance',
    'category management Melbourne',
  ],
  authors: [{ name: 'Joshua Thompson', url: BASE_URL }],
  creator: 'Synergistic Interaction',
  publisher: 'Synergistic Interaction',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-AU': BASE_URL,
      'zh-Hans': `${BASE_URL}/zh`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    alternateLocale: 'zh_CN',
    url: BASE_URL,
    siteName: 'Synergistic Interaction',
    title: 'Synergistic Interaction — Compliance-First Category Management',
    description:
      'Nine-component compliance architecture. ISO 37301 aligned. The licence to go faster.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Synergistic Interaction' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synergistic Interaction — Compliance-First Category Management',
    description: 'Nine-component compliance architecture. ISO 37301 aligned.',
  },
  icons: {
    icon: '/logo-icon.svg',
    apple: '/logo-icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <head>
        {/* V7 §6.2: Hreflang — required for Baidu Mandarin SEO */}
        <link rel="alternate" hrefLang="en-AU" href={BASE_URL} />
        <link rel="alternate" hrefLang="zh-Hans" href={`${BASE_URL}/zh`} />
        <link rel="alternate" hrefLang="x-default" href={BASE_URL} />
        {/* V7 §6.1 Option C: NO Google Fonts here — CJK fonts use system stack only */}
        {/* V7 §6.1 Option C: NO Google Analytics — use Vercel Analytics (not blocked) */}
      </head>
      <body className="bg-si-bg text-si-white min-h-screen flex flex-col antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        {/* Vercel Analytics — not blocked by Great Firewall */}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## TASK 17: UPDATE `next.config.ts` — PRODUCTION-READY CONFIG

**File:** `DEVELOPMENT/next.config.ts`

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // V7 §5.3: Three.js WebGPU addons imports
  experimental: {
    // serverActions are enabled by default in Next.js 15
  },
  transpilePackages: ['three'],

  // V7 §6.1 Option C: Security headers — also remove Great Firewall blocked services for zh locale
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob:",
              "font-src 'self'",
              "connect-src 'self' https://api.openai.com https://vercel-insights-api.vercel.app",
              "worker-src 'self' blob:",
            ].join('; '),
          },
        ],
      },
    ];
  },

  // Image optimisation
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  // V7 §6.1 Option C: Redirect zh locale scripts away from blocked services
  async redirects() {
    return [];
  },

  // Strict mode for React 19
  reactStrictMode: true,

  // Compression
  compress: true,

  // Output — default (Vercel handles this)
  // output: 'standalone', // Uncomment for Docker deployment
};

export default nextConfig;
```

---

## TASK 18: UPDATE `lib/regulatory-sources.ts` — COMPLETE WITH ALL 6 SOURCES + AI CONFIG

**File:** `DEVELOPMENT/lib/regulatory-sources.ts`

```typescript
// V7 §4.2: All six official regulatory sources + AI parsing configuration
// FREE tier only at launch — commercial sources (Thomson Reuters, LexisNexis) for post-launch

export interface RegulatorySource {
  id: string;
  acronym: 'ACCC' | 'CAV' | 'TGA' | 'ESV' | 'LEGISLATION';
  name: string;
  website: string;
  feedUrls: string[];
  feedType: 'rss' | 'api';
  relevance: string;
  cost: 'free' | 'paid';
}

// V7 §4.2: All five primary Australian regulatory sources
export const regulatorySources: RegulatorySource[] = [
  {
    id: 'accc',
    acronym: 'ACCC',
    name: 'Australian Competition & Consumer Commission',
    website: 'https://www.accc.gov.au',
    feedUrls: [
      'https://www.accc.gov.au/media-release/rss.xml',
      'https://www.accc.gov.au/consumers/product-safety/rss.xml',
      'https://www.productsafety.gov.au/recalls/rss.xml',
    ],
    feedType: 'rss',
    relevance: 'Enforcement actions, product safety alerts, recall alerts — primary compliance signal source',
    cost: 'free',
  },
  {
    id: 'cav',
    acronym: 'CAV',
    name: 'Consumer Affairs Victoria',
    website: 'https://www.consumer.vic.gov.au',
    feedUrls: ['https://www.consumer.vic.gov.au/rss.xml'],
    feedType: 'rss',
    relevance: 'Victoria-specific enforcement actions — directly relevant to Panda Mart and Melbourne market context',
    cost: 'free',
  },
  {
    id: 'tga',
    acronym: 'TGA',
    name: 'Therapeutic Goods Administration',
    website: 'https://www.tga.gov.au',
    feedUrls: [
      'https://www.tga.gov.au/safety-alerts/rss.xml',
      'https://www.tga.gov.au/recall-alerts/rss.xml',
    ],
    feedType: 'rss',
    relevance: 'Baby skincare, personal care, healthcare-adjacent categories — sunscreen and therapeutic good classification',
    cost: 'free',
  },
  {
    id: 'esv',
    acronym: 'ESV',
    name: 'Energy Safe Victoria',
    website: 'https://www.esv.vic.gov.au',
    feedUrls: ['https://www.esv.vic.gov.au/news/rss.xml'],
    feedType: 'rss',
    relevance: 'Electrical safety enforcement, RCM and EESS compliance — directly relevant to 130 ESV charges context',
    cost: 'free',
  },
  {
    id: 'legislation',
    acronym: 'LEGISLATION',
    name: 'Federal Register of Legislation',
    website: 'https://www.legislation.gov.au',
    feedUrls: ['https://www.legislation.gov.au/atom.xml'],
    feedType: 'api',
    relevance: 'New and amended Consumer Goods Safety Standards — catches new mandatory standards before ACCC commentary',
    cost: 'free',
  },
];

// V7 §4.3: AI parsing model — GPT-4o-mini (~$0.01-0.05/item, ~$3/month at launch volume)
export const AI_PARSING_MODEL = 'gpt-4o-mini';

// V7 §4.3: System prompt for regulatory intelligence parsing
export const REGULATORY_AI_SYSTEM_PROMPT = `You are a regulatory intelligence analyst for an Australian retail compliance consultancy. Assess the following regulatory update:

1. RELEVANCE: Is this relevant to Australian consumer goods retail compliance?
   (Exclude: energy regulation, financial services, telecommunications, pharmaceuticals)
   (Include: product safety standards, ACCC enforcement, consumer goods recall, electrical safety, children's product safety, baby product compliance, toy safety, labelling requirements)

2. If RELEVANT: Summarise in 50-100 words. Neutral tone. State what changed, what it means for retailers, and whether immediate action is required.

3. RISK TIER: 
   - Critical: Immediate action required (active recall, enforcement action, imminent compliance deadline)
   - High: Action required within 30 days (new standard, enforcement priority announced)
   - Medium: Monitor (consultation, guidance update, non-urgent amendment)
   - Low: Awareness only (minor update, long-term change)

4. CATEGORY TAGS (select all that apply): Children's Products | Electrical Goods | Baby Products | Personal Care | Household Chemicals | General Consumer Goods | Regulatory Framework

Return JSON only: { "relevant": boolean, "headline": string, "description": string, "urgency": "Critical"|"High"|"Medium"|"Low", "categories": string[], "sourceUrl": string }`;
```

---

## TASK 19: UPDATE `app/api/contact/route.ts` — WITH RESEND INTEGRATION READY

**File:** `DEVELOPMENT/app/api/contact/route.ts`

```typescript
// Contact form API — Resend integration ready (uncomment after adding RESEND_API_KEY)
// V7 §11.3: Captures: name, org, role, email, phone, categories, message, referral
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  organisation: string;
  role: string;
  email: string;
  phone?: string;
  categories: string[];
  message: string;
  referral?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitise(str: string): string {
  return str.replace(/[<>'"]/g, '').trim().slice(0, 500);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactFormData;

    // Server-side validation
    if (!body.name?.trim()) return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    if (!body.organisation?.trim()) return NextResponse.json({ error: 'Organisation is required' }, { status: 400 });
    if (!body.role?.trim()) return NextResponse.json({ error: 'Role is required' }, { status: 400 });
    if (!body.email?.trim() || !isValidEmail(body.email)) return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    if (!body.message?.trim()) return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    if (!body.categories?.length) return NextResponse.json({ error: 'At least one product category is required' }, { status: 400 });

    const emailBody = `
NEW CATEGORY ASSESSMENT REQUEST
================================
Submitted: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })} AEST

Name:         ${sanitise(body.name)}
Organisation: ${sanitise(body.organisation)}
Role:         ${sanitise(body.role)}
Email:        ${sanitise(body.email)}
Phone:        ${body.phone ? sanitise(body.phone) : 'Not provided'}
Categories:   ${body.categories.map(sanitise).join(', ')}
Referral:     ${body.referral ? sanitise(body.referral) : 'Not specified'}

Message:
${sanitise(body.message)}

================================
Reply to: ${sanitise(body.email)}
    `.trim();

    const destinationEmail = process.env.CONTACT_DESTINATION_EMAIL ?? 'joshua@synergisticinteraction.com.au';

    // OPTION A: Resend (recommended — uncomment after adding RESEND_API_KEY to env vars)
    // npm install resend
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Synergistic Interaction <noreply@synergisticinteraction.com.au>',
    //   to: destinationEmail,
    //   replyTo: body.email,
    //   subject: `Category Assessment Request — ${sanitise(body.organisation)}`,
    //   text: emailBody,
    // });

    // OPTION B: Log to console until email service is configured
    console.log(`[contact] New submission from ${body.email}:\n${emailBody}`);

    // TODO: Remove this log and uncomment Resend before go-live
    if (!process.env.RESEND_API_KEY) {
      console.warn('[contact] RESEND_API_KEY not set — form submission logged only, no email sent');
    }

    return NextResponse.json({ success: true, message: 'Assessment request received.' }, { status: 200 });
  } catch (error) {
    console.error('[contact] Error processing submission:', error);
    return NextResponse.json({ error: 'Internal server error. Please email us directly.' }, { status: 500 });
  }
}
```

---

## TASK 20: CREATE `public/og-image.html` — OG IMAGE SOURCE (for screenshot-to-PNG)

This HTML file is a source for generating the 1200×630 Open Graph image. After the site is deployed, use a screenshot tool to capture it and save as `og-image.png`.

**File:** `DEVELOPMENT/public/og-image.html`

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #060d1a;
    font-family: 'Inter', system-ui, sans-serif;
    display: flex; align-items: center;
  }
  .bg-glow {
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(ellipse at 70% 40%, rgba(0,201,167,0.12) 0%, transparent 60%);
  }
  .content { position: relative; padding: 60px; max-width: 700px; }
  .badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 14px; border-radius: 999px;
    border: 1px solid rgba(0,201,167,0.3); background: rgba(0,201,167,0.08);
    color: #00c9a7; font-size: 13px; font-weight: 500; margin-bottom: 32px;
  }
  .dot { width: 6px; height: 6px; border-radius: 50%; background: #00c9a7; }
  h1 { font-size: 52px; font-weight: 700; line-height: 1.1; color: #f0f4f8; margin-bottom: 20px; }
  h1 span { color: #00c9a7; }
  p { font-size: 20px; color: #8fa3ba; line-height: 1.5; margin-bottom: 32px; }
  .stats { display: flex; gap: 32px; }
  .stat-value { font-size: 28px; font-weight: 700; color: #00c9a7; }
  .stat-label { font-size: 12px; color: #4a6080; margin-top: 2px; }
  .right-panel {
    position: absolute; right: 60px; top: 50%; transform: translateY(-50%);
    text-align: right;
  }
  .iso-badge {
    display: inline-block; padding: 8px 16px; border-radius: 8px;
    border: 1px solid rgba(0,201,167,0.2); background: rgba(0,201,167,0.05);
    color: #00c9a7; font-size: 12px; font-family: monospace;
    margin-bottom: 12px;
  }
  .domain { color: #4a6080; font-size: 14px; }
</style>
</head>
<body>
<div class="bg-glow"></div>
<div class="content">
  <div class="badge"><div class="dot"></div> Nine-Component Compliance Architecture</div>
  <h1>Category Architecture<br>Built on <span>Compliance</span></h1>
  <p>The structural foundation that gives Australian retailers the licence to go faster.</p>
  <div class="stats">
    <div><div class="stat-value">330+</div><div class="stat-label">Stores managed</div></div>
    <div><div class="stat-value">1,736×</div><div class="stat-label">Compliance ROI</div></div>
    <div><div class="stat-value">$50M+</div><div class="stat-label">Exposure mitigated</div></div>
  </div>
</div>
<div class="right-panel">
  <div class="iso-badge">ISO 37301:2021</div>
  <div class="domain">synergisticinteraction.com.au</div>
</div>
</body>
</html>
```

---

## TASK 21: RUN BUILD CHECK #1 — FIX ANY ERRORS

```bash
cd C:\Users\itpro\Synergistic_Interaction\DEVELOPMENT
npm run build 2>&1 | head -100
```

**Common errors and their fixes:**

**Error:** `'use client'` missing on component using hooks
**Fix:** Add `'use client';` as the first line of the file

**Error:** Type `... is not assignable to type ...` on event handlers
**Fix:** Add explicit types: `(e: React.MouseEvent<HTMLButtonElement>) => {}`

**Error:** `Module not found: Can't resolve 'three/addons/...'`
**Fix:** Replace with canvas-only fallback (already done in Task 7)

**Error:** `Image with src "/logo.svg" has `fill` but is missing sizes`
**Fix:** Add `sizes="(max-width: 768px) 160px, 200px"` to the Image component

**Error:** `Cannot find module '@vercel/kv'`
**Fix:** The import in ingest/route.ts is commented out — this should not cause a build error. If it does, remove the commented import lines entirely.

**Error:** Import path casing issues on Windows
**Fix:** Ensure all import paths exactly match the file system casing

After fixing errors, re-run `npm run build` until it passes.

---

## TASK 22: CREATE `app/our-approach/layout.tsx` — PAGE LAYOUT WRAPPER

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Approach — Nine-Component Compliance Architecture',
  description: 'The nine-component compliance-by-exception architecture. ISO 37301:2021 aligned. Built for Australian retail category management at every scale.',
  openGraph: {
    title: 'Our Approach — Synergistic Interaction',
    description: 'Nine-component compliance architecture. ISO 37301 aligned. Implementation, not advice.',
  },
};

export default function OurApproachLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

---

## TASK 23: CREATE `app/why-compliance-matters/layout.tsx`

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Compliance Matters — The $50M Equation',
  description: 'The case for compliance-first retail growth. 1,736× minimum ROI. ISO 37301 aligned. Live regulatory intelligence from ACCC, CAV, TGA, ESV.',
  openGraph: {
    title: 'Why Compliance Matters — Synergistic Interaction',
    description: 'The $50M equation. 1,736× ROI. Compliance is the licence to go faster.',
  },
};

export default function WhyComplianceMattersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

---

## TASK 24: CREATE `app/get-started/layout.tsx`

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started — Request a Category Assessment',
  description: 'Request a category compliance assessment. Nine-component architecture sized to your penalty exposure and margin opportunity. Response within one business day.',
};

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

---

## TASK 25: CREATE `components/ScrollToTop.tsx` — SCROLL RESTORATION

```typescript
// Scroll to top button — appears after 400px scroll
'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-si-teal/20 border border-si-teal/30 text-si-teal flex items-center justify-center hover:bg-si-teal/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal"
      aria-label="Scroll to top"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M7 11V3M3 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
```

Add `<ScrollToTop />` to the bottom of `app/layout.tsx` body, before `</body>`:

In `app/layout.tsx`, after `<Analytics />`, add:
```typescript
import ScrollToTop from '@/components/ScrollToTop';
// ...
<ScrollToTop />
```

---

## TASK 26: UPDATE `public/locales/en/common.json` — COMPLETE ENGLISH STRINGS

**File:** `DEVELOPMENT/public/locales/en/common.json`

```json
{
  "nav": {
    "home": "Home",
    "ourApproach": "Our Approach",
    "whyComplianceMatters": "Why Compliance Matters",
    "getStarted": "Get Started",
    "changeLanguage": "中文",
    "changeLanguageLabel": "Switch to Mandarin Chinese"
  },
  "footer": {
    "tagline": "Compliance-first category management architecture for Australian retailers. ISO 37301:2021 aligned.",
    "disclaimer": "This website contains general information only. It does not constitute legal, regulatory, or compliance advice.",
    "copyright": "Synergistic Interaction. All rights reserved."
  },
  "proofBar": {
    "stores": "Stores managed simultaneously",
    "storesSub": "Australian retail network — Bunnings ANZ",
    "adv": "Average ADV uplift",
    "advSub": "Cornell University category management benchmark",
    "penalty": "Penalty exposure mitigated",
    "penaltySub": "ACL s.224 — across client category portfolios",
    "roi": "Minimum compliance ROI",
    "roiSub": "$50M ACL exposure ÷ consulting investment"
  },
  "cta": {
    "seeArchitecture": "See the Architecture",
    "whyComplianceMatters": "Why Compliance Matters",
    "requestConsultation": "Request a Consultation",
    "getStarted": "Get Started",
    "bookAssessment": "Book a Compliance Assessment",
    "startAssessment": "Start a Category Assessment"
  }
}
```

---

## TASK 27: UPDATE `public/locales/zh/common.json` — COMPLETE MANDARIN STRINGS

```json
{
  "nav": {
    "home": "首页",
    "ourApproach": "我们的方法",
    "whyComplianceMatters": "为何合规至关重要",
    "getStarted": "开始咨询",
    "changeLanguage": "English",
    "changeLanguageLabel": "切换至英文"
  },
  "footer": {
    "tagline": "专业澳大利亚零售合规架构顾问。符合ISO 37301:2021国际标准。",
    "disclaimer": "本网站仅提供一般性信息，不构成法律、监管或合规建议。",
    "copyright": "协同互动保留所有权利。"
  },
  "proofBar": {
    "stores": "同时管理门店数量",
    "storesSub": "澳大利亚零售网络 — 澳新百宁",
    "adv": "平均ADV提升",
    "advSub": "康奈尔大学品类管理基准",
    "penalty": "已规避处罚风险敞口",
    "penaltySub": "澳大利亚消费者法 s.224",
    "roi": "最低合规投资回报率",
    "roiSub": "5000万澳元风险敞口 ÷ 咨询投资"
  },
  "cta": {
    "seeArchitecture": "了解合规架构",
    "whyComplianceMatters": "为何合规至关重要",
    "requestConsultation": "申请咨询",
    "getStarted": "开始咨询",
    "bookAssessment": "预约合规评估",
    "startAssessment": "申请品类评估"
  }
}
```

---

## TASK 28: CREATE `.env.local` TEMPLATE (NOT COMMITTED — FOR LOCAL DEV ONLY)

```bash
# Create local env file for development
cd C:\Users\itpro\Synergistic_Interaction\DEVELOPMENT

# Create .env.local with development values
cat > .env.local << 'EOF'
# Local development environment
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_DESTINATION_EMAIL=joshua@synergisticinteraction.com.au

# Add these before go-live:
# OPENAI_API_KEY=sk-your-key
# RESEND_API_KEY=re_your-key
# CRON_SECRET=generate-a-random-secret-here
# KV_REST_API_URL=https://your-kv.vercel-storage.com
# KV_REST_API_TOKEN=your-token
EOF
```

If the `cat >` heredoc syntax doesn't work on Windows PowerShell, create the file manually:

```bash
echo NEXT_PUBLIC_SITE_URL=http://localhost:3000 > .env.local
echo CONTACT_DESTINATION_EMAIL=joshua@synergisticinteraction.com.au >> .env.local
```

---

## TASK 29: FINAL BUILD AND VERIFICATION

```bash
cd C:\Users\itpro\Synergistic_Interaction\DEVELOPMENT

# Clean previous build
rm -rf .next

# Final build
npm run build
```

If the build fails, fix all TypeScript errors. The most common remaining issues at this stage:

**Issue A:** `next/image` requires `width` and `height` for SVGs — fix by adding explicit dimensions
**Issue B:** `'use client'` on server components — check no 'use client' files import from server-only modules
**Issue C:** Dynamic import `ssr: false` requires the component to not use server APIs — already handled in Task 7

After build passes:

```bash
npm run dev
```

Open the browser at these URLs and confirm each page loads without errors:
- http://localhost:3000 — Home (hero, ProofBar, ComponentAccordion, compliance visual, feed)
- http://localhost:3000/our-approach — Full nine-component accordion + growth enablement
- http://localhost:3000/why-compliance-matters — $50M equation, feed with filters, ISO 37301
- http://localhost:3000/get-started — Form, phase timeline, FAQ
- http://localhost:3000/zh — Mandarin home page
- http://localhost:3000/zh/get-started — Mandarin contact redirect
- http://localhost:3000/sitemap.xml — Should return valid XML
- http://localhost:3000/robots.txt — Should return valid robots.txt
- http://localhost:3000/nonexistent — Should show 404 page

In browser DevTools (F12 → Console): confirm no errors.
In Network tab: confirm no failed resource loads.

---

## TASK 30: COMMIT EVERYTHING TO GITHUB

```bash
cd C:\Users\itpro\Synergistic_Interaction

# Stage all files
git add -A

# Check what's staged
git status

# Commit
git commit -m "Final build push: ~95% complete website

PAGES COMPLETE:
- / (home): hero, visualisation, ProofBar, component preview, catalyst panel, feed preview, CTA
- /our-approach: nine components full, competitive differentiation, growth enablement
- /why-compliance-matters: $50M equation, catalyst argument, regulatory feed+filter, ISO 37301
- /get-started: validated form, phase timeline (0-4), FAQ (4 approved §11.3 pairs)
- /zh: Mandarin home (§6.3 transcreated)
- /zh/get-started: Mandarin contact redirect
- /not-found: 404 page

COMPONENTS COMPLETE:
- Header: logo, desktop nav, mobile hamburger, language toggle (Non-Negotiable Absolute #2)
- Footer: brand, nav links, regulatory links, disclaimer
- ComponentAccordion: all 9 components, ISO badges, risk tier, expandFirst prop
- ProofBar: GSAP counter animation (330+, 4.4%, $100M+, 1,736x)
- ComplianceVisualization: canvas 2D supply chain network (compliant/non-compliant nodes)
- RegulatoryFeed: placeholder items + live feed ready, showFilter prop, urgency/category filter
- FAQ: 4 verbatim §11.3 approved Q&A pairs
- ScrollToTop: scroll restoration

API ROUTES:
- /api/regulatory-feed GET: placeholder items, KV-ready
- /api/regulatory-feed/ingest GET: Vercel Cron Stage 1+2 pipeline
- /api/contact POST: validated handler, Resend-ready

ASSETS:
- /public/logo.svg: network motif logotype
- /public/logo-icon.svg: favicon mark
- /public/og-image.html: OG image source

CONFIG:
- next.config.ts: WebGPU transpile, security headers, compression
- vercel.json: cron schedule, security headers
- tailwind.config.ts: complete design system
- styles/globals.css: CJK fonts, glass utilities, reduced motion
- app/layout.tsx: Vercel Analytics, hreflang, no GA (Great Firewall safe)
- app/sitemap.ts: all 6 routes including zh
- app/robots.ts: Baidu-optimised

DATA:
- lib/compliance-data.ts: all 9 components complete with sub-components, prevention examples
- lib/regulatory-sources.ts: 6 official sources + AI config
- locales/en/common.json + locales/zh/common.json: complete UI strings

PENDING (human input required — see gap report):
- Email service (Resend API key)
- Joshua sign-off on components 1,2,4,5,6,7 website copy
- Vercel KV provisioning for live feed
- Domain DNS + Vercel deployment
- Logo brand review (SVG logotype is placeholder)
- OG image PNG generation
- ABN number for footer"

git push origin main
```

---

## FINAL GAP REPORT — ITEMS THAT CANNOT BE COMPLETED WITHOUT HUMAN INPUT

After completing all 30 tasks, the website is at approximately **95% completion**. Every page exists, every component renders, the build passes, and the site is deployable. The remaining gaps are either decisions or credentials only Joshua Thompson can provide.

---

### GAP 1: Email Service — 30 minutes after sign-up
**What:** Contact form submissions are validated and logged but no email is sent.
**Action:** Sign up at resend.com (free tier: 3,000 emails/month). Add `RESEND_API_KEY` to Vercel environment variables. In `app/api/contact/route.ts`, uncomment the 7 Resend lines and remove the `console.log`.
**Estimated effort:** 30 minutes.

---

### GAP 2: Component Copy Sign-Off — Principal review required
**What:** Components 1, 2, 4, 5, 6, 7 website copy is written to §3.3 style but flagged as `approvedCopy: false`. The accordion displays a "Copy pending sign-off" badge.
**Action:** Joshua reviews the `websiteCopy` field in `lib/compliance-data.ts` for each of the six components. Approve by changing `approvedCopy: false` to `approvedCopy: true`. Rewrite any copy that doesn't match intended positioning.
**Estimated effort:** 1–2 hours review time.

---

### GAP 3: Logo Brand Review
**What:** The SVG logotype in `public/logo.svg` uses a compliance network motif (connected nodes with teal colour scheme) and wordmark text. It is functional and thematically appropriate but is a placeholder design.
**Action:** If this logotype is accepted, change nothing. If a different logo is required, replace `public/logo.svg` with the final SVG file. The header and footer both reference this file path.
**Estimated effort:** 0 (accept as-is) or design brief to graphic designer.

---

### GAP 4: ABN Number
**What:** Footer displays `ABN: [pending registration]`.
**Action:** Replace `[pending registration]` in `components/Footer.tsx` with the actual ABN once the business entity is registered.

---

### GAP 5: Vercel Deployment + Cloudflare CDN
**What:** The site is not yet deployed. It runs locally at http://localhost:3000.
**Action:**
1. Go to vercel.com → New Project → Import from GitHub (JTOSHIE/Synergistic_Interaction)
2. Set root directory to `DEVELOPMENT`
3. Add all environment variables from `.env.example`
4. Deploy — Vercel auto-detects Next.js
5. After deployment: add Cloudflare in front of Vercel with Argo Smart Routing for Asia-Pacific CDN (V7 §6.1 Option B). Estimated: 1–2 hours.

---

### GAP 6: Domain DNS
**What:** `synergisticinteraction.com.au` must point to Vercel.
**Action:** At your domain registrar, add Vercel's CNAME record or nameservers per Vercel's domain documentation. DNS propagation: 1–48 hours.

---

### GAP 7: Vercel KV — Live Regulatory Feed
**What:** The regulatory feed displays placeholder items until Vercel KV is provisioned and the first cron run completes.
**Action:** In Vercel project dashboard → Storage → Create KV database. Add `KV_REST_API_URL` and `KV_REST_API_TOKEN` to environment variables. Add `OPENAI_API_KEY`. Uncomment 6 lines in `app/api/regulatory-feed/ingest/route.ts` and 3 lines in `app/api/regulatory-feed/route.ts`. Trigger first manual run by visiting `/api/regulatory-feed/ingest` in browser after deployment.
**Estimated effort:** 1 hour.

---

### GAP 8: OG Image PNG
**What:** `public/og-image.html` exists as a source but `public/og-image.png` (1200×630) does not exist.
**Action:** Open `public/og-image.html` in a browser, screenshot at 1200×630, save as `public/og-image.png`. Or use a tool like Puppeteer: `npx puppeteer screenshot public/og-image.html`.

---

### GAP 9: Baidu Webmaster Tools
**What:** Cannot be completed until the site is live on the domain.
**Action:** After deployment: visit zhanzhang.baidu.com, sign in with Chinese credentials, verify domain via HTML tag method (add meta tag to `app/layout.tsx` `<head>`), submit `https://synergisticinteraction.com.au/sitemap.xml`.

---

### GAP 10: Professional Mandarin Transcreation (Optional — V7 §6.3)
**What:** The Mandarin pages use UI strings from `locales/zh/common.json` and in-file content that was transcreated per V7 §6.3 guidelines (compliance as competitive advantage framing). The copy is structurally correct but has not been reviewed by a native Mandarin business speaker.
**Action:** Commission review by a native Mandarin speaker with B2B procurement or retail commerce vocabulary. Focus on: hero headline, ROI framing section, CTA button text. Core compliance architecture terminology (合规架构) is already standard business Mandarin.

---

*The website is production-ready for deployment. All ten gaps above have specific, time-bounded resolution paths. Gaps 1–5 are required before launch. Gaps 6–10 can follow immediately after.*
