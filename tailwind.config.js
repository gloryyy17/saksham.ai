/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // GREEN: Primary Actions, Navigation, Progress, Learning, Success
        brand: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857', // Rich Forest Green
          800: '#065F46', // Primary Deep Educational Green
          900: '#064E3B',
          950: '#022C22',
        },
        // YELLOW / GOLD / AMBER: Highlights, Achievements, Recommendations, Quiz, Voice listening, Offline status
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706', // Vibrant Warm Gold / Amber
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706', // Warm Amber/Yellow
          700: '#B45309',
        },
        // LIGHT BACKGROUND & WHITE: Page structure, Cards, Reading
        surface: {
          light: '#F8FAF9',
          warm: '#F4F7F4',
          cream: '#FAF8F5',
          card: '#FFFFFF',
          border: '#E5E7EB',
        },
        cream: {
          50: '#FAF8F5',
          100: '#F5F0E6',
        },
        offline: '#D97706',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'Noto Sans Devanagari', 'system-ui', 'sans-serif'],
        devanagari: ['Noto Sans Devanagari', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'card': '0 4px 20px -2px rgba(4, 120, 87, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'glow': '0 0 25px -5px rgba(5, 150, 105, 0.25)',
        'gold-glow': '0 0 20px -4px rgba(245, 158, 11, 0.3)',
      }
    },
  },
  plugins: [],
}
