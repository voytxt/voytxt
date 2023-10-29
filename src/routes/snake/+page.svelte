<script lang="ts">
  import { onDestroy } from 'svelte';

  const GRID_SIZE = 30;

  const grid: Square[][] = Array(GRID_SIZE)
    .fill(null)
    .map(() => Array(GRID_SIZE).fill('empty'));

  let snake: [number, number][] = [[Math.floor(GRID_SIZE / 2), Math.floor(GRID_SIZE / 2)]];
  let snakeDirection = [1, 0];

  let food: [number, number] = newFood();

  const interval = setInterval(() => {
    snake = [[snake[0][0] + snakeDirection[0], snake[0][1] + snakeDirection[1]], ...snake];

    if (snake[0][0] === food[0] && snake[0][1] === food[1]) {
      food = newFood();
    } else {
      snake = snake.slice(0, -1);
    }

    const snakeHeadSquare = gridWithSnakeAndFood[snake[0][0]]?.[snake[0][1]];
    if (snakeHeadSquare !== 'empty' && snakeHeadSquare !== 'food') {
      clearInterval(interval);
      alert('You died!');
      location.reload();
    }
  }, 100);

  $: gridWithSnakeAndFood = grid.map((row, i) => {
    return row.map((square, j) => {
      if (snake.some(([x, y]) => x === i && y === j)) return 'snake';
      if (food[0] === i && food[1] === j) return 'food';
      return square;
    });
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  function newFood(): [number, number] {
    const randomNum = () => Math.floor(Math.random() * GRID_SIZE);
    return [randomNum(), randomNum()];
  }

  function handleKeydown(event: KeyboardEvent) {
    const directions: Record<string, [number, number]> = {
      ArrowDown: [1, 0],
      ArrowUp: [-1, 0],
      ArrowRight: [0, 1],
      ArrowLeft: [0, -1],
    };

    const newDirection = directions[event.key];

    if (newDirection !== undefined) {
      snakeDirection = newDirection;
    }
  }

  type Square = 'empty';
</script>

<svelte:window on:keydown={handleKeydown} />

<main>
  <div id="snake" style="grid-template: repeat({GRID_SIZE}, 1.5rem) / repeat({GRID_SIZE}, 1.5rem)">
    {#each gridWithSnakeAndFood.flat() as type, i (i)}
      <div class={type} />
    {/each}
  </div>
</main>

<style>
  main {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  #snake {
    display: grid;
    gap: 1px;
  }

  .empty {
    background-color: #475569;
  }
  .snake {
    background-color: #ef4444;
  }
  .food {
    background-color: #4ade80;
  }
</style>
