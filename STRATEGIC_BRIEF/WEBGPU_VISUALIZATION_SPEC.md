# WEBGPU 3D VISUALIZATION SPECIFICATION
## Synergistic Interaction — V7 §5 Implementation Guide

> **Source:** SI_Master_Brief_v7.docx §5 (Pages 14–17)

---

## Overview

A Three.js r171 3D visualization representing the nine-component compliance network.
Placed on the homepage as a scroll-triggered hero element.

---

## Technical Requirements

| Requirement | Specification |
|-------------|--------------|
| Library | Three.js r171 |
| Primary renderer | WebGPU |
| Fallback renderer | WebGL (for Safari 15+, Firefox <141) |
| **Mobile target** | **60fps on Samsung Galaxy A54** |
| Desktop target | 60fps on Chrome 113+ |
| Trigger | GSAP ScrollTrigger |
| SSR | `ssr: false` (dynamic import) |
| Bundle size | <3MB total JS for visualization |

---

## Visualization Design

- **Nine nodes** — one per compliance component
- **Node connections** — lines representing component interdependencies
- **ISO 37301 labels** — hoverable clause references
- **Colour scheme:** Deep navy background, teal nodes, gold highlights
- **Interaction:** Hover to highlight component, click to scroll to accordion item
- **Animation:** Slow rotation when idle; explode/contract on scroll

---

## Component Implementation

```typescript
// V7 §5: WebGPU 3D Compliance Network Visualization
// components/ComplianceVisualization.tsx
'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

// Dynamic import in parent — ssr: false
// See: app/page.tsx

export default function ComplianceVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (!inView || !canvasRef.current) return;

    // V7 §5: WebGPU detection with WebGL fallback
    async function initRenderer() {
      const { WebGPURenderer } = await import('three/webgpu');
      const { WebGLRenderer } = await import('three');

      const supportsWebGPU = navigator.gpu !== undefined;

      const renderer = supportsWebGPU
        ? new WebGPURenderer({ canvas: canvasRef.current! })
        : new WebGLRenderer({ canvas: canvasRef.current!, antialias: true });

      return renderer;
    }

    initRenderer().then(setupScene);
  }, [inView]);

  return (
    <div ref={ref} className="w-full aspect-video">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
```

---

## Performance Optimization Strategy

### For Samsung Galaxy A54 (60fps target)
1. **Node count:** 9 nodes max (no particle effects on mobile)
2. **Shadow maps:** Disabled on mobile
3. **Anti-aliasing:** Disabled on mobile (use FXAA post-process instead)
4. **Texture resolution:** 512x512 max on mobile
5. **Frustum culling:** Enabled
6. **Geometry:** Use `BufferGeometry` only (not legacy Geometry)
7. **Renderer pixel ratio:** Cap at `Math.min(window.devicePixelRatio, 2)`
8. **Render loop:** Use `renderer.setAnimationLoop` (not requestAnimationFrame directly)

### Mobile Detection
```typescript
const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent)
  || window.innerWidth < 768;

if (isMobile) {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.shadowMap.enabled = false;
}
```

---

## WebGPU vs WebGL Fallback Matrix

| Browser | Version | Renderer | Notes |
|---------|---------|----------|-------|
| Chrome | 113+ | WebGPU | Primary |
| Edge | 113+ | WebGPU | Primary |
| Firefox | 141+ | WebGPU | Experimental flag required |
| Firefox | <141 | WebGL | Automatic fallback |
| Safari | All | WebGL | WebGPU not yet stable |
| iOS Safari | All | WebGL | Automatic fallback |

---

## GSAP ScrollTrigger Integration

```typescript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// V7 §5: Scroll-triggered visualization animation
ScrollTrigger.create({
  trigger: '#compliance-visualization',
  start: 'top 80%',
  onEnter: () => startVisualizationAnimation(),
  onLeave: () => pauseVisualizationAnimation(),
  onEnterBack: () => startVisualizationAnimation(),
});
```

---

## Testing Protocol

1. Open Chrome DevTools → Performance tab
2. Set CPU throttle to 4x (simulates mid-range mobile)
3. Record 10-second animation
4. Verify frame rate stays above 55fps (60fps target)
5. Test on physical Samsung Galaxy A54 before launch
6. Test WebGL fallback by disabling WebGPU in `chrome://flags`
