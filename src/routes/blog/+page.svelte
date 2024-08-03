<script>
  export let data;
</script>

<div>
  <h1>blog</h1>
  <ul>
    <!-- TODO: implement edge case if no posts -->
    {#each data.posts as post}
      <li>
        <h2>
          <a href={post.path}>{post.meta.title}</a>
        </h2>
        Published {post.meta.date}
      </li>
    {/each}
  </ul>
</div>
