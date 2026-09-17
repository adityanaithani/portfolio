# Upgrade audit: Svelte 5 + Node

**Verdict: yes, straightforward.** Svelte 5's legacy compatibility mode runs all
existing Svelte 4 syntax, so this can be a deps-only bump with code migration
done incrementally afterward.

## Node

Already done locally — v24.2.0 installed, no `.nvmrc` to update. One change:

- `svelte.config.js`: adapter `runtime: "nodejs20.x"` → `"nodejs22.x"`
  (Vercel's current default; 20.x approaches EOL).

## Dependencies

| Package | Now | Target | Why |
|---|---|---|---|
| svelte | ^4.2.7 | ^5 | the upgrade |
| @sveltejs/vite-plugin-svelte | ^3 | ^6 | v4+ required for Svelte 5 |
| vite | ^5 | ^7 | peer of plugin-svelte v6 (needs Node ≥20.19, fine) |
| @sveltejs/kit | ^2 | latest 2.x | already Svelte 5-compatible, just bump |
| @sveltejs/enhanced-img | ^0.3.10 | ^0.4.4+ | Svelte 5 support |
| mdsvex | ^0.11.2 | ^0.12 | Svelte 5 support |
| @sveltejs/adapter-vercel | ^5 | latest | fine, bump opportunistically |
| svelte-sitemap | ^2.7.1 | keep, verify | crawls build output, framework-agnostic |

## Code changes

**Required for smoothness (1 file):**

- `src/routes/Navbar.svelte` — imports `page` from `$app/stores`, deprecated in
  SvelteKit. Swap to `$app/state`:
  `import { page } from "$app/state"` and `$page.route.id` → `page.route.id`.

**Works as-is in legacy mode, migrate when convenient** (`npx sv migrate svelte-5`
automates most of it):

- `export let data` / `export let src` → `$props()` — `+page.svelte`, `Img.svelte`
- `on:click` / `on:mouseenter` → `onclick` / `onmouseenter` — `+page.svelte`
- `<slot>` → `{@render children?.()}` — `+layout.svelte`, `MdsvexLayout.svelte`
- `$:` reactive statements → `$derived` / `$effect` — `Navbar.svelte`, `blog/[slug]/+page.svelte`
- `<svelte:component this={data.content}>` → `<data.content />` (dynamic by
  default in runes mode) — `blog/[slug]/+page.svelte`

## Recommended order

1. Bump deps + Vercel runtime, fix `Navbar.svelte`, `npm run build` → deploy.
2. Later: `npx sv migrate svelte-5` for runes, one commit, verify build again.

## Step 1 — done

Installed: svelte 5.57, @sveltejs/kit 2.70, vite 8, vite-plugin-svelte 7,
enhanced-img 0.11, mdsvex 0.12.8, adapter-vercel 6.3.4. Build passes.

Two extra fixes were needed:
- `svelte.config.js`: mdsvex `layout` path must be absolute (`path.resolve(...)`)
  — new mdsvex resolves it relative to each .md file, and posts live in `content/`.
- `Navbar.svelte` migrated to `$app/state` + `$derived` (done as runes, was touched anyway).

Pre-existing issue (not from upgrade): `postbuild` svelte-sitemap fails because
no pages are prerendered — there is no static HTML to scan. **Fixed:** added
`export const prerender = true` to `+layout.js` and moved the lastfm fetch in
`+page.svelte` client-side (deleted `+page.js`) so the home page can prerender
without baking in stale music data.
