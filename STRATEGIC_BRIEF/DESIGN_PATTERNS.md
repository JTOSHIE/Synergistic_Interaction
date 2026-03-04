# DESIGN PATTERNS
## Synergistic Interaction — UI/UX Specification

> **Source:** SI_Master_Brief_v7.docx §11 (Pages 29–30)

---

## Design System Overview

**Design language:** Premium dark-mode consultancy with glassmorphism accents
**Primary palette:** Deep navy + teal + gold
**Tone:** Authority, precision, trust — not corporate generic

---

## Color System

```typescript
// tailwind.config.ts
colors: {
  // Backgrounds
  'si-bg-primary': '#0A0E1A',    // Deep navy — main background
  'si-bg-secondary': '#111827',  // Slightly lighter navy — card backgrounds
  'si-bg-glass': 'rgba(255,255,255,0.05)', // Glassmorphism fill

  // Brand colors
  'si-teal': '#00C9A7',          // Primary accent — CTAs, highlights
  'si-teal-light': '#33D4B8',    // Hover state
  'si-gold': '#F5A623',          // Secondary accent — ISO badges, stats
  'si-gold-light': '#F7BC57',    // Hover state

  // Text
  'si-white': '#F8F9FA',         // Primary text on dark background
  'si-white-muted': '#9CA3AF',   // Secondary/muted text
  'si-white-dim': '#6B7280',     // Tertiary text

  // Semantic
  'si-success': '#10B981',       // Green — compliance achieved
  'si-warning': '#F59E0B',       // Amber — at risk
  'si-error': '#EF4444',         // Red — non-compliant
}
```

---

## Typography

```typescript
// Font stack
fonts: {
  sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
  // CJK fallback: Noto Sans SC loaded via next/font
}

// Type scale (Tailwind defaults, no custom scale needed)
// Headings: font-bold tracking-tight
// Body: font-normal leading-relaxed
// UI labels: font-medium text-sm
// Badges: font-semibold text-xs uppercase tracking-wider
```

---

## Component Patterns

### Glassmorphism Card
```css
/* Applied to ComponentAccordion items, ProofBar cards */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}
```

```tsx
// Tailwind equivalent
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
```

### ISO 37301 Badge
```tsx
// V7 §11: ISO badge — links to /why-compliance-matters
<Link
  href="/why-compliance-matters#iso-37301"
  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
             bg-si-gold/10 border border-si-gold/30 text-si-gold
             text-xs font-semibold uppercase tracking-wider
             hover:bg-si-gold/20 transition-colors"
>
  ISO 37301
</Link>
```

### CTA Button (Primary)
```tsx
<button className="px-6 py-3 bg-si-teal text-si-bg-primary font-semibold
                   rounded-lg hover:bg-si-teal-light transition-colors
                   focus:outline-none focus:ring-2 focus:ring-si-teal focus:ring-offset-2
                   focus:ring-offset-si-bg-primary">
  See Our Approach
</button>
```

### CTA Button (Secondary / Ghost)
```tsx
<button className="px-6 py-3 border border-si-teal/50 text-si-teal font-semibold
                   rounded-lg hover:border-si-teal hover:bg-si-teal/10 transition-colors">
  Learn More
</button>
```

---

## Layout System

### Page Max Width
```tsx
// Container: max-w-7xl centered with horizontal padding
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

### Section Spacing
```css
/* Section vertical padding */
.section { padding: 5rem 0; }      /* py-20 */
.section-lg { padding: 7.5rem 0; } /* py-30 */

/* On mobile: reduce to py-12 */
```

---

## Animation Patterns

### GSAP Scroll-Triggered Stat Counters (ProofBar)
```typescript
// V7 §11: Scroll-triggered stat counters
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to(counterElement, {
  innerText: targetValue,
  duration: 2,
  ease: 'power2.out',
  snap: { innerText: 1 },
  scrollTrigger: {
    trigger: '#proof-bar',
    start: 'top 80%',
    once: true,
  },
});
```

### Accordion Open/Close
```typescript
// GSAP height animation for smooth accordion
gsap.to(content, {
  height: isOpen ? 'auto' : 0,
  duration: 0.3,
  ease: 'power2.inOut',
});
```

### Page Entrance
```css
/* CSS-based entrance animation (no JS required) */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-entrance {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

---

## Navigation

### Desktop Header
```
[Logo]                    [Home] [Our Approach] [Why Compliance] [Get Started]    [Change Language 中文]
```

### Mobile Header
```
[Logo]                                                              [中文] [☰ Menu]
```

### Mobile Menu (full-screen overlay)
- Dark navy background
- Stacked navigation links (large touch targets: min 44px)
- Language toggle at bottom
- Close button top-right

---

## Responsive Breakpoints

| Breakpoint | Value | Usage |
|-----------|-------|-------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Wide desktop |
| `2xl` | 1536px | Ultra-wide (max-width cap applies) |

---

## Accessibility Requirements (WCAG 2.1 AA)

- All text: contrast ratio ≥ 4.5:1 against background
- Large text (18px+ or 14px+ bold): contrast ratio ≥ 3:1
- Focus states: visible ring on all interactive elements
- Keyboard navigation: full site navigable without mouse
- Skip-to-content link in header (visually hidden, shown on focus)
- All images: descriptive `alt` text
- All icons: `aria-label` or accompanying visible text
- Form fields: associated `<label>` elements
- Accordion: `aria-expanded` and `aria-controls` attributes
