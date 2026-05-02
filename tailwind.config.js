/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: { xs: '2px' },
      animation: {
        'blob-morph':   'blobMorph 8s ease-in-out infinite',
        'float':        'float 6s ease-in-out infinite',
        'cursor-blink': 'blink 1s step-end infinite',
        'spin-slow':    'spin 3s linear infinite',
      },
      keyframes: {
        blobMorph: {
          '0%,100%': { borderRadius: '40% 60% 60% 40% / 50% 50% 50% 50%' },
          '50%':     { borderRadius: '60% 40% 40% 60% / 40% 60% 40% 60%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
      },
    },
  },
  plugins: [tailwindScrollbar],
};
