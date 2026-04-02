'use client';

import { useEffect, useRef } from 'react';

const SERVICES = [
  {
    label: 'Category\nTransformation',
    sublabel: 'For retailers',
    color: '#00c9a7',
    draw: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
      // Three shelf lines with blocks on them
      const sw = r * 1.6, sh = r * 1.2, sx = cx - sw/2, sy = cy - sh/2;
      c.strokeStyle = 'rgba(0,201,167,0.7)'; c.lineWidth = 1.5;
      for (let i = 0; i < 3; i++) {
        const y = sy + i * (sh/2.5) + sh/2.5;
        c.beginPath(); c.moveTo(sx, y + 4); c.lineTo(sx + sw, y + 4); c.stroke();
        const blocks = 3 + i;
        for (let b = 0; b < blocks; b++) {
          const bw = (sw - 4) / (blocks + 0.5);
          const realBh = 6 + ((i * blocks + b) % 3) * 3;
          c.fillStyle = `rgba(0,201,167,${0.4 + (b%3)*0.15})`;
          c.fillRect(sx + 2 + b*(bw+1), y + 4 - realBh, bw, realBh);
        }
      }
    },
  },
  {
    label: 'Supplier &\nRetailer Partnership',
    sublabel: 'Both sides',
    color: '#00b4e6',
    draw: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
      const x1 = cx - r*0.8, x2 = cx + r*0.8;
      c.strokeStyle = 'rgba(0,180,230,0.7)'; c.lineWidth = 1.5;
      c.fillStyle = 'rgba(0,180,230,0.15)';
      [x1, x2].forEach(x => {
        c.beginPath(); c.arc(x, cy, r*0.38, 0, Math.PI*2); c.fill(); c.stroke();
      });
      c.strokeStyle = 'rgba(0,180,230,0.6)'; c.lineWidth = 1;
      c.beginPath(); c.moveTo(x1 + r*0.42, cy); c.lineTo(x2 - r*0.42, cy); c.stroke();
      ([[x1+r*0.42, -1],[x2-r*0.42, 1]] as [number,number][]).forEach(([x,dir]) => {
        c.beginPath(); c.moveTo(x, cy);
        c.lineTo(x + dir*6, cy-4);
        c.moveTo(x, cy);
        c.lineTo(x + dir*6, cy+4);
        c.stroke();
      });
    },
  },
  {
    label: 'Retail Systems\n& Analytics',
    sublabel: 'Data infrastructure',
    color: '#7c3aed',
    draw: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
      const bars = [0.5, 0.8, 0.65, 1.0, 0.75];
      const bw = (r*1.4) / (bars.length + 0.5);
      const maxH = r * 1.1;
      bars.forEach((h, i) => {
        c.fillStyle = `rgba(124,58,237,${0.4 + i*0.1})`;
        const bh = h * maxH;
        c.fillRect(cx - r*0.7 + i*(bw+2), cy + maxH/2 - bh, bw, bh);
      });
      c.strokeStyle = 'rgba(124,58,237,0.5)'; c.lineWidth = 1;
      c.beginPath(); c.moveTo(cx - r*0.75, cy + maxH/2 + 2); c.lineTo(cx + r*0.75, cy + maxH/2 + 2); c.stroke();
    },
  },
  {
    label: 'New Market\nEntry',
    sublabel: 'Global suppliers',
    color: '#f59e0b',
    draw: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
      c.strokeStyle = 'rgba(245,158,11,0.6)'; c.lineWidth = 1.2;
      c.fillStyle = 'rgba(245,158,11,0.08)';
      c.beginPath(); c.arc(cx - r*0.2, cy, r*0.7, 0, Math.PI*2); c.fill(); c.stroke();
      [-0.3, 0, 0.3].forEach(oy => {
        c.beginPath(); c.ellipse(cx - r*0.2, cy + oy*r*0.7, r*0.7, Math.abs(oy)*r*0.5 + 0.1, 0, 0, Math.PI*2);
        c.stroke();
      });
      c.strokeStyle = 'rgba(245,158,11,0.85)'; c.lineWidth = 2;
      c.beginPath(); c.moveTo(cx + r*0.55, cy); c.lineTo(cx + r*0.15, cy); c.stroke();
      c.beginPath(); c.moveTo(cx + r*0.35, cy - 5); c.lineTo(cx + r*0.15, cy); c.lineTo(cx + r*0.35, cy + 5); c.stroke();
    },
  },
];

export default function ServicesVisual() {
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
      const dpr  = Math.min(window.devicePixelRatio ?? 1, 2);
      canvas.width  = rect.width  * dpr;
      canvas.height = rect.height * dpr;
      c.scale(dpr, dpr);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let time = 0;

    function render() {
      const rect = canvas!.getBoundingClientRect();
      const W = rect.width, H = rect.height;
      c.clearRect(0, 0, W, H);
      c.fillStyle = '#060d1a';
      c.fillRect(0, 0, W, H);
      time += 0.012;

      const cellW = W / 4;

      SERVICES.forEach((svc, i) => {
        const cx = cellW * i + cellW / 2;
        const cy = H * 0.42;
        const r  = Math.min(cellW * 0.32, H * 0.26);
        const pulse = Math.sin(time * 1.0 + i * 1.4) * 0.5 + 0.5;

        // Divider
        if (i > 0) {
          c.save(); c.globalAlpha = 0.08; c.strokeStyle = '#f0f4f8'; c.lineWidth = 1;
          c.beginPath(); c.moveTo(cellW*i, H*0.15); c.lineTo(cellW*i, H*0.85); c.stroke(); c.restore();
        }

        // Background circle
        c.save(); c.globalAlpha = 0.06 + pulse*0.04;
        c.strokeStyle = svc.color; c.lineWidth = 1;
        c.beginPath(); c.arc(cx, cy, r + 3 + pulse*4, 0, Math.PI*2); c.stroke();
        c.globalAlpha = 0.07;
        c.fillStyle = svc.color;
        c.beginPath(); c.arc(cx, cy, r, 0, Math.PI*2); c.fill();
        c.restore();

        // Custom icon drawing
        c.save();
        svc.draw(c, cx, cy, r * 0.75);
        c.restore();

        // Service label
        const lines = svc.label.split('\n');
        c.save(); c.fillStyle = 'rgba(240,244,248,0.85)';
        c.font = `bold ${Math.min(W*0.021, 11)}px Inter, system-ui, sans-serif`;
        c.textAlign = 'center'; c.textBaseline = 'top';
        lines.forEach((ln, li) => c.fillText(ln, cx, H*0.70 + li*14));
        c.fillStyle = svc.color;
        c.font = `${Math.min(W*0.017, 9)}px Inter, system-ui, sans-serif`;
        c.fillText(svc.sublabel, cx, H*0.88);
        c.restore();
      });

      animRef.current = requestAnimationFrame(render);
    }

    animRef.current = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(animRef.current); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full rounded-2xl border border-white/10"
      style={{ height: '185px', background: '#060d1a' }}
      aria-label="Four service lines: Category Transformation, Supplier and Retailer Partnership, Retail Systems, New Market Entry"
      role="img"
    />
  );
}
