<script lang="ts">
  import { LANGUAGES, WORDS } from './db';

  let input = '';
  let translation = 'Translation';

  function handleClick() {
    const numberOfWords = input.split(/\s+/g).filter((s) => s !== '').length;

    translation = numberOfWords === 0 ? 'Translation' : '';

    for (let i = 0; i < numberOfWords; i++) {
      translation += getRandomWord() + ' ';
    }
  }

  function getRandomWord() {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
  }
</script>

<svelte:head>
  <title>Translator | voytxt</title>
  <meta name="description" content="The best translator in the world" />
</svelte:head>

<h1>Translator</h1>

<main>
  <div>
    From
    <select>
      {#each LANGUAGES as language}
        <option>{language}</option>
      {/each}
    </select>
    to English
  </div>

  <div>
    <textarea bind:value={input} />
  </div>

  <button on:click={handleClick}>TRANSLATE</button>

  <div class="translation">{translation}</div>
</main>

<style>
  h1 {
    text-align: center;
    font-size: 4rem;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    font-size: 1.5rem;
  }
  main * {
    font-size: inherit;
  }

  select {
    padding: 0.5rem;
    border-radius: 8px;
  }

  textarea {
    font-family: inherit;
    padding: 0.5rem;
    border-radius: 8px;
    max-width: 20rem;
  }

  button {
    padding: 1rem;
    background: none;
    color: inherit;
    border: 2px solid aqua;
    border-radius: 8px;
    transition: background-color 100ms;
    cursor: pointer;
  }
  button:hover {
    background-color: aqua;
    color: #282c34;
  }

  .translation {
    border: 2px solid aqua;
    min-width: 15rem;
    max-width: 80vw;
    min-height: 5rem;
    border-radius: 8px;
    color: #282c34;
    padding: 1rem;
  }

  @media screen and (width < 600px) {
    main {
      font-size: 1rem;
    }

    textarea {
      max-width: 90vw;
    }
  }
</style>
