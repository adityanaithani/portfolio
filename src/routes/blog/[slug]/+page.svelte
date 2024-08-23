<script>
  export let data;
</script>

<svelte:head>
  <title>adi's blog - {data.title}</title>
  <meta property="og:title" content={data.title} />
</svelte:head>

<div>
  <article class="my-5">
    <h1>{data.title}</h1>
    <p class="my-1">posted {data.date}</p>
    {#if data.updated}
      <p class="my-1">updated {data.updated}</p>
    {/if}
    <svelte:component this={data.content} />
  </article>
  <!-- categories section -->
  {#if data.categories.length}
    <aside>
      <ul class="justify-left flex flex-wrap gap-x-2">
        {#each data.categories as category}
          <li
            class="border-1 rounded-sm bg-copygrey/40 px-2 text-lg dark:bg-bgwhite/25"
          >
            <a href="/blog/category/{category}">
              {category}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
  {/if}
</div>
