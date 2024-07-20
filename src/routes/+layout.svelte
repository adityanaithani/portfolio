<script>
  import "../app.css";
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/ace081f8c7.js"
    crossorigin="anonymous"
  ></script>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100..900&display=swap");
  </style>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div id="all-content" class="content-top">
  <div id="vertical-content" class="flex flex-row space-x-12">
    <nav class="my-5 max-w-14 text-lg">
      <a class="" href="/">home</a>
      <a class="" href="/about">about</a>
      <a class="" href="/projects">projects</a>
      <a class="" href="/blog">blog</a>
      <a class="" href="/">day</a>
    </nav>

    <!-- content goes here -->
    <slot></slot>
  </div>

  <div class="pl-[100px]">
    <p id="socials" class="space-x-2">
      <a
        href="https://linkedin.com/in/aditya-naithani/"
        target="_blank"
        class="fa-brands fa-linkedin fa-xl hover:text-mantis"
        aria-label="LinkedIn"
      ></a>
      <a
        href="https://github.com/adityanaithani"
        target="_blank"
        class="fa-brands fa-github fa-xl hover:text-mantis"
        aria-label="GitHub"
      ></a>
      <a
        href="mailto:aditya.naith@protonmail.com"
        target="_blank"
        class="fa-solid fa-envelope fa-xl hover:text-mantis"
        aria-label="Email"
      ></a>
    </p>
  </div>
</div>
