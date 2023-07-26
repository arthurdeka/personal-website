/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        coresProjeto: {
          vermelho: '#FF003D',
          laranja: '#F83D13',
          pretoGraffite: '#0B0907',
          
        },
      },
      fontFamily: {
        'Inter': 'Inter'
      },
    },
  },
  plugins: [],
}