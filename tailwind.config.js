/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef4fb',
          100: '#d4e3f5',
          200: '#a9c7eb',
          300: '#74a4dc',
          400: '#437fc9',
          500: '#2764b0',
          600: '#1b4d91',
          700: '#143c72',
          800: '#0f2f5c',
          900: '#0a2540',
          950: '#061a30',
        },
        accent: {
          50: '#fff4ed',
          100: '#ffe5d4',
          200: '#ffc7a8',
          300: '#ffa171',
          400: '#ff6f38',
          500: '#ff5311',
          600: '#f03c06',
          700: '#c72d08',
          800: '#9e2610',
          900: '#7f2310',
        },
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(10, 37, 64, 0.12)',
        'soft-lg': '0 20px 50px -20px rgba(10, 37, 64, 0.25)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeScale: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'fade-scale': 'fadeScale 0.4s ease-out forwards',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
