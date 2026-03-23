/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A7C6F',
          dark: '#356358',
          light: '#EEF5F2',
        },
        accent: {
          DEFAULT: '#C4893E',
          dark: '#A5712E',
          light: '#FBF3E8',
        },
        warm: {
          bg: '#FDFAF5',
          text: '#1E3A33',
          muted: '#5A7369',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
