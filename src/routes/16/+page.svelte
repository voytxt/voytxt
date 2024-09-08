<script lang="ts">
  import ass from './ass.png';

  const questions = $state([
    'Your opinion is always correct',
    'You regularly interrupt other people',
    'You want to kill other people when they disagree with your opinion',
    'You like Roblox',
  ]);

  const answers = $state([false, false, false, false]);
</script>

<svelte:head>
  <title>16 assholes | voytxt</title>
  <meta name="description" content="The new and improved 16 personalitites test" />
</svelte:head>

<header>
  <h1>Free Personality Test</h1>
</header>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path
    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
    fill="#33a474"
    class="shape-fill"
  />
</svg>

<main>
  {#each questions as question, i}
    <div>
      <h2>{question}</h2>
      <button onclick={() => (answers[i] = true)} class:green={answers[i]}></button>
      <span>Yes</span>
    </div>
  {/each}
</main>

{#if answers.every((a) => a)}
  <div class="result">
    <img src={ass} alt="asshole" />
    <span>You are an asshole!</span>
  </div>
{/if}

<style>
  header {
    background-color: #33a474;
    height: 50vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  header h1 {
    font-size: 7rem;
    text-align: center;
    margin: 0 2rem;
  }
  @media screen and (width < 1200px) {
    header h1 {
      font-size: 5rem;
    }
  }
  @media screen and (width < 500px) {
    header {
      height: 30vh;
    }

    header h1 {
      font-size: 3rem;
    }
  }

  svg {
    width: 100%;
    height: 64px;
  }

  main {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }

  main div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main div h2 {
    font-weight: 600;
    margin: 0 1rem;
  }

  main div button {
    width: 4rem;
    height: 4rem;
    background-color: white;
    border: 2px solid #33a474;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  main div button:hover {
    background-color: #33a474;
  }
  main div button.green {
    background-color: #24ce87;
    border-color: #24ce87;
  }

  main div span {
    color: #33a474;
    font-size: 1.25rem;
  }

  .result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .result img {
    max-width: 80vw;
  }
  .result span {
    font-size: 6rem;
    text-align: center;
  }
  @media screen and (width < 1200px) {
    .result span {
      font-size: 4rem;
    }
  }
  @media screen and (width < 500px) {
    .result span {
      font-size: 2rem;
    }
  }
</style>
