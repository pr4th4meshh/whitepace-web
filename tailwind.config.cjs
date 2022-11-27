/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#043873',
        'primaryTwo': '#4f9cf9',
        'secondary': '#ffe492',
        'secondaryTwo': '#a7cefc',
        'secondaryThree': '#fff',
        'secondaryFour': '#212529'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ['Inter', 'normal']
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}