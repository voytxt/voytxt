<script lang="ts">
  import { onMount } from 'svelte';

  let h = '00';
  let m = '00';
  let s = '00';

  onMount(() => {
    requestAnimationFrame(getAndSetTime);
  });

  function getAndSetTime() {
    const date = new Date();

    h = date.getHours().toString().padStart(2, '0');
    m = date.getMinutes().toString().padStart(2, '0');
    s = date.getSeconds().toString().padStart(2, '0');

    requestAnimationFrame(getAndSetTime);
  }
</script>

<svelte:head>
  <title>Time | voytxt</title>
  <meta
    name="description"
    content="Behold an avant-garde digital haven, where esoteric algorithms and polyglot profundities converge to transmogrify your cognitive landscape. Navigate this linguistic labyrinth for an unparalleled odyssey of intellectual effulgence, as commonplace vernacular yields to a symphony of lexical transcendence, ushering in a revolution of cognitive revelry."
  />
</svelte:head>

<h1>{h}:{m}:{s}</h1>

<style>
  h1 {
    text-align: center;
  }
</style>
