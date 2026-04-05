# SYNERGISTIC INTERACTION — CLAUDE CODE SESSION 13
## Canvas Colour Fixes + ProofBar Correction + Status Doc Rebuild
### Document version: 1.0 | Created: April 2026

---

## PRE-AUTHORISATIONS — READ FIRST, APPLY FOR THE ENTIRE SESSION

All of the following are pre-authorised. Do not ask for confirmation on any of them at any point:

- ✅ Overwrite ANY existing file without asking
- ✅ Create ANY new file without asking
- ✅ Run `npm install` for any package without asking
- ✅ Run `vercel --prod` without asking
- ✅ Run `git add`, `git commit`, `git push` without asking
- ✅ Fix TypeScript errors autonomously without asking
- ✅ Continue past any build warning without asking
- ✅ Run `npm run build` and `npm run dev` without asking
- ✅ Update any content, copy, or component without asking

**Working directory:** `~/Documents/Synergistic_Interaction/DEVELOPMENT`
**Repo:** https://github.com/JTOSHIE/Synergistic_Interaction
**Live URL:** https://synergistic-interaction.vercel.app
**Branch:** main

Execute every task below in order without stopping. If a build error occurs, fix it autonomously and continue.

---

## STEP 0 — ORIENTATION (run all commands, read all output before touching any file)

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT

# Find canvas components
find . -name "CategoryGridVisual*" -not -path "*/node_modules/*"
find . -name "HomepageHero*" -not -path "*/node_modules/*"
find . -name "ProofBar*" -not -path "*/node_modules/*"

# Find Mandarin locale
find . -name "*.json" -path "*/zh/*" -not -path "*/node_modules/*"
find . -name "common.json" -not -path "*/node_modules/*"
find . -type d -name "locales" -not -path "*/node_modules/*"
find . -type d -name "zh" -not -path "*/node_modules/*"

