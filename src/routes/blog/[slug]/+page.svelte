<script>
  export let data;
</script>

<svelte:head>
  <title>adi's blog - {data.title}</title>
  <meta property="og:title" content={data.title} />
</svelte:head>

<div>
  <article class=" my-5 font-sans">
    <h1 class=" text-hwhite">{data.title}</h1>
    <p class="my-1 text-cliff">posted {data.date}</p>
    {#if data.updated}
      <p class="my-1 text-cliff">updated {data.updated}</p>
    {/if}
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
