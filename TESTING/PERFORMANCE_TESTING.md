# PERFORMANCE TESTING GUIDE
## Synergistic Interaction Website — V7 §5 Performance Targets

---

## Primary Target: 60fps on Samsung Galaxy A54

The Samsung Galaxy A54 is the benchmark mobile device per V7 §5.

### Specifications (Galaxy A54)
- CPU: Exynos 1380 (octa-core, 2.4GHz)
- GPU: Mali-G68 MP5
- RAM: 6GB
- Display: 6.4" FHD+ 120Hz Super AMOLED
- Chrome Mobile 113+

---

## Testing Protocol

### 1. Chrome DevTools Simulation
```
1. Open Chrome DevTools (F12)
2. Performance tab → CPU throttle: 4x slowdown
3. Network: Fast 3G
4. Record 10-second animation of ComplianceVisualization
5. Check frame rate in timeline — must stay above 55fps average
```

### 2. Physical Device Testing
```
1. Load site on Samsung Galaxy A54
2. Open chrome://inspect in desktop Chrome
3. Profile the visualization page
4. Verify fps counter stays above 55fps during animation
5. Check for jank or dropped frames
```

### 3. WebPageTest
- URL: webpagetest.org
- Location: Singapore (closest to Australia with Asian coverage)
- Device: Galaxy A54 (Motorola Moto G profile is equivalent)
- Connection: 4G LTE

---

## Performance Budgets

| Metric | Target | Tool |
|--------|--------|------|
| LCP | <2.5s | Lighthouse |
| CLS | <0.1 | Lighthouse |
| FID/INP | <100ms | Lighthouse |
| JS bundle (initial) | <200KB | Vercel build output |
| JS bundle (total) | <3MB | Vercel build output |
| CSS bundle | <100KB | Vercel build output |
| Lighthouse score | >90 (all categories) | Lighthouse CI |
| TTFB (AU) | <800ms | WebPageTest |
| TTFB (Shanghai) | <100ms | WebPageTest (Shanghai) |

---

## WebGPU Performance Notes

### Known Issues (Three.js r171)
- WebGPU renderer has memory leak on mobile Chrome — use WebGL as stable baseline
- See `WEBGPU_VISUALIZATION_SPEC.md` for deviation documentation

### Optimization Checklist
- [ ] `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))` on mobile
- [ ] Shadow maps disabled on mobile
- [ ] Anti-aliasing: off on mobile, FXAA on desktop
- [ ] Geometry: `BufferGeometry` only
- [ ] Node count: 9 max (no particle systems)
- [ ] `dynamic` import with `ssr: false`
- [ ] `IntersectionObserver` to pause when off-screen

---

## Lighthouse CI Configuration

```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['/', '/our-approach', '/why-compliance-matters', '/get-started'],
      numberOfRuns: 3,
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
  },
};
```
