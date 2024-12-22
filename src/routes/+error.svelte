<script lang="ts">
  import { page } from '$app/state';
</script>

<h1>{page.status} {page.error?.message}</h1>
<img src="https://media1.tenor.com/m/TeW54nXF2QAAAAAC/cat.gif" alt="funny cat" />

<style>
  h1 {
    text-align: center;
    margin-top: 2rem;
  }

  img {
    display: block;
    margin: 1rem auto;
  }
</style>
