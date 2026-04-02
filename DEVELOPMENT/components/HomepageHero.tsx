'use client';

import { useEffect, useRef, useState } from 'react';

interface Product {
  col: number;
  row: number;
  shelf: number;
  label: string;
  category: string;
  placed: boolean;
  complianceChecked: boolean;
  color: string;
}

const SHELF_COUNT = 4;
const COLS_PER_SHELF = 8;
const TEAL = '#00c9a7';
const WHITE = '#f0f4f8';

const PRODUCT_DATA = [
  { label: 'HW-001', category: 'Hardware', color: 'rgba(0,201,167,0.7)' },
  { label: 'HW-002', category: 'Hardware', color: 'rgba(0,201,167,0.6)' },
  { label: 'EL-001', category: 'Electrical', color: 'rgba(0,180,230,0.7)' },
  { label: 'EL-002', category: 'Electrical', color: 'rgba(0,180,230,0.6)' },
  { label: 'GD-001', category: 'Garden', color: 'rgba(80,200,100,0.7)' },
  { label: 'GD-002', category: 'Garden', color: 'rgba(80,200,100,0.6)' },
  { label: 'CL-001', category: 'Cleaning', color: 'rgba(180,100,220,0.6)' },
  { label: 'BP-001', category: 'Baby', color: 'rgba(240,180,80,0.6)' },
  { label: 'HW-003', category: 'Hardware', color: 'rgba(0,201,167,0.5)' },
  { label: 'EL-003', category: 'Electrical', color: 'rgba(0,180,230,0.5)' },
  { label: 'GD-003', category: 'Garden', color: 'rgba(80,200,100,0.5)' },
  { label: 'PC-001', category: 'Personal Care', color: 'rgba(220,120,160,0.6)' },
  { label: 'FN-001', category: 'Furniture', color: 'rgba(180,140,100,0.6)' },
  { label: 'BB-001', category: 'Barbecue', color: 'rgba(240,100,60,0.6)' },
  { label: 'HW-004', category: 'Hardware', color: 'rgba(0,201,167,0.65)' },
  { label: 'EL-004', category: 'Electrical', color: 'rgba(0,180,230,0.65)' },
  { label: 'GD-004', category: 'Garden', color: 'rgba(80,200,100,0.65)' },
  { label: 'CL-002', category: 'Cleaning', color: 'rgba(180,100,220,0.5)' },
  { label: 'BP-002', category: 'Baby', color: 'rgba(240,180,80,0.5)' },
  { label: 'FN-002', category: 'Furniture', color: 'rgba(180,140,100,0.5)' },
  { label: 'PC-002', category: 'Personal Care', color: 'rgba(220,120,160,0.5)' },
  { label: 'HW-005', category: 'Hardware', color: 'rgba(0,201,167,0.55)' },
  { label: 'BB-002', category: 'Barbecue', color: 'rgba(240,100,60,0.5)' },
  { label: 'EL-005', category: 'Electrical', color: 'rgba(0,180,230,0.55)' },
  { label: 'GD-005', category: 'Garden', color: 'rgba(80,200,100,0.55)' },
  { label: 'CL-003', category: 'Cleaning', color: 'rgba(180,100,220,0.45)' },
  { label: 'HW-006', category: 'Hardware', color: 'rgba(0,201,167,0.45)' },
  { label: 'PC-003', category: 'Personal Care', color: 'rgba(220,120,160,0.45)' },
  { label: 'EL-006', category: 'Electrical', color: 'rgba(0,180,230,0.45)' },
  { label: 'FN-003', category: 'Furniture', color: 'rgba(180,140,100,0.45)' },
  { label: 'GD-006', category: 'Garden', color: 'rgba(80,200,100,0.45)' },
  { label: 'BP-003', category: 'Baby', color: 'rgba(240,180,80,0.45)' },
];

interface DataParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  value: string;
  opacity: number;
  size: number;
}

function easeOutBounce(t: number): number {
  const n1 = 7.5625, d1 = 2.75;
  if (t < 1 / d1) return n1 * t * t;
  if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
  if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
  return n1 * (t -= 2.625 / d1) * t + 0.984375;
}

type RR = CanvasRenderingContext2D & { roundRect: (x: number, y: number, w: number, h: number, r: number) => void };

