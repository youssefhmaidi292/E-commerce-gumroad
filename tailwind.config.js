/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#fdc62e",
        success: "#2dcc6f",
        info: "#1376f4",
        brandWhite: "#eeeeee",
      },
    },
  },
  plugins: [],
}
