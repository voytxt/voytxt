<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData, SubmitFunction } from './$types';
  import Chart from './Chart.svelte';

  export let form: ActionData;

  let started = false;
  let loading = false;
  let chart: HTMLElement;

  const submit: SubmitFunction = () => {
    started = true;
    loading = true;

    return async ({ update }) => {
      await update();
      loading = false;
    };
  };

  const copy = () => {
    navigator.clipboard.writeText(chart.innerHTML);
  };
</script>

<main>
  <h1>gcstats</h1>

  <form method="POST" use:enhance={submit}>
    <input name="username" placeholder="Enter your Geocaching username" required />
    <input type="submit" value="Submit" />
  </form>

  {#if started}
    {#if loading}
      Loading...
    {:else if form?.success && form.data !== undefined}
      <button on:click={copy}>Copy HTML</button>

      <figure bind:this={chart}>
        <Chart chart={form.data} />
      </figure>
    {:else}
      Error: {form?.error}
    {/if}
  {/if}
</main>

<style>
  main {
    margin: 1rem auto 0;
    width: min(75vw, 50rem);
  }

  main h1 {
    font-size: 2.5rem;
    margin: 1rem 0;
  }

  main form {
    border: 1px solid gray;
    border-radius: 16px;
    overflow: hidden;
  }

  main form input {
    width: 100%;
    border: none;
    font-size: 1.5rem;
    padding: 1rem;
    box-sizing: border-box;
    text-align: center;
  }

  main form input:nth-child(1) {
    border-radius: 16px 16px 0 0;
  }

  main form input:nth-child(2) {
    border-radius: 0 0 16px 16px;
    background-color: #398712;
    color: white;
    transition: all 100ms;
    cursor: pointer;
  }

  main form input:nth-child(2):hover {
    background-color: #33790f;
  }
</style>
