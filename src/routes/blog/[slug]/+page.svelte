<script>
  export let data;
</script>

<svelte:head>
  <title>adi's blog - {data.title}</title>
  <meta property="og:title" content={data.title} />
</svelte:head>

<div>
  <article class="prose my-5 max-w-3xl font-serif prose-a:underline">
    <h1 class="font-jetbrains text-hwhite">{data.title}</h1>
    <span class="my-1 font-jetbrains text-cliff">
      posted {data.date}{#if data.updated}, updated {data.updated}{/if}
    </span>
    <svelte:component this={data.content} />
  </article>

  <!-- categories section -->
  {#if data.categories.length}
    <aside>
      <div class="justify-left flex flex-wrap gap-x-2">
        {#each data.categories as category}
          <span class="border-1 rounded-sm bg-chalk/10 px-2 text-lg">
            <a
              class="no-underline hover:text-sunflower"
              href="/blog/category/{category}"
            >
              {category}
            </a>
          </span>
        {/each}
      </div>
    </aside>
  {/if}
</div>

<style>
  .prose :global(pre) {
    @apply my-6 max-w-full overflow-x-auto;
  }
  .prose :global(h1) {
    @apply mt-0 py-0 font-serif text-5xl font-extrabold text-hwhite;
  }
  .prose :global(h2) {
    @apply mt-0 py-0 font-jetbrains text-3xl font-bold tracking-tight text-hwhite;
  }
  .prose :global(h3) {
    @apply mt-0 py-0 font-jetbrains text-2xl font-bold tracking-tight text-hwhite;
  }
  .prose :global(h4) {
    @apply mt-0 py-0 font-jetbrains text-xl font-semibold tracking-tight text-hwhite;
  }
  .prose :global(h5) {
    @apply mt-0 py-0 font-jetbrains text-lg font-semibold tracking-tight text-hwhite;
  }
  .prose :global(h6) {
    @apply mt-0 py-0 font-jetbrains text-base font-semibold tracking-tight text-hwhite;
  }
  .prose :global(p) {
    @apply text-lg text-chalk;
  }
  .prose :global(img) {
    @apply mx-auto my-0 h-auto w-full max-w-2xl py-1;
  }
  /* code block */
  .prose :global(pre code) {
    @apply block overflow-x-auto bg-obsidian/50 p-4 font-jetbrains text-lg;
  }
  /* code snippet */
  .prose :global(code) {
    @apply bg-rock px-1 font-jetbrains text-base;
  }
  .prose :global(code::before),
  .prose :global(code::after) {
    content: "" !important;
  }
  .prose :global(a) {
    @apply text-lg underline underline-offset-2 hover:text-sunflower;
  }
  .prose :global(ul) {
    @apply list-inside list-disc text-lg leading-tight decoration-cliff/80;
  }
  .prose :global(ul a) {
    @apply font-jetbrains text-base leading-tight;
  }
  .prose :global(ol) {
    @apply list-inside list-decimal text-lg leading-tight decoration-cliff/80;
  }
  .prose :global(blockquote) {
    @apply border-l-4 border-sunflower pl-4 italic;
  }
  .prose :global(blockquote p) {
    @apply text-xl font-normal not-italic text-hwhite;
  }
  .prose :global(blockquote p::before),
  .prose :global(blockquote p::after) {
    content: "" !important;
  }

  .prose :global(hr) {
    @apply my-5 rounded-md border-2 border-dashed border-rock;
  }
</style>