# Confirm current git state
git log --oneline -5
git status
```

Read every line of output. Use the actual file paths found — never assume. Note the last 5 commits to understand what sessions have already run.

---

## FIX 1 — CategoryGridVisual: restore coloured category icons

### Context
Session 11 built `CategoryGridVisual` as a canvas component with custom coloured icons for ten retail categories. Session 5 (proposal v10 content alignment) subsequently inserted new sections into surrounding page files. Canvas 2D components are sensitive to DOM order — this caused the category icons to render black instead of coloured.

### Step 1 — Read the files
Open the `CategoryGridVisual` file found in Step 0. Read it in full.
Open `app/category-expertise/page.tsx`. Find where `CategoryGridVisual` is imported and placed.

### Step 2 — Diagnose
Determine which failure mode applies:

**(a) Canvas context null** — `canvas.getContext('2d')` returning null or failing silently.

**(b) Hydration/SSR timing** — The `useEffect` fires before the canvas element is mounted in the DOM, because new sections inserted above it changed hydration order.

**(c) CSS variables unavailable** — The canvas draw calls reference CSS custom properties (e.g. `var(--si-teal)`) but CSS variables are not available inside Canvas 2D `fillStyle` or `strokeStyle`. This is the most likely cause.

### Step 3 — Fix

**For (a) or (b):** Ensure the component has `'use client'` at the very top. Wrap all canvas logic in a null-safe pattern:

```typescript
useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  // all draw logic here
}, []);
```

**For (c) — most likely:** Replace every CSS variable reference inside the canvas draw calls with the hardcoded hex equivalents below. Do not change anything outside the canvas draw logic.

Design system hex values:
```
si-teal        → #00c9a7
si-navy        → #0a1628
si-bg          → #060d1a
si-bg-secondary → #0d1b2e
si-white       → #f0f4f8
si-white-muted → #8fa3ba
si-white-dim   → #4a6080
```

Category tile colours — use these per category (or restore whatever was in the original file if different):
```
Hardware & Building     → #f59e0b  (amber)
Electrical & Batteries  → #3b82f6  (blue)
Gardening & Outdoor     → #22c55e  (green)
Cleaning & Household    → #06b6d4  (cyan)
Furniture & Homewares   → #a78bfa  (violet)
Personal Care           → #a855f7  (purple)
Barbecue & Gas          → #f97316  (orange)
Baby Products           → #00c9a7  (si-teal)
Children's Products     → #ef4444  (red)
Water & Beverages       → #8b5cf6  (indigo)
```

**Critical rule:** Read the original component file first. Restore exactly what was there — only replace CSS variable strings with hex values. Do not redesign, restructure, or recreate the component.

### Step 4 — Verify
```bash
npm run dev
```
Open http://localhost:3000/category-expertise in a browser.
Confirm: all ten category tiles render with their distinct colours, icons are visible (not black boxes), canvas is not blank.

---

## FIX 2 — HomepageHero: planogram realistic product shapes

### Context
Session 11 upgraded the `HomepageHero` canvas to render realistic varying product shapes (bottles, boxes, packets, cans) filling shelves naturally. The current site is reportedly still showing flat coloured rectangles.

### Step 1 — Read the files
Open the `HomepageHero` file found in Step 0. Read it in full.
Open `app/page.tsx`. Confirm `HomepageHero` is still imported and placed correctly. Confirm `VisualizationWrapper` is still wrapping it for SSR safety.

### Step 2 — Check live
```bash
npm run dev
```
Open http://localhost:3000 in a browser. Scroll to the planogram section.

**If product shapes are already rendering correctly:** No change needed. Document as confirmed working and move to Fix 3.

**If it is still showing flat coloured rectangles:** The CSS variable issue from Fix 1 is likely the same root cause. Apply the same fix — replace all CSS variable references in the HomepageHero canvas draw calls with hardcoded hex values.

### Step 3 — Product shape colour reference
The planogram shelf must render using these hardcoded values:
```
Shelf background    → #0a1628
Shelf rail / border → #1e3a5f
Bottles             → #00c9a7  (si-teal)
Boxes               → #f59e0b  (amber)
Packets             → #3b82f6  (blue)
Cans                → #ef4444  (red)
```

Product shapes must vary — not uniform rectangles. Session 11 built distinct shapes per product type:
- Bottles: tall narrow rounded rect
- Boxes: square with label band
- Packets: shorter wide rect with slight transparency
- Cans: cylindrical (rounded rect, narrower)

If the shape differentiation code is missing from the current file, restore it. Do not guess — if you cannot find it in the file, implement minimal shape variation using the description above.

### Step 4 — Verify
Homepage at http://localhost:3000: planogram section shows varied product shapes with colour, fills shelves naturally, is not blank or uniformly coloured.

---

## FIX 3 — ProofBar: replace 1,736× with 13 Years on English site

### Context
The fourth ProofBar stat was confirmed in the handover document as `13 Yrs — First client retained`. The `1,736×` minimum compliance ROI stat from the V7 brief was decided to be removed from the ProofBar. It may still be present and needs to be replaced.

### Step 1 — Read ProofBar.tsx
Open `components/ProofBar.tsx`. Read the full stats array.

### Step 2 — Find and fix the 1,736× stat
Find the stat with value `1736` or `1,736` or label containing "compliance ROI" or "minimum compliance". Replace the entire stat object with:

```typescript
{
  prefix: '',
  value: 13,
  suffix: ' Yrs',
  label: 'First client retained',
  sublabel: 'G-Force founding client — full 13-year engagement',
  decimals: 0,
  href: null,
},
```

### Step 3 — Confirm the 4% Cornell stat
Find the stat with value `4.4` or label referencing Cornell. If it shows `4.4`, change value to `4`. The label must read:
- `label`: Cornell-validated ADV uplift
- `sublabel`: Independent peer-reviewed validation — 61 stores

### Step 4 — Confirm the complete ProofBar stat set
After your changes, the four ProofBar stats must be exactly:

| Stat | Value | Label |
|------|-------|-------|
| 1 | 330+ | Stores managed — Australia and New Zealand |
| 2 | 4% | Cornell-validated ADV uplift |
| 3 | $100M+ | Annual portfolio value managed |
| 4 | 13 Yrs | First client retained |

If the order is different, do not reorder — just confirm all four are present with correct values.

---

## FIX 4 — Mandarin locale: align ProofBar stats

### Context
Session 5 Change 13 (Mandarin locale update) was skipped because the locales directory was not found at the expected path. The Mandarin ProofBar may still show `1,736×` and `4.4%`.

### Step 1 — Find the Mandarin content
Use the paths found in Step 0. The Mandarin ProofBar stats may be in:
- A JSON locale file under `/locales/zh/` or `/public/locales/zh/`
- The Mandarin page component at `app/zh/page.tsx`
- A separate data file

Read whichever file contains the ProofBar stats for the Mandarin page.

### Step 2 — Fix the 1,736× stat
Find the stat with value `1736` or `1,736`. Replace with:

```json
{
  "value": "13",
  "suffix": "年",
  "label": "首位客户留存年限",
  "subtext": "G-Force创始客户 — 完整13年合作期"
}
```

If the Mandarin stats use the same TypeScript structure as the English ProofBar (not JSON), use:
```typescript
{
  prefix: '',
  value: 13,
  suffix: ' 年',
  label: '首位客户留存年限',
  sublabel: 'G-Force创始客户 — 完整13年合作期',
  decimals: 0,
  href: null,
},
```

### Step 3 — Fix the 4.4% stat
Find `4.4` in the Mandarin content. Change to `4`. Update label and sublabel:
- Label: `康奈尔大学验证的销量增长`
- Sublabel: `独立同行评审验证 — 61家门店`

### Step 4 — Fix contact email
Search the Mandarin locale file and `app/zh/page.tsx` for `joshua@synergisticinteraction.com.au`.
Replace all instances with `jt@synergisticinteraction.com.au`.

### Step 5 — Verify
Open http://localhost:3000/zh in a browser.
Confirm: ProofBar shows `4%` not `4.4%`, shows `13 年` not `1,736×`, email shows `jt@` not `joshua@`.

---

## FIX 5 — Update SI_PROJECT_STATUS.md to reflect current reality

The project status document was last updated at Session 3. It is nine sessions out of date and is causing Claude Code to lose context between sessions. Replace the sessions log and current state sections with accurate information.

Open `~/Documents/Synergistic_Interaction/SI_PROJECT_STATUS.md` (it may be one level up from DEVELOPMENT, check both locations).

Update the following sections:

### Sessions log — replace with:

```markdown
| Session | What was done | Files changed |
|---------|--------------|---------------|
| Session 1 | Project structure, 42 files, initial build | 42 new files |
| Session 2 | Brief corrections — actual V7 content replacing placeholders | 10 files |
| Session 3 (Windows) | Three pages built, FAQ, feed, forms, component updates | 19 files |
| Session 4 (Mac) | All 30 tasks — complete components, logo, header, footer, Mandarin, sitemap, robots, admin, build fixes, push | 28 files |
| Session 5 | Proposal v10 website alignment — 13 changes (email, ProofBar, sourcing language, GMROI, components 1/2/4/5/6/7 copy, multi-site rollout, distributor framing, Mandarin locale partial) | TBC files |
| Session 8+9 | Full visual rebuild — HomepageHero, CategoryGridVisual, AboutVisual, ServicesVisual, OurApproachVisual, PlanogramVisual created. compliance-data.ts enforcement language removed. Category order updated. | TBC files |
| Session 10 | 15 content changes from TTS review — copyright year, ProofBar stat 3 label, homepage credentials, about page full rewrite, our-approach rewrite, why-compliance-matters rewrite, get-started rewrite, category-expertise full rebuild, CLAUDE.md created | TBC files |
| Session 11 | Category expertise condensed (three-panel → single paragraph per category), HomepageHero realistic product shapes, AboutVisual NZ added (4 markets), OurApproachVisual polished, ServicesVisual custom icons, CategoryGridVisual custom drawn icons | TBC files |
| Session 12 | SKIPPED — prompt prepared but not executed |  |
| Session 13 | Canvas colour fix (CategoryGridVisual + HomepageHero), ProofBar 1736× → 13 Yrs, Mandarin locale ProofBar alignment, status doc rebuild | TBC files |
```

### Current state section — replace with:

```markdown
## CURRENT STATE: DEPLOYED — LIVE AT https://synergistic-interaction.vercel.app

