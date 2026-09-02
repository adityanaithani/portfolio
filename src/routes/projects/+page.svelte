<svelte:head>
  <title>adi's projects</title>
</svelte:head>

<div>
  <h2 class="underline decoration-lavender/50">projects</h2>

  <div>
    <ul class="my-10">
      <li>
        <span class="project-title">JobScan</span>
        -
        <span class="project-subtitle">python, docker, github actions</span>
        <p class="project-desc">
          Job postings right when they go live <a
            class="fa-brands fa-github fa-mdunderline decoration-lavender/50"
            href="https://github.com/adityanaithani/jobscan"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </p>
      </li>
      <li>
        <span class="project-title">sCLIbble</span>
        -
        <span class="project-subtitle">typer, rich, questionary</span>
        <p class="project-desc">
          TUI iPod scrobbler <a
            class="fa-brands fa-github fa-mdunderline decoration-lavender/50"
            href="https://github.com/adityanaithani/sclibble"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </p>
      </li>
      <li>
        <span class="project-title">Headway</span>
        -
        <span class="project-subtitle">next, react, tailwind</span>
        <p class="project-desc">
          Advance calendar-integrated transit route planner <a
            class="fa-brands fa-github fa-md underline decoration-lavender/50"
            href="https://github.com/adityanaithani/headway"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </p>
      </li>
      <!-- <li>
        <span class="project-title"
          ><a href="https://github.com/adityanaithani/umaring"
            >UMass Amherst Webring</a
          ></span
        >
        -
        <span class="project-subtitle">rust, docker, typescript</span>
        <p class="project-desc">
          Webring for UMass Amherst students, alumni, faculty
        </p>
      </li> -->
      <!-- <li>
        <span class="project-title"
          ><a href="https://github.com/adityanaithani/SongAI">SongAI</a></span
        >
        -
        <span class="project-subtitle">python, javascript, html</span>
        <p class="project-desc">
          A fullstack application that turns singing into a music video
        </p>
      </li> -->
      <!-- <li>
        <span class="project-title"
          ><a href="https://github.com/adityanaithani/jumbo-bot">Jumbo</a></span
        >
        -
        <span class="project-subtitle">discord.py</span>
        <p class="project-desc">Flight tracking discord bot</p>
      </li> -->
      <!-- <li>
        <span class="project-title"><a href="/projects">AI Bias</a></span>
        -
        <span class="project-subtitle">jupyter</span>
        <p class="project-desc">
          Bias evaluation in medical image classification ML models
        </p>
      </li> -->
      <!-- <li>
        <span class="project-title"
          ><a href="/projects">Bacteriophage Discovery</a></span
        >
        -
        <span class="project-subtitle">pymol</span>
        <p class="project-desc">
          Isolated, extracted, sequenced, annotated, modelled bacteriophage
          protein structures
        </p>
      </li> -->
      <!-- <li>
        <span class="project-title"
          ><a href="https://github.com/adityanaithani/TwitchGameTools"
            >Twitch Game Tools</a
          ></span
        >
        -
        <span class="project-subtitle">node</span>
        <p class="project-desc">
          Dev kit for games that can interact with Twitch chat
        </p>
      </li> -->
    </ul>
  </div>
</div>

<style>
  a {
    @apply duration-200 ease-out hover:text-lavender;
  }
  li {
    @apply my-3;
  }
  .project-title {
    @apply text-xl font-semibold text-hwhite decoration-lavender/60 underline-offset-4 duration-200 ease-in-out hover:underline hover:duration-200 hover:ease-in-out;
  }
  .project-subtitle {
    @apply text-sm text-cliff;
  }
  .project-desc {
    @apply my-0 text-lg;
  }
</style>
