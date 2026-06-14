<script>
  export let src;
  export let alt = "";
  export let title = "";
</script>

<figure class="mx-auto my-6 flex flex-col items-center justify-center">
  <img {src} {alt} {title} class="mx-auto h-auto w-full max-w-2xl p-4 pb-2" />
  {#if title}
    <figcaption class="mt-1 text-center font-jetbrains text-sm text-cliff italic max-w-xl px-4">
      {title}
    </figcaption>
  {/if}
</figure>
