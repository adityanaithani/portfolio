<script>
  const images = import.meta.glob("$lib/assets/gallery/*.webp", {
    eager: true,
    query: {
      enhanced: true,
    },
  });
</script>

<svelte:head>
  <title>adi's photos</title>
</svelte:head>

<div>
  <h2 class="underline decoration-lava/60">gallery</h2>

  <p class="text-sm">
    I've been a huge photography nerd since I was a kid, and while I'm firmly an
    amateur here are a few of my favourites, enjoy!
  </p>
  <p class="text-sm">Also, I fucking love water.</p>

  <div
    id="photoGrid"
    class="grid min-w-full auto-cols-max grid-flow-row grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"
  >
    {#each Object.entries(images) as [_path, module]}
      <enhanced:img
        class="rounded-sm"
        decoding="async"
        loading="lazy"
        src={module.default}
        sizes="min(100vw, 2048px)"
        alt=""
      />
    {/each}
  </div>
</div>
