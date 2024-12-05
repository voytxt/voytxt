<script lang="ts">
  const { children } = $props();
</script>

{@render children()}

<style>
  :global(body) {
    font-family:
      system-ui,
      -apple-system,
      sans-serif;
    margin: 0;
  }

  :global(body:has(.homepage)) {
    background-color: #6366f1;
  }
</style>
