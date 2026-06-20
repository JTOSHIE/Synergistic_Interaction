// HeroNetwork: a subtle animated node network drawn on an HTML Canvas 2D layer.
// It echoes the connected nodes of the logo, slowly drifting points joined by
// thin teal lines over the navy background, kept at low opacity so the hero
// headline and buttons stay clearly readable.
//
// Performance: the node count is capped and scaled to the area, a single
// requestAnimationFrame loop drives it, the loop pauses when the tab is hidden
// or the hero scrolls out of view, resize is handled, and everything is cleaned
// up on unmount. Under prefers-reduced-motion it paints a single static frame
// with no animation.
'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const TEAL = '0, 201, 167';
const MAX_DISTANCE = 130;
const MAX_NODES = 60;

export default function HeroNetwork({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    // Narrowed, non-null locals so the nested helpers stay type-safe.
    const cv = canvas;
    const ctx = context;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let running = false;
    let inView = true;

    function buildNodes(count: number) {
      nodes = [];
      for (let i = 0; i < count; i += 1) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
        });
      }
    }

    function resize() {
      const parent = cv.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.floor(width * dpr);
      cv.height = Math.floor(height * dpr);
      cv.style.width = `${width}px`;
      cv.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.min(MAX_NODES, Math.max(18, Math.round((width * height) / 22000)));
      buildNodes(target);
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        if (!a) continue;
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          if (!b) continue;
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * 0.35;
            ctx.strokeStyle = `rgba(${TEAL}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${TEAL}, 0.7)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function step() {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
      draw();
      raf = requestAnimationFrame(step);
    }

    function start() {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(step);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    resize();

    if (reduced) {
      draw();
      const onReducedResize = () => {
        resize();
        draw();
      };
      window.addEventListener('resize', onReducedResize);
      return () => window.removeEventListener('resize', onReducedResize);
    }

    function syncPlayState() {
      if (inView && !document.hidden) start();
      else stop();
    }

    const onResize = () => {
      resize();
      draw();
    };
    const onVisibility = () => syncPlayState();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          inView = entry.isIntersecting;
          syncPlayState();
        });
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    start();

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
