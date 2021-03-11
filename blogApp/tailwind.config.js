module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        18: "4.5rem",
      },
      fontSize: {
        "3.5xl": "2.125rem",
        "4.5xl": ["2.75rem", "2.5rem"],
      },
      colors: {
        crimson: "#e01948",
      },
      borderWidth: {
        6: "6px",
      },
      fontFamily: {
        custom: ["Noto Serif", "serif"],
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
    },
  },
  plugins: [],
};
