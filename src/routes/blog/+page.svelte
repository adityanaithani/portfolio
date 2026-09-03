<script>
  export let data;
</script>

<svelte:head>
  <title>adi's blog</title>
</svelte:head>

<div class="">
  <ul>
    {#if data.posts.length > 0}
      {#each data.posts as post}
        <li class="mb-4 flex gap-8">
          <span class="my-0">
            <a
              class="text-lg font-semibold text-hwhite decoration-sunflower/60 underline-offset-4 duration-200 ease-in-out hover:text-hwhite hover:underline hover:duration-200 hover:ease-in-out"
              href={post.path}>{post.meta.title}</a
            >
            <span class="my-0 font-departure text-sm uppercase text-cliff"
              >{post.meta.date}</span
            >
          </span>
        </li>
        <hr class="my-4 border-t-2 border-t-hwhite/5" />
      {/each}
    {:else}
      <li>no posts here :/</li>
    {/if}
  </ul>
</div>
