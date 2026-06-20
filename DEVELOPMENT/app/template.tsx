// Page transition. Next.js re-mounts this template on every navigation, so the
// new page content fades in gently. Disabled under prefers-reduced-motion, both
// via the shared hook and the CSS media query in globals.css as a backstop.
// See the note in the pull request: a template based cross-fade was chosen over
// the raw View Transitions API, which does not integrate cleanly with App Router
// soft navigation without intercepting the router.
'use client';

import { useReducedMotion } from '@/components/motion/useReducedMotion';

export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return <div className={reduced ? undefined : 'si-page-fade'}>{children}</div>;
}
