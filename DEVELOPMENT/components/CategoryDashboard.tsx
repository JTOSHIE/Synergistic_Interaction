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
      c.moveTo(pts[0]!.x, gridY + gridH);
      pts.forEach(p => c.lineTo(p.x, p.y));
      c.lineTo(pts[pts.length - 1]!.x, gridY + gridH);
      c.closePath();
      c.fillStyle = 'rgba(0,201,167,0.06)';
      c.fill();

      // Line
      c.beginPath();
      c.moveTo(pts[0]!.x, pts[0]!.y);
      pts.forEach(p => c.lineTo(p.x, p.y));
      c.strokeStyle = C.teal;
      c.lineWidth   = 1.5;
      c.lineJoin    = 'round';
      c.stroke();

      // End dot
      const last = pts[pts.length - 1]!;
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
          c.fillStyle = productColors[col % productColors.length]!;
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
