import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    mdsvex({
      // The default mdsvex extension is .svx; this overrides that.
      extensions: [".md"],

      // Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
      // rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    }),
    vitePreprocess(),
  ],
  kit: {
    adapter: adapter(),
  },
};

export default config;
