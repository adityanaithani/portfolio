/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [require("@tailwindcss/typography")],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
      },
    },
    colors: {
      obsidian: "#222222",
      rock: "#333333",
      chalk: "#D9D9D9",
      cliff: "#A5A5A5",
      hwhite: "#EEEEEE",
      lavender: "#A59FE9",
      sea: "#0084A4",
      sunflower: "#FFBA37",
      lava: "#FF5B21",
      leaf: "#00BE78",
    },
  },
};
