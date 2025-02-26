<script>
  export let data;
</script>

<svelte:head>
  <title>adi's blog - {data.title}</title>
  <meta property="og:title" content={data.title} />
</svelte:head>

<div>
  <article class="prose prose-a:underline my-5 font-sans">
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
  :global(.prose h2) {
    @apply mt-10 py-0 font-jetbrains text-hwhite;
  }
  :global(.prose p) {
    @apply text-chalk;
  }
  :global(.prose img) {
    @apply max-w-2xl;
  }
  :global(.prose code) {
    @apply bg-chalk/10 px-1 font-jetbrains text-lg;
  }
  :global(.prose a) {
    @apply underline underline-offset-2;
  }
  :global(.prose li) {
    @apply list-inside list-disc;
  }
</style>
