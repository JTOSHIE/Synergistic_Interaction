'use client';

import { useEffect, useRef } from 'react';

interface Market {
  x: number;
  y: number;
  label: string;
  period: string;
  stat: string;
  color: string;
}

export default function AboutVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
    }
    resize();

    const markets: Market[] = [
      { x: 0.18, y: 0.35, label: 'USA', period: '1997–2006', stat: '3,500+ stores', color: '#00c9a7' },
      { x: 0.42, y: 0.25, label: 'UK', period: '2003–2006', stat: 'Top 2 grocers', color: '#00b4e6' },
      { x: 0.78, y: 0.45, label: 'Australia', period: '2007–present', stat: '330+ stores', color: '#00c9a7' },
    ];

    let time = 0;
    let lineProgress = 0;

    function render() {
      const rect = canvas!.getBoundingClientRect();
      const W = rect.width, H = rect.height;
      ctx!.clearRect(0, 0, W, H);

      time += 0.016;
      lineProgress = Math.min(lineProgress + 0.008, 1);

      // Background
      ctx!.fillStyle = '#060d1a';
      ctx!.fillRect(0, 0, W, H);

      // Subtle grid
      ctx!.save();
      ctx!.globalAlpha = 0.04;
      ctx!.strokeStyle = '#00c9a7';
      ctx!.lineWidth = 0.5;
      for (let i = 0; i < 12; i++) {
        ctx!.beginPath();
        ctx!.moveTo(i * W / 12, 0);
        ctx!.lineTo(i * W / 12, H);
        ctx!.stroke();
      }
      ctx!.restore();

      // Connection lines between markets
      ctx!.save();
      ctx!.strokeStyle = 'rgba(0,201,167,0.25)';
      ctx!.lineWidth = 1;
      ctx!.setLineDash([6, 4]);
      for (let i = 0; i < markets.length - 1; i++) {
        const from = markets[i]!, to = markets[i + 1]!;
        const segProgress = Math.min(1, Math.max(0, (lineProgress - i * 0.3) / 0.4));
        if (segProgress <= 0) continue;
        const ex = from.x * W + (to.x - from.x) * W * segProgress;
        const ey = from.y * H + (to.y - from.y) * H * segProgress;
        ctx!.beginPath();
        ctx!.moveTo(from.x * W, from.y * H);
        ctx!.lineTo(ex, ey);
        ctx!.stroke();
      }
      ctx!.setLineDash([]);
      ctx!.restore();

      // Market nodes
      markets.forEach((m, i) => {
        const nodeProgress = Math.min(1, Math.max(0, lineProgress * 3 - i * 0.8));
        if (nodeProgress <= 0) return;

        const nx = m.x * W, ny = m.y * H;
        const pulse = Math.sin(time * 2 + i * 2.1) * 0.5 + 0.5;

        // Outer pulse ring
        ctx!.save();
        ctx!.globalAlpha = (0.15 + pulse * 0.15) * nodeProgress;
        ctx!.strokeStyle = m.color;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.arc(nx, ny, 30 + pulse * 8, 0, Math.PI * 2);
        ctx!.stroke();
        ctx!.restore();

        // Inner ring
        ctx!.save();
        ctx!.globalAlpha = nodeProgress * 0.8;
        ctx!.strokeStyle = m.color;
        ctx!.lineWidth = 1.5;
        ctx!.fillStyle = 'rgba(6,13,26,0.9)';
        ctx!.beginPath();
        ctx!.arc(nx, ny, 20, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.stroke();
        ctx!.restore();

        // Label text
        ctx!.save();
        ctx!.globalAlpha = nodeProgress;
        ctx!.fillStyle = m.color;
        ctx!.font = `bold ${Math.min(W * 0.028, 16)}px Inter, system-ui, sans-serif`;
        ctx!.textAlign = 'center';
        ctx!.textBaseline = 'middle';
        ctx!.fillText(m.label, nx, ny);
        ctx!.restore();

        // Info card
        const cardX = nx + (nx > W * 0.6 ? -140 : 35);
        const cardY = ny - 30;
        const cardW = 120;
        const cardH = 50;

        ctx!.save();
        ctx!.globalAlpha = nodeProgress * 0.95;
        ctx!.fillStyle = 'rgba(10,22,40,0.92)';
        ctx!.strokeStyle = 'rgba(0,201,167,0.3)';
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        (ctx as CanvasRenderingContext2D & { roundRect: (x: number, y: number, w: number, h: number, r: number) => void })!.roundRect(cardX, cardY, cardW, cardH, 6);
        ctx!.fill();
        ctx!.stroke();

        ctx!.fillStyle = '#f0f4f8';
        ctx!.font = `bold ${Math.min(W * 0.018, 11)}px Inter, system-ui, sans-serif`;
        ctx!.textAlign = 'left';
        ctx!.textBaseline = 'top';
        ctx!.fillText(m.period, cardX + 10, cardY + 8);

        ctx!.fillStyle = m.color;
        ctx!.font = `bold ${Math.min(W * 0.022, 13)}px Inter, system-ui, sans-serif`;
        ctx!.fillText(m.stat, cardX + 10, cardY + 26);
        ctx!.restore();
      });

      // Title
      ctx!.save();
      ctx!.globalAlpha = 0.6;
      ctx!.fillStyle = 'rgba(143,163,186,0.7)';
      ctx!.font = `${Math.min(W * 0.018, 11)}px monospace`;
      ctx!.textAlign = 'center';
      ctx!.textBaseline = 'bottom';
      ctx!.fillText('25 years · 3 markets · 10 product categories', W / 2, H - 10);
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
      style={{ height: '220px', background: '#060d1a' }}
      aria-label="Animated map showing Synergistic Interaction's market presence across USA, UK, and Australia"
      role="img"
    />
  );
}
