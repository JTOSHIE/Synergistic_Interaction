'use client';

import { useEffect, useRef } from 'react';

const COMPONENTS = [
  { label: 'Product\nVerification',   tier: 'gate',        clause: 'ISO Cl.8'   },
  { label: 'Supply Chain\nAudit',     tier: 'gate',        clause: 'ISO Cl.8'   },
  { label: 'Category\nMapping',       tier: 'preventative',clause: 'ISO Cl.4-6' },
  { label: 'Risk\nAssessment',        tier: 'preventative',clause: 'ISO Cl.6'   },
  { label: 'Documentation\nMgmt',     tier: 'monitoring',  clause: 'ISO Cl.7'   },
  { label: 'Real-Time\nMonitoring',   tier: 'monitoring',  clause: 'ISO Cl.9'   },
  { label: 'Test Report\nRequirements',tier: 'gate',       clause: 'ISO Cl.8'   },
  { label: 'Importer\nVerification',  tier: 'gate',        clause: 'ISO Cl.4.2' },
  { label: 'Compliance\nCulture',     tier: 'cultural',    clause: 'ISO Cl.10'  },
];

const TIER_COLOURS: Record<string, string> = {
  gate:         '#ef4444',
  preventative: '#f59e0b',
  monitoring:   '#3b82f6',
  cultural:     '#a855f7',
};

const TIER_LABELS: Record<string, string> = {
  gate: 'Hard Gate', preventative: 'Preventative', monitoring: 'Monitoring', cultural: 'Cultural',
};

export default function OurApproachVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef   = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const c = ctx;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      c.scale(dpr, dpr);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let time = 0;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    function render() {
      const rect = canvas!.getBoundingClientRect();
      const W = rect.width, H = rect.height;
      c.clearRect(0, 0, W, H);
      c.fillStyle = '#060d1a';
      c.fillRect(0, 0, W, H);
      if (!mq.matches) time += 0.012;

      const cols = 3, rows = 3;
      const padX = W * 0.06, padY = H * 0.1;
      const cellW = (W - padX * 2) / cols;
      const cellH = (H - padY * 2 - 32) / rows;

      COMPONENTS.forEach((comp, i) => {
        const col = i % cols, row = Math.floor(i / cols);
        const cx = padX + col * cellW + cellW / 2;
        const cy = padY + row * cellH + cellH / 2;
        const r  = Math.min(cellW, cellH) * 0.30;
        const colour = TIER_COLOURS[comp.tier] ?? '#00c9a7';
        const pulse  = Math.sin(time * 1.2 + i * 0.65) * 0.5 + 0.5;

        // Connecting lines (subtle grid)
        if (col < cols - 1) {
          const nx = padX + (col+1)*cellW + cellW/2;
          c.save(); c.globalAlpha = 0.06; c.strokeStyle = colour; c.lineWidth = 0.75;
          c.beginPath(); c.moveTo(cx, cy); c.lineTo(nx, cy); c.stroke(); c.restore();
        }
        if (row < rows - 1) {
          const ny = padY + (row+1)*cellH + cellH/2;
          c.save(); c.globalAlpha = 0.06; c.strokeStyle = colour; c.lineWidth = 0.75;
          c.beginPath(); c.moveTo(cx, cy); c.lineTo(cx, ny); c.stroke(); c.restore();
        }

        // Outer pulse ring
        c.save(); c.globalAlpha = 0.05 + pulse * 0.07;
        c.strokeStyle = colour; c.lineWidth = 1;
        c.beginPath(); c.arc(cx, cy, r + 5 + pulse * 4, 0, Math.PI*2); c.stroke(); c.restore();

        // Node body
        c.save();
        const grad = c.createRadialGradient(cx - r*0.3, cy - r*0.3, 0, cx, cy, r);
        grad.addColorStop(0, `${colour}22`);
        grad.addColorStop(1, `${colour}08`);
        c.fillStyle = grad;
        c.strokeStyle = `${colour}55`;
        c.lineWidth = 1.5;
        c.beginPath(); c.arc(cx, cy, r, 0, Math.PI*2); c.fill(); c.stroke();
        c.restore();

        // Number
        c.save(); c.fillStyle = colour;
        c.font = `bold ${Math.min(r*0.42, 13)}px monospace`;
        c.textAlign = 'center'; c.textBaseline = 'middle';
        c.fillText(String(i+1).padStart(2,'0'), cx, cy - r*0.18); c.restore();

        // Label
        const lines = comp.label.split('\n');
        c.save(); c.fillStyle = 'rgba(240,244,248,0.72)';
        c.font = `${Math.min(r*0.27, 8.5)}px Inter, system-ui, sans-serif`;
        c.textAlign = 'center'; c.textBaseline = 'top';
        lines.forEach((ln, li) => {
          c.fillText(ln, cx, cy + r*0.12 + li*(r*0.28));
        });

        // ISO clause — shown briefly every few seconds
        const showClause = (Math.sin(time * 0.3 + i * 0.8) > 0.7);
        if (showClause) {
          c.globalAlpha = 0.8;
          c.fillStyle = colour;
          c.font = `${Math.min(r*0.22, 7)}px monospace`;
          c.fillText(comp.clause, cx, cy - r*0.55);
        }
        c.restore();
      });

      // Legend
      const legendItems = Object.entries(TIER_LABELS);
      c.save();
      legendItems.forEach(([tier, label], i) => {
        const lx = W * 0.06 + i * (W * 0.235);
        const ly = H - 20;
        c.fillStyle = TIER_COLOURS[tier] ?? '#00c9a7';
        c.beginPath(); c.arc(lx, ly, 4, 0, Math.PI*2); c.fill();
        c.fillStyle = 'rgba(143,163,186,0.55)';
        c.font = `${Math.min(W * 0.016, 9)}px Inter, system-ui, sans-serif`;
        c.textAlign = 'left'; c.textBaseline = 'middle';
        c.fillText(label, lx + 8, ly);
      });
      c.restore();

      animRef.current = requestAnimationFrame(render);
    }

    animRef.current = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(animRef.current); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full rounded-2xl border border-white/10"
      style={{ height: '290px', background: '#060d1a' }}
      aria-label="Nine-component compliance architecture diagram with ISO 37301 clause mapping"
      role="img"
    />
  );
}
