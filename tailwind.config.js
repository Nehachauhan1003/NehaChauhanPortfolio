/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}",],
  theme: {
    extend: {
      display: 'group-hover'
    },


  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

