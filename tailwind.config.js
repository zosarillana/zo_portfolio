/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "dracula",
      "dim",
      "lemonade",
      "winter",
      "black",
      "business",
      "lofi",
    ], // Enable the built-in light and dark themes
  },
};
