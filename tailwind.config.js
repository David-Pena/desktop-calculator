/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#31A2AA',
        secondary: '#061215',
        terciary: '#105055',
        quaternary: '#000605'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

