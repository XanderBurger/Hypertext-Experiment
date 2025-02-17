/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["templates/**/*.html"],

  theme: {
    screens: {
      sm: "480px",
      md: "810px",
      lg: "976px",
      xl: "1600px",
      xxl: "1800px",
    },
    extend: {
      fontFamily: {
        times: ['"Times New Roman"', "Times", "serif"],
        jaka: ['"Jakarta"'],
      },
      colors: {
        "hot-pink": "#EB2FEF",
        "gray-back": "#585858",
        "lt-blue": "#C2ECF9",
        "md-blue": "#51A1FE",
        "dk-blue": "#4C22F1",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
