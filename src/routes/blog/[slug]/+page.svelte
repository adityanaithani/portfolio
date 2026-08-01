<script>
  import { onMount, tick } from "svelte";

  export let data;

  function groupHeadingsInternal(container, level) {
    if (level > 6) return;
    const tagName = `H${level}`;

    const children = Array.from(container.children);
    let currentDetails = null;
    let currentSummary = null;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.tagName === "SUMMARY") continue;

      if (child.tagName === tagName) {
        currentDetails = document.createElement("details");
        currentDetails.className = "group my-5";
        currentDetails.open = true; // headings start open by default so article is fully readable initially

        currentSummary = document.createElement("summary");
        currentSummary.className =
          "flex cursor-pointer select-none list-none items-center font-bold text-chalk outline-none duration-200 my-2";

        const arrow = document.createElement("span");
        arrow.className =
          "mr-2 transform text-sm text-cliff transition-transform duration-200 hover:text-leaf group-open:rotate-90";
        arrow.textContent = "▶";

        currentSummary.appendChild(arrow);

        container.insertBefore(currentDetails, child);

        child.style.margin = "0";
        child.style.display = "inline-block";

        currentSummary.appendChild(child);
        currentDetails.appendChild(currentSummary);
      } else if (currentDetails) {
        const isHigherOrEqualHeading =
          child.tagName.startsWith("H") &&
          parseInt(child.tagName.substring(1)) <= level;
        if (isHigherOrEqualHeading) {
          currentDetails = null;
          currentSummary = null;
        } else {
          currentDetails.appendChild(child);
        }
      }
    }

    // Clean up details elements that have no content (only summary)
    const detailsList = Array.from(container.children).filter(
      (c) => c.tagName === "DETAILS",
    );
    detailsList.forEach((details) => {
      if (details.children.length <= 1) {
        const summary = details.querySelector("summary");
        if (summary) {
          const heading = summary.querySelector("h1, h2, h3, h4, h5, h6");
          if (heading) {
            heading.removeAttribute("style");
            container.insertBefore(heading, details);
          }
        }
        details.remove();
      } else {
        // Recursively group the next level inside this details container
        groupHeadingsInternal(details, level + 1);
      }
    });
  }

  async function makeHeadingsCollapsible() {
    if (typeof window === "undefined") return;
    await tick();
    const container = document.getElementById("blog-content");
    if (!container) return;

    groupHeadingsInternal(container, 2);
  }

  // Reactive block to run when post data changes
  $: if (typeof window !== "undefined" && data) {
    makeHeadingsCollapsible();
  }
</script>

<svelte:head>
  <title>adi's blog - {data.title}</title>
  <meta property="og:title" content={data.title} />
</svelte:head>

<div>
  <article class="prose my-5 max-w-3xl font-serif prose-a:underline">
    <h1 class="font-jetbrains text-hwhite">{data.title}</h1>
    <span class="my-1 font-jetbrains text-cliff">
      posted {data.date}{#if data.updated}, updated {data.updated}{/if}
    </span>
    {#key data.title}
      <div id="blog-content">
        <svelte:component this={data.content} />
      </div>
    {/key}
  </article>

  <!-- categories section -->
  {#if data.categories.length}
    <aside>
      <div class="justify-left flex flex-wrap gap-x-2">
        {#each data.categories as category}
          <span class="border-1 rounded-sm bg-chalk/10 px-2 text-lg">
            <a
              class="no-underline hover:text-sunflower"
              href="/blog/category/{category}"
            >
              {category}
            </a>
          </span>
        {/each}
      </div>
    </aside>
  {/if}
</div>

<style>
  .prose :global(pre) {
    @apply my-6 max-w-full overflow-x-auto;
  }
  .prose :global(h1) {
    @apply mt-0 py-0 text-4xl font-extrabold text-hwhite;
  }
  .prose :global(h2) {
    @apply mt-0 py-0 font-jetbrains text-3xl font-bold tracking-tight text-hwhite;
  }
  .prose :global(h3) {
    @apply mt-0 py-0 font-jetbrains text-2xl font-bold tracking-tight text-hwhite;
  }
  .prose :global(h4) {
    @apply mt-0 py-0 font-jetbrains text-xl font-semibold tracking-tight text-hwhite;
  }
  .prose :global(h5) {
    @apply mt-0 py-0 font-jetbrains text-lg font-semibold tracking-tight text-hwhite;
  }
  .prose :global(h6) {
    @apply mt-0 py-0 font-jetbrains text-base font-semibold tracking-tight text-hwhite;
  }
  .prose :global(p) {
    @apply text-lg text-chalk;
  }
  .prose :global(img) {
    @apply mx-auto my-0 h-auto w-full max-w-2xl py-1;
  }
  /* code block */
  .prose :global(pre code) {
    @apply block overflow-x-auto bg-obsidian/50 p-4 font-jetbrains text-lg;
  }
  /* code snippet */
  .prose :global(code) {
    @apply bg-rock px-1 font-jetbrains text-base;
  }
  .prose :global(code::before),
  .prose :global(code::after) {
    content: "" !important;
  }
  .prose :global(a) {
    @apply text-lg underline underline-offset-2 hover:text-sunflower;
  }
  .prose :global(ul) {
    @apply list-inside list-disc text-lg leading-tight decoration-cliff/80;
  }
  .prose :global(ul a) {
    @apply font-jetbrains text-base leading-tight;
  }
  .prose :global(ol) {
    @apply list-inside list-decimal text-lg leading-tight decoration-cliff/80;
  }
  .prose :global(blockquote) {
    @apply border-l-4 border-sunflower pl-4 italic;
  }
  .prose :global(blockquote p) {
    @apply text-xl font-normal not-italic text-hwhite;
  }
  .prose :global(blockquote p::before),
  .prose :global(blockquote p::after) {
    content: "" !important;
  }

  .prose :global(hr) {
    @apply my-5 rounded-md border-2 border-dashed border-rock;
  }
  .prose :global(summary::-webkit-details-marker) {
    display: none;
  }
  .prose :global(summary) {
    list-style: none;
  }
</style>
