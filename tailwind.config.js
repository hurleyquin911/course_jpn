/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    container2: {
      center: true,
      padding: "20px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ["Raleway", "sans-serif"],
      judul: ["Lato", "sans-serif"],
      second: ["Playfair Display", "serif"],
    },
    extend: {
      colors: {
        primary: "#a18cd1",
        second: {
          DEFAULT: "#ff0844",
          hover: "#ffb199",
        },
        pilihan: "#214fb0",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
