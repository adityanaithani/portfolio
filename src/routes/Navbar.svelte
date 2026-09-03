<script>
  import { page } from "$app/stores";

  $: routeId = $page.route.id;
</script>

<nav
  class="my-2 flex flex-row flex-wrap justify-start gap-x-3 gap-y-1 font-departure text-xl text-hwhite"
>
  <a
    class="duration-200 ease-out hover:text-lavender"
    href="/"
    class:home={routeId === "/"}>home</a
  >
  <a
    class="duration-200 ease-out hover:text-lavender"
    href="/projects"
    class:projects={routeId === "/projects"}>projects</a
  >
  <a
    class=" duration-200 ease-out hover:text-sunflower"
    href="/blog"
    class:blog={routeId?.startsWith("/blog")}>blog</a
  >
  <a
    class="duration-200 ease-out hover:text-lava"
    href="/photos"
    class:photos={routeId === "/photos"}>photos</a
  >
</nav>

<style>
  .home {
    color: #00be78;
  }
  .projects {
    color: #a59fe9;
  }
  .blog {
    color: #ffba37;
  }
  .photos {
    color: #ff5b21;
  }
</style>
