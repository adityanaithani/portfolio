<script>
  export let data;
</script>

<svelte:head>
  <title>adi's blog</title>
</svelte:head>

<div class="">
  <h2>blog</h2>
  <!-- posts list -->
  <ul>
    {#if data.posts.length > 0}
      {#each data.posts as post}
        <li class="my-4 flex gap-8">
          <span class="my-0">
            <a
              class="text-xl font-semibold hover:text-sunflower"
              href={post.path}>{post.meta.title}</a
            > <span class="my-0 text-lg text-cliff">{post.meta.date}</span>
          </span>
        </li>
      {/each}
    {:else}
      <li>no posts here :/</li>
    {/if}
  </ul>
</div>
