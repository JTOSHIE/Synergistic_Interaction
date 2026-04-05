# SYNERGISTIC INTERACTION — CLAUDE CODE SESSION 15
## Mandarin Removal · Content Cleanup · Category Performance Dashboard
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
- ✅ Delete any file or section without asking

**Working directory:** `~/Documents/Synergistic_Interaction/DEVELOPMENT`
**Repo:** https://github.com/JTOSHIE/Synergistic_Interaction
**Live URL:** https://synergisticinteraction.com.au
**Branch:** main

Execute every task in order without stopping. Fix any errors autonomously and continue.

---

## STEP 0 — ORIENTATION

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
git log --oneline -3
git status

# Find key files
find . -name "Header*" -not -path "*/node_modules/*"
find . -name "Footer*" -not -path "*/node_modules/*"
find . -name "layout*" -path "*/app/*" -not -path "*/node_modules/*"
find . -path "*/zh*" -not -path "*/node_modules/*" -not -path "*/.next/*" | head -20

# Check for LinkedIn references
grep -ri "linkedin" . --include="*.tsx" --include="*.ts" --include="*.json" -l

# Check for 1736 references
grep -rn "1736\|1,736" . --include="*.tsx" --include="*.ts" -l
```

Read all output before touching any file.

---

## TASK 1 — Remove Mandarin language toggle from the header

### What to remove
The header contains a "Change Language 中文" toggle button that switches to the /zh locale. Remove this button entirely from the UI. The /zh page files can remain in the codebase — do not delete them. Only remove the visible toggle from the header.

### Steps
Open `components/Header.tsx` (or wherever the header is defined — use the path found in Step 0).

Read the file in full. Find the language toggle — it will be a button or link containing "中文", "Change Language", or referencing `/zh`. Remove the entire toggle element including any wrapper div or container that only existed for the toggle.

After removing, confirm no 中文 or /zh reference remains in the header component:
```bash
grep -n "zh\|中文\|Change Language\|language" components/Header.tsx
```

The result should show zero matches or only non-toggle references (like lang attributes on the html element).

### Also remove from layout
Open `app/layout.tsx`. Find any `<link rel="alternate" hreflang="zh"` or similar hreflang tags. Remove them. Keep the `lang="en"` on the html element.

```bash
grep -n "hreflang\|alternate.*zh\|zh.*alternate" app/layout.tsx
```

Result must be zero matches.

---

## TASK 2 — Remove "Store Setup and Fitout" section from category expertise

### What to remove
Open `app/category-expertise/page.tsx`. Find and remove the entire "Store Setup and Fitout" section. It contains text about:
- "Approximately 25% of the G-Force Australia and New Zealand operation..."
- "flat-pack cabinet and melamine storage installation"
- "new store setups, store refits, and fitout coordination"
- "physically representing every supplier in the range"

This entire section — including its heading, paragraph, and any surrounding wrapper divs — must be removed. Do not touch any other category sections.

After removing:
```bash
grep -n "Store Setup\|Fitout\|flat-pack\|melamine\|fitout" app/category-expertise/page.tsx
```

Result must be zero matches.

---

## TASK 3 — Remove LinkedIn link

Using the file list from Step 0, open each file that contains "linkedin" references. Remove every LinkedIn link, icon, and reference. This includes:
- LinkedIn icon buttons in the footer or header
- Any href pointing to linkedin.com
- Any SVG or icon for LinkedIn

After removing:
```bash
grep -rni "linkedin" . --include="*.tsx" --include="*.ts" --include="*.json" --exclude-dir=node_modules --exclude-dir=.next
```

Result must be zero matches.

---

## TASK 4 — Remove the $50M+ vs 1,736× comparison block from /why-compliance-matters

### What to remove
Open `app/why-compliance-matters/page.tsx`. Read it in full.

Find and remove the section that shows this comparison:
```
$50M+
Maximum civil penalty per contravention
Australian Consumer Law s.224
vs
1,736×
Return on compliance investment
Based on $21,600–$28,800 engagement investment
```

This block exposes the engagement pricing and the ROI calculation. Remove the entire block including its container, any "vs" divider, and both stat cards. This applies wherever this block appears on the page — there may be two instances (once as a hero stat and once in a proof section). Remove all instances.

The $50M+ figure may appear in other contexts in the prose text on the same page — leave those prose references alone. Only remove the styled stat-card/comparison block.

After removing:
```bash
grep -n "1736\|1,736\|28,800\|21,600\|Return on compliance" app/why-compliance-matters/page.tsx
```

Result must be zero matches.

---

## TASK 5 — Build CategoryDashboard canvas component

### Context
The proposal (v10) included a performance dashboard image showing GMROI and OSA metrics. The website needs an equivalent canvas-based dashboard component to demonstrate the reporting capability that clients receive. This goes on the `/our-approach` page as a "Sample Reporting Output" section.

The dashboard must use a different category from the proposal — use **Hardware & Building Products** as the sample category. No mention of baby products anywhere in this component.

### Create the file
**File:** `DEVELOPMENT/components/CategoryDashboard.tsx`

```typescript
'use client';
import { useRef, useEffect } from 'react';

