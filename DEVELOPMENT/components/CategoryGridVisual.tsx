'use client';

import { useEffect, useRef } from 'react';

const CATS = [
  { label: 'Hardware',      color: 'rgba(0,201,167,ALPHA)',   drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.lineWidth=1.5; c.beginPath(); c.moveTo(cx-r*0.6,cy+r*0.4); c.lineTo(cx+r*0.6,cy-r*0.4); c.stroke(); c.beginPath(); c.rect(cx+r*0.2,cy-r*0.7,r*0.5,r*0.3); c.stroke(); } },
  { label: 'Electrical',    color: 'rgba(0,180,230,ALPHA)',   drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.lineWidth=1.5; c.beginPath(); c.moveTo(cx,cy-r*0.7); c.lineTo(cx-r*0.35,cy+r*0.1); c.lineTo(cx+r*0.1,cy+r*0.1); c.lineTo(cx,cy+r*0.7); c.stroke(); } },
  { label: 'Garden',        color: 'rgba(70,190,90,ALPHA)',   drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.lineWidth=1.5; c.beginPath(); c.arc(cx,cy-r*0.2,r*0.5,0,Math.PI*2); c.stroke(); c.beginPath(); c.moveTo(cx,cy+r*0.3); c.lineTo(cx,cy+r*0.8); c.stroke(); } },
  { label: 'Cleaning',      color: 'rgba(160,90,200,ALPHA)',  drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.lineWidth=1.5; c.beginPath(); c.moveTo(cx-r*0.25,cy-r*0.7); c.lineTo(cx-r*0.25,cy+r*0.5); c.arc(cx,cy+r*0.5,r*0.25,Math.PI,0); c.lineTo(cx+r*0.25,cy-r*0.7); c.stroke(); c.beginPath(); c.moveTo(cx-r*0.35,cy-r*0.3); c.lineTo(cx+r*0.35,cy-r*0.3); c.stroke(); } },
  { label: 'Furniture',     color: 'rgba(175,135,90,ALPHA)',  drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.lineWidth=1.5; c.strokeRect(cx-r*0.6,cy-r*0.3,r*1.2,r*0.7); c.beginPath(); c.moveTo(cx-r*0.4,cy+r*0.4); c.lineTo(cx-r*0.4,cy+r*0.8); c.moveTo(cx+r*0.4,cy+r*0.4); c.lineTo(cx+r*0.4,cy+r*0.8); c.stroke(); } },
  { label: 'Personal Care', color: 'rgba(220,110,150,ALPHA)', drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.lineWidth=1.5; c.beginPath(); c.moveTo(cx-r*0.2,cy-r*0.7); c.lineTo(cx-r*0.3,cy+r*0.6); c.arc(cx,cy+r*0.6,r*0.3,Math.PI,0); c.lineTo(cx+r*0.2,cy-r*0.7); c.arc(cx,cy-r*0.7,r*0.2,0,Math.PI); c.stroke(); } },
  { label: 'Barbecue',      color: 'rgba(235,95,55,ALPHA)',   drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.lineWidth=1.5; c.beginPath(); c.arc(cx,cy-r*0.1,r*0.55,0,Math.PI); c.closePath(); c.stroke(); c.beginPath(); c.moveTo(cx,cy+r*0.45); c.lineTo(cx,cy+r*0.85); c.moveTo(cx-r*0.4,cy+r*0.85); c.lineTo(cx+r*0.4,cy+r*0.85); c.moveTo(cx-r*0.2,cy+r*0.45); c.lineTo(cx-r*0.35,cy+r*0.85); c.moveTo(cx+r*0.2,cy+r*0.45); c.lineTo(cx+r*0.35,cy+r*0.85); c.stroke(); } },
  { label: 'Baby Products', color: 'rgba(240,175,70,ALPHA)',  drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.lineWidth=1.5; c.beginPath(); c.arc(cx,cy-r*0.2,r*0.45,0,Math.PI*2); c.stroke(); c.beginPath(); c.moveTo(cx-r*0.55,cy+r*0.35); c.quadraticCurveTo(cx-r*0.3,cy+r*0.1,cx,cy+r*0.25); c.quadraticCurveTo(cx+r*0.3,cy+r*0.1,cx+r*0.55,cy+r*0.35); c.stroke(); } },
  { label: "Children's",    color: 'rgba(100,160,240,ALPHA)', drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.lineWidth=1.5; ([[0,-0.7],[0.65,-0.22],[0.4,0.58],[-0.4,0.58],[-0.65,-0.22]] as [number,number][]).forEach(([dx,dy],i,arr)=>{ const nx=arr[(i+1)%5]!; c.beginPath(); c.moveTo(cx+dx*r,cy+dy*r); c.lineTo(cx+nx[0]*r,cy+nx[1]*r); c.stroke(); }); } },
  { label: 'Beverages',     color: 'rgba(60,200,180,ALPHA)',  drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.lineWidth=1.5; c.beginPath(); c.moveTo(cx-r*0.25,cy-r*0.6); c.lineTo(cx-r*0.35,cy+r*0.6); c.arc(cx,cy+r*0.6,r*0.35,Math.PI,0); c.lineTo(cx+r*0.25,cy-r*0.6); c.stroke(); c.beginPath(); c.moveTo(cx-r*0.3,cy-r*0.1); c.lineTo(cx+r*0.3,cy-r*0.1); c.stroke(); } },
];

export default function CategoryGridVisual() {
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

      const cols = 5, rows = 2;
      const pad = 6;
      const cellW = (W - pad*(cols+1)) / cols;
      const cellH = (H - pad*(rows+1)) / rows;

      CATS.forEach((cat, i) => {
        const col = i % cols, row = Math.floor(i / cols);
        const x = pad + col*(cellW+pad);
        const y = pad + row*(cellH+pad);
        const cx = x + cellW/2, cy = y + cellH/2;
        const pulse = Math.sin(time * 0.9 + i * 0.55) * 0.5 + 0.5;
        const r = Math.min(cellW, cellH) * 0.26;
        const baseColor = cat.color.replace('ALPHA', '0.7');
        const dimColor  = cat.color.replace('ALPHA', `${0.15 + pulse*0.12}`);

        // Card background
        c.save();
        c.fillStyle = 'rgba(10,22,40,0.85)';
        c.strokeStyle = dimColor;
        c.lineWidth = 1;
        c.beginPath();
        (c as CanvasRenderingContext2D & { roundRect: (x: number, y: number, w: number, h: number, r: number) => void }).roundRect(x, y, cellW, cellH, 5);
        c.fill(); c.stroke();
        c.restore();

        // Icon
        c.save();
        c.strokeStyle = baseColor;
        c.fillStyle   = baseColor;
        cat.drawIcon(c, cx, cy - cellH*0.08, r);
        c.restore();

        // Label
        c.save();
        c.fillStyle = 'rgba(240,244,248,0.8)';
        c.font = `${Math.min(cellW*0.13, 9)}px Inter, system-ui, sans-serif`;
        c.textAlign = 'center';
        c.textBaseline = 'top';
        c.fillText(cat.label, cx, y + cellH*0.70);
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
      style={{ height: '165px', background: '#060d1a' }}
      aria-label="Ten product category icons: Hardware, Electrical, Garden, Cleaning, Furniture, Personal Care, Barbecue, Baby, Children's, Beverages"
      role="img"
    />
  );
}
