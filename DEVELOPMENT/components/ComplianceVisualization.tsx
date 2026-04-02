// V7 §5: Compliance-by-exception network visualisation
// Primary: Canvas 2D animation (works in all browsers, no WebGL required)
// Accessibility: prefers-reduced-motion → static description
'use client';

import { useEffect, useRef, useState } from 'react';

interface Node {
  id: string;
  type: 'supplier' | 'dc' | 'store';
  x: number;
  y: number;
  vx: number;
  vy: number;
  compliant: boolean;
  label: string;
  pulsePhase: number;
}

interface Particle {
  nodeFrom: number;
  nodeTo: number;
  t: number; // 0..1 progress along edge
  speed: number;
  blocked: boolean;
}

const NODE_DEFS: Omit<Node, 'vx' | 'vy' | 'pulsePhase'>[] = [
  // Suppliers
  { id: 's1', type: 'supplier', x: 0.08, y: 0.20, compliant: true, label: 'Supplier A' },
  { id: 's2', type: 'supplier', x: 0.08, y: 0.40, compliant: true, label: 'Supplier B' },
  { id: 's3', type: 'supplier', x: 0.08, y: 0.60, compliant: false, label: 'Supplier C' }, // non-compliant
  { id: 's4', type: 'supplier', x: 0.08, y: 0.80, compliant: true, label: 'Supplier D' },
  { id: 's5', type: 'supplier', x: 0.22, y: 0.12, compliant: false, label: 'Supplier E' }, // non-compliant
  // Distribution centres
  { id: 'd1', type: 'dc', x: 0.45, y: 0.35, compliant: true, label: 'DC East' },
  { id: 'd2', type: 'dc', x: 0.45, y: 0.65, compliant: true, label: 'DC West' },
  // Retail stores
  { id: 'r1', type: 'store', x: 0.80, y: 0.20, compliant: true, label: 'Store 1' },
  { id: 'r2', type: 'store', x: 0.80, y: 0.40, compliant: true, label: 'Store 2' },
  { id: 'r3', type: 'store', x: 0.80, y: 0.60, compliant: true, label: 'Store 3' },
  { id: 'r4', type: 'store', x: 0.80, y: 0.80, compliant: true, label: 'Store 4' },
];

const EDGES: [string, string][] = [
  ['s1', 'd1'], ['s2', 'd1'], ['s3', 'd1'], // s3 non-compliant → intercepted
  ['s4', 'd2'], ['s5', 'd2'], // s5 non-compliant → intercepted
  ['d1', 'r1'], ['d1', 'r2'],
  ['d2', 'r3'], ['d2', 'r4'],
];

