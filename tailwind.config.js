/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'green': '#538d4e',
      'grey': '#3a3a3c',
      'yellow': '#b59f3b',
      'white': '#ffffff',
      'indigo': colors.indigo
    },
  },
  plugins: [],
}