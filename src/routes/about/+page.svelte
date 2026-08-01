<script>
  let hovered = false;

  const careerInterests = [
    "healthcare",
    "genetics",
    "transit",
    "urbanism",
    "space",
    "music",
    "food",
    "quirky hardware",
    "knowledge bases",
  ];
  let careerIndex = 0;

  const personalInterests = [
    "taking photos of water",
    `"playing" guitar`,
    "upgrading vintage iPods",
    "free-diving wikipedia",
    "overthinking Star Wars lore",
    "reading the newest Halo novel",
    "tinkering with my homelab",
    "building mechanical keyboards",
    "reading weird sci-fi",
    "hacking old game consoles",
    "optimizing PC airflow",
    "stalking eBay for vintage fashion",
    "sampling all the cortado i can",
    "wandering art galleries",
    "perfecting my brunoise",
    "optimizing my IDE setup",
  ];
  let personalIndex = Math.floor(Math.random() * personalInterests.length);

  function cycleCareer() {
    careerIndex = (careerIndex + 1) % careerInterests.length;
  }

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
      >, I'm Aditya! Thanks for stopping by :)
    </p>
    <p>
      I'm a software engineer who enjoys building in the backend/developer
      tooling/AI space. I enjoy software that bridges the gap between tech and
      <button
        id="careerInterests"
        type="button"
        class="bg-transparent text-inherit font-inherit inline cursor-pointer select-none border-none p-0 text-left align-baseline underline decoration-sea/60 duration-200 hover:text-sea"
        on:click={cycleCareer}
      >
        {careerInterests[careerIndex]}
      </button>.
    </p>
    <p>
      When I'm not writing code, you can catch me
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

  <details open id="currently" class="group my-5">
    <summary
      class="flex cursor-pointer select-none list-none items-center font-bold text-chalk outline-none duration-200"
    >
      <span
        class="mr-2 transform text-sm text-cliff transition-transform duration-200 hover:text-leaf group-open:rotate-90"
        >▶</span
      >
      currently:
    </summary>
    <ul class="ml-4 mt-3 list-inside list-disc">
      <li>automating things that annoy me</li>
      <li>looking for a backend SWE role</li>
      <li>writing about things that interest me</li>
    </ul>
  </details>

  <details id="previously" class="group my-5">
    <summary
      class="flex cursor-pointer select-none list-none items-center font-bold text-chalk outline-none duration-200"
    >
      <span
        class="mr-2 transform text-sm text-cliff transition-transform duration-200 hover:text-leaf group-open:rotate-90"
        >▶</span
      >
      previously:
    </summary>
    <ul class="ml-4 mt-3 list-inside list-disc">
      <li>built CI/CD and AI features for Leafpoint</li>
      <li>developed full-stack integations for HYPR</li>
      <li>recieved a B.S. in CS and Biology from UMass Amherst</li>
      <li>studied neuroscience at Amherst College</li>
      <li>taught freshmen C and memory management</li>
      <li>researched phage genetics and medical ML fairness</li>
      <li>
        <span
          class="group/dan relative inline-block cursor-pointer underline decoration-lava/60 decoration-dashed"
        >
          had the best time
          <span
            class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 hidden w-48 -translate-x-1/2 rounded-md border border-rock bg-obsidian p-1 shadow-lg group-hover/dan:block"
          >
            <img
              src="/images/dan.gif"
              alt="dan"
              class="h-auto w-full rounded-sm"
            />
          </span>
        </span>
        as a resident assistant
      </li>
    </ul>
  </details>
  <p id="resume" class="border-2 border-dashed p-2">
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
  <div id="socials" class="my-5 space-x-2">
    <a
      href="mailto:aditya.naith@protonmail.com"
      target="_blank"
      class="fa-solid fa-envelope fa-xl"
      aria-label="Email"
    ></a>
    <a
      href="https://linkedin.com/in/anaithani/"
      target="_blank"
      class="fa-brands fa-linkedin fa-xl"
      aria-label="LinkedIn"
    ></a>
    <a
      href="https://github.com/adityanaithani"
      target="_blank"
      class="fa-brands fa-github fa-xl"
      aria-label="GitHub"
    ></a>
    <a
      href="https://www.last.fm/user/onionleg"
      target="_blank"
      class="fa-brands fa-square-lastfm fa-xl"
      aria-label="Last.fm"
    ></a>
    <a
      href="https://letterboxd.com/adityanaithani"
      target="_blank"
      class="fa-brands fa-square-letterboxd fa-xl"
      aria-label="Letterboxd"
    ></a>
    <!-- <a
      href="https://en.wikipedia.org/wiki/Special:Contributions/Adityanaithani"
      target="_blank"
      class="fa-brands fa-wikipedia-w fa-xl"
      aria-label="Wikipedia"
    ></a> -->
  </div>
</div>
