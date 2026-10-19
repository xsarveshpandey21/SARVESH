/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Base Warm Cream & Paper
        cream: {
          DEFAULT: '#F5EDE2',
          50: '#FBF7F1',
          100: '#F5EDE2',
          200: '#EFE5D6',
        },
        paper: {
          DEFAULT: '#FFFDF9',
          dark: '#26332F',
        },
        // Blush Family
        blush: {
          DEFAULT: '#EBD3CB',
          100: '#F6E6E0',
          300: '#EBD3CB',
          500: '#D9B3A7',
        },
        // Sage Family
        sage: {
          DEFAULT: '#8FA89A',
          100: '#E4EBE4',
          300: '#B7C8BA',
          500: '#8FA89A',
          700: '#5F7A6B',
        },
        // Sand Family
        sand: {
          DEFAULT: '#CDB39B',
          200: '#E6D5C3',
          400: '#CDB39B',
        },
        // Ink (Warm green-charcoal, never bluish, never brown)
        ink: {
          DEFAULT: '#4A5552',
          500: '#7A8581',
          700: '#4A5552',
          800: '#3A4240',
          900: '#2B302E',
        },
        // Accent (Sparingly used for buttons and tiny highlights)
        terracotta: {
          DEFAULT: '#C58B72',
          light: '#D7A38E',
          dark: '#AA6D54',
        },
        // Deep Sage Green for Dark Mode (Never brown!)
        darkgreen: {
          DEFAULT: '#1F2926',
          surface: '#26332F',
          border: '#32423D',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'magazine': '0.18em',
        'label': '0.14em',
      },
      borderRadius: {
        'spread': '28px',
        'card': '20px',
      },
      boxShadow: {
        'soft': '0 8px 24px rgba(74, 85, 82, 0.08)',
        'lift': '0 18px 48px rgba(74, 85, 82, 0.14)',
        'page': '0 30px 80px rgba(74, 85, 82, 0.18)',
        'editorial': '0 20px 40px -15px rgba(43, 48, 46, 0.08), 0 0 0 1px rgba(74, 85, 82, 0.06)',
        'editorial-hover': '0 30px 60px -20px rgba(43, 48, 46, 0.16), 0 0 0 1px rgba(74, 85, 82, 0.12)',
        'book': '0 35px 80px -20px rgba(43, 48, 46, 0.28), 0 10px 25px -10px rgba(43, 48, 46, 0.15)',
        'page-left': '-15px 0 30px -10px rgba(43, 48, 46, 0.15)',
        'page-right': '15px 0 30px -10px rgba(43, 48, 46, 0.15)',
        'framed': '0 12px 30px -10px rgba(43, 48, 46, 0.14), inset 0 0 0 10px #FBF7F1',
      },
      animation: {
        'float-slow': 'float 12s ease-in-out infinite',
        'float-medium': 'float 9s ease-in-out infinite alternate',
        'sway-subtle': 'sway 7s ease-in-out infinite alternate',
        'morph': 'morph 12s ease-in-out infinite alternate',
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '50%': { transform: 'translate(8px, -15px) rotate(2deg)' },
        },
        sway: {
          '0%': { transform: 'rotate(-4deg)' },
          '100%': { transform: 'rotate(4deg)' },
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '35% 65% 60% 40% / 50% 55% 45% 50%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.78', transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
}
