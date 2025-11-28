<svelte:head>
  <title>adi's projects</title>
</svelte:head>

<div>
  <h2 class="underline decoration-lavender/50">projects</h2>

  <div>
    <ul class="my-10">
      <li>
        <span id="title"
          ><a href="https://github.com/adityanaithani/jobscan">JobScan</a></span
        >
        -
        <span id="subtitle">python, docker, github actions</span>
        <p id="desc">
          Notifies you of job postings right when they go live, before Linkedin
          and other job boards
        </p>
      </li>
      <li></li>
      <li>
        <span id="title"
          ><a href="https://github.com/adityanaithani/umaring"
            >UMass Amherst Webring</a
          ></span
        >
        -
        <span id="subtitle">rust, nix, docker, javascript</span>
        <p id="desc">
          Webring for UMass Amherst students, alumni, faculty (check it out
          below!)
        </p>
      </li>
      <li>
        <span id="title"
          ><a href="https://github.com/adityanaithani/genetools">GeneTools</a
          ></span
        >
        -
        <span id="subtitle">svelte, express, docker, mongodb</span>
        <p id="desc">Tool to process genetics data</p>
      </li>
      <li>
        <span id="title"
          ><a href="https://github.com/adityanaithani/SongAI">SongAI</a></span
        >
        -
        <span id="subtitle">python, javascript, html</span>
        <p id="desc">
          A fullstack application that turns singing into a music video
        </p>
      </li>
      <li>
        <span id="title"
          ><a href="https://github.com/adityanaithani/jumbo-bot">Jumbo</a></span
        >
        -
        <span id="subtitle">python, discord.py</span>
        <p id="desc">Flight tracking discord bot</p>
      </li>
      <li>
        <span id="title"
          ><a
            href="https://github.com/umass-cs-326-s23/326-project-repo-team-33"
            >DriveU</a
          ></span
        >
        -
        <span id="subtitle">express, mongodb</span>
        <p id="desc">Ridesharing app for college students</p>
      </li>
      <li>
        <span id="title"><a href="/projects">AI Bias</a></span>
        -
        <span id="subtitle">jupyter notebook, python</span>
        <p id="desc">
          Bias evaluation in medical image classification ML models
        </p>
      </li>
      <li>
        <span id="title"><a href="/projects">Bacteriophage Discovery</a></span>
        -
        <span id="subtitle">python, pymol</span>
        <p id="desc">
          Isolated, extracted, sequenced, annotated, modelled bacteriophage
          protein structures
        </p>
      </li>
      <li>
        <span id="title"
          ><a href="https://github.com/adityanaithani/TwitchGameTools"
            >Twitch Game Tools</a
          ></span
        >
        -
        <span id="subtitle">nodeJS</span>
        <p id="desc">Dev kit for games that can interact with Twitch chat</p>
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
  #title {
    @apply text-xl font-semibold text-hwhite decoration-lavender/60 underline-offset-4 duration-200 ease-in-out hover:underline hover:duration-200 hover:ease-in-out;
  }
  #subtitle {
    @apply text-sm text-cliff;
  }
  #desc {
    @apply my-0 text-lg;
  }
</style>
