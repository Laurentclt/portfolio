/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        russoOne: 'russo-one'
      },
      colors : {
        Plight: "#F8FFF4",
        Pred :  "#DB504A",
        Pgreen : "#218380",
        Pdark : "#474350",
        Pmoon : "#FAFAC6",
      }
    },
  },
  plugins: [],
}
