/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        secondary: "#F7F7F7",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(270deg, #E45600 65.76%, #FCEEA6 99.64%)',
      },

    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1400px",
      xl: "1700px",
    },
  },
  plugins: [],
};