# ACCESSIBILITY TESTING GUIDE
## Synergistic Interaction Website — WCAG 2.1 AA Compliance

---

## Automated Testing

### Tools
- **axe DevTools** (Chrome extension) — run on every page
- **Lighthouse Accessibility** — score must be >90
- **WAVE** (wave.webaim.org) — visual accessibility report

### Run axe on Each Page
1. Install axe DevTools Chrome extension
2. Open each page
3. Run scan — zero critical or serious violations allowed

---

## Manual Testing Checklist

### Keyboard Navigation
- [ ] Tab through entire page without using mouse
- [ ] All interactive elements reachable via Tab
- [ ] Logical tab order (top-to-bottom, left-to-right)
- [ ] Skip-to-content link works (press Tab on load, then Enter)
- [ ] Component accordion opens/closes with Enter or Space
- [ ] Navigation menu accessible via keyboard
- [ ] Mobile menu opens/closes via keyboard
- [ ] Contact form completable via keyboard only

### Screen Reader (NVDA + Chrome or VoiceOver + Safari)
- [ ] Page title announced correctly
- [ ] Navigation landmark present and labelled
- [ ] Main content landmark present
- [ ] Headings form logical hierarchy (h1 → h2 → h3)
- [ ] Accordion state announced ("expanded" / "collapsed")
- [ ] Images have descriptive alt text
- [ ] Icon-only buttons have aria-labels
- [ ] Form fields have associated labels
- [ ] Form validation errors are announced

### Color Contrast
Minimum ratios: body text 4.5:1, large text 3:1, UI components 3:1

| Element | Foreground | Background | Ratio | Pass? |
|---------|-----------|-----------|-------|-------|
| Body text | #F8F9FA | #0A0E1A | TBC | [ ] |
| Muted text | #9CA3AF | #0A0E1A | TBC | [ ] |
| Teal on navy | #00C9A7 | #0A0E1A | TBC | [ ] |
| Gold on navy | #F5A623 | #0A0E1A | TBC | [ ] |
| CTA button | #0A0E1A | #00C9A7 | TBC | [ ] |

Test with: https://webaim.org/resources/contrastchecker/

### Focus States
- [ ] All interactive elements show visible focus ring
- [ ] Focus ring uses `ring-si-teal` (teal colour)
- [ ] No focus ring for mouse users (`:focus:not(:focus-visible)` hides it)

### Mandarin Accessibility
- [ ] `lang="zh"` set on Mandarin pages
- [ ] Screen readers correctly switch language for Chinese content
