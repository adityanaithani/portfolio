<svelte:head>
  <title>adi's projects</title>
</svelte:head>

<div>
  <h2 class="underline decoration-lavender/50">projects</h2>

  <div>
    <ul class="my-10">
      <li>
        <span class="project-title"
          ><a href="https://github.com/adityanaithani/jobscan">JobScan</a></span
        >
        -
        <span class="project-subtitle">python, docker, github actions</span>
        <p class="project-desc">
          Notifies you of job postings right when they go live, before Linkedin
          and other job boards
        </p>
      </li>
      <li></li>
      <li>
        <span class="project-title"
          ><a href="https://github.com/adityanaithani/umaring"
            >UMass Amherst Webring</a
          ></span
        >
        -
        <span class="project-subtitle">rust, nix, docker, javascript</span>
        <p class="project-desc">
          Webring for UMass Amherst students, alumni, faculty (check it out
          below!)
        </p>
      </li>
      <li>
        <span class="project-title"
          ><a href="https://github.com/adityanaithani/genetools">GeneTools</a
          ></span
        >
        -
        <span class="project-subtitle">svelte, express, docker, mongodb</span>
        <p class="project-desc">Tool to process genetics data</p>
      </li>
      <li>
        <span class="project-title"
          ><a href="https://github.com/adityanaithani/SongAI">SongAI</a></span
        >
        -
        <span class="project-subtitle">python, javascript, html</span>
        <p class="project-desc">
          A fullstack application that turns singing into a music video
        </p>
      </li>
      <li>
        <span class="project-title"
          ><a href="https://github.com/adityanaithani/jumbo-bot">Jumbo</a></span
        >
        -
        <span class="project-subtitle">python, discord.py</span>
        <p class="project-desc">Flight tracking discord bot</p>
      </li>
      <li>
        <span class="project-title"
          ><a
            href="https://github.com/umass-cs-326-s23/326-project-repo-team-33"
            >DriveU</a
          ></span
        >
        -
        <span class="project-subtitle">express, mongodb</span>
        <p class="project-desc">Ridesharing app for college students</p>
      </li>
      <li>
        <span class="project-title"><a href="/projects">AI Bias</a></span>
        -
        <span class="project-subtitle">jupyter notebook, python</span>
        <p class="project-desc">
          Bias evaluation in medical image classification ML models
        </p>
      </li>
      <li>
        <span class="project-title"><a href="/projects">Bacteriophage Discovery</a></span>
        -
        <span class="project-subtitle">python, pymol</span>
        <p class="project-desc">
          Isolated, extracted, sequenced, annotated, modelled bacteriophage
          protein structures
        </p>
      </li>
      <li>
        <span class="project-title"
          ><a href="https://github.com/adityanaithani/TwitchGameTools"
            >Twitch Game Tools</a
          ></span
        >
        -
        <span class="project-subtitle">nodeJS</span>
        <p class="project-desc">Dev kit for games that can interact with Twitch chat</p>
      </li>
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
