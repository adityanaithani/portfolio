/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    colors: {
      bgwhite: "#eeeeee",
      copygrey: "#444444",
      darkmodegrey: "#1E1E1E",
      fern: "#628B48",
      mantis: "#6AB547",
      pink: "#9A7AA0",
    },
  },
  plugins: [],
  darkMode: "selector",
};
