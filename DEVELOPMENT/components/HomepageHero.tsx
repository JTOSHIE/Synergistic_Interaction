'use client';

import { useEffect, useRef, useState } from 'react';

// Product archetypes — [widthFactor, heightFactor, type]
// widthFactor relative to base slot width, heightFactor relative to shelf height usable space
const ARCHETYPES: Array<{ w: number; h: number; label: string; hasLid: boolean }> = [
  { w: 0.6,  h: 0.88, label: 'BTL', hasLid: true  }, // tall bottle
  { w: 1.0,  h: 0.70, label: 'BOX', hasLid: false }, // standard box
  { w: 1.4,  h: 0.50, label: 'PKT', hasLid: false }, // wide flat packet
  { w: 0.7,  h: 0.60, label: 'CAN', hasLid: true  }, // short can
  { w: 0.8,  h: 0.80, label: 'JAR', hasLid: true  }, // medium jar
  { w: 1.2,  h: 0.65, label: 'BX2', hasLid: false }, // wide box
  { w: 0.6,  h: 0.72, label: 'SPR', hasLid: true  }, // spray bottle
  { w: 1.0,  h: 0.55, label: 'TIN', hasLid: false }, // flat tin
];

// Category colour palettes
const CAT_COLOURS: Record<string, string> = {
  Hardware:  'rgba(0,201,167,ALPHA)',
  Electrical:'rgba(0,170,220,ALPHA)',
  Garden:    'rgba(70,190,90,ALPHA)',
  Cleaning:  'rgba(160,90,200,ALPHA)',
  Baby:      'rgba(240,175,70,ALPHA)',
  Personal:  'rgba(220,110,150,ALPHA)',
  BBQ:       'rgba(235,95,55,ALPHA)',
  Furniture: 'rgba(175,135,90,ALPHA)',
};

const CAT_KEYS = Object.keys(CAT_COLOURS);

interface PlacedProduct {
  archIdx: number;
  catKey: string;
  shelf: number;
  xFraction: number; // 0..1 within shelf width
  widthFraction: number; // fraction of shelf width
  compliant: boolean;
  placed: boolean;
  checked: boolean;
}

const SHELF_COUNT = 4;
const TEAL = '#00c9a7';
const WHITE = '#f0f4f8';
const PHASE_DURATIONS = [2.2, 1.8, 5.5, 1.2, 2.0, 4.5];

