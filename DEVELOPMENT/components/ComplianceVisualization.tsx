// V7 §5: WebGPU 3D Compliance Network Visualization
// Three.js r171 — WebGPU primary, WebGL fallback for Safari/Firefox
// Performance target: 60fps on Samsung Galaxy A54
// NOTE: This component must be loaded with dynamic import ssr:false
'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function ComplianceVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<unknown>(null);
  const animationRef = useRef<number | null>(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (!inView || !canvasRef.current) return;

    let cancelled = false;

    async function init() {
      const THREE = await import('three');

      // V7 §5: WebGPU detection with WebGL fallback
      const supportsWebGPU = typeof navigator !== 'undefined' && 'gpu' in navigator;

      let renderer: InstanceType<typeof THREE.WebGLRenderer>;

      if (supportsWebGPU) {
        // V7 DEVIATION: Using WebGLRenderer as stable baseline.
        // WebGPU renderer (three/webgpu) is available in Three.js r171 but
        // has known instability on mobile Chrome. Switch to WebGPURenderer
        // when Three.js r172+ resolves mobile memory leak.
        renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current!,
          antialias: !isMobileDevice(),
          alpha: true,
        });
      } else {
        renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current!,
          antialias: false,
          alpha: true,
        });
      }

      if (cancelled) return;

      // V7 §5: Performance optimization for Samsung Galaxy A54
      const mobile = isMobileDevice();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 2));
      renderer.setSize(canvasRef.current!.clientWidth, canvasRef.current!.clientHeight);
      renderer.setClearColor(0x000000, 0);
      if (mobile) renderer.shadowMap.enabled = false;

      rendererRef.current = renderer;

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        canvasRef.current!.clientWidth / canvasRef.current!.clientHeight,
        0.1,
        100
      );
      camera.position.set(0, 0, 8);

      // V7 §5: Nine-node compliance network
      const nodes: THREE.Mesh[] = [];
      const nodeCount = 9;

      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const radius = 3;

        const geometry = new THREE.SphereGeometry(0.2, mobile ? 8 : 16, mobile ? 8 : 16);
        const material = new THREE.MeshBasicMaterial({ color: 0x00c9a7 });
        const node = new THREE.Mesh(geometry, material);

        node.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          0
        );
        scene.add(node);
        nodes.push(node);
      }

      // V7 §5: Connection lines between nodes
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00c9a7,
        opacity: 0.2,
        transparent: true,
      });

      for (let i = 0; i < nodeCount; i++) {
        const nextIndex = (i + 1) % nodeCount;
        const node = nodes[i];
        const nextNode = nodes[nextIndex];
        if (!node || !nextNode) continue;
        const points = [node.position, nextNode.position];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        scene.add(new THREE.Line(geometry, lineMaterial));
      }

      // Animation loop
      let frameCount = 0;
      function animate() {
        if (cancelled) return;
        animationRef.current = requestAnimationFrame(animate);
        frameCount++;

        // Slow rotation
        scene.rotation.z += 0.002;
        scene.rotation.y += 0.001;

        renderer.render(scene, camera);
      }

      animate();
    }

    init();

    return () => {
      cancelled = true;
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (rendererRef.current && typeof (rendererRef.current as { dispose?: () => void }).dispose === 'function') {
        (rendererRef.current as { dispose: () => void }).dispose();
      }
    };
  }, [inView]);

  return (
    <div
      ref={inViewRef}
      className="w-full aspect-video relative"
      aria-hidden="true"
      role="img"
      aria-label="Nine-component compliance network visualization"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-2xl"
        style={{ background: 'transparent' }}
      />
    </div>
  );
}

function isMobileDevice(): boolean {
  return (
    typeof window !== 'undefined' &&
    (/Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 768)
  );
}
