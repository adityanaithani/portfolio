<script>
  // music widget
  export let data;
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

  //   profile image hover
  let hovered = false;

  //   hobbies carousel
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

  // colour footer bar
  const colours = [
    "bg-lava",
    "bg-sunflower",
    "bg-leaf",
    "bg-sea",
    "bg-lavender",
  ];
</script>

<svelte:head>
  <title>adi</title>
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
    <p class="font-departure text-[22px]">
      <button
        type="button"
        class=" bg-transparent font-inherit inline cursor-pointer select-none border-none p-0 text-left align-baseline underline decoration-leaf/60 decoration-dashed duration-200"
        on:mouseenter={() => (hovered = true)}
        on:mouseleave={() => (hovered = false)}>Hello there</button
      >, I'm Aditya!
    </p>
    <p>
      I was born in Missouri, grew up in BC, studied in Massachusetts, and am
      now based in Ontario. Currently going through my bucket list and looking
      for interesting problems to work on.
    </p>
    <p>
      Previously, I built OIDC passkey integrations for HYPR, NLP features for
      vaccine clinics through Leafpoint, and multimodal context pools for AI
      agents. In college I studied CS/biology/neuroscience, taught C, and was a <span
        class="group/dan relative inline-block cursor-pointer font-departure underline decoration-lava/60 decoration-dashed"
      >
        resident assistant
        <span
          class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 hidden w-48 -translate-x-1/2 rounded-md border border-rock bg-obsidian p-1 shadow-lg group-hover/dan:block"
        >
          <img
            src="/images/dan.gif"
            alt="is it a flex or not to be the cool RA"
            class="h-auto w-full rounded-sm"
          />
        </span>
      </span>.
    </p>
    <p>
      In my downtime, you can find me
      <button
        id="personalInterests"
        type="button"
        class="bg-transparent font-inherit inline cursor-pointer select-none border-none p-0 text-left align-baseline font-departure underline decoration-sunflower/60 duration-200 hover:text-sunflower"
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
        class="bg-transparent inline cursor-pointer select-none border-none p-0 text-left
  align-baseline font-departure underline decoration-leaf/60 duration-200 hover:text-leaf"
        on:click={cyclePeriod}
      >
        {periods[periodIndex].label}
      </button>:
    </p>
    <hr class="my-1 border-t-2 border-t-hwhite/5" />

    <div id="albumdisplay" class="flex flex-col gap-1 font-departure">
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
              <span class="font-neon">—</span>
              {album.artist}{album.album ? ` - ${album.album}` : ""}
            </p>
          </div>
        </a>
      {/each}
    </div>
  </div>

  <div id="linkswidget" class="my-5 space-x-0">
    <a
      href="/resume"
      target="_blank"
      class="fa-solid fa-square-poll-horizontal fa-sm"
      aria-label="Resume"
    ></a>
    <a
      href="https://github.com/adityanaithani"
      target="_blank"
      class="fa-brands fa-square-github fa-sm"
      aria-label="GitHub"
    ></a>
    <a
      href="mailto:aditya.naith@protonmail.com"
      target="_blank"
      class="fa-solid fa-square-envelope fa-sm"
      aria-label="Email"
    ></a>
    <a
      href="https://linkedin.com/in/anaithani/"
      target="_blank"
      class="fa-brands fa-linkedin fa-sm"
      aria-label="LinkedIn"
    ></a>
    <a
      href="https://www.last.fm/user/onionleg"
      target="_blank"
      class="fa-brands fa-square-lastfm fa-sm"
      aria-label="Last.fm"
    ></a>
    <a
      href="https://letterboxd.com/adityanaithani"
      target="_blank"
      class="fa-brands fa-square-letterboxd fa-sm"
      aria-label="Letterboxd"
    ></a>
  </div>
</div>
