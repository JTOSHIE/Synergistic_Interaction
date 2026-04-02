import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // V7 §5.3: Three.js WebGPU addons imports
  experimental: {
    // serverActions are enabled by default in Next.js 15
  },
  transpilePackages: ['three'],

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // CSP removed — was blocking Tailwind inline styles and canvas
        ],
      },
    ];
  },

  // Image optimisation
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
  },

  // V7 §6.1 Option C: Redirect zh locale scripts away from blocked services
  async redirects() {
    return [];
  },

  // Strict mode for React 19
  reactStrictMode: true,

  // Compression
  compress: true,

  // Output — default (Vercel handles this)
  // output: 'standalone', // Uncomment for Docker deployment
};

export default nextConfig;
