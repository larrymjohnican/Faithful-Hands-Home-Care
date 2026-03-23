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
          DEFAULT: '#2B5490',
          dark: '#1E3D6B',
          light: '#EBF0F9',
        },
        accent: {
          DEFAULT: '#5B8EC4',
          dark: '#3D6FA3',
          light: '#E8F1FA',
        },
        warm: {
          bg: '#F7F9FC',
          text: '#1A2E4A',
          muted: '#4E6580',
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
