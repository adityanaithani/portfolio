<script>
  import { page } from "$app/stores";

  $: routeId = $page.route.id;
</script>

<nav class="my-2 flex flex-row md:flex-col flex-wrap justify-center md:justify-start gap-x-3 gap-y-1 md:gap-x-0 md:space-y-1 text-[18px] md:text-2xl text-hwhite">
  <a class="duration-200 ease-out hover:text-sea" href="/">home</a>
  <a
    class="duration-200 ease-out hover:text-leaf"
    href="/about"
    class:about={routeId?.startsWith("/about")}>about</a
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
  .about {
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
