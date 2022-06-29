module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#D32C32",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
