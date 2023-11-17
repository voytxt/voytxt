<script lang="ts">
  import { onMount } from 'svelte';
  import { longWords, mediumWords } from './words';

  let password = '';
  let hidePassword = false;
  let timeout: number;

  let numberOfWords = 4;
  let lengthOfWords: 'medium' | 'long' = 'medium';

  function generatePassword() {
    const words = { medium: mediumWords, long: longWords }[lengthOfWords];

    hidePassword = true;

    const randomWords: string[] = [];

    for (let i = 0; i < numberOfWords; i++) {
      randomWords.push(words[Math.floor(Math.random() * words.length)]);
    }

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      hidePassword = false;
      password = randomWords.join(' ');
    }, 300);
  }

  function copyPassword() {
    navigator.clipboard.writeText(password);
  }

  onMount(generatePassword);
</script>

<svelte:head>
  <title>Aim Trainer | voytxt</title>
  <meta name="description" content="Aim your train and stuff" />
</svelte:head>

<div class="outer">
  <h1>Password Generator, but with actual words</h1>

  <div class="button">
    <button on:click={generatePassword}>Generate</button>
  </div>

  <label>
    {numberOfWords}
    {numberOfWords === 1 ? 'word' : 'words'}
    <input type="range" bind:value={numberOfWords} on:input={generatePassword} min="1" max="10" />
  </label>

  <label>
    Length of words
    <select bind:value={lengthOfWords} on:input={() => setTimeout(generatePassword)}>
      <option value="medium">Medium (5-8 letters)</option>
      <option value="long">Long (9+ letters)</option>
    </select>
  </label>

  <div class="password">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span
      class:hidden={hidePassword}
      on:click={copyPassword}
      on:focus={copyPassword}
      tabindex="0"
      title="Copy"
    >
      {password}
    </span>
  </div>

  <footer>Why? <a href="https://xkcd.com/936/">xkcd 936</a></footer>
</div>

<style>
  :root {
    --purple-gradient: linear-gradient(to right, #5b21b6, #9333ea);
    --green: #10b981;
    --blue: #60a5fa;
  }

  .outer {
    margin: 0;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
  }

  .button {
    margin: 6rem auto 0;
    max-width: fit-content;
    position: relative;
    background: var(--purple-gradient);
    padding: 0.5rem;
    border-radius: 2rem;
  }
  .button button {
    font-size: 1.5rem;
    padding: 1.5rem 2rem;
    border-radius: 1.5rem;
    background-color: white;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    color: inherit;
    user-select: none;
  }
  .button button:hover {
    background-image: var(--purple-gradient);
    color: white;
  }

  label {
    display: block;
  }
  label input {
    margin-top: 2rem;
  }

  .password {
    margin-top: 8rem;
    position: relative;
  }
  .password span {
    display: inline-block;
    font-size: 2rem;
    font-weight: bold;
    border: 0.5rem solid var(--green);
    border-radius: 2rem;
    padding: 1.5rem 2rem;
    transition: background-color 200ms;
    user-select: all;
    line-height: 3rem;
    cursor: text;
    min-width: 30rem;
    height: 3rem;
  }
  .password span.hidden {
    color: transparent;
  }
  .password span:hover,
  .password span:focus,
  .password span.hidden {
    background-color: var(--green);
    transition: background-color 50ms;
    color: white;
  }

  footer {
    margin-top: 2rem;
  }
</style>
