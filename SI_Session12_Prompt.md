# SYNERGISTIC INTERACTION — CLAUDE CODE SESSION 12
## Targeted Fix: Canvas Components + Mandarin Locale
### Document version: 1.0 | Created: April 2026

---

## HOW TO USE THIS DOCUMENT

1. Move this file into: `~/Documents/Synergistic_Interaction/`
2. Open Claude Code
3. Paste the finder prompt (provided separately) into Claude Code
4. Claude Code will read this file and execute all tasks in order

---

## SESSION OBJECTIVE

Three targeted fixes only. Session 5 v10 content alignment inserted new sections into `our-approach/page.tsx` and `why-compliance-matters/page.tsx`. This disrupted the canvas-based `CategoryGridVisual` component (category icons now rendering black instead of coloured). The homepage planogram canvas (`HomepageHero`) also needs a render check. Finally, the Mandarin locale changes from Session 5 Change 13 were skipped because the locales directory wasn't found at the expected path — those changes still need to be applied.

**This session touches only:**
- `CategoryGridVisual` canvas component (or wherever the coloured category icons are defined)
- `HomepageHero` canvas component (planogram render check)
- The Mandarin locale file (wherever it actually lives in the repo)
- No other files

---

## REPOSITORY AND WORKING CONTEXT

- **Repo:** https://github.com/JTOSHIE/Synergistic_Interaction
- **Local path:** `~/Documents/Synergistic_Interaction/DEVELOPMENT`
- **Branch:** `main`
- **Last commit:** `35827d2` — "Update project status — Session 5 complete"
- **Build command:** `npm run build` (run from `DEVELOPMENT/` directory)
- **Dev command:** `npm run dev` (run from `DEVELOPMENT/` directory)

---

## BEFORE STARTING — ORIENTATION READ

Run these three commands first and read the output before touching any file:

```bash
# 1. Find the CategoryGridVisual component
find . -name "CategoryGridVisual*" -not -path "*/node_modules/*"

# 2. Find the HomepageHero component
find . -name "HomepageHero*" -not -path "*/node_modules/*"

# 3. Find where locales/Mandarin translations actually live
find . -name "*.json" -path "*/zh/*" -not -path "*/node_modules/*"
find . -name "common.json" -not -path "*/node_modules/*"
find . -type d -name "locales" -not -path "*/node_modules/*"
find . -type d -name "zh" -not -path "*/node_modules/*"
```

Read all outputs before proceeding. The actual file paths may differ from what is documented here — use the real paths found above.

---

## FIX 1 — CategoryGridVisual: restore coloured category icons

### What was built in Session 11

Session 11 built `CategoryGridVisual` as a canvas component with custom coloured icons for retail categories including Hardware, Electrical, Baby Products, Personal Care, and others. Each category tile had a distinct colour and a small icon or illustration. These were rendered using Canvas 2D.

### What happened in Session 5 v10

Session 5 inserted new sections into `our-approach/page.tsx` around where `CategoryGridVisual` renders. Canvas 2D components are sensitive to DOM position — if the section ordering changes, or if new sections are inserted before the canvas initialises, the canvas can lose its colour context and fall back to rendering in black.

### Diagnosis steps

**Step 1:** Open the `CategoryGridVisual` file and read it in full.

**Step 2:** Open `app/our-approach/page.tsx` and find where `CategoryGridVisual` is imported and placed in the page. Note what sections now appear immediately before and after it.

**Step 3:** Check whether the issue is:
- (a) The canvas `getContext('2d')` call is failing silently — the component renders but colours aren't being applied
- (b) The component's `useEffect` is not firing because the canvas element isn't mounted when the effect runs (SSR/hydration issue introduced by the new surrounding sections)
- (c) The colour variables (`si-teal`, `si-navy` etc.) used in the canvas draw calls are being read before CSS variables are available

### Fix approach

**If the issue is (a) or (b):** Wrap the canvas initialisation in a check:
```typescript
useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  // ... rest of draw logic
}, []);
```

Also ensure the component uses `'use client'` at the top if it doesn't already.

**If the issue is (c):** Replace CSS variable references in the canvas draw calls with hardcoded hex values that match the design system:
- si-teal → `#00c9a7`
- si-navy → `#0a1628`
- si-bg → `#060d1a`
- si-white → `#f0f4f8`
- si-white-muted → `#8fa3ba`

For the category colour tiles specifically, use these distinct colours per category (or whatever Session 11 originally used — read the file first to find the original colours before changing anything):
- Hardware: `#f59e0b` (amber)
- Electrical: `#3b82f6` (blue)
- Baby Products: `#00c9a7` (si-teal)
- Personal Care: `#a855f7` (purple)
- Children's Toys: `#ef4444` (red)
- General Consumer Goods: `#10b981` (emerald)

**Critical:** Read the original component file first. Do not guess or recreate the colours — restore exactly what Session 11 built. Only change what is needed to fix the rendering failure.

**If the page structure caused the issue:** Check whether `CategoryGridVisual` relies on a `IntersectionObserver` or `ScrollTrigger` for initialisation. If a new section was inserted above it, the scroll offset may have changed and the observer threshold may no longer trigger correctly. Fix by either adjusting the threshold or switching to a `useEffect` with no scroll dependency.

