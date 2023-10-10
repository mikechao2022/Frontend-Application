/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#272e71",
      secondary: "#E5E7EB",
      layoutBg: "#F9FAFB",
      gray: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      white: "white",
      "gray-light": "#d3dce6",
    },
    extend: {},
  },
  plugins: [],
}
