<script>
  import "../app.css";
  import { onMount } from "svelte";

  let theme = "neutral"; // neutral, light, dark

  function toggleTheme() {
    if (theme === "neutral") {
      theme = "light";
    } else if (theme === "light") {
      theme = "dark";
    } else {
      theme = "neutral";
    }
    applyTheme();
  }

  function applyTheme() {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
    }
  }

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      theme = savedTheme;
      applyTheme();
    }
  });

  $: hoverClass =
    theme === "neutral"
      ? "hover:text-copygrey"
      : theme === "light"
        ? "hover:text-mantis"
        : "hover:text-pink";
</script>

<svelte:head>
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
      <a class="" href="/photos">photos</a>
      <button
        on:click={toggleTheme}
        class="text-gray-800 dark:text-gray-20 {hoverClass}"
      >
        {theme === "neutral" ? "os" : theme === "light" ? "jedi" : "sith"}
        <!-- listen i told you i liked star wars -->
      </button>
    </nav>

    <!-- content goes here -->
    <slot></slot>
  </div>

  <div class="pl-[100px]">
    <p id="socials" class="space-x-2">
      <a
        href="https://linkedin.com/in/aditya-naithani/"
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
        href="mailto:aditya.naith@protonmail.com"
        target="_blank"
        class="fa-solid fa-envelope fa-xl"
        aria-label="Email"
      ></a>
    </p>
  </div>
</div>
