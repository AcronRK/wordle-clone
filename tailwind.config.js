/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    colors:{
      'green': '#538d4e',
      'grey': '#3a3a3c',
      'grey-secondary': "#77777a",
      'yellow': '#b59f3b',
      'white': '#ffffff',
      'indigo': colors.indigo,
      'black': colors.black
    },
  },
  plugins: [],
}