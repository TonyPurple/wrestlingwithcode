/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    fontFamily: {
      header: ["Playfair Display", "serif"],
      body: ["Barlow Condensed", "sans-serif"],
      display: ["Barlow Condensed", "sans-serif"],
      polished: ["brandon-grotesque", "sans-serif"],
      subpolished: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-0.025em",
        wide: ".025em",
        wider: ".05em",
        widest: ".15em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        smxmd: "0.9375rem",
        "1xl": "1.0rem",
        "3xl": "2.0rem",
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
