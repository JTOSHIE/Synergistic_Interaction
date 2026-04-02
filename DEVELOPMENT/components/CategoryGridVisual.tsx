'use client';

import { useEffect, useRef } from 'react';

const CATS = [
  { label: 'Hardware', icon: '🔧', color: 'rgba(0,201,167,0.7)' },
  { label: 'Electrical', icon: '⚡', color: 'rgba(0,180,230,0.7)' },
  { label: 'Garden', icon: '🌿', color: 'rgba(80,200,100,0.7)' },
  { label: 'Cleaning', icon: '✦', color: 'rgba(180,100,220,0.7)' },
  { label: 'Furniture', icon: '▦', color: 'rgba(180,140,100,0.7)' },
  { label: 'Personal Care', icon: '◉', color: 'rgba(220,120,160,0.7)' },
  { label: 'Barbecue', icon: '◈', color: 'rgba(240,100,60,0.7)' },
  { label: 'Baby', icon: '◯', color: 'rgba(240,180,80,0.7)' },
  { label: "Children's", icon: '◆', color: 'rgba(100,160,240,0.7)' },
  { label: 'Beverages', icon: '◌', color: 'rgba(60,200,180,0.7)' },
];

export default function CategoryGridVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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
      time += 0.016;

      const cols = 5, rows = 2;
      const pad = 8;
      const cellW = (W - pad * (cols + 1)) / cols;
      const cellH = (H - pad * (rows + 1)) / rows;

      CATS.forEach((cat, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = pad + col * (cellW + pad);
        const y = pad + row * (cellH + pad);
        const pulse = Math.sin(time * 1.0 + i * 0.6) * 0.5 + 0.5;

        // Card background
        ctx!.save();
        ctx!.fillStyle = 'rgba(10,22,40,0.8)';
        ctx!.strokeStyle = cat.color.replace('0.7)', `${0.2 + pulse * 0.15})`);
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        (ctx as CanvasRenderingContext2D & { roundRect: (x: number, y: number, w: number, h: number, r: number) => void })!.roundRect(x, y, cellW, cellH, 6);
        ctx!.fill();
        ctx!.stroke();
        ctx!.restore();

        // Icon
        ctx!.save();
        ctx!.font = `${Math.min(cellH * 0.35, 18)}px monospace`;
        ctx!.textAlign = 'center';
        ctx!.textBaseline = 'middle';
        ctx!.fillStyle = cat.color;
        ctx!.fillText(cat.icon, x + cellW / 2, y + cellH * 0.38);
        ctx!.restore();

        // Label
        ctx!.save();
        ctx!.fillStyle = 'rgba(240,244,248,0.8)';
        ctx!.font = `${Math.min(cellW * 0.14, 9)}px Inter, system-ui, sans-serif`;
        ctx!.textAlign = 'center';
        ctx!.textBaseline = 'top';
        ctx!.fillText(cat.label, x + cellW / 2, y + cellH * 0.64);
        ctx!.restore();
      });

      animRef.current = requestAnimationFrame(render);
    }

    animRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full rounded-2xl border border-white/10"
      style={{ height: '160px', background: '#060d1a' }}
      aria-label="Ten product categories: Hardware, Electrical, Garden, Cleaning, Furniture, Personal Care, Barbecue, Baby, Children's Textiles, Beverages"
      role="img"
    />
  );
}
