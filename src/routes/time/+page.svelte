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

<h1>{h}:{m}:{s}</h1>

<style>
  h1 {
    text-align: center;
  }
</style>
