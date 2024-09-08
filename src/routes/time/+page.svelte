<script lang="ts">
  import { onMount } from 'svelte';

  let h = $state(0);
  let m = $state(0);
  let s = $state(0);

  let H = $derived(h.toString().padStart(2, '0'));
  let M = $derived(m.toString().padStart(2, '0'));
  let S = $derived(s.toString().padStart(2, '0'));

  onMount(() => {
    requestAnimationFrame(getAndSetTime);
  });

  function getAndSetTime() {
    const date = new Date();

    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

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

<h1>{H}:{M}:{S}</h1>

<style>
  h1 {
    text-align: center;
  }
</style>
