/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        wine: "#800020",
        wineLight: "#A52A2A",
        ivory: "#FFFFF0"
      },
    },
  },
  plugins: [],
};
