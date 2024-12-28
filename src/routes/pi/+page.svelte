<script lang="ts">
  const PI =
    '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';

  let input = $state('');
  let index = $state(0);
  let correctDigits = $derived([...input].reduce((acc, curr, i) => +(curr === PI[i]) + acc, 0));

  function handleKeyDown(event: KeyboardEvent) {
    if (!'0123456789'.includes(event.key) || index >= PI.length) return;

    input += event.key;
    index++;
  }
</script>

<svelte:window onkeydown={handleKeyDown} />

<h1>Type 100 digits of &pi;</h1>

<main>
  <div>{correctDigits} / {index}</div>
  <div class="digits">
    3.{#each input as digit, i}
      <span class={digit === PI[i] ? 'correct' : 'incorrect'} style="--correct-digit: '{PI[i]}'"
        >{digit}</span
      >
    {/each}
  </div>
</main>

<style>
  h1 {
    text-align: center;
    font-size: 3rem;
    margin-top: 3rem;
    font-weight: normal;
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-top: 30vh;
    gap: 2rem;
  }

  .digits {
    font-size: 2rem;
    max-width: 80vw;
    overflow-wrap: break-word;
    line-height: 3rem;

    .correct {
      color: #98c379;
    }
    .incorrect {
      color: #e06b74;
      position: relative;

      &::after {
        content: var(--correct-digit);
        color: blue;
        position: absolute;
        font-size: 0.5em;
        top: -1.75em;
        right: 0;
      }
    }
  }
</style>