// Sample data — Hardware & Building Products, 13-week rolling
const GMROI_DATA = [2.1, 2.2, 2.3, 2.2, 2.4, 2.5, 2.4, 2.6, 2.7, 2.6, 2.8, 2.8, 2.8];
const OSA_DATA   = [91,  92,  93,  91,  94,  93,  95,  94,  94,  95,  94,  95,  94];

const KPIS = [
  { label: 'GMROI',              value: '2.8×',  sub: 'Target 2.5+',   ok: true  },
  { label: 'On-Shelf Avail.',    value: '94.2%', sub: 'Target 95%',    ok: false },
  { label: 'Sell-Through',       value: '68%',   sub: 'Target 65%+',   ok: true  },
  { label: 'Supplier Compliance',value: '100%',  sub: 'All SKUs current', ok: true },
];

// Colours — hardcoded hex (CSS vars not available in Canvas 2D)
const C = {
  bg:        '#060d1a',
  bg2:       '#0d1b2e',
  navy:      '#0a1628',
  teal:      '#00c9a7',
  white:     '#f0f4f8',
  muted:     '#8fa3ba',
  dim:       '#4a6080',
  amber:     '#f59e0b',
  border:    'rgba(255,255,255,0.07)',
};

export default function CategoryDashboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr  = Math.min(window.devicePixelRatio ?? 1, 2);
      canvas.width  = rect.width  * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
      draw(rect.width, rect.height);
    }

    function rr(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
      c.beginPath();
      (c as any).roundRect(x, y, w, h, r);
    }

    function draw(W: number, H: number) {
      if (!ctx) return;
      const c = ctx;

      // Background
      c.fillStyle = C.bg;
      c.fillRect(0, 0, W, H);

      // Header bar
      c.fillStyle = C.bg2;
      rr(c, 12, 12, W - 24, 48, 6);
      c.fill();

      // Category label
      c.fillStyle = C.teal;
      c.font = '500 11px Inter, system-ui, sans-serif';
      c.textAlign = 'left';
      c.textBaseline = 'middle';
      c.fillText('HARDWARE & BUILDING PRODUCTS', 24, 36);

      // Period label
      c.fillStyle = C.dim;
      c.font = '10px Inter, system-ui, sans-serif';
      c.textAlign = 'right';
      c.fillText('13-Week Rolling · Sample Output', W - 24, 36);

      // KPI tiles
      const tileW = (W - 36) / 4;
      const tileH = 58;
      const tileY = 72;

      KPIS.forEach((kpi, i) => {
        const tx = 12 + i * (tileW + 4);

        // Tile background
        c.fillStyle = C.bg2;
        rr(c, tx, tileY, tileW, tileH, 5);
        c.fill();

        // Left accent line
        c.fillStyle = kpi.ok ? C.teal : C.amber;
        c.fillRect(tx, tileY + 8, 2.5, tileH - 16);

        // Value
        c.fillStyle = C.white;
        c.font = '600 18px Inter, system-ui, sans-serif';
        c.textAlign = 'left';
        c.textBaseline = 'top';
        c.fillText(kpi.value, tx + 14, tileY + 10);

        // Label
        c.fillStyle = C.muted;
        c.font = '10px Inter, system-ui, sans-serif';
        c.textBaseline = 'top';
        c.fillText(kpi.label, tx + 14, tileY + 33);

        // Sub
        c.fillStyle = C.dim;
        c.font = '9px Inter, system-ui, sans-serif';
        c.fillText(kpi.sub, tx + 14, tileY + 46);
      });

      // Chart section
      const chartX = 12;
      const chartY = 144;
      const chartW = (W - 24) * 0.62;
      const chartH = H - chartY - 14;

      // Chart background
      c.fillStyle = C.bg2;
      rr(c, chartX, chartY, chartW, chartH, 5);
      c.fill();

      // Chart title
      c.fillStyle = C.muted;
      c.font = '500 10px Inter, system-ui, sans-serif';
      c.textAlign = 'left';
      c.textBaseline = 'top';
      c.fillText('GMROI — 13 Week Performance', chartX + 12, chartY + 10);

      // Chart grid lines
      const gridX  = chartX + 12;
      const gridY  = chartY + 28;
      const gridW  = chartW - 24;
      const gridH  = chartH - 44;
      const minVal = 1.8;
      const maxVal = 3.0;

      for (let i = 0; i <= 4; i++) {
        const y = gridY + (gridH / 4) * i;
        c.strokeStyle = C.border;
        c.lineWidth   = 0.75;
        c.beginPath();
        c.moveTo(gridX, y);
        c.lineTo(gridX + gridW, y);
        c.stroke();

        const label = (maxVal - ((maxVal - minVal) / 4) * i).toFixed(1) + '×';
        c.fillStyle = C.dim;
        c.font = '8px Inter, system-ui, sans-serif';
        c.textAlign = 'left';
        c.textBaseline = 'middle';
        c.fillText(label, gridX + 2, y);
      }

      // Target line at 2.5
      const targetY = gridY + gridH * ((maxVal - 2.5) / (maxVal - minVal));
      c.strokeStyle = 'rgba(0,201,167,0.25)';
      c.lineWidth   = 1;
      c.setLineDash([4, 3]);
      c.beginPath();
      c.moveTo(gridX, targetY);
      c.lineTo(gridX + gridW, targetY);
      c.stroke();
      c.setLineDash([]);

      c.fillStyle = 'rgba(0,201,167,0.5)';
      c.font = '8px Inter, system-ui, sans-serif';
      c.textAlign = 'right';
      c.textBaseline = 'bottom';
      c.fillText('Target 2.5×', gridX + gridW, targetY - 2);

      // GMROI line
      const pts: { x: number; y: number }[] = GMROI_DATA.map((v, i) => ({
        x: gridX + (gridW / (GMROI_DATA.length - 1)) * i,
        y: gridY + gridH * ((maxVal - v) / (maxVal - minVal)),
      }));

      // Fill under line
      c.beginPath();
      c.moveTo(pts[0].x, gridY + gridH);
      pts.forEach(p => c.lineTo(p.x, p.y));
      c.lineTo(pts[pts.length - 1].x, gridY + gridH);
      c.closePath();
      c.fillStyle = 'rgba(0,201,167,0.06)';
      c.fill();

      // Line
      c.beginPath();
      c.moveTo(pts[0].x, pts[0].y);
      pts.forEach(p => c.lineTo(p.x, p.y));
      c.strokeStyle = C.teal;
      c.lineWidth   = 1.5;
      c.lineJoin    = 'round';
      c.stroke();

      // End dot
      const last = pts[pts.length - 1];
      c.beginPath();
      c.arc(last.x, last.y, 3.5, 0, Math.PI * 2);
      c.fillStyle = C.teal;
      c.fill();

      // Week labels
      const labelWeeks = [1, 4, 7, 10, 13];
      c.fillStyle = C.dim;
      c.font = '8px Inter, system-ui, sans-serif';
      c.textAlign = 'center';
      c.textBaseline = 'top';
      labelWeeks.forEach(w => {
        const x = gridX + (gridW / 12) * (w - 1);
        c.fillText(`Wk ${w}`, x, gridY + gridH + 4);
      });

      // Right panel — planogram + OSA
      const panelX = chartX + chartW + 8;
      const panelW = W - panelX - 12;
      const panelY = chartY;
      const panelH = chartH;

      // OSA mini chart
      c.fillStyle = C.bg2;
      rr(c, panelX, panelY, panelW, panelH * 0.46, 5);
      c.fill();

      c.fillStyle = C.muted;
      c.font = '500 10px Inter, system-ui, sans-serif';
      c.textAlign = 'left';
      c.textBaseline = 'top';
      c.fillText('On-Shelf Availability %', panelX + 10, panelY + 10);

      const barW   = (panelW - 20) / OSA_DATA.length;
      const barMaxH = panelH * 0.46 - 36;
      OSA_DATA.forEach((v, i) => {
        const bh     = barMaxH * ((v - 88) / 10);
        const bx     = panelX + 10 + i * barW;
        const by     = panelY + 28 + barMaxH - bh;
        const onTarget = v >= 95;
        c.fillStyle  = onTarget ? C.teal : 'rgba(0,201,167,0.35)';
        rr(c, bx, by, barW - 2, bh, 2);
        c.fill();
      });

      // Mini planogram
      const shelfX = panelX;
      const shelfY = panelY + panelH * 0.5;
      const shelfH = panelH * 0.5;

      c.fillStyle = C.bg2;
      rr(c, shelfX, shelfY, panelW, shelfH, 5);
      c.fill();

      c.fillStyle = C.muted;
      c.font = '500 10px Inter, system-ui, sans-serif';
      c.textAlign = 'left';
      c.textBaseline = 'top';
      c.fillText('Planogram Coverage', shelfX + 10, shelfY + 10);

      // 3 shelves
      const shelfCount = 3;
      const productsPerShelf = 6;
      const prodAreaY = shelfY + 24;
      const prodAreaH = shelfH - 32;
      const rowH      = prodAreaH / shelfCount;

      const productColors = [
        C.teal,
        'rgba(0,201,167,0.6)',
        '#3b82f6',
        '#f59e0b',
        'rgba(0,201,167,0.4)',
        '#3b82f6',
      ];

      for (let row = 0; row < shelfCount; row++) {
        const rowY  = prodAreaY + row * rowH;
        const prodW = (panelW - 20) / productsPerShelf;

        // Shelf rail
        c.fillStyle = 'rgba(255,255,255,0.08)';
        c.fillRect(shelfX + 10, rowY + rowH - 3, panelW - 20, 2);

        // Products
        for (let col = 0; col < productsPerShelf; col++) {
          const px = shelfX + 10 + col * prodW + 2;
          const prodH = rowH * (0.55 + Math.sin(row * 3 + col) * 0.15);
          const py    = rowY + rowH - 5 - prodH;
          c.fillStyle = productColors[col % productColors.length];
          rr(c, px, py, prodW - 4, prodH, 2);
          c.fill();
        }
      }
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full rounded-2xl border border-white/10"
      style={{ height: '280px', background: '#060d1a' }}
      aria-label="Sample category performance dashboard showing GMROI, on-shelf availability, sell-through rate, supplier compliance, and planogram coverage for Hardware and Building Products"
      role="img"
    />
  );
}
```

---

## TASK 6 — Add the dashboard to /our-approach page

Open `app/our-approach/page.tsx`. Read it in full.

Find a logical position to insert the dashboard — it should go in or after the "Reporting & Performance Monitoring" section, or after the five-phase methodology section if no dedicated reporting section exists. If there is a section about analytics, GMROI, or reporting, place the dashboard there. If not, add a new section before the final CTA.

Import the component at the top of the file:
```typescript
import CategoryDashboard from '@/components/CategoryDashboard';
import VisualizationWrapper from '@/components/VisualizationWrapper';
```

Add this section at the identified position:

```tsx
{/* Sample category performance dashboard */}
<section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-si-bg-secondary">
  <div className="max-w-4xl mx-auto">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-4">
      Sample Reporting Output
    </div>
    <h2 className="text-2xl font-bold text-si-white mb-2">
      What the Data Looks Like
    </h2>
    <p className="text-si-white-muted text-sm mb-6 max-w-2xl leading-relaxed">
      Every engagement produces a live performance dashboard — GMROI, on-shelf availability, sell-through rate, and supplier compliance tracked weekly from launch day. The data drives ranging decisions, not intuition.
    </p>
    <VisualizationWrapper>
      <CategoryDashboard />
    </VisualizationWrapper>
  </div>