function easeOutBounce(t: number): number {
  const n1 = 7.5625, d1 = 2.75;
  if (t < 1/d1) return n1*t*t;
  if (t < 2/d1) return n1*(t -= 1.5/d1)*t + 0.75;
  if (t < 2.5/d1) return n1*(t -= 2.25/d1)*t + 0.9375;
  return n1*(t -= 2.625/d1)*t + 0.984375;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

// Build a realistic shelf layout where products fill the shelf width
function buildShelfLayout(): PlacedProduct[] {
  const products: PlacedProduct[] = [];
  for (let s = 0; s < SHELF_COUNT; s++) {
    let x = 0.01;
    while (x < 0.98) {
      const archIdx = Math.floor(Math.random() * ARCHETYPES.length);
      const arch = ARCHETYPES[archIdx]!;
      const catKey = CAT_KEYS[Math.floor(Math.random() * CAT_KEYS.length)]!;
      // Base slot width is ~10% of shelf, scaled by arch width factor
      const wFrac = Math.min(arch.w * 0.095, 0.98 - x);
      if (wFrac < 0.04) break;
      products.push({
        archIdx,
        catKey,
        shelf: s,
        xFraction: x,
        widthFraction: wFrac,
        compliant: Math.random() > 0.15, // ~15% non-compliant
        placed: false,
        checked: false,
      });
      x += wFrac + 0.005;
    }
  }
  return products;
}

interface DataParticle { x: number; y: number; vx: number; vy: number; val: string; opacity: number; size: number; }

export default function HomepageHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const stateRef = useRef({ phase: 0, phaseProgress: 0, time: 0 });
  const productsRef = useRef<PlacedProduct[]>([]);
  const particlesRef = useRef<DataParticle[]>([]);
  const [reduced] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const c = ctx;

    productsRef.current = buildShelfLayout();

    const VALS = ['OSA 97%','SKU 2,847','4.4% ADV','GP 41%','RCM ✓','EESS ✓','ISO 37301','GMROI','PO-4821','330+','COMP ✓'];
    for (let i = 0; i < 38; i++) {
      particlesRef.current.push({
        x: Math.random() * 800, y: Math.random() * 400,
        vx: (Math.random()-0.5)*0.55, vy: (Math.random()-0.5)*0.35,
        val: VALS[Math.floor(Math.random()*VALS.length)]!,
        opacity: Math.random()*0.45+0.08,
        size: Math.random()*3+8,
      });
    }

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio??1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      c.scale(dpr, dpr);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function getWH() {
      const r = canvas!.getBoundingClientRect();
      return { W: r.width, H: r.height };
    }

    // ── SHELF GEOMETRY ──
    function shelfGeom(W: number, H: number) {
      const shelfH = H * 0.115;
      const startY = H * 0.20;
      const startX = W * 0.04;
      const width  = W * 0.92;
      return { shelfH, startY, startX, width };
    }

    function drawShelf(W: number, H: number, alpha: number) {
      const { shelfH, startY, startX, width } = shelfGeom(W, H);
      c.save();
      c.globalAlpha = alpha;

      // Back wall
      c.fillStyle = 'rgba(8,18,36,0.85)';
      c.fillRect(startX, startY, width, shelfH * SHELF_COUNT + 4);

      // Side panels
      c.fillStyle = 'rgba(255,255,255,0.04)';
      c.fillRect(startX, startY, 4, shelfH * SHELF_COUNT + 4);
      c.fillRect(startX + width - 4, startY, 4, shelfH * SHELF_COUNT + 4);

      // Shelf boards
      for (let s = 0; s <= SHELF_COUNT; s++) {
        const sy = startY + s * shelfH;
        // Board face
        c.fillStyle = s % 2 === 0 ? 'rgba(255,255,255,0.055)' : 'rgba(255,255,255,0.04)';
        c.fillRect(startX + 4, sy + shelfH - 7, width - 8, 7);
        // Edge highlight
        c.fillStyle = s === 0 ? 'rgba(0,201,167,0.5)' : 'rgba(255,255,255,0.12)';
        c.fillRect(startX + 4, sy + shelfH - 7, width - 8, 1.5);
        // Shelf shadow
        c.fillStyle = 'rgba(0,0,0,0.3)';
        c.fillRect(startX + 4, sy + shelfH - 5, width - 8, 5);
      }
      c.restore();
    }

    function drawProduct(W: number, H: number, p: PlacedProduct, dropOffset: number, alpha: number) {
      const { shelfH, startY, startX, width } = shelfGeom(W, H);
      const arch = ARCHETYPES[p.archIdx]!;
      const catColour = CAT_COLOURS[p.catKey]!;

      const px = startX + p.xFraction * width;
      const pw = p.widthFraction * width;
      const shelfBottom = startY + (p.shelf + 1) * shelfH - 7; // sit on shelf board
      const ph = arch.h * (shelfH - 10);
      const py = shelfBottom - ph + dropOffset;

      c.save();
      c.globalAlpha = alpha;

      // Shadow
      c.fillStyle = 'rgba(0,0,0,0.25)';
      c.fillRect(px + pw * 0.05, shelfBottom - 2, pw * 0.9, 4);

      // Product body
      const bodyCol = catColour.replace('ALPHA', p.compliant ? '0.75' : '0.55');
      c.fillStyle = bodyCol;
      c.beginPath();
      const rr = Math.min(pw * 0.12, 4);
      // manual roundRect
      c.moveTo(px + rr, py);
      c.lineTo(px + pw - rr, py);
      c.quadraticCurveTo(px + pw, py, px + pw, py + rr);
      c.lineTo(px + pw, py + ph - rr);
      c.quadraticCurveTo(px + pw, py + ph, px + pw - rr, py + ph);
      c.lineTo(px + rr, py + ph);
      c.quadraticCurveTo(px, py + ph, px, py + ph - rr);
      c.lineTo(px, py + rr);
      c.quadraticCurveTo(px, py, px + rr, py);
      c.closePath();
      c.fill();

      // Top highlight (specular)
      c.fillStyle = 'rgba(255,255,255,0.18)';
      c.fillRect(px + 1, py + 1, pw - 2, ph * 0.22);

      // Label band — lower portion of product
      c.fillStyle = 'rgba(255,255,255,0.10)';
      c.fillRect(px + 1, py + ph * 0.55, pw - 2, ph * 0.35);

      // Lid / cap (for bottles, jars, sprays)
      if (arch.hasLid) {
        c.fillStyle = catColour.replace('ALPHA', '0.9');
        c.fillRect(px + pw * 0.2, py, pw * 0.6, ph * 0.08);
      }

      // Non-compliant indicator
      if (!p.compliant) {
        c.strokeStyle = 'rgba(239,68,68,0.85)';
        c.lineWidth = 1.5;
        c.strokeRect(px + 0.75, py + 0.75, pw - 1.5, ph - 1.5);
        if (pw > 12) {
          c.fillStyle = 'rgba(239,68,68,0.9)';
          c.font = `bold ${Math.min(pw * 0.35, 9)}px monospace`;
          c.textAlign = 'center';
          c.textBaseline = 'middle';
          c.fillText('✕', px + pw / 2, py + ph / 2);
        }
      }

      // Compliance check badge
      if (p.checked && p.compliant) {
        c.fillStyle = 'rgba(0,201,167,0.95)';
        c.beginPath();
        c.arc(px + pw - 4, py + 4, 3.5, 0, Math.PI * 2);
        c.fill();
        c.fillStyle = '#060d1a';
        c.font = `bold 5px monospace`;
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillText('✓', px + pw - 4, py + 4.5);
      }

      c.restore();
    }

    let lastT = performance.now();

    function render(now: number) {
      const dt = Math.min((now - lastT) / 1000, 0.05);
      lastT = now;
      const st = stateRef.current;
      st.time += dt;
      st.phaseProgress += dt;

      if (st.phaseProgress >= (PHASE_DURATIONS[st.phase] ?? 2.5)) {
        st.phaseProgress = 0;
        st.phase = (st.phase + 1) % PHASE_DURATIONS.length;
        if (st.phase === 0) {
          productsRef.current = buildShelfLayout();
        }
      }

      const { W, H } = getWH();
      c.clearRect(0, 0, W, H);
      c.fillStyle = '#060d1a';
      c.fillRect(0, 0, W, H);

      const phase = st.phase;
      const progress = st.phaseProgress / (PHASE_DURATIONS[phase] ?? 2.5);

      // ── PHASE 0: Data stream ──
      if (phase === 0 || (phase === 5 && progress > 0.65)) {
        const da = phase === 0 ? 1 : 1 - (progress - 0.65) / 0.35;
        particlesRef.current.forEach(p => {
          p.x += p.vx; p.y += p.vy;
          if (p.x < -60) p.x = W + 60;
          if (p.x > W + 60) p.x = -60;
          if (p.y < -20) p.y = H + 20;
          if (p.y > H + 20) p.y = -20;
          c.save();
          c.globalAlpha = p.opacity * da;
          c.fillStyle = TEAL;
          c.font = `${p.size}px monospace`;
          c.textAlign = 'left';
          c.textBaseline = 'top';
          c.fillText(p.val, p.x, p.y);
          c.restore();
        });

        if (phase === 0) {
          const pulse = Math.sin(st.time * 3.5) * 0.5 + 0.5;
          c.save();
          c.globalAlpha = 0.15 + pulse * 0.2;
          c.strokeStyle = TEAL;
          c.lineWidth = 1;
          c.beginPath();
          c.arc(W/2, H/2, 42 + pulse*18, 0, Math.PI*2);
          c.stroke();
          c.restore();
          c.save();
          c.globalAlpha = 0.75;
          c.fillStyle = WHITE;
          c.font = `bold ${Math.min(W*0.024, 17)}px Inter, system-ui, sans-serif`;
          c.textAlign = 'center';
          c.textBaseline = 'middle';
          c.fillText('Analysing category data...', W/2, H/2);
          c.restore();
        }
      }

      // ── PHASE 1: Decision nodes ──
      if (phase === 1) {
        particlesRef.current.forEach(p => {
          c.save();
          c.globalAlpha = p.opacity * (1 - progress);
          c.fillStyle = TEAL;
          c.font = `${p.size}px monospace`;
          c.fillText(p.val, p.x, p.y);
          c.restore();
        });
        drawShelf(W, H, progress * 0.5);
        const nodes = [
          { x: W*0.18, y: H*0.32, label: 'Range\nArchitecture' },
          { x: W*0.50, y: H*0.22, label: 'Supplier\nVerification' },
          { x: W*0.82, y: H*0.32, label: 'Compliance\nMapping' },
          { x: W*0.33, y: H*0.68, label: 'Demographic\nAnalysis' },
          { x: W*0.67, y: H*0.68, label: 'Planogram\nDesign' },
        ];
        nodes.forEach((node, i) => {
          const na = Math.max(0, progress * 5 - i * 0.7);
          if (na <= 0) return;
          c.save();
          c.globalAlpha = Math.min(na, 1) * 0.85;
          c.strokeStyle = TEAL; c.lineWidth = 1;
          c.fillStyle = 'rgba(0,201,167,0.08)';
          c.beginPath(); c.arc(node.x, node.y, 26, 0, Math.PI*2); c.fill(); c.stroke();
          c.fillStyle = WHITE;
          c.font = `bold ${Math.min(W*0.017,10)}px Inter, system-ui, sans-serif`;
          c.textAlign = 'center'; c.textBaseline = 'middle';
          node.label.split('\n').forEach((ln, li, arr) => {
            c.fillText(ln, node.x, node.y + (li - (arr.length-1)/2) * 12);
          });
          c.restore();
        });
        if (progress > 0.45) {
          const la = (progress - 0.45) / 0.55;
          c.save(); c.globalAlpha = la * 0.3; c.strokeStyle = TEAL; c.lineWidth = 0.75;
          c.setLineDash([3,4]);
          ([[0,1],[1,2],[0,3],[3,4],[4,2]] as [number,number][]).forEach(([ai,bi]) => {
            const na2 = nodes[ai], nb2 = nodes[bi];
            if (!na2||!nb2) return;
            c.beginPath(); c.moveTo(na2.x, na2.y); c.lineTo(nb2.x, nb2.y); c.stroke();
          });
          c.setLineDash([]); c.restore();
        }
      }

      // ── PHASE 2+: Planogram builds ──
      if (phase >= 2) {
        drawShelf(W, H, phase === 2 ? 0.5 + progress * 0.5 : 1);
        const total = productsRef.current.length;
        const toPlace = phase === 2 ? Math.floor(easeOutCubic(progress) * total) : total;

        productsRef.current.forEach((prod, i) => {
          if (i >= toPlace) return;
          if (!prod.placed) prod.placed = true;
          const delay = i / total;
          if (phase === 2 && progress > delay + 0.08) prod.checked = true;
          else if (phase >= 3) prod.checked = true;

          const pp = phase === 2 ? Math.min(1, (progress - delay) * total * 1.8) : 1;
          const dropY = pp < 1 ? (1 - easeOutBounce(Math.max(0, pp))) * -H * 0.38 : 0;
          const pa = phase === 2 ? Math.min(1, pp * 2.5) : 1;
          drawProduct(W, H, prod, dropY, pa);
        });

        if (phase === 2) {
          c.save(); c.globalAlpha = 0.65; c.fillStyle = TEAL;
          c.font = `bold ${Math.min(W*0.021,13)}px Inter, system-ui, sans-serif`;
          c.textAlign = 'center'; c.textBaseline = 'top';
          c.fillText('Building planogram...', W/2, H*0.055);
          c.restore();
        }
      }

      // ── PHASE 3: Flash ──
      if (phase === 3) {
        c.save(); c.globalAlpha = Math.sin(progress*Math.PI)*0.25; c.fillStyle = TEAL; c.fillRect(0,0,W,H); c.restore();
      }

      // ── PHASES 4 & 5: KPIs ──
      if ((phase >= 4 && phase < 5) || (phase === 5 && progress < 0.65)) {
        const kpiProg = phase < 5 ? progress : 1;
        const kpis = [
          { label: 'On-Shelf Availability', value: '97.2%', x: W*0.16 },
          { label: 'ADV Uplift',            value: '+4.4%', x: W*0.50 },
          { label: 'Compliance Verified',   value: '100%',  x: W*0.84 },
        ];
        kpis.forEach((kpi, i) => {
          const a = Math.min(1, Math.max(0, (kpiProg - i*0.18) * 3.5));
          if (a <= 0) return;
          const cw = Math.min(W*0.21, 125);
          c.save(); c.globalAlpha = a;
          c.fillStyle = 'rgba(6,13,26,0.94)'; c.strokeStyle = 'rgba(0,201,167,0.38)'; c.lineWidth = 1;
          c.beginPath();
          (c as CanvasRenderingContext2D & { roundRect: (x: number, y: number, w: number, h: number, r: number) => void }).roundRect(kpi.x - cw/2, H*0.055, cw, H*0.115, 6);
          c.fill(); c.stroke();
          c.fillStyle = TEAL;
          c.font = `bold ${Math.min(W*0.031,19)}px Inter, system-ui, sans-serif`;
          c.textAlign = 'center'; c.textBaseline = 'top';
          c.fillText(kpi.value, kpi.x, H*0.068);
          c.fillStyle = 'rgba(143,163,186,0.88)';
          c.font = `${Math.min(W*0.015,9.5)}px Inter, system-ui, sans-serif`;
          c.fillText(kpi.label, kpi.x, H*0.068 + H*0.038);
          c.restore();
        });
      }

      animRef.current = requestAnimationFrame(render);
    }

    animRef.current = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(animRef.current); ro.disconnect(); };
  }, [reduced]);

  if (reduced) {
    return (
      <div className="w-full aspect-video rounded-2xl border border-white/10 bg-si-bg-secondary flex items-center justify-center">
        <p className="text-si-teal font-mono text-sm text-center px-6">
          End-to-end category management — from data to shelf.
        </p>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="w-full aspect-video rounded-2xl border border-white/10"
      style={{ background: '#060d1a' }}
      aria-label="Animated category management visualisation showing data analysis, planning, planogram assembly with varied product shapes, and performance metrics"
      role="img"
    />
  );
}
