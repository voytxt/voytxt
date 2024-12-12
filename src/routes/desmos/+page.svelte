<script lang="ts">
  import { onMount } from 'svelte';
  import { SIZE } from '.';
  import { draw } from './draw';
  import { parse } from './parse';

  let canvas = $state<HTMLCanvasElement>();
  let input = $state<string>('');
  let c = $state<CanvasRenderingContext2D>();

  onMount(() => {
    c = canvas!.getContext('2d')!;
    handleInput();
  });

  function handleInput() {
    if (c === undefined) return;

    const points = parse(input);
    draw(c, points);
  }
</script>

<h1>Chess Battle Desmos</h1>
<div>
  <canvas bind:this={canvas} width={SIZE} height={SIZE}></canvas>
  <span>y=<input bind:value={input} oninput={() => handleInput()} type="text" /></span>
</div>

<style>
  h1 {
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    canvas {
      border: 1px solid black;
    }

    span,
    input {
      font-size: 3rem;
      font-family: 'JetBrains Mono';
    }
  }
</style>
