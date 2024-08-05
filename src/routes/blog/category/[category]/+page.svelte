<script>
  export let data;
</script>

<div>
  <h2>category: {data.category}</h2>
  <ul>
    {#if data.posts.length > 0}
      {#each data.posts as post}
        <li>
          <a class="font-medium" href={post.path}>{post.meta.title}</a>
        </li>
      {/each}
    {:else}
      <li>no posts found :(</li>
    {/if}
  </ul>
</div>
