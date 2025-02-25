<script>
  export let data;
</script>

<svelte:head>
  <title>adi's blog - {data.title}</title>
  <meta property="og:title" content={data.title} />
</svelte:head>

<div class="prose">
  <article class="my-5 font-sans">
    <h1 class="font-jetbrains text-hwhite">{data.title}</h1>
    <span class="my-1 font-jetbrains text-cliff">
      posted {data.date}{#if data.updated}, updated {data.updated}{/if}
    </span>
    <!-- {#if data.updated}
      <p class="my-1 font-jetbrains text-cliff">updated {data.updated}</p>
    {/if} -->
    <svelte:component this={data.content} />
  </article>

  <!-- categories section -->
  {#if data.categories.length}
    <aside>
      <ul class="justify-left flex flex-wrap gap-x-2">
        {#each data.categories as category}
          <li class="border-1 rounded-sm bg-chalk/10 px-2 text-lg">
            <a class="hover:text-sunflower" href="/blog/category/{category}">
              {category}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
  {/if}
</div>

<style>
  :global(.prose h2) {
    @apply font-jetbrains text-hwhite;
  }
  :global(.prose p) {
    @apply text-chalk;
  }
  :global(.prose img) {
    @apply max-w-md;
  }
</style>