The website is built and deployed on Vercel. Session 13 corrects three visual regressions
(canvas colours, planogram shapes, ProofBar stat) introduced when Session 5 inserted new
page sections after Sessions 8–11 had built the visual components.

### Pages — all live
| Page | Route | Status |
|------|-------|--------|
| Home | `/` | ✅ Live |
| About | `/about` | ✅ Live |
| Services | `/services` | ✅ Live |
| Category Expertise | `/category-expertise` | ✅ Live |
| Our Approach | `/our-approach` | ✅ Live |
| Why Compliance Matters | `/why-compliance-matters` | ✅ Live |
| Get Started | `/get-started` | ✅ Live |
| Mandarin Home | `/zh` | ✅ Live |
| Mandarin Contact | `/zh/get-started` | ✅ Live |
| 404 | `/not-found` | ✅ Live |

### Known remaining gaps (post Session 13)
| Gap | Status |
|-----|--------|
| ABN number | Still shows [pending registration] in footer |
| Logo | Placeholder SVG — acceptable or replace |
| OG image PNG | Screenshot public/og-image.html at 1200×630 |
| Baidu Webmaster Tools | Domain is live — can be done now |
| Mandarin native review | Native speaker review of transcreated copy |
| Resend email wiring | Contact form logs to console only — uncomment 7 lines in api/contact/route.ts after adding RESEND_API_KEY to Vercel |
| OpenAI + Vercel KV | Regulatory feed shows placeholders until these are provisioned |
```

---

## BUILD

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
rm -rf .next
npm run build 2>&1
```

