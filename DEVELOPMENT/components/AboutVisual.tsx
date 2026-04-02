'use client';

import { useEffect, useRef } from 'react';

interface Market {
  x: number;
  y: number;
  label: string;
  sublabel: string;
  stat: string;
  color: string;
  connectTo?: number; // index of market to connect to
}

export default function AboutVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const c = ctx;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

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

    // Four markets: USA (left), UK (top centre), Australia (right), NZ (below AUS)
    const markets: Market[] = [
      { x: 0.14, y: 0.40, label: 'USA',         sublabel: '2001–2006',    stat: '3,500+ stores', color: '#00c9a7' },
      { x: 0.42, y: 0.22, label: 'UK',           sublabel: '2004–2006',    stat: 'Top 2 grocers', color: '#00b4e6' },
      { x: 0.76, y: 0.38, label: 'Australia',    sublabel: '2007–present', stat: '330+ stores',   color: '#00c9a7', connectTo: 3 },
      { x: 0.84, y: 0.68, label: 'New Zealand',  sublabel: '2007–2019',    stat: 'ANZ network',   color: '#00d4b0' },
    ];

    // Connection order for the cross-market lines
    const CONNECTION_PAIRS = [[0, 1], [1, 2], [0, 2]];

    let time = 0;
    let lineProgress = 0;

    function render() {
      const rect = canvas!.getBoundingClientRect();
      const W = rect.width, H = rect.height;
      c.clearRect(0, 0, W, H);
      c.fillStyle = '#060d1a';
      c.fillRect(0, 0, W, H);

      if (!mq.matches) time += 0.016;
      lineProgress = Math.min(lineProgress + 0.007, 1);

      // Subtle background grid
      c.save(); c.globalAlpha = 0.03; c.strokeStyle = '#00c9a7'; c.lineWidth = 0.5;
      for (let i = 0; i < 14; i++) {
        c.beginPath(); c.moveTo(i*W/14, 0); c.lineTo(i*W/14, H); c.stroke();
      }
      c.restore();

      // Cross-market connection lines
      CONNECTION_PAIRS.forEach(([ai, bi], segIdx) => {
        const from = markets[ai!]!, to = markets[bi!]!;
        const segP = Math.min(1, Math.max(0, (lineProgress - segIdx * 0.25) / 0.35));
        if (segP <= 0) return;
        const ex = from.x * W + (to.x - from.x) * W * segP;
        const ey = from.y * H + (to.y - from.y) * H * segP;
        c.save(); c.globalAlpha = 0.2; c.strokeStyle = '#00c9a7'; c.lineWidth = 0.75;
        c.setLineDash([5, 4]);
        c.beginPath(); c.moveTo(from.x * W, from.y * H); c.lineTo(ex, ey); c.stroke();
        c.setLineDash([]); c.restore();
      });

      // Australia → New Zealand connection (short arc between adjacent)
      const aus = markets[2]!, nz = markets[3]!;
      const anzProgress = Math.min(1, Math.max(0, (lineProgress - 0.7) / 0.3));
      if (anzProgress > 0) {
        const ex = aus.x * W + (nz.x - aus.x) * W * anzProgress;
        const ey = aus.y * H + (nz.y - aus.y) * H * anzProgress;
        c.save(); c.globalAlpha = 0.35 * anzProgress; c.strokeStyle = '#00d4b0'; c.lineWidth = 1;
        c.setLineDash([3, 3]);
        c.beginPath(); c.moveTo(aus.x * W, aus.y * H); c.lineTo(ex, ey); c.stroke();
        c.setLineDash([]); c.restore();
      }

      // Market nodes
      markets.forEach((m, i) => {
        const np = Math.min(1, Math.max(0, lineProgress * 3 - i * 0.7));
        if (np <= 0) return;
        const nx = m.x * W, ny = m.y * H;
        const pulse = Math.sin(time * 1.8 + i * 1.9) * 0.5 + 0.5;
        const r = i === 3 ? 16 : 20; // NZ slightly smaller

        // Outer pulse
        c.save(); c.globalAlpha = (0.1 + pulse * 0.12) * np;
        c.strokeStyle = m.color; c.lineWidth = 1;
        c.beginPath(); c.arc(nx, ny, r + 6 + pulse * 7, 0, Math.PI*2); c.stroke();
        c.restore();

        // Node
        c.save(); c.globalAlpha = np * 0.88;
        c.fillStyle = 'rgba(6,13,26,0.92)'; c.strokeStyle = m.color; c.lineWidth = 1.5;
        c.beginPath(); c.arc(nx, ny, r, 0, Math.PI*2); c.fill(); c.stroke();
        c.fillStyle = m.color;
        c.font = `bold ${Math.min(W*0.024, i === 3 ? 9 : 12)}px Inter, system-ui, sans-serif`;
        c.textAlign = 'center'; c.textBaseline = 'middle';
        c.fillText(m.label, nx, ny);
        c.restore();

        // Info card — position so it doesn't go off-canvas
        const isRight = nx > W * 0.6;
        const cw = i === 3 ? 110 : 118;
        const cx = isRight ? nx - cw - 8 : nx + r + 8;
        const cy = ny - 25;

        c.save(); c.globalAlpha = np * 0.92;
        c.fillStyle = 'rgba(10,22,40,0.92)'; c.strokeStyle = `${m.color}40`; c.lineWidth = 1;
        c.beginPath();
        (c as CanvasRenderingContext2D & { roundRect: (x: number, y: number, w: number, h: number, r: number) => void }).roundRect(cx, cy, cw, 48, 5);
        c.fill(); c.stroke();
        c.fillStyle = '#f0f4f8';
        c.font = `bold ${Math.min(W*0.017, 10)}px Inter, system-ui, sans-serif`;
        c.textAlign = 'left'; c.textBaseline = 'top';
        c.fillText(m.sublabel, cx + 9, cy + 8);
        c.fillStyle = m.color;
        c.font = `bold ${Math.min(W*0.020, 12)}px Inter, system-ui, sans-serif`;
        c.fillText(m.stat, cx + 9, cy + 26);
        c.restore();
      });

      // "4 International Markets" label
      c.save(); c.globalAlpha = Math.min(1, lineProgress * 2) * 0.55;
      c.fillStyle = 'rgba(143,163,186,0.7)';
      c.font = `${Math.min(W*0.017, 10)}px monospace`;
      c.textAlign = 'center'; c.textBaseline = 'bottom';
      c.fillText('4 international retail markets · 3 continents · 25 years', W/2, H - 8);
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
      style={{ height: '230px', background: '#060d1a' }}
      aria-label="Animated market map showing Synergistic Interaction's presence across USA, UK, Australia, and New Zealand"
      role="img"
    />
  );
}
