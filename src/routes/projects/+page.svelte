<svelte:head>
  <title>adi's projects</title>
</svelte:head>

<div class="">
  <h2 class="underline decoration-lavender/50">projects</h2>

  <div>
    <ul class="my-10">
      <li>
        <span id="title" class=""
          ><a href="https://github.com/adityanaithani/coderacer">coderacer</a
          ></span
        >
        -
        <span id="subtitle">typescript, nodeJS, reactJS</span>
        <p id="desc">programming language typeracer game</p>
      </li>
      <li>
        <span id="title"
          ><a href="https://github.com/adityanaithani/themartian-ui">rover-im</a
          ></span
        >
        -
        <span id="subtitle">javascript</span>
        <p id="desc">ui recreation from the martian</p>
      </li>
      <li>
        <span id="title"
          ><a href="https://github.com/adityanaithani/genetools">genetools</a
          ></span
        >
        -
        <span id="subtitle">svelte, express, docker, mongodb</span>
        <p id="desc">tool to process genetics data</p>
      </li>
      <li>
        <span id="title"
          ><a href="https://github.com/adityanaithani/jumbo-bot">jumbo</a></span
        >
        -
        <span id="subtitle">python, discord.py</span>
        <p id="desc">flight tracking discord bot</p>
      </li>
      <li>
        <span id="title"
          ><a
            href="https://github.com/umass-cs-326-s23/326-project-repo-team-33"
            >driveU</a
          ></span
        >
        -
        <span id="subtitle">express, mongodb</span>
        <p id="desc">ridesharing app for college students</p>
      </li>
      <li>
        <span id="title"><a href="/projects">ai bias</a></span>
        -
        <span id="subtitle">jupyter notebook, python</span>
        <p id="desc">
          bias evaluation in medical image classification ml models
        </p>
      </li>
      <li>
        <span id="title"><a href="/projects">bacteriophage discovery</a></span>
        -
        <span id="subtitle">python, pymol</span>
        <p id="desc">
          isolated, extracted, sequenced, annotated, modelled bacteriophage
          protein structures
        </p>
      </li>
      <li>
        <span id="title"
          ><a href="/projects">bioinformatics research paper</a></span
        >
        -
        <span id="subtitle">python</span>
        <p id="desc">
          cowrote a paper on bacteriophage bioinformatics - currently awaiting
          peer review.
        </p>
      </li>
      <li>
        <span id="title"><a href="/projects">twitch game tools</a></span>
        -
        <span id="subtitle">nodeJS</span>
        <p id="desc">dev kit for games that can interact with twitch chat</p>
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
    @apply text-xl font-semibold text-hwhite underline decoration-lavender/60 underline-offset-4;
  }
  #subtitle {
    @apply text-sm text-cliff;
  }
  #desc {
    @apply my-0 text-lg;
  }
</style>
