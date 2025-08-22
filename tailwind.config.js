/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#b8d8d8',
        'cadet-gray': '#7a9e9f',
        'paynes-gray': '#4f6367',
        'beige': '#eef5db',
        'bittersweet': '#fe5f55',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}