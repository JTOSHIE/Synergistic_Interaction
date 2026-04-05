# SYNERGISTIC INTERACTION — SESSION 11
## Category Expertise Condensation + Visual Enhancements
## All pre-authorised. No stops. No confirmations. Execute top to bottom.

---

## STANDING AUTHORISATION
All file overwrites, installs, deployments, and commits are pre-authorised.
Execute everything without asking. Fix errors autonomously.
Working directory: ~/Documents/Synergistic_Interaction/DEVELOPMENT

---

## TASK 1 — REWRITE `app/category-expertise/page.tsx`

Remove all three-panel layouts (Commercial Opportunity / Supplier Landscape / Compliance Notes).
Replace with: category name + one short paragraph per category. Clean, confident, no IP giveaway.
Keep the jump navigation grid. Keep the Store Setup section. Keep CategoryGridVisual.

**File:** `DEVELOPMENT/app/category-expertise/page.tsx`

```typescript
import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryGridVisual from '@/components/CategoryGridVisual';

export const metadata: Metadata = {
  title: 'Category Expertise — Synergistic Interaction',
  description:
    'Category management expertise across hardware, electrical, gardening, cleaning, furniture, barbecue, baby products, personal care, children\'s products, beverages, and more.',
};

const categories = [
  {
    number: '01',
    name: 'Hardware and Building Products',
    summary:
      'Thirteen years managing hardware at scale across Australia and New Zealand built deep familiarity with the full product spectrum — tools, power equipment, insulation, skylights, decking, storage, and building accessories. Store-specific ranging, supplier coordination across 20+ product lines, and in-store execution across 330+ locations.',
    compliance: 'RCM compliance for power tools and electrical equipment. SDS documentation for chemical products.',
  },
  {
    number: '02',
    name: 'Electrical, Batteries, and Power',
    summary:
      'A compliance-intensive category requiring EESS registration and RCM documentation for every electrical article. Experience across power tools, small appliances, lighting, and batteries — including the compliance documentation architecture that differentiates retailers operating confidently in this space from those carrying unmanaged risk.',
    compliance: 'EESS registration mandatory. RCM mark required. NATA-accredited test reports for applicable product types.',
  },
  {
    number: '03',
    name: 'Gardening, Outdoor, and Seasonal',
    summary:
      'The full gardening category extends from seasonal plants and potting mix through to garden chemicals, worm farms, outdoor accessories, and heating products. A strongly seasonal category requiring demographic-sensitive ranging and supplier coordination timed to planting and entertaining seasons.',
    compliance: 'APVMA registration for pesticides and herbicides. Safety Data Sheets and correct labelling for chemicals.',
  },
  {
    number: '04',
    name: 'Cleaning, Household, and Storage',
    summary:
      'Cleaning, mops and buckets, storage containers, and household chemicals managed as a unified home maintenance category. High-frequency, high-loyalty when the range is right and in-stock position is maintained consistently. GMROI analysis applied to identify which products are earning their shelf space.',
    compliance: 'GHS chemical labelling mandatory. Safety Data Sheets required. Dangerous Goods classification for transport and storage.',
  },
  {
    number: '05',
    name: 'Furniture, Homewares, and Flat-Pack',
    summary:
      'Category management experience that extends into physical implementation — new store setups, flat-pack cabinet installation, and store refit coordination. Range curation, planogram design, and the fitout capability to execute at scale under real operational conditions.',
    compliance: 'Mandatory safety standards for children\'s furniture. RCM compliance for electrical homewares. Flammability requirements for upholstered furniture.',
  },
  {
    number: '06',
    name: 'Personal Care and Cosmetics',
    summary:
      'A category where store-specific demographic profiling determines range architecture. The personal care customer in a multicultural urban store and a regional suburban store have materially different requirements. Experience with TGA-listed therapeutic goods alongside standard cosmetic ranging.',
    compliance: 'TGA listing required for products making therapeutic claims. Sunscreen SPF 15+ classified as therapeutic goods.',
  },
  {
    number: '07',
    name: 'Barbecue, Pizza Ovens, and Outdoor Fuel',
    summary:
      'The outdoor cooking category spans barbecues, pizza ovens, and a full fuel sub-category — eco logs, firelighters, fire starters, and kindling. Each segment carries different supplier relationships, compliance requirements, and ranging considerations. Gas appliance compliance is the primary market entry consideration for international suppliers.',
    compliance: 'AS/NZS 5601 compliance for gas appliances. RCM compliance for electrical outdoor cooking products.',
  },
  {
    number: '08',
    name: 'Baby Products',
    summary:
      'A category combining strong consumer brand loyalty with Australia and New Zealand\'s most demanding mandatory safety standards. Well-established distributor networks across all major sub-categories provide both compliance buffer and supply chain reliability. In-stock consistency is the primary retention driver.',
    compliance: 'Consumer Goods Infant Sleep Products Safety Standard 2024 — mandatory. Specific standards apply across all sub-categories.',
  },
  {
    number: '09',
    name: "Children's Products and Textiles",
    summary:
      'Children\'s clothing, toys, and accessories each operate under distinct compliance frameworks. The mandatory standards for children\'s products are among the most demanding in Australian retail. Compliance documentation requirements are intensive — suppliers who cannot provide current accredited test reports are not suitable for this category.',
    compliance: 'Nightwear flammability requirements mandatory. Toy safety standards applicable. Textile content and size labelling required.',
  },
  {
    number: '10',
    name: 'Water, Beverages, and Consumables',
    summary:
      'High-frequency, high-repurchase categories where in-stock consistency drives retention and accurate performance measurement. FSANZ Food Standards Code compliance applies to all food and beverage products, including specific requirements for health claims, ingredient labelling, and country of origin.',
    compliance: 'FSANZ Food Standards Code compliance required. Health and nutrition claims regulated. Country of origin labelling mandatory.',
  },
];

export default function CategoryExpertisePage() {
  return (
    <main>
      {/* Header */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-6">
            Ten Categories · Australia · New Zealand · Global Markets
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight">
            Category Management Across the{' '}
            <span className="text-si-teal">Full Product Spectrum</span>
          </h1>
          <p className="text-lg text-si-white-muted max-w-2xl leading-relaxed">
            Twenty-five years of global retail experience across hardware, electrical, garden, barbecue,
            personal care, cleaning, baby products, and more — applied to every engagement regardless of scale.
          </p>
        </div>
      </section>

      {/* Category grid visual */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-si-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <CategoryGridVisual />
        </div>
      </section>

      {/* Jump navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {categories.map((cat) => (
              <a
                key={cat.number}
                href={`#cat-${cat.number}`}
                className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-si-teal/30 hover:bg-si-teal/5 transition-all text-center group"
              >
                <p className="text-xs font-mono text-si-teal mb-1">{cat.number}</p>
                <p className="text-si-white text-xs font-medium leading-tight group-hover:text-si-teal transition-colors">
                  {cat.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category listings */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {categories.map((cat, i) => (
              <div
                key={cat.number}
                id={`cat-${cat.number}`}
                className={`py-8 scroll-mt-20 ${i < categories.length - 1 ? 'border-b border-white/5' : ''}`}
              >
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  {/* Number + name */}
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-si-teal/25 font-mono flex-shrink-0 w-10">
                        {cat.number}
                      </span>
                      <h2 className="text-si-white font-semibold leading-snug">{cat.name}</h2>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="md:col-span-5">
                    <p className="text-si-white-muted text-sm leading-relaxed">{cat.summary}</p>
                  </div>

                  {/* Compliance note */}
                  <div className="md:col-span-3">
                    <div className="p-3 rounded-lg border border-si-teal/15 bg-si-teal/5">
                      <p className="text-si-teal text-xs font-semibold uppercase tracking-wide mb-1.5">
                        Compliance
                      </p>
                      <p className="text-si-white-dim text-xs leading-relaxed">{cat.compliance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Setup and Fitout */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-si-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-si-teal/25 font-mono flex-shrink-0 w-10">+</span>
                <h2 className="text-si-white font-semibold">Store Setup and Fitout</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-si-white-muted text-sm leading-relaxed">
                Approximately 25% of the G-Force Australia and New Zealand operation covered new store setups,
                store refits, and fitout coordination — physically representing every supplier in the range during
                a new store setup, to planogram specification, with a live go-live deadline. The assembly division
                also covered flat-pack cabinet and melamine storage installation across the network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-si-white mb-4">Your category is here</h2>
          <p className="text-si-white-muted mb-8 text-sm">
            The first conversation maps the specific requirements, supplier landscape,
            and commercial opportunity for your situation.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
```

---

## TASK 2 — REPLACE `components/HomepageHero.tsx` — REALISTIC PLANOGRAM

Products now have varying widths and heights to simulate a real bay. Four product shape archetypes: tall narrow (bottle), medium box, wide flat (packet), short standard. Products fill each shelf properly by calculating a shelf-filling layout rather than uniform grid. Subtle depth added with a label band at the bottom of each product.

**File:** `DEVELOPMENT/components/HomepageHero.tsx`

```typescript
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
    let itemIdx = 0;
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
      itemIdx++;
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
      // manual roundRect fallback
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
          [[0,1],[1,2],[0,3],[3,4],[4,2]].forEach(([ai,bi]) => {
            const na2 = nodes[ai!], nb2 = nodes[bi!];
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

        // Sort by shelf then xFraction for natural left-to-right fill
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
          c.beginPath(); c.roundRect(kpi.x - cw/2, H*0.055, cw, H*0.115, 6); c.fill(); c.stroke();
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
```

---

## TASK 3 — REPLACE `components/AboutVisual.tsx` — FOUR MARKETS INCLUDING NEW ZEALAND

Add New Zealand as a fourth node. Australia and New Zealand connected by a short arc. Four markets across three continents.

**File:** `DEVELOPMENT/components/AboutVisual.tsx`

```typescript
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
        c.beginPath(); c.roundRect(cx, cy, cw, 48, 5); c.fill(); c.stroke();
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
```

---

## TASK 4 — REPLACE `components/OurApproachVisual.tsx` — MORE POLISHED 9-COMPONENT DIAGRAM

Enhanced version: better proportions, cleaner node rendering, ISO clause labels visible on hover (simulated via cycling).

**File:** `DEVELOPMENT/components/OurApproachVisual.tsx`

```typescript
'use client';

import { useEffect, useRef } from 'react';

const COMPONENTS = [
  { label: 'Product\nVerification',   tier: 'gate',        clause: 'ISO Cl.8'   },
  { label: 'Supply Chain\nAudit',     tier: 'gate',        clause: 'ISO Cl.8'   },
  { label: 'Category\nMapping',       tier: 'preventative',clause: 'ISO Cl.4-6' },
  { label: 'Risk\nAssessment',        tier: 'preventative',clause: 'ISO Cl.6'   },
  { label: 'Documentation\nMgmt',     tier: 'monitoring',  clause: 'ISO Cl.7'   },
  { label: 'Real-Time\nMonitoring',   tier: 'monitoring',  clause: 'ISO Cl.9'   },
  { label: 'Test Report\nRequirements',tier: 'gate',       clause: 'ISO Cl.8'   },
  { label: 'Importer\nVerification',  tier: 'gate',        clause: 'ISO Cl.4.2' },
  { label: 'Compliance\nCulture',     tier: 'cultural',    clause: 'ISO Cl.10'  },
];

const TIER_COLOURS: Record<string, string> = {
  gate:         '#ef4444',
  preventative: '#f59e0b',
  monitoring:   '#3b82f6',
  cultural:     '#a855f7',
};

const TIER_LABELS: Record<string, string> = {
  gate: 'Hard Gate', preventative: 'Preventative', monitoring: 'Monitoring', cultural: 'Cultural',
};

export default function OurApproachVisual() {
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
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      c.scale(dpr, dpr);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let time = 0;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    function render() {
      const rect = canvas!.getBoundingClientRect();
      const W = rect.width, H = rect.height;
      c.clearRect(0, 0, W, H);
      c.fillStyle = '#060d1a';
      c.fillRect(0, 0, W, H);
      if (!mq.matches) time += 0.012;

      const cols = 3, rows = 3;
      const padX = W * 0.06, padY = H * 0.1;
      const cellW = (W - padX * 2) / cols;
      const cellH = (H - padY * 2 - 32) / rows;

      COMPONENTS.forEach((comp, i) => {
        const col = i % cols, row = Math.floor(i / cols);
        const cx = padX + col * cellW + cellW / 2;
        const cy = padY + row * cellH + cellH / 2;
        const r  = Math.min(cellW, cellH) * 0.30;
        const colour = TIER_COLOURS[comp.tier] ?? '#00c9a7';
        const pulse  = Math.sin(time * 1.2 + i * 0.65) * 0.5 + 0.5;

        // Connecting lines (subtle grid)
        if (col < cols - 1) {
          const nx = padX + (col+1)*cellW + cellW/2;
          c.save(); c.globalAlpha = 0.06; c.strokeStyle = colour; c.lineWidth = 0.75;
          c.beginPath(); c.moveTo(cx, cy); c.lineTo(nx, cy); c.stroke(); c.restore();
        }
        if (row < rows - 1) {
          const ny = padY + (row+1)*cellH + cellH/2;
          c.save(); c.globalAlpha = 0.06; c.strokeStyle = colour; c.lineWidth = 0.75;
          c.beginPath(); c.moveTo(cx, cy); c.lineTo(cx, ny); c.stroke(); c.restore();
        }

        // Outer pulse ring
        c.save(); c.globalAlpha = 0.05 + pulse * 0.07;
        c.strokeStyle = colour; c.lineWidth = 1;
        c.beginPath(); c.arc(cx, cy, r + 5 + pulse * 4, 0, Math.PI*2); c.stroke(); c.restore();

        // Node body
        c.save();
        const grad = c.createRadialGradient(cx - r*0.3, cy - r*0.3, 0, cx, cy, r);
        grad.addColorStop(0, `${colour}22`);
        grad.addColorStop(1, `${colour}08`);
        c.fillStyle = grad;
        c.strokeStyle = `${colour}55`;
        c.lineWidth = 1.5;
        c.beginPath(); c.arc(cx, cy, r, 0, Math.PI*2); c.fill(); c.stroke();
        c.restore();

        // Number
        c.save(); c.fillStyle = colour;
        c.font = `bold ${Math.min(r*0.42, 13)}px monospace`;
        c.textAlign = 'center'; c.textBaseline = 'middle';
        c.fillText(String(i+1).padStart(2,'0'), cx, cy - r*0.18); c.restore();

        // Label
        const lines = comp.label.split('\n');
        c.save(); c.fillStyle = 'rgba(240,244,248,0.72)';
        c.font = `${Math.min(r*0.27, 8.5)}px Inter, system-ui, sans-serif`;
        c.textAlign = 'center'; c.textBaseline = 'top';
        lines.forEach((ln, li) => {
          c.fillText(ln, cx, cy + r*0.12 + li*(r*0.28));
        });

        // ISO clause — shown briefly every few seconds
        const showClause = (Math.sin(time * 0.3 + i * 0.8) > 0.7);
        if (showClause) {
          c.globalAlpha = 0.8;
          c.fillStyle = colour;
          c.font = `${Math.min(r*0.22, 7)}px monospace`;
          c.fillText(comp.clause, cx, cy - r*0.55);
        }
        c.restore();
      });

      // Legend
      const legendItems = Object.entries(TIER_LABELS);
      c.save();
      legendItems.forEach(([tier, label], i) => {
        const lx = W * 0.06 + i * (W * 0.235);
        const ly = H - 20;
        c.fillStyle = TIER_COLOURS[tier] ?? '#00c9a7';
        c.beginPath(); c.arc(lx, ly, 4, 0, Math.PI*2); c.fill();
        c.fillStyle = 'rgba(143,163,186,0.55)';
        c.font = `${Math.min(W * 0.016, 9)}px Inter, system-ui, sans-serif`;
        c.textAlign = 'left'; c.textBaseline = 'middle';
        c.fillText(label, lx + 8, ly);
      });
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
      style={{ height: '290px', background: '#060d1a' }}
      aria-label="Nine-component compliance architecture diagram with ISO 37301 clause mapping"
      role="img"
    />
  );
}
```

---

## TASK 5 — REPLACE `components/ServicesVisual.tsx` — CLEANER FOUR-SERVICE VISUAL

More refined icons, cleaner layout, better proportions.

**File:** `DEVELOPMENT/components/ServicesVisual.tsx`

```typescript
'use client';

import { useEffect, useRef } from 'react';

const SERVICES = [
  {
    label: 'Category\nTransformation',
    sublabel: 'For retailers',
    color: '#00c9a7',
    // Draw a shelf/planogram icon
    draw: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
      // Three shelf lines with blocks on them
      const sw = r * 1.6, sh = r * 1.2, sx = cx - sw/2, sy = cy - sh/2;
      c.strokeStyle = 'rgba(0,201,167,0.7)'; c.lineWidth = 1.5;
      for (let i = 0; i < 3; i++) {
        const y = sy + i * (sh/2.5) + sh/2.5;
        c.beginPath(); c.moveTo(sx, y + 4); c.lineTo(sx + sw, y + 4); c.stroke();
        // small product blocks on shelf
        const blocks = 3 + i;
        for (let b = 0; b < blocks; b++) {
          const bw = (sw - 4) / (blocks + 0.5);
          const bh = 6 + Math.random() * 4; // deterministic via index
          const realBh = 6 + ((i * blocks + b) % 3) * 3;
          c.fillStyle = `rgba(0,201,167,${0.4 + (b%3)*0.15})`;
          c.fillRect(sx + 2 + b*(bw+1), y + 4 - realBh, bw, realBh);
        }
      }
    },
  },
  {
    label: 'Supplier &\nRetailer Partnership',
    sublabel: 'Both sides',
    color: '#00b4e6',
    // Draw two nodes with arrow between
    draw: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
      const x1 = cx - r*0.8, x2 = cx + r*0.8;
      c.strokeStyle = 'rgba(0,180,230,0.7)'; c.lineWidth = 1.5;
      c.fillStyle = 'rgba(0,180,230,0.15)';
      [x1, x2].forEach(x => {
        c.beginPath(); c.arc(x, cy, r*0.38, 0, Math.PI*2); c.fill(); c.stroke();
      });
      // Double-headed arrow
      c.strokeStyle = 'rgba(0,180,230,0.6)'; c.lineWidth = 1;
      c.beginPath(); c.moveTo(x1 + r*0.42, cy); c.lineTo(x2 - r*0.42, cy); c.stroke();
      // Arrow heads
      [[x1+r*0.42, -1],[x2-r*0.42, 1]].forEach(([x,dir]) => {
        c.beginPath(); c.moveTo(x as number, cy); 
        c.lineTo((x as number) + (dir as number)*6, cy-4); 
        c.moveTo(x as number, cy); 
        c.lineTo((x as number) + (dir as number)*6, cy+4); 
        c.stroke();
      });
    },
  },
  {
    label: 'Retail Systems\n& Analytics',
    sublabel: 'Data infrastructure',
    color: '#7c3aed',
    // Draw a simple bar chart / dashboard icon
    draw: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
      const bars = [0.5, 0.8, 0.65, 1.0, 0.75];
      const bw = (r*1.4) / (bars.length + 0.5);
      const maxH = r * 1.1;
      bars.forEach((h, i) => {
        c.fillStyle = `rgba(124,58,237,${0.4 + i*0.1})`;
        const bh = h * maxH;
        c.fillRect(cx - r*0.7 + i*(bw+2), cy + maxH/2 - bh, bw, bh);
      });
      c.strokeStyle = 'rgba(124,58,237,0.5)'; c.lineWidth = 1;
      c.beginPath(); c.moveTo(cx - r*0.75, cy + maxH/2 + 2); c.lineTo(cx + r*0.75, cy + maxH/2 + 2); c.stroke();
    },
  },
  {
    label: 'New Market\nEntry',
    sublabel: 'Global suppliers',
    color: '#f59e0b',
    // Draw a globe/arrow icon
    draw: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
      c.strokeStyle = 'rgba(245,158,11,0.6)'; c.lineWidth = 1.2;
      c.fillStyle = 'rgba(245,158,11,0.08)';
      c.beginPath(); c.arc(cx - r*0.2, cy, r*0.7, 0, Math.PI*2); c.fill(); c.stroke();
      // Latitude lines
      [-0.3, 0, 0.3].forEach(oy => {
        c.beginPath(); c.ellipse(cx - r*0.2, cy + oy*r*0.7, r*0.7, Math.abs(oy)*r*0.5 + 0.1, 0, 0, Math.PI*2);
        c.stroke();
      });
      // Arrow pointing into globe
      c.strokeStyle = 'rgba(245,158,11,0.85)'; c.lineWidth = 2;
      c.beginPath(); c.moveTo(cx + r*0.55, cy); c.lineTo(cx + r*0.15, cy); c.stroke();
      c.beginPath(); c.moveTo(cx + r*0.35, cy - 5); c.lineTo(cx + r*0.15, cy); c.lineTo(cx + r*0.35, cy + 5); c.stroke();
    },
  },
];

export default function ServicesVisual() {
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

      const cellW = W / 4;

      SERVICES.forEach((svc, i) => {
        const cx = cellW * i + cellW / 2;
        const cy = H * 0.42;
        const r  = Math.min(cellW * 0.32, H * 0.26);
        const pulse = Math.sin(time * 1.0 + i * 1.4) * 0.5 + 0.5;

        // Divider
        if (i > 0) {
          c.save(); c.globalAlpha = 0.08; c.strokeStyle = '#f0f4f8'; c.lineWidth = 1;
          c.beginPath(); c.moveTo(cellW*i, H*0.15); c.lineTo(cellW*i, H*0.85); c.stroke(); c.restore();
        }

        // Background circle
        c.save(); c.globalAlpha = 0.06 + pulse*0.04;
        c.strokeStyle = svc.color; c.lineWidth = 1;
        c.beginPath(); c.arc(cx, cy, r + 3 + pulse*4, 0, Math.PI*2); c.stroke();
        c.globalAlpha = 0.07;
        c.fillStyle = svc.color;
        c.beginPath(); c.arc(cx, cy, r, 0, Math.PI*2); c.fill();
        c.restore();

        // Custom icon drawing
        c.save();
        svc.draw(c, cx, cy, r * 0.75);
        c.restore();

        // Service label
        const lines = svc.label.split('\n');
        c.save(); c.fillStyle = 'rgba(240,244,248,0.85)';
        c.font = `bold ${Math.min(W*0.021, 11)}px Inter, system-ui, sans-serif`;
        c.textAlign = 'center'; c.textBaseline = 'top';
        lines.forEach((ln, li) => c.fillText(ln, cx, H*0.70 + li*14));
        c.fillStyle = svc.color;
        c.font = `${Math.min(W*0.017, 9)}px Inter, system-ui, sans-serif`;
        c.fillText(svc.sublabel, cx, H*0.88);
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
      style={{ height: '185px', background: '#060d1a' }}
      aria-label="Four service lines: Category Transformation, Supplier and Retailer Partnership, Retail Systems, New Market Entry"
      role="img"
    />
  );
}
```

---

## TASK 6 — REPLACE `components/CategoryGridVisual.tsx` — REFINED ICONS

Better icon rendering with category-specific symbols instead of emoji characters.

**File:** `DEVELOPMENT/components/CategoryGridVisual.tsx`

```typescript
'use client';

import { useEffect, useRef } from 'react';

const CATS = [
  { label: 'Hardware',      color: 'rgba(0,201,167,ALPHA)',   drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.strokeStyle='currentColor'; c.lineWidth=1.5; c.beginPath(); c.moveTo(cx-r*0.6,cy+r*0.4); c.lineTo(cx+r*0.6,cy-r*0.4); c.stroke(); c.beginPath(); c.rect(cx+r*0.2,cy-r*0.7,r*0.5,r*0.3); c.stroke(); } },
  { label: 'Electrical',    color: 'rgba(0,180,230,ALPHA)',   drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.strokeStyle='currentColor'; c.lineWidth=1.5; c.beginPath(); c.moveTo(cx,cy-r*0.7); c.lineTo(cx-r*0.35,cy+r*0.1); c.lineTo(cx+r*0.1,cy+r*0.1); c.lineTo(cx,cy+r*0.7); c.stroke(); } },
  { label: 'Garden',        color: 'rgba(70,190,90,ALPHA)',   drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.strokeStyle='currentColor'; c.lineWidth=1.5; c.beginPath(); c.arc(cx,cy-r*0.2,r*0.5,0,Math.PI*2); c.stroke(); c.beginPath(); c.moveTo(cx,cy+r*0.3); c.lineTo(cx,cy+r*0.8); c.stroke(); } },
  { label: 'Cleaning',      color: 'rgba(160,90,200,ALPHA)',  drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.strokeStyle='currentColor'; c.lineWidth=1.5; c.beginPath(); c.moveTo(cx-r*0.25,cy-r*0.7); c.lineTo(cx-r*0.25,cy+r*0.5); c.arc(cx,cy+r*0.5,r*0.25,Math.PI,0); c.lineTo(cx+r*0.25,cy-r*0.7); c.stroke(); c.beginPath(); c.moveTo(cx-r*0.35,cy-r*0.3); c.lineTo(cx+r*0.35,cy-r*0.3); c.stroke(); } },
  { label: 'Furniture',     color: 'rgba(175,135,90,ALPHA)',  drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.strokeStyle='currentColor'; c.lineWidth=1.5; c.strokeRect(cx-r*0.6,cy-r*0.3,r*1.2,r*0.7); c.beginPath(); c.moveTo(cx-r*0.4,cy+r*0.4); c.lineTo(cx-r*0.4,cy+r*0.8); c.moveTo(cx+r*0.4,cy+r*0.4); c.lineTo(cx+r*0.4,cy+r*0.8); c.stroke(); } },
  { label: 'Personal Care', color: 'rgba(220,110,150,ALPHA)', drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.strokeStyle='currentColor'; c.lineWidth=1.5; c.beginPath(); c.moveTo(cx-r*0.2,cy-r*0.7); c.lineTo(cx-r*0.3,cy+r*0.6); c.arc(cx,cy+r*0.6,r*0.3,Math.PI,0); c.lineTo(cx+r*0.2,cy-r*0.7); c.arc(cx,cy-r*0.7,r*0.2,0,Math.PI); c.stroke(); } },
  { label: 'Barbecue',      color: 'rgba(235,95,55,ALPHA)',   drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.strokeStyle='currentColor'; c.lineWidth=1.5; c.beginPath(); c.arc(cx,cy-r*0.1,r*0.55,0,Math.PI); c.closePath(); c.stroke(); c.beginPath(); c.moveTo(cx,cy+r*0.45); c.lineTo(cx,cy+r*0.85); c.moveTo(cx-r*0.4,cy+r*0.85); c.lineTo(cx+r*0.4,cy+r*0.85); c.moveTo(cx-r*0.2,cy+r*0.45); c.lineTo(cx-r*0.35,cy+r*0.85); c.moveTo(cx+r*0.2,cy+r*0.45); c.lineTo(cx+r*0.35,cy+r*0.85); c.stroke(); } },
  { label: 'Baby Products', color: 'rgba(240,175,70,ALPHA)',  drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.strokeStyle='currentColor'; c.lineWidth=1.5; c.beginPath(); c.arc(cx,cy-r*0.2,r*0.45,0,Math.PI*2); c.stroke(); c.beginPath(); c.moveTo(cx-r*0.55,cy+r*0.35); c.quadraticCurveTo(cx-r*0.3,cy+r*0.1,cx,cy+r*0.25); c.quadraticCurveTo(cx+r*0.3,cy+r*0.1,cx+r*0.55,cy+r*0.35); c.stroke(); } },
  { label: "Children's",    color: 'rgba(100,160,240,ALPHA)', drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.strokeStyle='currentColor'; c.lineWidth=1.5; [[0,-0.7],[0.65,-0.22],[0.4,0.58],[-0.4,0.58],[-0.65,-0.22]].forEach(([dx,dy],i,arr)=>{ const nx=arr[(i+1)%5]!; c.beginPath(); c.moveTo(cx+dx*r,cy+dy*r); c.lineTo(cx+nx[0]!*r,cy+nx[1]!*r); c.stroke(); }); } },
  { label: 'Beverages',     color: 'rgba(60,200,180,ALPHA)',  drawIcon: (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => { c.strokeStyle='currentColor'; c.lineWidth=1.5; c.beginPath(); c.moveTo(cx-r*0.25,cy-r*0.6); c.lineTo(cx-r*0.35,cy+r*0.6); c.arc(cx,cy+r*0.6,r*0.35,Math.PI,0); c.lineTo(cx+r*0.25,cy-r*0.6); c.stroke(); c.beginPath(); c.moveTo(cx-r*0.3,cy-r*0.1); c.lineTo(cx+r*0.3,cy-r*0.1); c.stroke(); } },
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
        c.beginPath(); c.roundRect(x, y, cellW, cellH, 5); c.fill(); c.stroke();
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
```

---

## TASK 7 — BUILD

```bash
cd ~/Documents/Synergistic_Interaction/DEVELOPMENT
rm -rf .next
npm run build 2>&1
```

Fix TypeScript errors autonomously. Most likely issues:
- `roundRect` not typed on canvas — use `(c as any).roundRect(...)` or the manual path approach already in Task 2
- Array index nullability — add `?? fallback` or null check
- Missing imports — add at top of file

Rebuild until clean.

---

## TASK 8 — DEPLOY

```bash
vercel --prod
```

---

## TASK 9 — VERIFY

```bash
LIVE="https://synergistic-interaction.vercel.app"
for path in "" "/about" "/services" "/category-expertise" "/our-approach"; do
  echo "$path: $(curl -s -o /dev/null -w '%{http_code}' $LIVE$path)"
done
```

---

## TASK 10 — COMMIT AND PUSH

```bash
cd ~/Documents/Synergistic_Interaction
git add -A
git commit -m "Session 11: Category expertise condensed + all visuals enhanced

CATEGORY EXPERTISE:
- Removed three-panel layout (Commercial/Supplier/Compliance)
- Replaced with single paragraph per category (2-3 sentences)
- Kept compliance note as small sidebar
- Word count: ~2,600 → ~500 (80% reduction)
- No IP giveaway in commercial methodology
- Store Setup section retained

VISUALS:
- HomepageHero: realistic varying product shapes (bottles/boxes/packets/cans)
  Products now fill shelves naturally with correct proportions
- AboutVisual: New Zealand added as 4th market node
  4 markets now shown: USA, UK, Australia, New Zealand
- OurApproachVisual: more polished, ISO clauses cycle in
- ServicesVisual: custom drawn icons (shelf/arrows/chart/globe)
- CategoryGridVisual: custom drawn category icons (no emoji)"

git push origin main
```

---

## TASK 11 — PRINT COMPLETION REPORT

```
═══════════════════════════════════════════════════════
SYNERGISTIC INTERACTION — SESSION 11 COMPLETE
═══════════════════════════════════════════════════════

CONTENT:
  Category expertise condensed:       [ done ]
  Three-panel layout removed:          [ done ]
  IP-sensitive copy removed:           [ done ]
  Store setup section retained:        [ done ]

VISUALS:
  Planogram: varied product shapes:    [ done ]
  About: New Zealand added (4 markets):[ done ]
  Our Approach: polished + ISO clauses:[ done ]
  Services: custom drawn icons:        [ done ]
  Category grid: custom drawn icons:   [ done ]

LIVE: https://synergistic-interaction.vercel.app
All pages 200:    [ yes / no ]
Build errors:     [ none / list ]
═══════════════════════════════════════════════════════
```