export default function ComplianceVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    if (mq.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // DPI-aware canvas sizing
    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    // Initialise nodes
    const nodes: Node[] = NODE_DEFS.map((n) => ({
      ...n,
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    // Initialise particles
    const particles: Particle[] = [];
    const edgeObjects = EDGES.map(([fromId, toId]) => ({
      from: nodes.findIndex((n) => n.id === fromId),
      to: nodes.findIndex((n) => n.id === toId),
    }));

    edgeObjects.forEach((edge) => {
      if (edge.from >= 0 && edge.to >= 0) {
        particles.push({
          nodeFrom: edge.from,
          nodeTo: edge.to,
          t: Math.random(),
          speed: 0.003 + Math.random() * 0.002,
          blocked: !(nodes[edge.from]?.compliant ?? true),
        });
      }
    });

    let time = 0;

    function draw() {
      if (!canvas || !ctx) return;
      const W = canvas.getBoundingClientRect().width;
      const H = canvas.getBoundingClientRect().height;

      ctx.clearRect(0, 0, W, H);

      time += 0.016;

      // Update node micro-drift
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0.05 || node.x > 0.95) node.vx *= -1;
        if (node.y < 0.05 || node.y > 0.95) node.vy *= -1;
      });

      // Draw edges
      edgeObjects.forEach((edge) => {
        if (edge.from < 0 || edge.to < 0) return;
        const from = nodes[edge.from];
        const to = nodes[edge.to];
        if (!from || !to) return;
        const isBlocked = !from.compliant;

        ctx.beginPath();
        ctx.moveTo(from.x * W, from.y * H);
        ctx.lineTo(to.x * W, to.y * H);
        ctx.strokeStyle = isBlocked
          ? 'rgba(239, 68, 68, 0.15)'
          : 'rgba(0, 201, 167, 0.12)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw particles
      particles.forEach((p) => {
        const from = nodes[p.nodeFrom];
        const to = nodes[p.nodeTo];
        if (!from || !to) return;

        // Blocked particles only travel to midpoint (interception)
        const maxT = p.blocked ? 0.5 : 1;
        p.t += p.speed;
        if (p.t > maxT) p.t = 0;

        const px = from.x * W + (to.x - from.x) * W * p.t;
        const py = from.y * H + (to.y - from.y) * H * p.t;

        const alpha = p.blocked
          ? (p.t > 0.45 ? 1 - (p.t - 0.45) / 0.05 : 1)
          : 0.85;

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = p.blocked
          ? `rgba(239, 68, 68, ${alpha})`
          : `rgba(0, 201, 167, ${alpha * 0.8})`;
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach((node) => {
        const nx = node.x * W;
        const ny = node.y * H;
        const isNonCompliant = !node.compliant;
        const pulse = Math.sin(time * 3 + node.pulsePhase);

        const nodeRadius = node.type === 'dc' ? 10 : node.type === 'store' ? 7 : 6;
        const glowRadius = nodeRadius + (isNonCompliant ? 8 + pulse * 5 : 3 + pulse * 2);

        // Glow
        const grd = ctx.createRadialGradient(nx, ny, nodeRadius * 0.5, nx, ny, glowRadius);
        grd.addColorStop(0, isNonCompliant ? 'rgba(239,68,68,0.25)' : 'rgba(0,201,167,0.2)');
        grd.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(nx, ny, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Node body
        ctx.beginPath();
        if (node.type === 'dc') {
          // Square for DC
          ctx.rect(nx - nodeRadius, ny - nodeRadius, nodeRadius * 2, nodeRadius * 2);
        } else if (node.type === 'store') {
          // Circle for store
          ctx.arc(nx, ny, nodeRadius, 0, Math.PI * 2);
        } else {
          // Hexagon for supplier
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i - Math.PI / 6;
            const hx = nx + nodeRadius * Math.cos(angle);
            const hy = ny + nodeRadius * Math.sin(angle);
            i === 0 ? ctx.moveTo(hx, hy) : ctx.lineTo(hx, hy);
          }
          ctx.closePath();
        }

        ctx.fillStyle = isNonCompliant
          ? 'rgba(30, 10, 10, 0.95)'
          : node.type === 'dc'
          ? 'rgba(10, 22, 40, 0.95)'
          : 'rgba(6, 13, 26, 0.95)';
        ctx.strokeStyle = isNonCompliant ? 'rgba(239, 68, 68, 0.9)' : 'rgba(0, 201, 167, 0.6)';
        ctx.lineWidth = isNonCompliant ? 1.5 : 1;
        ctx.fill();
        ctx.stroke();

        // Interception indicator for blocked nodes
        if (isNonCompliant) {
          ctx.font = `bold ${nodeRadius + 2}px monospace`;
          ctx.fillStyle = 'rgba(239, 68, 68, 0.9)';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('✕', nx, ny);
        }
      });

      // Legend
      ctx.font = '10px system-ui';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      const legendItems = [
        { colour: 'rgba(0,201,167,0.8)', label: 'Compliant — flow active' },
        { colour: 'rgba(239,68,68,0.8)', label: 'Non-compliant — intercepted' },
      ];
      legendItems.forEach((item, i) => {
        ctx.fillStyle = item.colour;
        ctx.fillRect(8, 8 + i * 18, 8, 8);
        ctx.fillStyle = 'rgba(143,163,186,0.8)';
        ctx.fillText(item.label, 22, 8 + i * 18);
      });

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="w-full aspect-video rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
        <p className="text-si-white-muted text-sm text-center px-6">
          Compliance-by-exception network — nine-component architecture.
          Non-compliant supplier nodes intercepted before reaching distribution.
        </p>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="w-full aspect-video rounded-2xl border border-white/10 bg-si-bg"
      aria-label="Animated compliance network visualisation showing compliant product flows in teal and non-compliant supplier nodes intercepted before reaching distribution centres"
      role="img"
    />
  );
}
