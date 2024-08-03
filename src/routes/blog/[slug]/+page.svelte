<script>
  export let data;
</script>

<svelte:head>
  <title>adi's blog - {data.title}</title>
</svelte:head>

<div>
  <article>
    <h1>{data.title}</h1>
    <p>Published: {data.date}</p>
    <svelte:component this={data.content} />
  </article>

  {#if data.categories.length}
    <aside>
      <!-- <p>posted in:</p> -->
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
