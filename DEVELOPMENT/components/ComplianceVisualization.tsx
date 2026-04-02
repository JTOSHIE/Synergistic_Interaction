'use client';

import { useEffect, useRef } from 'react';

interface Node {
  id: string;
  type: 'supplier' | 'dc' | 'store';
  x: number;
  y: number;
  vx: number;
  vy: number;
  compliant: boolean;
}

interface Particle {
  fromIdx: number;
  toIdx: number;
  t: number;
  speed: number;
}

const NODE_DEFS: Omit<Node, 'vx' | 'vy'>[] = [
  { id: 's1', type: 'supplier', x: 0.08, y: 0.20, compliant: true },
  { id: 's2', type: 'supplier', x: 0.08, y: 0.40, compliant: true },
  { id: 's3', type: 'supplier', x: 0.08, y: 0.60, compliant: false },
  { id: 's4', type: 'supplier', x: 0.08, y: 0.80, compliant: true },
  { id: 's5', type: 'supplier', x: 0.20, y: 0.12, compliant: false },
  { id: 'd1', type: 'dc', x: 0.45, y: 0.35, compliant: true },
  { id: 'd2', type: 'dc', x: 0.45, y: 0.65, compliant: true },
  { id: 'r1', type: 'store', x: 0.82, y: 0.20, compliant: true },
  { id: 'r2', type: 'store', x: 0.82, y: 0.40, compliant: true },
  { id: 'r3', type: 'store', x: 0.82, y: 0.60, compliant: true },
  { id: 'r4', type: 'store', x: 0.82, y: 0.80, compliant: true },
];

const EDGES: [string, string][] = [
  ['s1', 'd1'], ['s2', 'd1'], ['s3', 'd1'],
  ['s4', 'd2'], ['s5', 'd2'],
  ['d1', 'r1'], ['d1', 'r2'],
  ['d2', 'r3'], ['d2', 'r4'],
];

export default function ComplianceVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

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
    window.addEventListener('resize', resize);

    const nodes: Node[] = NODE_DEFS.map(n => ({
      ...n,
      vx: (Math.random() - 0.5) * 0.0004,
      vy: (Math.random() - 0.5) * 0.0004,
    }));

    const edgeObjects = EDGES.map(([a, b]) => ({
      from: nodes.findIndex(n => n.id === a),
      to: nodes.findIndex(n => n.id === b),
    })).filter(e => e.from >= 0 && e.to >= 0);

    const particles: Particle[] = edgeObjects.map((e, i) => ({
      fromIdx: e.from,
      toIdx: e.to,
      t: (i / edgeObjects.length),
      speed: 0.003 + Math.random() * 0.002,
    }));

    let time = 0;

    function render() {
      const rect = canvas!.getBoundingClientRect();
      const W = rect.width, H = rect.height;
      ctx!.clearRect(0, 0, W, H);
      ctx!.fillStyle = '#060d1a';
      ctx!.fillRect(0, 0, W, H);
      time += 0.016;

      // Subtle drift
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0.03 || n.x > 0.97) n.vx *= -1;
        if (n.y < 0.03 || n.y > 0.97) n.vy *= -1;
      });

      // Edges
      edgeObjects.forEach(e => {
        const from = nodes[e.from], to = nodes[e.to];
        if (!from || !to) return;
        const blocked = !from.compliant;
        ctx!.save();
        ctx!.globalAlpha = blocked ? 0.12 : 0.1;
        ctx!.strokeStyle = blocked ? '#ef4444' : '#00c9a7';
        ctx!.lineWidth = 0.75;
        ctx!.beginPath();
        ctx!.moveTo(from.x * W, from.y * H);
        ctx!.lineTo(to.x * W, to.y * H);
        ctx!.stroke();
        ctx!.restore();
      });

      // Particles
      particles.forEach(p => {
        const from = nodes[p.fromIdx], to = nodes[p.toIdx];
        if (!from || !to) return;
        const blocked = !from.compliant;
        const maxT = blocked ? 0.48 : 1;
        p.t += p.speed;
        if (p.t > maxT) p.t = 0;

        const px = from.x * W + (to.x - from.x) * W * p.t;
        const py = from.y * H + (to.y - from.y) * H * p.t;
        const fade = blocked && p.t > 0.4 ? 1 - (p.t - 0.4) / 0.08 : 1;

        ctx!.save();
        ctx!.globalAlpha = fade * 0.8;
        ctx!.fillStyle = blocked ? '#ef4444' : '#00c9a7';
        ctx!.beginPath();
        ctx!.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      });

      // Nodes
      nodes.forEach(n => {
        const nx = n.x * W, ny = n.y * H;
        const isNC = !n.compliant;
        const r = n.type === 'dc' ? 10 : 7;
        const pulse = Math.sin(time * 2.5 + nx) * 0.5 + 0.5;

        // Glow
        const grd = ctx!.createRadialGradient(nx, ny, r * 0.3, nx, ny, r + (isNC ? 10 + pulse * 6 : 5));
        grd.addColorStop(0, isNC ? 'rgba(239,68,68,0.3)' : 'rgba(0,201,167,0.2)');
        grd.addColorStop(1, 'rgba(0,0,0,0)');
        ctx!.save();
        ctx!.fillStyle = grd;
        ctx!.beginPath();
        ctx!.arc(nx, ny, r + (isNC ? 10 + pulse * 6 : 5), 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();

        // Node
        ctx!.save();
        ctx!.fillStyle = isNC ? 'rgba(25,8,8,0.95)' : 'rgba(6,13,26,0.95)';
        ctx!.strokeStyle = isNC ? `rgba(239,68,68,${0.7 + pulse * 0.3})` : 'rgba(0,201,167,0.6)';
        ctx!.lineWidth = isNC ? 1.5 : 1;
        if (n.type === 'dc') {
          ctx!.beginPath();
          ctx!.rect(nx - r, ny - r, r * 2, r * 2);
        } else {
          ctx!.beginPath();
          ctx!.arc(nx, ny, r, 0, Math.PI * 2);
        }
        ctx!.fill();
        ctx!.stroke();
        ctx!.restore();

        // X mark for non-compliant
        if (isNC) {
          ctx!.save();
          ctx!.fillStyle = `rgba(239,68,68,${0.8 + pulse * 0.2})`;
          ctx!.font = `bold ${r + 1}px monospace`;
          ctx!.textAlign = 'center';
          ctx!.textBaseline = 'middle';
          ctx!.fillText('✕', nx, ny + 0.5);
          ctx!.restore();
        }
      });

      // Legend
      const items = [
        { color: '#00c9a7', label: 'Compliant — flowing freely' },
        { color: '#ef4444', label: 'Non-compliant — intercepted' },
      ];
      items.forEach((item, i) => {
        ctx!.save();
        ctx!.globalAlpha = 0.7;
        ctx!.fillStyle = item.color;
        ctx!.fillRect(10, 10 + i * 18, 8, 8);
        ctx!.fillStyle = 'rgba(143,163,186,0.8)';
        ctx!.font = '10px Inter, system-ui, sans-serif';
        ctx!.textAlign = 'left';
        ctx!.textBaseline = 'top';
        ctx!.fillText(item.label, 24, 11 + i * 18);
        ctx!.restore();
      });

      animRef.current = requestAnimationFrame(render);
    }

    animRef.current = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full aspect-video rounded-2xl border border-white/10 bg-si-bg"
      aria-label="Compliance-by-exception supply chain network showing compliant flows and non-compliant supplier nodes being intercepted"
      role="img"
    />
  );
}
