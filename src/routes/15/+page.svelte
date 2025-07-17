<script lang="ts">
  import { onMount } from 'svelte';

  const squares: Square[] = $state([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]);

  const emptySquareIndex = $derived(squares.findIndex((s) => s === null));
  const isSolved = $derived(
    squares
      .slice(0, -1) // last square should be null
      .every((s, i) => s === i + 1),
  );

  onMount(() => shuffle());

  // https://web.archive.org/web/20200614210106/https://www.cs.bham.ac.uk/~mdr/teaching/modules04/java2/TilesSolvability.html
  function shuffle() {
    const isSolvable = () => {
      let inversions = 0;

      const emptySquareRowIndex = Math.floor(squares.findIndex((s) => s === null) / 4);

      for (let i = 0; i < squares.length; i++) {
        const squareNumber1 = squares[i];

        for (let j = i + 1; j < squares.length; j++) {
          const squareNumber2 = squares[j];

          if (squareNumber1 !== null && squareNumber2 !== null && squareNumber1 > squareNumber2) {
            inversions++;
          }
        }
      }

      return emptySquareRowIndex % 2 !== inversions % 2;
    };

    do {
      for (let i = 15; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [squares[i], squares[randomIndex]] = [squares[randomIndex], squares[i]];
      }
    } while (!isSolvable());
  }

  function handleClick(square: Square) {
    const squareIndex = squares.findIndex((s) => s === square);

    const sameRow = Math.floor(squareIndex / 4) === Math.floor(emptySquareIndex / 4);
    const sameColumn = squareIndex % 4 === emptySquareIndex % 4;

    const up = squareIndex - 4 === emptySquareIndex;
    const down = squareIndex + 4 === emptySquareIndex;
    const right = squareIndex + 1 === emptySquareIndex;
    const left = squareIndex - 1 === emptySquareIndex;

    // is move valid
    if ((sameRow || sameColumn) && (up || down || right || left)) {
      squares[emptySquareIndex] = square;
      squares[squareIndex] = null;
    }
  }

  type Square = number | null;
</script>

<svelte:head>
  <title>15 puzzle | voytxt</title>
  <meta name="description" content="Great puzzle game, very deep and awesomee!" />
</svelte:head>

<div class="wrapper">
  <main>
    {#each squares as square}
      {#if square !== null}
        <button class={['square', { green: isSolved }]} onclick={() => handleClick(square)}>
          {square}
        </button>
      {:else}
        <button class="square empty" aria-label="empty"></button>
      {/if}
    {/each}
  </main>

  <button onclick={shuffle}>Shuffle</button>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }

  main {
    display: grid;
    grid-template: repeat(4, 8rem) / repeat(4, 8rem);
    gap: 0.5rem;
    border: 0.25rem solid black;
    padding: 0.5rem;
    user-select: none;
  }
  @media screen and (width < 700px) {
    main {
      grid-template: repeat(4, 4rem) / repeat(4, 4rem);
    }
  }

  main .square {
    background-color: lightblue;
    cursor: pointer;
    font-size: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  main .square.empty {
    background-color: transparent;
    cursor: auto;
  }
  main .square.green {
    background-color: lime;
  }

  button {
    padding: 0.75rem 1.25rem;
    font-size: 1.25rem;
    cursor: pointer;
  }
</style>
