import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { escapeSvelte, mdsvex } from "mdsvex";
import { createHighlighter } from "shiki";

const theme = "one-dark-pro";
const highlighter = await createHighlighter({
  themes: [theme],
  langs: ["bash", "js", "javascript", "json", "python", "svelte", "ts", "yaml"],
  colorReplacements: {
    "#282c34": "#A59FE9",
  },
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    mdsvex({
      // The default mdsvex extension is .svx; this overrides that.
      extensions: [".md"],
      smartypants: {},
      highlight: {
        highlighter: async (code, lang = "text") => {
          const html = escapeSvelte(
            highlighter.codeToHtml(code, { lang, theme }),
          );
          return `{@html \`${html}\` }`;
        },
      },

      preprocess: mdsvex(),
    }),
    vitePreprocess(),
  ],
  kit: {
    adapter: adapter(),
  },
};

export default config;
