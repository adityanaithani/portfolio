<script>
  import "../app.css";
  import Navbar from "./Navbar.svelte";
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="/prism-atom-dark.css" rel="stylesheet" />
</svelte:head>

<header class="m-auto min-h-20"></header>
<div id="navbar" class="my-5 border-b-2 border-b-hwhite/20">
  <Navbar />
</div>
<div
  id="container"
  class="mx-auto flex min-h-screen max-w-2xl flex-col items-center"
>
  <div id="content" class="flex w-full">
    <div class="my-5 w-full min-w-0 max-w-full">
      <slot></slot>
    </div>
  </div>
</div>

<footer
  class="my-10 flex justify-center py-5 font-departure text-sm text-cliff"
>
  <script id="umaring_js" src="https://umaring.github.io/adi.js"></script>
  <div>
    <a href="http://umaring.github.io/adi/prev">←</a>
    <a href="http://umaring.github.io/adi">umaring</a>
    <a href="http://umaring.github.io/adi/next">→</a>
  </div>
</footer>
