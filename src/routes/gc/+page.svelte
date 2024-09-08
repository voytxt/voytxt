<script lang="ts">
  import { enhance } from '$app/forms';
  import type { SubmitFunction } from '@sveltejs/kit';

  const { form } = $props();

  let started = $state(false);
  let loading = $state(false);
  let gcCode = $state('');

  const submit: SubmitFunction = () => {
    started = true;
    loading = true;

    return async ({ update }) => {
      await update();
      loading = false;
    };
  };
</script>

<svelte:head>
  <title>Geocache Lookup | voytxt</title>
  <meta name="description" content="Find a geocache by code or something" />
</svelte:head>

<h1><span class="green">Cache</span> Lookup</h1>

<form method="POST" use:enhance={submit}>
  <span>GC</span>
  <!-- svelte-ignore a11y_autofocus -->
  <input bind:value={gcCode} name="gcCode" maxlength="6" autofocus />
</form>

{#if started}
  {#if loading}
    <h2>Loading...</h2>
  {:else if form?.success && form.data !== undefined}
    {@const { name, difficulty, terrain, size } = form.data}

    <div class="cache">
      <h2><a href="https://coord.info/GC{gcCode}">{name}</a></h2>
      D: {difficulty} | T: {terrain} | S: {size}
    </div>
  {:else}
    <h2>Error: {form?.error}</h2>
  {/if}
{/if}

<style>
  h1 {
    font-size: 5rem;
  }
  h1 .green {
    color: #00cc74;
  }

  form * {
    font-size: 4rem;
    width: 6ch;
    padding: 0;
    margin: 0;
    font-family: 'Roboto Mono', monospace;
  }
  form input {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #00cc74;
    color: inherit;
    outline: none;
    text-transform: uppercase;
  }

  .cache {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
  }
  .cache h2 a {
    color: #7582fd;
    text-decoration: none;
  }
  .cache h2 a:hover {
    text-decoration: underline;
  }
</style>
