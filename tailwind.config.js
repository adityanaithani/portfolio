/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [require("@tailwindcss/typography")],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
        serif: ["Lora", "Georgia", "ui-serif", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#D9D9D9", // chalk
            "--tw-prose-headings": "#EEEEEE", // hwhite
            "--tw-prose-lead": "#A5A5A5", // cliff
            "--tw-prose-links": "#EEEEEE", // lavender
            "--tw-prose-bold": "#EEEEEE", // hwhite
            "--tw-prose-counters": "#A5A5A5", // cliff
            "--tw-prose-bullets": "#A5A5A5", // cliff
            "--tw-prose-hr": "#333333", // rock
            "--tw-prose-quotes": "#EEEEEE", // hwhite
            "--tw-prose-quote-borders": "#333333", // rock
            "--tw-prose-captions": "#A5A5A5", // cliff
            "--tw-prose-code": "#EEEEEE", // hwhite
            "--tw-prose-pre-code": "#D9D9D9", // chalk
            "--tw-prose-pre-bg": "#222222", // obsidian
            "--tw-prose-th-borders": "#333333", // rock
            "--tw-prose-td-borders": "#333333", // rock
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
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
