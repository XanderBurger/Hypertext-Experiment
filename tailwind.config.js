/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["templates/**/*.html"],

  theme: {
    screens: {
      xsm: "420px",
      sm: "480px",
      md: "900px",
      xmd: "1100px",
      lg: "1400px",
      xl: "1600px",
      xxl: "1800px",
    },
    extend: {
      fontFamily: {
        times: ['"Times New Roman"', "Times", "serif"],
        jaka: ['"Jakarta"'],
        craftworks: ['"Craftwork Grotesk"'],
        fenwickOutline: ['"fenwick-outline"'],
        fenwick: ['"fenwick"'],
      },
      fontSize: {
        xsm: "14px",
        sm: "16px",
        md: "28px",
        xmd: "30px",
        lg: "40px",
      },
      spacing: {
        xsm: "10px",
        sm: "20px",
        md: "40px",
        lg: "60px",
        xl: "90px",
      },
      colors: {
        pink: "#E79AA1",
        blue: "#B2DBE2",
        yellow: "#FBD087",
        green: "#88BA8E",
        "dk-blue": "#4F66A9",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
