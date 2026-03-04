// V7 §11: Tailwind configuration — Synergistic Interaction design system
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'si-bg-primary': '#0A0E1A',
        'si-bg-secondary': '#111827',
        // Brand
        'si-teal': '#00C9A7',
        'si-teal-light': '#33D4B8',
        'si-gold': '#F5A623',
        'si-gold-light': '#F7BC57',
        // Text
        'si-white': '#F8F9FA',
        'si-white-muted': '#9CA3AF',
        'si-white-dim': '#6B7280',
        // Semantic
        'si-success': '#10B981',
        'si-warning': '#F59E0B',
        'si-error': '#EF4444',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-sans-sc)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
