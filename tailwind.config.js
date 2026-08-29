/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#1E3A8A', // Deep Indigo / Royal Blue primary
          900: '#1E293B',
          950: '#0F172A',
        },
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          500: '#14B8A6',
          600: '#0D9488', // Secondary Teal
          700: '#0F766E',
        },
        accent: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          500: '#F97316',
          600: '#EA580C', // Warm Orange
          700: '#C2410C',
        },
        cream: {
          50: '#FAF8F5',
          100: '#F5F0E6',
        },
        surface: {
          light: '#F8FAFC',
          warm: '#FAFAF9',
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
        offline: '#EA580C',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'Noto Sans Devanagari', 'system-ui', 'sans-serif'],
        devanagari: ['Noto Sans Devanagari', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
        'card': '0 4px 20px -2px rgba(30, 58, 138, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'glow': '0 0 25px -5px rgba(37, 99, 235, 0.25)',
      }
    },
  },
  plugins: [],
}
