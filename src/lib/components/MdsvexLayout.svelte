<script>
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<script module>
  import Img from "./Img.svelte";

  export { Img as img };
</script>

{@render children?.()}
