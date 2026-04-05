# SYNERGISTIC INTERACTION — CLAUDE CODE SESSION 5
## Website Content Alignment: Proposal v10 Sync
### Document version: 1.0 | Created: April 2026

---

## HOW TO USE THIS DOCUMENT

1. Move this file into: `~/Documents/Synergistic_Interaction/`
2. Open Claude Code
3. Paste the finder prompt (provided separately) into Claude Code
4. Claude Code will read this file and execute all tasks in order

---

## SESSION OBJECTIVE

Update the website codebase to align with the finalised Panda Mart proposal (v10). This is a **content and copy update session only** — no structural or architectural changes to pages, routing, or components. The build must pass `npm run build` at the end of the session and all changes must be committed and pushed to `main`.

---

## REPOSITORY AND WORKING CONTEXT

- **Repo:** https://github.com/JTOSHIE/Synergistic_Interaction
- **Local path:** `~/Documents/Synergistic_Interaction/DEVELOPMENT`
- **Branch:** `main`
- **Last commit:** `6cb3961` — "Final build push: ~95% complete website"
- **Build command:** `npm run build` (run from `DEVELOPMENT/` directory)
- **Dev command:** `npm run dev` (run from `DEVELOPMENT/` directory)
- **Node required:** 18+
- **Key content files:** `lib/compliance-data.ts`, `locales/en/common.json`, `locales/zh/common.json`, and page files under `app/`

Before starting any changes, run `git status` to confirm the working tree is clean and on `main`. If there are uncommitted changes, stash them first.

---

## CHANGE 1 — Contact email (global find and replace)

**Priority: CRITICAL — affects live email delivery**

Find every instance of `joshua@synergisticinteraction.com.au` in the entire codebase and replace with `jt@synergisticinteraction.com.au`.

Search across all file types including: `.tsx`, `.ts`, `.json`, `.md`, `.env.example`, `.env.local`, and any configuration files.

After replacing, output the exact count of replacements made and list every file that was changed.

Verify by running: `grep -r "joshua@synergisticinteraction" . --include="*.tsx" --include="*.ts" --include="*.json" --include="*.md" --include="*.env*"` — the result must be zero matches.

---

## CHANGE 2 — ProofBar: replace 1,736× and correct 4.4%

**Files to check:** `components/ProofBar.tsx` and any data file that feeds it (check `lib/` directory for a stats or proof-points data file).

### 2a — Remove 1,736×, add 13 years

Remove the `1,736×` stat entirely. Replace it with:

```
value: 13
suffix: "yrs"
label: "First client retained"
subtext: "G-Force founding client — full 13-year tenure"
```

If the stat is defined as a number with a separate suffix string, use `13` as the number and `"yrs"` as the suffix. If it is a single formatted string, use `"13 yrs"`.

### 2b — Correct 4.4% to 4%

Find the `4.4` or `4.4%` stat and change it to `4` / `4%`.

Update the label to: `"Cornell-validated ADV uplift"`

Update the subtext to: `"Independent peer-reviewed validation — 61 stores"`

### Final ProofBar order (left to right):

| Position | Value | Label | Subtext |
|----------|-------|-------|---------|
| 1 | 330+ | Stores managed simultaneously | Australia & New Zealand network |
| 2 | 4% | Cornell-validated ADV uplift | Independent peer-reviewed validation — 61 stores |
| 3 | $100M+ | Annual portfolio value | G-Force peak ANZ operation |
| 4 | 13 yrs | First client retained | G-Force founding client — full 13-year tenure |

---

## CHANGE 3 — Remove all "30% local sourcing" language

Search the entire codebase for any instance of the following strings and update them per the instructions below:

**Search terms:**
- `30%`
- `30 per cent`
- `thirty percent`
- `local sourcing target`
- `locally sourced`
- `transition to local`
- `import model`
- `Chinese import`
- `direct import`

**For each match found:**

If the match describes Panda Mart's or any retailer's sourcing transition goal (e.g. "transition from Chinese imports to 30% local products"), replace with the correct framing:

> "Sourcing 100% of the category range through established Australian distributors — distributors who already supply major Australian retailers and already carry their own compliance obligations — is the structural decision that determines the compliance position from day one."

If the match is in a context about the general benefits of local sourcing, reframe as:

> "Sourcing through established Australian distributors provides immediate access to compliant, brand-recognised product with 2–5 business day replenishment, 30–60 day credit terms, and a supply chain that has already satisfied the compliance requirements of Australia's major retailers."

Do **not** remove references to "Australian distributors", "local suppliers", or "Australian-made" in general — only remove the "30% percentage target / transition" framing specifically.

Output a list of every file and line changed.

---

## CHANGE 4 — Environment files: contact email

