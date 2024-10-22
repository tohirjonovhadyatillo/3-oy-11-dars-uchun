/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        cr: "89%",
        md: "75%",
      },
      margin: {
        pre24: "90px",
      },
      padding: {
        pre6: "22px",
      },
      colors: {
        darker: "#1B1C37",
        p1: "#B224EF",
        v1: "#7579FF",
      },
      backgroundColor: {
        hr: "#1B1C37",
      },
      borderColor: {
        hr: "#1B1C37",
      },
      borderRadius: {
        pre2xl: "14px",
      },
    },
  },
  plugins: [],
};
