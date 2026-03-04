# CODE STANDARDS
## Synergistic Interaction Website

---

## 1. TYPESCRIPT STANDARDS

```typescript
// ✅ Strict mode in tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}

// ✅ Explicit interfaces for all props
interface ComponentAccordionProps {
  components: ComplianceComponent[];
  defaultOpen?: number;
  showISOBadges?: boolean;
}

// ✅ Enums for compliance types
enum ComplianceComponent {
  STRATEGIC_SOURCING = 'strategic_sourcing',
  SUPPLIER_PERFORMANCE = 'supplier_performance',
  REGULATORY_COMPLIANCE = 'regulatory_compliance',
  RISK_MANAGEMENT = 'risk_management',
  DATA_ANALYTICS = 'data_analytics',
  STAKEHOLDER_ALIGNMENT = 'stakeholder_alignment',
  CONTRACT_GOVERNANCE = 'contract_governance',
  SUSTAINABILITY = 'sustainability',
  COMPLIANCE_CULTURE = 'compliance_culture',
}

// ❌ Never use `any` without justification
// If unavoidable: // REASON: [explicit justification]
```

---

## 2. REACT COMPONENT STANDARDS

```typescript
// ✅ Functional components only
// ✅ One component per file
// ✅ File name matches component name (PascalCase)

// V7 §11: ComponentAccordion — maps to nine-component architecture
'use client'; // Only when interactive state is required

import { useState, memo } from 'react';

interface ComponentAccordionProps {
  components: ComplianceComponent[];
}

const ComponentAccordion = memo(function ComponentAccordion({
  components,
}: ComponentAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // ...
});

export default ComponentAccordion;
```

### Server vs Client Components
- **Default:** Server Component (no `'use client'` directive)
- **Use `'use client'` only for:** state, effects, event handlers, browser APIs
- **Never use client components** for static content, layouts, or data fetching

---

## 3. NEXT.JS STANDARDS

```typescript
// ✅ App Router structure
app/
  layout.tsx          // Root layout — Server Component
  page.tsx            // Home page — Server Component
  our-approach/
    page.tsx          // Server Component
  why-compliance-matters/
    page.tsx          // Server Component
  get-started/
    page.tsx          // Server Component (form is Client Component)
  api/
    regulatory-feed/
      route.ts        // Route Handler
    contact/
      route.ts        // Route Handler

// ✅ Metadata API for SEO
export const metadata: Metadata = {
  title: 'Synergistic Interaction | Compliance-First Category Management',
  description: '...',
};

// ✅ generateStaticParams for localized pages
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh' }];
}
```

---

## 4. STYLING STANDARDS

```css
/* ✅ Tailwind utility classes — no custom CSS unless necessary */
/* ✅ Glassmorphism: backdrop-blur + bg-white/10 + border-white/20 */
/* ✅ Dark background: bg-[#0A0E1A] or similar deep navy */

/* Design tokens (tailwind.config.ts) */
colors: {
  'si-navy': '#0A0E1A',
  'si-navy-light': '#111827',
  'si-teal': '#00C9A7',
  'si-gold': '#F5A623',
  'si-white': '#F8F9FA',
}
```

---

## 5. PERFORMANCE STANDARDS

```typescript
// ✅ Dynamic imports for heavy components
const ComplianceVisualization = dynamic(
  () => import('@/components/ComplianceVisualization'),
  { ssr: false, loading: () => <VisualizationSkeleton /> }
);

// ✅ Image optimization
import Image from 'next/image';
<Image src="/images/logo.svg" width={160} height={40} alt="Synergistic Interaction" />

// ✅ Font optimization
import { Inter, Noto_Sans_SC } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], display: 'swap' });
const notoSansSC = Noto_Sans_SC({ subsets: ['chinese-simplified'], display: 'swap' });
```

---

## 6. CODE COMMENTS

```typescript
// ✅ V7 brief reference on every component
// V7 §5: WebGPU 3D Visualization — Three.js r171, 60fps target on Galaxy A54

// ✅ Complex logic explanation
// Throttle resize events to avoid layout thrash during WebGPU frame updates

// ✅ Deviation documentation
// V7 DEVIATION: Using WebGL renderer as primary (WebGPU API unstable in Three.js r171)
// Brief spec: WebGPU primary, WebGL fallback
// Reason: Three.js r171 WebGPU renderer has known memory leak on mobile Chrome

// ❌ Never commit TODO comments without associated task ID
```

---

## 7. LOCALIZATION STANDARDS

```typescript
// ✅ All user-facing strings via translation keys
import { useTranslation } from 'next-i18next';
const { t } = useTranslation('common');
<h1>{t('hero.headline')}</h1>

// ❌ Never hardcode English strings in JSX
// <h1>Compliance-First Category Management</h1>  ← WRONG

// ✅ Namespace structure
// common.json — navigation, buttons, footer
// pages.json — page-specific headings and body copy
// components.json — reusable component copy
```