In `.env.example`, find:
```
CONTACT_DESTINATION_EMAIL=joshua@synergisticinteraction.com.au
```
Replace with:
```
CONTACT_DESTINATION_EMAIL=jt@synergisticinteraction.com.au
```

In `.env.local`, make the same replacement.

In `app/api/contact/route.ts`, check whether the destination email is hardcoded anywhere in addition to the environment variable. If it is, update it.

---

## CHANGE 5 — Engagement structure description

Wherever the website describes the engagement model (check `/our-approach` page, `/get-started` page, and any FAQ or pricing section), update the engagement framing to reflect the finalised structure:

**Structure:** Two days per week across thirteen weeks  
**Total hours:** 208 hours across five phases  
**Phase sequence:**
1. Market & Supplier Intelligence
2. Range Architecture
3. Commercial Negotiation & Compliance Verification
4. Planogram, Reporting & Merchandising
5. Launch, Monitoring & Stabilisation

**Important — do not publish a rate anywhere.** If an hourly rate (`$360`, `$240`, or any dollar-per-hour figure) appears on any page or in any component, remove it. Replace with:

> "The investment is sized relative to the penalty exposure and margin opportunity in your category."

The website does not publish rates. Pricing discussion happens in the first response to the qualification form submission.

---

## CHANGE 6 — Consultant credentials: shift from career biography to market reach

On the homepage and `/our-approach` page, find and update any section that reads as a career biography or career timeline.

**Remove or rewrite any language such as:**
- "Joshua began his career at..."
- "Career highlights include..."
- "Career at a glance" (heading or subheading)
- Timeline-style bullet lists of roles and dates
- Language that reads like a CV or resume entry

**Replace with market-reach and systems framing:**

The consultant leading every engagement has spent 25 years building, deploying, and operating category management systems across four international retail markets — with active distributor and supplier relationships in Australian retail right now.

**Three systems to name specifically:**

**1. World-First Real-Time Planogram Platform (2003 — ProCorp)**
Replaced paper-based planogramming with live PDA field entry, real-time compliance-by-exception monitoring, and store-specific digital planogram generation. Deployed across 3,500+ US retail stores. Independently validated by Cornell University — 4% average daily volume increase across 61 evaluated stores.

**2. G-Force Mobile & Power BI Analytics (G-Force, ANZ)**
Bespoke Android application managing real-time data collection from 250+ field representatives across 330+ Bunnings stores. Fed directly into custom Power BI dashboards generating store-specific, demographic-specific, and supplier-specific performance insights for 20 global clients.

**3. Category Performance Dashboard (current engagements)**
Weekly GMROI and OSA tracking, compliance file monitoring, supplier performance data, and sell-through analysis — live from launch day. Built specifically for each client engagement on the same analytics platform used to manage $100M+ in annual portfolio value.

**Market reach to surface (four markets):**

| Market | Scale |
|--------|-------|
| USA — Tri-State & National | 3,500+ stores across all major US retail formats — Walmart, CVS, Rite Aid, supermarkets, convenience and drug stores |
| Australia & New Zealand | 330+ Bunnings stores simultaneously, 2,000+ product lines, 20 global suppliers, 13 years |
| United Kingdom | Sainsbury's & Tesco — category management and merchandising strategy |
| Australia — Current | 50+ active supplier and distributor relationships. Current clients include major ANZ retailers |

---

## CHANGE 7 — Add GMROI to KPI and performance language

GMROI (Gross Margin Return on Investment) is the primary performance metric in every category management engagement. It must appear on the website wherever performance metrics are discussed.

**On `/why-compliance-matters`** — in any KPI or performance section, add GMROI as the first listed metric alongside OSA:

> "GMROI and On-Shelf Availability (OSA) are the two headline metrics tracked weekly from launch day. GMROI measures the gross profit generated per dollar invested in inventory. OSA measures whether the right product is on the shelf, in stock, all day — the foundational requirement for accurate GMROI and for converting shopper intent into a completed sale."

**On `/our-approach`** — in the methodology or outcomes section, add:

> "Weekly GMROI and OSA tracking are live from launch day — not established after a stabilisation period. Management has real-time visibility of category performance from the first week of trading."

**In the ComponentAccordion** — for Component 6 (Real-Time Compliance Monitoring), ensure GMROI monitoring is mentioned alongside compliance monitoring in the description.

If there is a KPI grid or metrics component on any page, add GMROI as the first entry with:
- Value/target: `3.0×+`
- Label: `GMROI Target`
- Subtext: `Gross Margin Return on Investment — tracked weekly from launch`

---

## CHANGE 8 — Add multi-site rollout capability section

On `/our-approach` (and optionally `/get-started`), add a callout section describing the multi-site engagement model. Do not name any specific client or location.

**Heading:** `Built Once. Deployed Across Your Network.`

**Copy:**

