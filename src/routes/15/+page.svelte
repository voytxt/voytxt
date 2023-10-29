<script lang="ts">
  import { onMount } from 'svelte';

  let squares: Square[] = [];

  $: emptySquareIndex = squares.findIndex((s) => s === null);
  $: isSolved = squares
    .slice(0, -1) // last square should be null
    .every((s, i) => s === i + 1);

  onMount(() => {
    squares = shuffle();
  });

  function shuffle(): Square[] {
    const squares: Square[] = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const shuffle = () => {
      for (let i = 15; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [squares[i], squares[randomIndex]] = [squares[randomIndex], squares[i]];
      }
    };

    // https://web.archive.org/web/20200614210106/https://www.cs.bham.ac.uk/~mdr/teaching/modules04/java2/TilesSolvability.html
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

    while (true) {
      shuffle();

      if (isSolvable()) {
        return squares;
      }
    }
  }

  function handleClick(square: Square) {
    console.log(square, 'clicked');

    const squareIndex = getSquareIndex(square);

    if (isValidMove(squareIndex)) {
      squares[squareIndex] = null;
      squares[emptySquareIndex] = square;
    }
  }

  function isValidMove(squareIndex: number) {
    const sameRow = Math.floor(squareIndex / 4) === Math.floor(emptySquareIndex / 4);
    const sameColumn = squareIndex % 4 === emptySquareIndex % 4;

    const up = squareIndex - 4 === emptySquareIndex;
    const down = squareIndex + 4 === emptySquareIndex;
    const right = squareIndex + 1 === emptySquareIndex;
    const left = squareIndex - 1 === emptySquareIndex;

    return (sameRow || sameColumn) && (up || down || right || left);
  }

  function getSquareIndex(square: Square) {
    return squares.findIndex((s) => s === square);
  }

  type Square = number | null;
</script>

<div class="wrapper">
  <main id="15puzzle">
    {#each squares as square}
      {#if square !== null}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="square" class:green={isSolved} on:click={() => handleClick(square)}>
          {square}
        </div>
      {:else}
        <div class="square empty" />
      {/if}
    {/each}
  </main>

  <button id="shuffle" on:click={() => (squares = shuffle())}>Shuffle</button>
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
