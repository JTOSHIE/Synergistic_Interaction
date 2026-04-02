'use client';

import { useEffect, useRef } from 'react';

export default function ServicesVisual() {
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

    const services = [
      { label: 'Category\nTransformation', icon: '⬡', color: '#00c9a7' },
      { label: 'Supplier &\nRetailer Partnership', icon: '⇄', color: '#00b4e6' },
      { label: 'Retail Systems\n& Analytics', icon: '▤', color: '#7c3aed' },
      { label: 'New Market\nEntry', icon: '◎', color: '#f59e0b' },
    ];

    let time = 0;

    function render() {
      const rect = canvas!.getBoundingClientRect();
      const W = rect.width, H = rect.height;
      ctx!.clearRect(0, 0, W, H);
      ctx!.fillStyle = '#060d1a';
      ctx!.fillRect(0, 0, W, H);
      time += 0.016;

      const cellW = W / 4;

      services.forEach((s, i) => {
        const cx = cellW * i + cellW / 2;
        const cy = H / 2;
        const pulse = Math.sin(time * 1.2 + i * 1.5) * 0.5 + 0.5;
        const r = Math.min(cellW, H) * 0.3;

        // Divider
        if (i > 0) {
          ctx!.save();
          ctx!.globalAlpha = 0.1;
          ctx!.strokeStyle = '#f0f4f8';
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(cellW * i, H * 0.2);
          ctx!.lineTo(cellW * i, H * 0.8);
          ctx!.stroke();
          ctx!.restore();
        }

        // Pulse ring
        ctx!.save();
        ctx!.globalAlpha = 0.08 + pulse * 0.1;
        ctx!.strokeStyle = s.color;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.arc(cx, cy - H * 0.08, r + 4 + pulse * 6, 0, Math.PI * 2);
        ctx!.stroke();
        ctx!.restore();

        // Circle
        ctx!.save();
        ctx!.fillStyle = `${s.color}15`;
        ctx!.strokeStyle = `${s.color}50`;
        ctx!.lineWidth = 1.5;
        ctx!.beginPath();
        ctx!.arc(cx, cy - H * 0.08, r, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.stroke();
        ctx!.restore();

        // Icon
        ctx!.save();
        ctx!.fillStyle = s.color;
        ctx!.font = `${r * 0.7}px monospace`;
        ctx!.textAlign = 'center';
        ctx!.textBaseline = 'middle';
        ctx!.fillText(s.icon, cx, cy - H * 0.08);
        ctx!.restore();

        // Label
        const lines = s.label.split('\n');
        ctx!.save();
        ctx!.fillStyle = 'rgba(240,244,248,0.8)';
        ctx!.font = `${Math.min(W * 0.022, 11)}px Inter, system-ui, sans-serif`;
        ctx!.textAlign = 'center';
        ctx!.textBaseline = 'top';
        lines.forEach((line, li) => {
          ctx!.fillText(line, cx, cy + H * 0.22 + li * (H * 0.12));
        });
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
      style={{ height: '180px', background: '#060d1a' }}
      aria-label="Four service lines: Category Transformation, Supplier and Retailer Partnership, Retail Systems and Analytics, New Market Entry"
      role="img"
    />
  );
}
