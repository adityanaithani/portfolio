<script>
  // for music widget
  export let data;
  $: recentAlbums = data.recentAlbums || [];

  let albums = data.recentAlbums || [];
  let loading = false;

  const periods = [
    { label: "week", value: "7day" },
    { label: "month", value: "1month" },
    { label: "year", value: "12month" },
  ];
  let periodIndex = 0;

  async function cyclePeriod() {
    periodIndex = (periodIndex + 1) % periods.length;
    const currentPeriod = periods[periodIndex].value;
    loading = true;
    try {
      const res = await fetch(`/api/lastfm?period=${currentPeriod}`);
      if (res.ok) {
        albums = await res.json();
      }
    } catch (error) {
      console.error("Error fetching albums:", error);
    } finally {
      loading = false;
    }
  }

  //   for profile image hover
  let hovered = false;

  //   for hobbies carousel
  const personalInterests = [
    "taking photos of water",
    `"playing" guitar`,
    "upgrading vintage iPods",
    "free-diving wikipedia",
    "overthinking Star Wars lore",
    "hacking old game consoles",
    "lurking r/sffpc",
    "improving my knife skills",
  ];
  let personalIndex = Math.floor(Math.random() * personalInterests.length);

  function cyclePersonal() {
    personalIndex = (personalIndex + 1) % personalInterests.length;
  }

  // for colour bar near footer
  const colours = [
    "bg-lava",
    "bg-sunflower",
    "bg-leaf",
    "bg-sea",
    "bg-lavender",
  ];
</script>

<svelte:head>
  <title>about adi</title>
</svelte:head>
<div id="aboutContent" class="underline-offset-4">
  <img
    id="profile"
    class="aspect-square max-w-36 rounded-md shadow-sm shadow-rock"
    src={hovered ? "/images/hellothere.gif" : "/images/adi.png"}
    alt={hovered ? "can you tell i like star wars?" : "me graduating!"}
    title={hovered ? "can you tell i like star wars?" : "me graduating!"}
  />
  <div id="bodyText">
    <p>
      <button
        type="button"
        class="bg-transparent text-inherit font-inherit inline cursor-pointer select-none border-none p-0 text-left align-baseline underline decoration-leaf/60 decoration-dashed duration-200"
        on:mouseenter={() => (hovered = true)}
        on:mouseleave={() => (hovered = false)}>Hello there</button
      >, I'm Aditya! I was born in Missouri, grew up in Vancouver, studied in
      Amherst, and am based in Toronto. Currently checking off some bucket list
      items while searching for interesting problems to work on.
    </p>
    <p>
      Previously, I built OAuth integrations for cybersecurity startups, NLP
      features for vaccine clinics, and multimodal context pools for AI agents.
      In school I learned raytracing, annotated bacteriophage genomes, evaluated
      medical diagnostic ML models, and was part of the astronomy and product
      management clubs. I also taught C and been a <span
        class="group/dan relative inline-block cursor-pointer underline decoration-lava/60 decoration-dashed"
      >
        resident assistant
        <span
          class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 hidden w-48 -translate-x-1/2 rounded-md border border-rock bg-obsidian p-1 shadow-lg group-hover/dan:block"
        >
          <img
            src="/images/dan.gif"
            alt="dan"
            class="h-auto w-full rounded-sm"
          />
        </span>
      </span> (often at the same time!) to college freshmen.
    </p>
    <p>
      Outside of tech, you can catch me
      <button
        id="personalInterests"
        type="button"
        class="bg-transparent text-inherit font-inherit inline cursor-pointer select-none border-none p-0 text-left align-baseline underline decoration-sunflower/60 duration-200 hover:text-sunflower"
        on:click={cyclePersonal}
      >
        {personalInterests[personalIndex]}
      </button>.
    </p>
  </div>

  <div id="musicwidget" class="my-5">
    <p class="mb-1 pb-1">
      Favourite albums this
      <button
        id="periodCycle"
        type="button"
        class="bg-transparent inline cursor-pointer select-none border-none p-0
  text-left align-baseline underline decoration-leaf/60 duration-200 hover:text-leaf"
        on:click={cyclePeriod}
      >
        {periods[periodIndex].label}
      </button>:
    </p>

    <div id="albumdisplay" class="flex flex-col gap-1">
      {#if loading}
        <p class="text-xs text-cliff">loading...</p>
      {/if}
      {#each albums as album}
        <a
          href={album.url}
          target="_blank"
          rel="noreferrer"
          class="group flex items-center gap-2 rounded-md py-[0px]"
        >
          {#if album.cover}
            <img
              src={album.cover}
              alt="{album.title} cover"
              class="h-8 w-8 flex-shrink-0 rounded-sm object-cover shadow-sm"
            />
          {:else}
            <div
              class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-rock text-xs text-cliff"
            >
              placeholder
            </div>
          {/if}
          <div class="grid min-w-0 flex-1 grid-cols-3">
            <p
              class="col-span-2 m-0 my-2 truncate p-0 py-1 text-left text-xs text-chalk group-hover:text-leaf"
            >
              {album.title}
            </p>
            <p class="m-0 my-2 truncate p-0 py-1 text-right text-xs text-cliff">
              -- {album.artist}{album.album ? ` - ${album.album}` : ""}
            </p>
          </div>
        </a>
      {/each}
    </div>
  </div>

  <p id="resumewidget" class="border-2 border-dashed p-2">
    lastly, here's my <a
      class="text-hwhite underline decoration-lavender/60 hover:text-lavender"
      href="/about/resume">resume</a
    >!
  </p>
  <div id="colourBar" class="my-4 flex flex-row space-x-2">
    {#each colours as colour}
      <div class="h-2 w-2 rounded-sm {colour}"></div>
    {/each}
  </div>
  <div id="linkswidget" class="my-5 space-x-0">
    <a
      href="https://github.com/adityanaithani"
      target="_blank"
      class="fa-brands fa-github fa-md"
      aria-label="GitHub"
    ></a>
    <a
      href="mailto:aditya.naith@protonmail.com"
      target="_blank"
      class="fa-solid fa-envelope fa-md"
      aria-label="Email"
    ></a>
    <a
      href="https://linkedin.com/in/anaithani/"
      target="_blank"
      class="fa-brands fa-linkedin fa-md"
      aria-label="LinkedIn"
    ></a>

    <a
      href="https://www.last.fm/user/onionleg"
      target="_blank"
      class="fa-brands fa-square-lastfm fa-md"
      aria-label="Last.fm"
    ></a>
    <a
      href="https://letterboxd.com/adityanaithani"
      target="_blank"
      class="fa-brands fa-square-letterboxd fa-md"
      aria-label="Letterboxd"
    ></a>
  </div>
</div>
