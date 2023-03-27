/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xl': {'max': '1623px'},
      'lg': {'max': '1023px'},
      'md': {'max': '723px'},
    },
    extend: {
      backgroundImage: {
        'back': "url('../assets/images/freepik_bg.jpg')"
      }
    },
  },
  plugins: [],
}
