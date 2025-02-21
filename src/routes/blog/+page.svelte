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
        <li class="my-5 flex gap-8">
          <p class="my-0 text-cliff">{post.meta.date}</p>
          <h2 class="my-0">
            <a class="hover:text-sunflower" href={post.path}
              >{post.meta.title}</a
            >
          </h2>
        </li>
      {/each}
    {:else}
      <li>no posts here :/</li>
    {/if}
  </ul>
</div>
