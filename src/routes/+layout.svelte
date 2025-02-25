<script>
  import "../app.css";
  import Navbar from "./Navbar.svelte";
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<header class="p-5"></header>

<div id="container" class="content-center">
  <div id="vertical-content" class="flex flex-row space-x-36">
    <Navbar />

    <slot></slot>
  </div>
</div>

<footer class="p-5"></footer>
