/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'fbfield':"url('/src/assets/background.jpg')"
      }
    },
  },
  plugins: [],
}