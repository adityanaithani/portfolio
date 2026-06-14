<script>
  import "../app.css";
  import Navbar from "./Navbar.svelte";
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="/prism-atom-dark.css" rel="stylesheet" />
</svelte:head>

<header class="p-5"></header>

<div id="container" class="flex min-h-screen w-full flex-col">
  <div
    id="vertical-content"
    class="my-auto flex w-full flex-col items-center justify-center space-y-12 py-8 md:flex-row md:items-start md:space-x-24 md:space-y-0"
  >
    <Navbar />

    <div class="w-full min-w-0 max-w-full">
      <slot></slot>
    </div>
  </div>
</div>

<footer class="my-10 flex justify-center py-5 text-cliff">
  <script id="umaring_js" src="https://umaring.mkr.cx/ring.js?id=adi"></script>
  <div>
    <a href="http://umaring.mkr.cx/adi/prev">←</a>
    <a href="http://umaring.mkr.cx">umass webring</a>
    <a href="http://umaring.mkr.cx/adi/next">→</a>
  </div>
</footer>