> The framework built in the pilot store — supplier agreements, compliance documentation, planogram standards, and reporting infrastructure — is designed for direct replication across every subsequent location. Each additional store receives the same professional category management at a fraction of the pilot investment, because the methodology, supplier relationships, and compliance files already exist. The second store implementation takes half the time of the pilot. The third takes less again. This is the commercial logic of the multi-store engagement model: the pilot is not the cost of one category. It is the foundation cost of every category, across every store, that follows.

This should be a styled callout card or dark-background section consistent with the existing design language — not a plain paragraph block. Position it after the five-phase methodology section on `/our-approach`.

---

## CHANGE 9 — Update compliance narrative: add distributor-first framing

On `/why-compliance-matters` and at the top of the nine-component accordion section on `/our-approach`, add the following introductory framing **before** the nine components are presented. This does not replace any existing content — it precedes it.

**Add this copy as an introductory paragraph or callout:**

> Sourcing through established Australian distributors is the structural decision that determines the compliance position for the entire category. These distributors are already supplying major Australian retailers and already carry their own compliance obligations — they have already verified their products against Australian mandatory safety standards. The nine-component architecture verifies and documents that, creating a complete compliance file for every ranged product: the evidentiary record of professional category management that demonstrates proactive intent to regulators, protects business continuity, and gives the retailer operational confidence to move fast.

---

## CHANGE 10 — Write the six pending component descriptions

**File:** `lib/compliance-data.ts`

Components 1, 2, 4, 5, 6, and 7 currently have `approvedCopy: false`. Write final approved copy for each component's `websiteCopy` field using the text below exactly. Change `approvedCopy: false` to `approvedCopy: true` for each one after updating.

---

**Component 1 — Product Compliance Verification**
```
websiteCopy: "Every product is verified against the applicable mandatory safety standard before any purchase order is placed. The compliance file is initiated before commercial commitment — not after delivery. A supplier who cannot provide current, verifiable compliance documentation does not pass the verification gate, regardless of price or relationship history. This is the hard gate that prevents non-compliant product from entering the supply chain."
approvedCopy: true
```

---

**Component 2 — Supply Chain Compliance Auditing**
```
websiteCopy: "Every supplier is assessed before engagement. Documentation capability is verified — certificates of compliance, third-party test reports, EESS registrations where applicable — not assumed. The audit establishes whether the supplier can sustain compliance documentation across the product lifecycle, not just at the point of first order. Suppliers who pass the audit become part of a verified supplier pool that accelerates subsequent category expansions."
approvedCopy: true
```

---

**Component 4 — Regulatory Risk Assessment**
```
websiteCopy: "Quantified regulatory exposure is the foundational input to every category and supplier decision. Before any category is ranged, the maximum penalty exposure for non-compliant product in that category is calculated and documented. This converts compliance from a qualitative concern into a commercial number — one that makes the investment in a professional compliance architecture arithmetically obvious."
approvedCopy: true
```

---

**Component 5 — Compliance Documentation Management**
```
websiteCopy: "A complete digital compliance file exists for every ranged product — certificates of compliance, third-party test reports, importer documentation, and standard verification records. The file is maintained as a live document, not a one-time audit artefact. When a certificate approaches expiry, when a standard is updated, when a supplier changes a formulation — the compliance file is what allows the category to respond in days rather than weeks. This is the commercial value of documentation management: operational confidence and business continuity, audit-ready from day one."
approvedCopy: true
```

---

**Component 6 — Real-Time Compliance Monitoring**
```
websiteCopy: "Compliance monitoring operates on an exception-based model — the system flags what requires attention rather than requiring a full audit to find what has changed. Regulatory updates from ACCC, Consumer Affairs Victoria, Energy Safe Victoria, and the TGA are ingested, AI-triaged for retail relevance, and reviewed weekly. Any update affecting ranged categories triggers a compliance file review within 48 hours. GMROI and OSA data is monitored alongside compliance status — performance and compliance are not separate workstreams. The monitoring infrastructure means neither ever becomes stale between formal review cycles."
approvedCopy: true
```

---

**Component 7 — Third-Party Test Report Requirements**
```
websiteCopy: "For Tier 1 categories — baby products, electrical goods, children's toys — independent test reports from accredited laboratories are mandatory, not optional. Distributor certificates are confirmed against current standards, not accepted at face value. Test report expiry dates are tracked and renewal is initiated before lapse. The test report is the evidentiary foundation that makes a compliance claim defensible — not just an internal declaration that a product meets a standard."
approvedCopy: true
```

---

## CHANGE 11 — Retain $50M figure on website

**No change required.** The $50M+ maximum penalty exposure language on `/why-compliance-matters` is correct, appropriate, and must be retained. This is a statutory fact under s.224 of the Competition and Consumer Act 2010 (Cth) and is the right framing for the general website audience. Do not remove or modify it.

