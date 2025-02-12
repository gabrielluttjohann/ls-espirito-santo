/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      fontFamily: {
        merriweather: "var(--font-merriweather), sans-serif",
      },
      colors: {
        blue: "#0B2239",
        lightBlue: "#0F3151",
        golden: "#B68C5A",
        lightGolden: "#C19866",
        beige: "#FFF9F2",
      },
    },
  },
  plugins: [],
};
