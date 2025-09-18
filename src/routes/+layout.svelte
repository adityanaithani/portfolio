<script>
  import "../app.css";
  import Navbar from "./Navbar.svelte";
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="/prism-atom-dark.css" rel="stylesheet" />
</svelte:head>

<header class="p-5"></header>

<div id="container" class="">
  <div id="vertical-content" class="my-72 flex flex-row space-x-24">
    <Navbar />

    <slot></slot>
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
