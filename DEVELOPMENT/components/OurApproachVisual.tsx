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

      COMPONENTS.forEach((comp, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cx = padX + col * cellW + cellW / 2;
        const cy = padY + row * cellH + cellH / 2;
        const r = Math.min(cellW, cellH) * 0.32;
        const color = TIER_COLORS[comp.tier] ?? '#00c9a7';
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
        ctx!.fillStyle = TIER_COLORS[l.tier] ?? '#00c9a7';
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
