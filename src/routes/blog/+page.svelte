<script>
  export let data;
</script>

<svelte:head>
  <title>adi's blog</title>
</svelte:head>

<div class="my-5">
  <h1>blog</h1>
  <!-- posts list -->
  <ul>
    {#if data.posts.length > 0}
      {#each data.posts as post}
        <li class="my-5">
          <h2 class="my-0">
            <a href={post.path}>{post.meta.title}</a>
          </h2>
          <p class="my-0">{post.meta.date}</p>
        </li>
      {/each}
    {:else}
      <li>no posts here :/</li>
    {/if}
  </ul>
</div>
