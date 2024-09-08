<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Roboto+Mono&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div>
  <!-- svelte-ignore slot_element_deprecated -->
  <slot />
</div>

<style>
  div {
    margin: 0;
    font-family: 'Quicksand', system-ui, sans-serif;
    text-align: center;
  }
</style>