Build must pass with zero errors. Fix any TypeScript errors autonomously.

Common issues and fixes:
- `roundRect` not typed → use `(ctx as any).roundRect(...)` or manual path
- Array index nullability → add `?? fallback` or null check
- Missing `'use client'` → add to top of any component using useEffect or useRef

Rebuild until clean.

---

## DEPLOY

```bash
vercel --prod
```

After deploy completes, note the live URL in the output.

---

## VERIFY

```bash
LIVE="https://synergistic-interaction.vercel.app"
for path in "" "/about" "/services" "/category-expertise" "/our-approach" "/why-compliance-matters" "/get-started" "/zh"; do
  echo "$path: $(curl -s -o /dev/null -w '%{http_code}' $LIVE$path)"
done
```

All paths must return 200.

---

## COMMIT AND PUSH

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
git add -A
git commit -m "Session 13: canvas colour fix (CategoryGridVisual + HomepageHero), ProofBar 1736x → 13 Yrs, Mandarin ProofBar alignment, status doc rebuilt to current state"
git push origin main
```

---

## COMPLETION REPORT

Print this when done:

```
═══════════════════════════════════════════════════════════
SYNERGISTIC INTERACTION — SESSION 13 COMPLETE
═══════════════════════════════════════════════════════════

FIXES:
  CategoryGridVisual colours restored:   [ done / not needed ]
  HomepageHero planogram shapes:         [ done / confirmed working ]
  ProofBar 1736× → 13 Yrs (English):    [ done ]
  Mandarin ProofBar aligned:             [ done ]
  Contact email jt@ confirmed:          [ done ]
  Status doc rebuilt:                    [ done ]

BUILD:
  npm run build:                         [ pass / errors — list ]

DEPLOY:
  vercel --prod:                         [ deployed ]
  Live URL:                              https://synergistic-interaction.vercel.app

PAGES (all must be 200):
  / (home):                             [ 200 ]
  /category-expertise:                  [ 200 ]
  /our-approach:                        [ 200 ]
  /why-compliance-matters:              [ 200 ]
  /zh:                                  [ 200 ]

═══════════════════════════════════════════════════════════
```

---

## NON-NEGOTIABLE ABSOLUTES (always in force — never violate)

1. No double work — never rebuild what already exists, only fix what is broken
2. "Change Language 中文" visible in English mode header at all times
3. Compliance narrative is central — /why-compliance-matters is the most important page
4. No Panda Mart attribution — zero direct reference anywhere in code, copy, or assets
5. G-Force is a currently operating business — do not imply closure or sale
6. Cornell University framing: experience within programs independently validated — not ownership of research
7. Four international retail markets: USA, UK, Australia, New Zealand

---

*Synergistic Interaction — Session 13 Prompt | April 2026 | Strictly Confidential*