</section>
```

---

## BUILD

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
rm -rf .next
npm run build 2>&1
```

Build must pass with zero errors. Common fixes:
- `roundRect` not typed → `(c as any).roundRect(...)`
- Missing `'use client'` → add at top of CategoryDashboard.tsx
- Import path wrong → check actual path of VisualizationWrapper

Rebuild until clean.

---

## DEPLOY

```bash
vercel --prod
```

---

## VERIFY

```bash
LIVE="https://synergisticinteraction.com.au"
for path in "" "/our-approach" "/category-expertise" "/why-compliance-matters"; do
  echo "$path: $(curl -s -o /dev/null -w '%{http_code}' $LIVE$path)"
done

# Confirm Mandarin toggle gone from page source
curl -s $LIVE | grep -i "zh\|中文\|language" | grep -v "lang=" || echo "✅ No Mandarin toggle in homepage source"

# Confirm 1736 removed
curl -s $LIVE/why-compliance-matters | grep "1736\|1,736" || echo "✅ 1,736× removed from compliance page"
```

---

## COMMIT AND PUSH

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
git add -A
git commit -m "Session 15: remove Mandarin toggle, Store Setup section, LinkedIn, 1736x ROI block; add CategoryDashboard canvas component to our-approach"
git push origin main
```

---

## UPDATE SI_PROJECT_STATUS.md

Add Session 15 to sessions log:
```
| Session 15 | Remove Mandarin language toggle (header + hreflang), remove Store Setup & Fitout section from category-expertise, remove LinkedIn link, remove $50M vs 1,736× ROI comparison block from why-compliance-matters, add CategoryDashboard canvas component (Hardware & Building Products sample data) to our-approach | TBC files |
```

---

## COMPLETION REPORT

```
═══════════════════════════════════════════════════════════
SYNERGISTIC INTERACTION — SESSION 15 COMPLETE
═══════════════════════════════════════════════════════════

REMOVALS:
  Mandarin toggle from header:          [ done ]
  hreflang tags from layout:            [ done ]
  Store Setup & Fitout section:         [ done ]
  LinkedIn link:                        [ done ]
  $50M vs 1,736× ROI block:            [ done ]

NEW:
  CategoryDashboard component:          [ done ]
  Dashboard on /our-approach:           [ done ]
  Category shown:                       Hardware & Building Products

BUILD:   [ pass ]
DEPLOY:  [ deployed ]
LIVE:    https://synergisticinteraction.com.au

PAGES:
  /                  [ 200 ]
  /our-approach      [ 200 ]
  /category-expertise [ 200 ]
  /why-compliance-matters [ 200 ]

═══════════════════════════════════════════════════════════
```

---

## NON-NEGOTIABLE ABSOLUTES (always in force)

1. No Panda Mart attribution — zero reference anywhere
2. G-Force is a currently operating business — never imply closure or sale
3. Cornell University: experience within programs independently validated — not ownership of research
4. Four international retail markets: USA, UK, Australia, New Zealand
5. Copyright year 2025
6. Contact email jt@synergisticinteraction.com.au everywhere

---

*Synergistic Interaction — Session 15 Prompt | April 2026 | Strictly Confidential*
