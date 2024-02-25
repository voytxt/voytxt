<script lang="ts">
  import '$lib/styles.css';
</script>

<div>
  <main>
    <slot />
  </main>

  <footer>
    <small>
      &copy; {new Date().getFullYear()} voytxt <br /> <a href="/">website</a> |
      <a href="https://github.com/voytxt">github</a>
    </small>
  </footer>
</div>

<style>
  :global(body) {
    font-family:
      system-ui,
      -apple-system,
      sans-serif;
    margin: 0;
  }

  :global(body:has(.teal)) {
    background-color: var(--teal);
  }

  div {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }

  div main {
    flex: 1;
  }

  div footer {
    text-align: center;
    justify-self: self-end;
    margin: 1rem auto;
    border-top: 1px solid black;
  }

  div footer a {
    color: blue;
    text-decoration: none;
  }
</style>
