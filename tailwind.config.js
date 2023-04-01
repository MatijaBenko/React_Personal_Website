/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xs": { 'max': '300px' },
      "xs": { "min": '301px', 'max': '449px' },
      'sm': { 'min': '450px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'min': '1280px', 'max': '1670px' },
    },
    extend: {
      backgroundImage: {
        'back': "url('../assets/images/freepik_bg.jpg')"
      }
    },
  },
  plugins: [],
}
