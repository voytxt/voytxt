<script lang="ts">
  let min = $state(1);
  let max = $state(100);
  let guessCount = $state(0);
  let guess = $state('');
  let hint = $state('');

  const secretNumber = $derived(Math.floor(Math.random() * (max - min + 1)) + min);
  const guessCountGoal = $derived(Math.floor(Math.log2(max - min + 1)) + 1);

  function handleClick() {
    if (guess === null) return;

    guessCount++;

    hint = (() => {
      if (+guess < secretNumber) return 'greater';
      if (+guess > secretNumber) return 'lower';
      if (+guess === secretNumber) return 'you got it';
      return 'bruh moment';
    })();
  }
</script>

<div class="outer">
  <h1>More or Less</h1>

  <hr />

  <div class="settings">
    From <input type="number" bind:value={min} /> to <input type="number" bind:value={max} />
  </div>

  <hr />

  Goal: {guessCountGoal} guesses <br />
  Current: {guessCount} guesses <br /> <br />

  <form class="guess">
    <input bind:value={guess} />
    <button onclick={handleClick}>Guess</button>
  </form>

  <br />

  {hint}
</div>

<style>
  .outer {
    height: 100vh;
    background-color: #282c34;
    color: white;
    text-align: center;
    font-size: 2rem;
  }

  input {
    background-color: #30333a;
    color: white;
    border: 2px solid aqua;
    border-radius: 4px;
    font-size: inherit;
  }

  hr {
    height: 1px;
    background-color: gray;
    border: none;
    width: 80vw;
    margin: 2rem auto;
  }

  h1 {
    font-size: 4rem;
    font-weight: 100;
    margin: 0;
    padding-top: 2rem;
  }

  .settings {
    font-size: 1.5rem;

    > input {
      width: 15rem;
      padding: 8px;
      margin: 0 0.5rem;
    }
  }

  .guess {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    > input {
      height: 100%;
      width: 15rem;
      max-width: 90vw;
    }

    > button {
      height: 100%;
    }
  }
</style>
