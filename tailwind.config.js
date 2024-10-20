/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        warning: "#f26922",
        card: '#e4e4e7',
        lowLight: '#71717a',
      },
      fontFamily: {
        honest: ['"Onest"', 'sans-serif'],
        footC: ['"Bebas Neue"', 'sans-serif']
      },
    },
  },
  plugins: [],
}