### Verification

After fixing, run `npm run dev` and open the browser to `/our-approach`. Scroll to the category section and confirm:
- All category tiles render with their distinct colours
- Icons or illustrations are visible (not black boxes)
- The canvas is not blank

---

## FIX 2 — HomepageHero: planogram render check

### What was built in Session 11

Session 11 built `HomepageHero` as a canvas component that includes a planogram visualisation on the homepage. This was a canvas-based illustration of a retail shelf/planogram.

### What to check

**Step 1:** Open `app/page.tsx` (homepage) and find where `HomepageHero` is imported and placed.

**Step 2:** Open the `HomepageHero` component file and read it in full.

**Step 3:** Run `npm run dev` and open the homepage in a browser. Check whether the planogram renders correctly with colours and detail, or whether it is black/blank.

### Fix approach

Apply the same diagnostic and fix approach as Fix 1. If CSS variables are the issue, replace with hardcoded hex values. If the canvas context is not initialising, add the null check pattern. If `VisualizationWrapper` is wrapping it for SSR, confirm the wrapper is still in place and hasn't been accidentally removed.

**If the planogram canvas is rendering correctly:** No changes needed. Document this in the session output as confirmed working.

**If it is broken:** Fix using the same approach as Fix 1. Read the original file first — do not recreate, only restore.

---

## FIX 3 — Mandarin locale: apply Session 5 Change 13

### Context

Session 5 Change 13 was skipped because Claude Code reported "no locales directory exists." The find commands in the orientation section above will locate where the Mandarin locale file actually lives. Use those results.

### Changes to apply

Once the Mandarin locale file is found, make these changes:

**3a — Contact email:**
Find any instance of `joshua@synergisticinteraction.com.au` and replace with `jt@synergisticinteraction.com.au`.

**3b — ProofBar stat: replace 1,736× with 13 years**

Find the ProofBar stats array or object in the Mandarin locale file. The stat that was `1,736×` or `1736` needs to be replaced with the 13 years stat.

If the Mandarin locale file uses English keys with Mandarin values, update the value fields:
```json
{
  "value": "13",
  "suffix": "年",
  "label": "首位客户留存年限",
  "subtext": "G-Force创始客户 — 完整13年合作期"
}
```

If the ProofBar stats are hardcoded in the Mandarin page component (`app/zh/page.tsx`) rather than in a JSON locale file, update them there instead.

**3c — ProofBar stat: correct 4.4% to 4%**

Find the `4.4` or `4.4%` stat. Change to `4` / `4%`.

Update associated label and subtext:
- Label (Mandarin): `康奈尔大学验证的销量增长` (Cornell-validated volume uplift)
- Subtext (Mandarin): `独立同行评审验证 — 61家门店` (Independent peer-reviewed validation — 61 stores)

**If the Mandarin page stats are defined in English (transliterated values):** Apply the same English label changes as the English ProofBar — "Cornell-validated ADV uplift" and "First client retained" — in whatever format the Mandarin page uses.

### Verification

Run `npm run dev` and open `/zh` in the browser. Confirm:
- The ProofBar shows `4%` not `4.4%`
- The ProofBar shows `13` (years) not `1,736×`
- The contact email anywhere on the Mandarin pages shows `jt@` not `joshua@`

---

## BUILD AND COMMIT

After all three fixes:

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
npm run build
```

Build must pass with zero errors.

```bash
git add -A
git commit -m "Session 12: fix CategoryGridVisual colours, HomepageHero planogram check, Mandarin locale Change 13"
git push origin main
```

### Update SI_PROJECT_STATUS.md

Add Session 12 to the sessions log:
```
| Session 12 | Fix CategoryGridVisual category icon colours (canvas context regression from Session 5 sections insert), HomepageHero planogram render check, Mandarin locale Change 13 applied | TBC files |
```

Update any relevant gap items:
- If the Mandarin ProofBar is now correct, note it as resolved
- If the canvas components are confirmed working, note it

---

## WHAT THIS SESSION DOES NOT TOUCH

- No new page sections or content additions
- No changes to English locale content (already done in Session 5)
- No changes to `why-compliance-matters/page.tsx` beyond what is needed for Fix 1 diagnosis
- No changes to `our-approach/page.tsx` beyond what is needed for Fix 1
- No routing, architecture, or component structure changes
- No API routes
- No Vercel configuration
- The five non-negotiable absolutes remain in force — especially no Panda Mart attribution

---

## REFERENCE: DESIGN SYSTEM COLOUR VALUES

If CSS variables are unavailable in canvas context, use these hardcoded values:

| Token | Hex |
|-------|-----|
| si-teal | `#00c9a7` |
| si-navy | `#0a1628` |
| si-bg | `#060d1a` |
| si-bg-secondary | `#0d1b2e` |
| si-white | `#f0f4f8` |
| si-white-muted | `#8fa3ba` |
| si-white-dim | `#4a6080` |

---

*Synergistic Interaction — Session 12 Prompt | Strictly Confidential*