export default function HomepageHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const stateRef = useRef({ phase: 0, phaseProgress: 0, time: 0 });
  const productsRef = useRef<Product[]>([]);
  const dataParticlesRef = useRef<DataParticle[]>([]);
  const [prefersReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Non-null reference for use inside closures
    const c: CanvasRenderingContext2D = ctx;

    productsRef.current = PRODUCT_DATA.slice(0, SHELF_COUNT * COLS_PER_SHELF).map((p, i) => ({
      ...p,
      col: i % COLS_PER_SHELF,
      row: Math.floor(i / COLS_PER_SHELF),
      shelf: Math.floor(i / COLS_PER_SHELF),
      placed: false,
      complianceChecked: false,
    }));

    const values = ['OSA 97%', 'SKU 2,847', '4.4% ADV', 'GP 41%', 'TIER 1', 'RCM ✓', 'AS/NZS', 'EESS ✓', '$50M', '330+', 'ISO 37301', 'PO-4821', 'COMP ✓'];
    function spawnParticle(): DataParticle {
      return {
        x: Math.random() * (canvas?.width ?? 800),
        y: Math.random() * (canvas?.height ?? 400),
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.4,
        value: values[Math.floor(Math.random() * values.length)] ?? 'COMP ✓',
        opacity: Math.random() * 0.5 + 0.1,
        size: Math.random() * 3 + 9,
      };
    }
    for (let i = 0; i < 40; i++) dataParticlesRef.current.push(spawnParticle());

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

    function getSize() {
      const rect = canvas!.getBoundingClientRect();
      return { W: rect.width, H: rect.height };
    }

    function drawShelf(W: number, H: number, alpha: number) {
      const shelfH = H * 0.12;
      const shelfStartY = H * 0.22;
      const shelfStartX = W * 0.05;
      const shelfWidth = W * 0.9;

      c.save();
      c.globalAlpha = alpha;
      c.fillStyle = 'rgba(10,22,40,0.8)';
      c.fillRect(shelfStartX, shelfStartY, shelfWidth, shelfH * SHELF_COUNT + shelfH * 0.3);

      for (let s = 0; s <= SHELF_COUNT; s++) {
        const sy = shelfStartY + s * shelfH;
        c.fillStyle = s === 0 ? 'rgba(0,201,167,0.3)' : 'rgba(255,255,255,0.06)';
        c.fillRect(shelfStartX, sy + shelfH - 4, shelfWidth, 4);
        c.fillStyle = s === 0 ? 'rgba(0,201,167,0.6)' : 'rgba(255,255,255,0.15)';
        c.fillRect(shelfStartX, sy + shelfH - 5, shelfWidth, 1);
      }
      c.fillStyle = 'rgba(255,255,255,0.05)';
      c.fillRect(shelfStartX, shelfStartY, 3, shelfH * SHELF_COUNT + shelfH * 0.3);
      c.fillRect(shelfStartX + shelfWidth - 3, shelfStartY, 3, shelfH * SHELF_COUNT + shelfH * 0.3);
      c.restore();
    }

    function drawProduct(W: number, H: number, product: Product, dropY: number, alpha: number) {
      const shelfH = H * 0.12;
      const shelfStartY = H * 0.22;
      const shelfStartX = W * 0.055;
      const shelfWidth = W * 0.89;
      const productW = (shelfWidth / COLS_PER_SHELF) * 0.82;
      const productH = shelfH * 0.72;
      const x = shelfStartX + product.col * (shelfWidth / COLS_PER_SHELF) + (shelfWidth / COLS_PER_SHELF) * 0.09;
      const targetY = shelfStartY + product.shelf * shelfH + shelfH - productH - 6;
      const y = targetY + dropY;

      c.save();
      c.globalAlpha = alpha;
      c.fillStyle = product.color;
      c.beginPath();
      (c as RR).roundRect(x, y, productW, productH, 3);
      c.fill();

      c.fillStyle = 'rgba(255,255,255,0.15)';
      c.beginPath();
      (c as RR).roundRect(x + 1, y + 1, productW - 2, productH * 0.3, 3);
      c.fill();

      if (product.complianceChecked) {
        c.fillStyle = 'rgba(0,201,167,0.9)';
        c.beginPath();
        c.arc(x + productW - 5, y + 5, 4, 0, Math.PI * 2);
        c.fill();
        c.fillStyle = '#060d1a';
        c.font = `bold 5px monospace`;
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillText('✓', x + productW - 5, y + 5.5);
      }

      c.fillStyle = 'rgba(255,255,255,0.7)';
      c.font = `bold ${Math.max(productW * 0.18, 7)}px monospace`;
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.fillText(product.label, x + productW / 2, y + productH / 2);
      c.restore();
    }

    const PHASE_DURATIONS = [2.5, 2.0, 5.0, 1.5, 2.0, 4.0];
    let lastTime = performance.now();

    function render(now: number) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      const state = stateRef.current;
      state.time += dt;
      state.phaseProgress += dt;

      if (state.phaseProgress >= (PHASE_DURATIONS[state.phase] ?? 2.5)) {
        state.phaseProgress = 0;
        state.phase = (state.phase + 1) % PHASE_DURATIONS.length;
        if (state.phase === 0) {
          productsRef.current.forEach(p => { p.placed = false; p.complianceChecked = false; });
        }
      }

      const { W, H } = getSize();
      c.clearRect(0, 0, W, H);
      c.fillStyle = '#060d1a';
      c.fillRect(0, 0, W, H);

      const phase = state.phase;
      const progress = state.phaseProgress / (PHASE_DURATIONS[phase] ?? 2.5);

      // ── PHASE 0: Data stream ──
      if (phase === 0 || (phase === 5 && progress > 0.7)) {
        const dataAlpha = phase === 0 ? 1 : 1 - (progress - 0.7) / 0.3;
        dataParticlesRef.current.forEach(p => {
          p.x += p.vx; p.y += p.vy;
          if (p.x < -50) p.x = W + 50;
          if (p.x > W + 50) p.x = -50;
          if (p.y < -20) p.y = H + 20;
          if (p.y > H + 20) p.y = -20;
          c.save();
          c.globalAlpha = p.opacity * dataAlpha;
          c.fillStyle = TEAL;
          c.font = `${p.size}px monospace`;
          c.textAlign = 'left';
          c.textBaseline = 'top';
          c.fillText(p.value, p.x, p.y);
          c.restore();
        });

        if (phase === 0) {
          const pulse = Math.sin(state.time * 4) * 0.5 + 0.5;
          c.save();
          c.globalAlpha = 0.2 + pulse * 0.3;
          c.strokeStyle = TEAL;
          c.lineWidth = 1;
          c.beginPath();
          c.arc(W / 2, H / 2, 40 + pulse * 20, 0, Math.PI * 2);
          c.stroke();
          c.restore();

          c.save();
          c.globalAlpha = 0.8;
          c.fillStyle = WHITE;
          c.font = `bold ${Math.min(W * 0.025, 18)}px Inter, system-ui, sans-serif`;
          c.textAlign = 'center';
          c.textBaseline = 'middle';
          c.fillText('Analysing category data...', W / 2, H / 2);
          c.restore();
        }
      }

      // ── PHASE 1: Decisions ──
      if (phase === 1) {
        dataParticlesRef.current.forEach(p => {
          p.x += p.vx * (1 - progress);
          p.y += p.vy * (1 - progress);
          c.save();
          c.globalAlpha = p.opacity * (1 - progress);
          c.fillStyle = TEAL;
          c.font = `${p.size}px monospace`;
          c.fillText(p.value, p.x, p.y);
          c.restore();
        });

        drawShelf(W, H, progress * 0.6);

        const nodes = [
          { x: W * 0.2, y: H * 0.35, label: 'Range\nArchitecture' },
          { x: W * 0.5, y: H * 0.25, label: 'Supplier\nVerification' },
          { x: W * 0.8, y: H * 0.35, label: 'Compliance\nMapping' },
          { x: W * 0.35, y: H * 0.65, label: 'SKU\nSelection' },
          { x: W * 0.65, y: H * 0.65, label: 'Planogram\nDesign' },
        ];

        nodes.forEach((node, i) => {
          const nodeAlpha = Math.max(0, progress * 5 - i * 0.8);
          if (nodeAlpha <= 0) return;
          c.save();
          c.globalAlpha = Math.min(nodeAlpha, 1) * 0.9;
          c.strokeStyle = TEAL;
          c.lineWidth = 1;
          c.beginPath();
          c.arc(node.x, node.y, 28, 0, Math.PI * 2);
          c.stroke();
          c.fillStyle = 'rgba(0,201,167,0.1)';
          c.fill();
          const lines = node.label.split('\n');
          c.fillStyle = WHITE;
          c.font = `bold ${Math.min(W * 0.018, 11)}px Inter, system-ui, sans-serif`;
          c.textAlign = 'center';
          c.textBaseline = 'middle';
          lines.forEach((line, li) => {
            c.fillText(line, node.x, node.y + (li - (lines.length - 1) / 2) * 13);
          });
          c.restore();
        });

        if (progress > 0.5) {
          const lineAlpha = (progress - 0.5) / 0.5;
          c.save();
          c.globalAlpha = lineAlpha * 0.4;
          c.strokeStyle = TEAL;
          c.lineWidth = 0.75;
          c.setLineDash([4, 4]);
          [[0, 1], [1, 2], [0, 3], [3, 4], [4, 2]].forEach((pair) => {
            const na = nodes[pair[0] as number], nb = nodes[pair[1] as number];
            if (!na || !nb) return;
            c.beginPath();
            c.moveTo(na.x, na.y);
            c.lineTo(nb.x, nb.y);
            c.stroke();
          });
          c.setLineDash([]);
          c.restore();
        }
      }

      // ── PHASE 2: Planogram builds ──
      if (phase === 2 || phase >= 3) {
        drawShelf(W, H, phase === 2 ? 0.6 + progress * 0.4 : 1);
        const totalProducts = productsRef.current.length;
        const productsToPlace = phase === 2 ? Math.floor(progress * totalProducts) : totalProducts;

        productsRef.current.forEach((product, i) => {
          if (i >= productsToPlace) return;
          if (!product.placed) product.placed = true;
          const checkDelay = i / totalProducts;
          if (phase === 2 && progress > checkDelay + 0.1) product.complianceChecked = true;
          else if (phase >= 3) product.complianceChecked = true;

          const placedProgress = phase === 2
            ? Math.min(1, (progress - i / totalProducts) * totalProducts * 2) : 1;
          const dropY = placedProgress < 1
            ? (1 - easeOutBounce(Math.max(0, placedProgress))) * -H * 0.4 : 0;
          const productAlpha = phase === 2 ? Math.min(1, placedProgress * 3) : 1;
          drawProduct(W, H, product, dropY, productAlpha);
        });

        if (phase === 2) {
          c.save();
          c.globalAlpha = 0.7;
          c.fillStyle = TEAL;
          c.font = `bold ${Math.min(W * 0.022, 14)}px Inter, system-ui, sans-serif`;
          c.textAlign = 'center';
          c.textBaseline = 'top';
          c.fillText('Building planogram...', W / 2, H * 0.06);
          c.restore();
        }
      }

      // ── PHASE 3: Complete flash ──
      if (phase === 3) {
        c.save();
        c.globalAlpha = Math.sin(progress * Math.PI) * 0.3;
        c.fillStyle = TEAL;
        c.fillRect(0, 0, W, H);
        c.restore();
      }

      // ── PHASES 4 & 5: KPIs ──
      if ((phase >= 4 && phase < 5) || (phase === 5 && progress < 0.7)) {
        const kpiProgress = phase >= 4 && phase < 5 ? progress : 1;
        const kpis = [
          { label: 'On-Shelf Availability', value: '97.2%', x: W * 0.15 },
          { label: 'ADV Uplift', value: '+4.4%', x: W * 0.5 },
          { label: 'Compliance Verified', value: '100%', x: W * 0.85 },
        ];

        kpis.forEach((kpi, i) => {
          const alpha = Math.min(1, Math.max(0, (kpiProgress - i * 0.2) * 3));
          if (alpha <= 0) return;
          const cardW = Math.min(W * 0.22, 130);
          c.save();
          c.globalAlpha = alpha;
          c.fillStyle = 'rgba(6,13,26,0.92)';
          c.strokeStyle = 'rgba(0,201,167,0.4)';
          c.lineWidth = 1;
          c.beginPath();
          (c as RR).roundRect(kpi.x - cardW / 2, H * 0.06, cardW, H * 0.12, 6);
          c.fill();
          c.stroke();
          c.fillStyle = TEAL;
          c.font = `bold ${Math.min(W * 0.032, 20)}px Inter, system-ui, sans-serif`;
          c.textAlign = 'center';
          c.textBaseline = 'top';
          c.fillText(kpi.value, kpi.x, H * 0.075);
          c.fillStyle = 'rgba(143,163,186,0.9)';
          c.font = `${Math.min(W * 0.016, 10)}px Inter, system-ui, sans-serif`;
          c.fillText(kpi.label, kpi.x, H * 0.075 + H * 0.04);
          c.restore();
        });
      }

      animRef.current = requestAnimationFrame(render);
    }

    animRef.current = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [prefersReduced]);

  if (prefersReduced) {
    return (
      <div className="w-full aspect-video rounded-2xl border border-white/10 bg-si-bg-secondary flex items-center justify-center">
        <div className="text-center px-8">
          <p className="text-si-teal font-mono text-sm mb-2">PLANOGRAM COMPLETE</p>
          <p className="text-si-white-muted text-xs">End-to-end category management — from data to shelf.</p>
        </div>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="w-full aspect-video rounded-2xl border border-white/10"
      style={{ background: '#060d1a' }}
      aria-label="Animated category management visualisation: data analysis, range decisions, planogram assembly, and performance metrics"
      role="img"
    />
  );
}
