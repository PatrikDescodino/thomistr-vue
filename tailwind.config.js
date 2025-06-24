/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        vintage: ['Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        primary: {
          50: '#fefdf8',
          100: '#fcf9e8',
          200: '#f9f1c6',
          300: '#f4e59f',
          400: '#efd397',
          500: '#e5c675',
          600: '#d4a942',
          700: '#b8873a',
          800: '#956d36',
          900: '#7a5a32',
        },
        gold: {
          50: '#fefdf8',
          100: '#fcf9e8',
          200: '#f9f1c6',
          300: '#f4e59f',
          400: '#efd397',
          500: '#e5c675',
          600: '#d4a942',
          700: '#b8873a',
          800: '#956d36',
          900: '#7a5a32',
        },
        dark: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#0d1117',
          950: '#060a0e',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
