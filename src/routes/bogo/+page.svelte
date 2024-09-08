<script lang="ts">
  let array: number[] = $state([]);
  let numberOfElements = $state(5);
  let sorted = $state(false);

  let tries = $state(0);
  let minTries = $state(Number.POSITIVE_INFINITY);
  let maxTries = $state(0);

  let running = $state(false);
  let refreshDelay = $state(0);

  function start() {
    running = true;
    sorted = false;
    tries = 0;
    array = new Array(numberOfElements).fill(null).map((_, i) => i + 1);

    bogo();
  }

  function stop() {
    running = false;
  }

  function factorial(num: number): number {
    return num < 2 ? 1 : num * factorial(num - 1);
  }

  function bogo() {
    tries++;

    // shuffle
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[randomIndex], array[i]] = [array[i], array[randomIndex]];
    }

    sorted = array.every((n, i) => n === i + 1);

    if (sorted) {
      running = false;

      if (tries > maxTries) maxTries = tries;
      if (tries < minTries) minTries = tries;
    }

    if (running) {
      setTimeout(bogo, refreshDelay);
    }
  }
</script>

<svelte:head>
  <title>Bogo Sort | voytxt</title>
  <meta
    name="description"
    content="Watch mesmerizing numbers! It's like a lottery, but for poor."
  />
</svelte:head>

<div class="outer">
  <div>
    <div>Expected amount of tries on average: {factorial(numberOfElements)}</div>
    <div>Lowest amount of tries: {minTries}</div>
    <div>Highest amount of tries: {maxTries}</div>
    <div>Current amount of tries: {tries}</div>
  </div>

  <div>
    <div>Refresh delay: <input type="number" bind:value={refreshDelay} /></div>
    <div>Number of elements: <input type="number" bind:value={numberOfElements} /></div>
  </div>

  <button onclick={() => (running ? stop() : start())}>{running ? 'Stop' : 'Start'}</button>

  <div class="array" style="color: {sorted ? 'limegreen' : 'black'}">{array.join(' ')}</div>
</div>

<style>
  .outer {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    text-align: right;
    font-size: 1.5rem;
  }

  input {
    font-size: inherit;
    padding: 0.25rem;
    margin-top: 0.5rem;
    width: 3em;
  }

  button {
    padding: 1rem 2rem;
    font-size: 1.5rem;
  }

  .array {
    font-size: 10rem;
  }

  @media screen and (width < 700px) {
    .outer {
      font-size: 1.25rem;
    }

    .array {
      font-size: 6rem;
    }
  }

  @media screen and (width < 500px) {
    .outer {
      font-size: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }

    .array {
      font-size: 4rem;
    }
  }
</style>