This item is listed explicitly so it is not accidentally changed during other edits. If found during a search, leave it exactly as it is.

---

## CHANGE 12 — ABN placeholder

**No change required.** Leave `ABN: [pending registration]` in the footer (`components/Footer.tsx`) exactly as it is. Do not modify.

This item is listed explicitly so it is not accidentally changed during other edits.

---

## CHANGE 13 — Update Mandarin locale file

**File:** `locales/zh/common.json`

Make the following updates:

**13a — Contact email:**
Find any instance of `joshua@synergisticinteraction.com.au` and replace with `jt@synergisticinteraction.com.au`.

**13b — ProofBar stats:**
Find the ProofBar stats array or object in the Mandarin locale file. Make these changes to match the English locale:
- Replace the `1,736×` stat (or `1736`) with the `13 yrs` / `13年` stat
- Label in Mandarin: `首位客户留存年限` (First client retention period)
- Subtext in Mandarin: `G-Force创始客户 — 完整13年合作期` (G-Force founding client — full 13-year tenure)
- Correct `4.4%` to `4%`
- Label in Mandarin: `康奈尔大学验证的销量增长` (Cornell-validated volume uplift)
- Subtext in Mandarin: `独立同行评审验证 — 61家门店` (Independent peer-reviewed validation — 61 stores)

---

## BUILD, COMMIT AND STATUS UPDATE

### Step 1 — Build verification
```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
npm run build
```
The build must complete with **zero errors**. If TypeScript errors are introduced by any of the content changes, fix them before proceeding.

### Step 2 — Verify no joshua@ email remains
```bash
grep -r "joshua@synergisticinteraction" . --include="*.tsx" --include="*.ts" --include="*.json" --include="*.md"
```
Result must be zero matches.

### Step 3 — Verify no 30% sourcing language remains
```bash
grep -r "30%" . --include="*.tsx" --include="*.ts" --include="*.json" --include="*.md"
```
Review all matches — confirm none relate to the sourcing target narrative.

### Step 4 — Commit
```bash
git add -A
git commit -m "Content alignment: proposal v10 sync — email, ProofBar, sourcing narrative, GMROI, component copy, consultant framing, multi-site model"
git push origin main
```

### Step 5 — Update SI_PROJECT_STATUS.md

Update the following items in `SI_PROJECT_STATUS.md`:

**GAP G:** Change status to:
> ✅ All 9 component descriptions written and approved — Session 5

**GAP J:** Change status to:
> ✅ `jt@synergisticinteraction.com.au` confirmed and applied globally — Session 5

**Sessions log:** Add new row:
```
| Session 5 | Proposal v10 content alignment — email, ProofBar, sourcing, GMROI, component copy, consultant framing, multi-site model | TBC files |
```

**NEXT CLAUDE CODE SESSION PROMPT TOPICS:** Replace existing list with:
```
1. Local preview — run `npm run dev`, open http://localhost:3000, confirm all pages render correctly
2. Visual QA — check ProofBar, ComponentAccordion, new callout sections, GMROI additions
3. Vercel deployment — connect repo, configure project settings
4. Environment variables — add all 7 variables listed in ENVIRONMENT VARIABLES NEEDED section
5. Domain DNS — add CNAME after Vercel deployment confirmed
6. Post-deploy: contact form test (Resend), regulatory feed test (OpenAI + KV)
```

Commit the updated status doc with message: `"Update project status — Session 5 complete"`

---

## WHAT THIS SESSION DOES NOT TOUCH

The following must not be changed during this session under any circumstances:

- Page routing, file structure, or component architecture
- The nine-component framework structure, component order, or ISO 37301 clause mapping
- Components 3, 8, and 9 — these already have `approvedCopy: true` and approved website copy from V7 §3.3
- The automated regulatory intelligence pipeline code (`app/api/regulatory-feed/`)
- The Canvas 2D compliance network visualisation
- The Mandarin infrastructure configuration (SSR, CDN, Baidu SEO, hreflang, robots.ts)
- The WebGPU/Three.js specification or visualisation code
- The five non-negotiable absolutes — especially: no Panda Mart attribution is added anywhere
- The $50M+ statutory penalty language on `/why-compliance-matters` (Change 11 — retain as-is)
- The ABN placeholder in the footer (Change 12 — retain as-is)
- Any Vercel configuration files (`vercel.json`, `next.config.ts`)

---

## NON-NEGOTIABLE ABSOLUTES (reference — do not violate)

1. No double work — complete website built once, deployed once
2. "Change Language 中文" visible in English mode header at all times
3. Compliance narrative is central — `/why-compliance-matters` is the most important page
4. No Panda Mart attribution — zero direct reference anywhere in code or copy
5. Website live before the proposal is sent — deployment is the next session after this one

---

*Synergistic Interaction — Session 5 Implementation Prompt | Strictly Confidential*
