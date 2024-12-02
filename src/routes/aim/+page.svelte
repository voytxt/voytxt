<script lang="ts">
  let score = $state(0);
  let highlightedTiles: number[] = $state([]);

  function highlightRandomTile() {
    let randomTile: number;

    do {
      randomTile = Math.floor(Math.random() * 16);
    } while (highlightedTiles.includes(randomTile));

    highlightedTiles.push(randomTile);
  }

  function handleClick(tile: number) {
    if (highlightedTiles.includes(tile)) {
      score++;
      highlightRandomTile();
      highlightedTiles = highlightedTiles.filter((t) => t !== tile);
    } else {
      score -= 10;
    }
  }

  highlightRandomTile();
  highlightRandomTile();
  highlightRandomTile();
</script>

<svelte:head>
  <title>Aim Trainer | voytxt</title>
  <meta name="description" content="Aim your train and stuff" />
</svelte:head>

<div>{score}</div>
<main>
  {#each { length: 16 } as _, tile}
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button class:highlighted={highlightedTiles.includes(tile)} onclick={() => handleClick(tile)}
    ></button>
  {/each}
</main>

<style>
  div {
    margin: 1rem;
    font-size: 3rem;
    text-align: center;
  }

  main {
    display: grid;
    grid-template: repeat(4, min(15vh, 15vw)) / repeat(4, min(15vh, 15vw));
    background-color: black;
    margin: 0 auto;
    width: max-content;
  }

  button {
    border: 2px solid white;
    cursor: pointer;
    transition: background-color 0.15s ease-in;
  }
  button.highlighted {
    background-color: #a5f3fc;
  }
</style>
