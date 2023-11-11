<script lang="ts">
  import db from './db.json';

  let imageURL = '';

  function refreshImage() {
    imageURL = db[Math.floor(Math.random() * db.length)];
    console.log(imageURL);
  }
</script>

<svelte:head>
  <title>Random Image | voytxt</title>
  <meta name="description" content="Like social media, but without the social part" />
</svelte:head>

<h1>Random Image</h1>
<h2>NSFW warning!</h2>
<button on:click={refreshImage}>Get Image</button>

{#if imageURL !== ''}
  <!-- svelte-ignore a11y-missing-attribute -->
  <img src={imageURL} />
{/if}

<style>
  h1 {
    text-align: center;
    font-size: 3rem;
  }

  h2 {
    text-align: center;
    font-size: 2.25rem;
    color: red;
  }

  button {
    display: block;
    user-select: none;
    cursor: pointer;
    margin: 3rem auto;
    font-size: 1.5rem;
    padding: 1.25rem 3rem;
    border-radius: 99rem;
    border: 0;
    background-color: #1d4ed8;
    color: white;
    text-transform: uppercase;
    transition: background-color 80ms;
  }

  button:hover {
    background-color: #2563eb;
  }

  img {
    display: block;
    margin: auto;
    max-width: 90vw;
  }
</style>
