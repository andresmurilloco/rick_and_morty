/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*','{js, ts, jsx, tsx}' ],
  theme: {
    extend: {
      fontFamily:{
        'gloria': ['Gloria Hallelujah', 'cursive'],
        'covered': ['Covered By Your Grace', 'cursive']
      }
    },
  },
  plugins: [],
}
