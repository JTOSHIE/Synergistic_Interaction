import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand
        'si-teal': '#00c9a7',
        'si-teal-light': '#00e5be',
        'si-navy': '#0a1628',
        // Backgrounds — both aliases used across the codebase
        'si-bg': '#060d1a',
        'si-bg-primary': '#060d1a',
        'si-bg-secondary': '#0c1525',
        // Text
        'si-white': '#f0f4f8',
        'si-white-muted': '#8fa3ba',
        'si-white-dim': '#4a6080',
        // Semantic
        'si-error': '#ef4444',
        'si-warning': '#f59e0b',
        'si-success': '#10b981',
        // Legacy aliases
        'si-gold': '#f5a623',
        'si-gold-light': '#f7bc57',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'si-gradient': 'linear-gradient(135deg, #060d1a 0%, #0a1628 50%, #0c1e3a 100%)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
