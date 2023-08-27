/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        darkmode: "#121212",
        textdark: "#eeeeee",
      },
    },
  },
  plugins: [require("daisyui")],
};
