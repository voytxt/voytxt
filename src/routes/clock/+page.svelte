<script lang="ts">
  import { onMount } from 'svelte';

  let h = 0;
  let m = 0;
  let s = 0;

  function update() {
    const date = new Date();
    const timezoneOffset = date.getTimezoneOffset() * 60;
    const time = date.getTime() / 1000 - timezoneOffset;

    h = ((time / 43200) % 24) + 0.5;
    m = ((time / 3600) % 60) + 0.5;
    s = ((time / 60) % 60) + 0.5;

    requestAnimationFrame(update);
  }

  onMount(() => {
    requestAnimationFrame(update);
  });
</script>

<main>
  <div class="h" style="transform: rotate({h}turn)" />
  <div class="m" style="transform: rotate({m}turn)" />
  <div class="s" style="transform: rotate({s}turn)" />
</main>

<footer>
  The clock svg is from <a href="https://commons.wikimedia.org/wiki/File:Analogue_clock_face.svg">
    Wikipedia
  </a>
</footer>

<style>
  main {
    height: min(75vh, 75vw);
    width: min(75vh, 75vw);
    margin: 2rem auto;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/02/Analogue_clock_face.svg');
    background-size: cover;
    display: flex;
    justify-content: center;
    position: relative;
  }

  div {
    position: absolute;
    height: 35%;
    background-color: black;
    top: 50%;
    border-radius: 99px;
    transform-origin: top center;
  }

  .h {
    width: 2.25%;
    height: 30%;
  }
  .m {
    width: 2%;
  }
  .s {
    width: 1.25%;
    background-color: red;
  }

  footer {
    text-align: center;
  }
</style>
