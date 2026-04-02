import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // V7 §5.3: Three.js WebGPU addons imports
  experimental: {
    // serverActions are enabled by default in Next.js 15
  },
  transpilePackages: ['three'],

  // V7 §6.1 Option C: Security headers — also remove Great Firewall blocked services for zh locale
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob:",
              "font-src 'self'",
              "connect-src 'self' https://api.openai.com https://vercel-insights-api.vercel.app",
              "worker-src 'self' blob:",
            ].join('; '),
          },
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
