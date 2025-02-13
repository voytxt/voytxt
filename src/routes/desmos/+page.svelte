<script lang="ts">
  import { onMount } from 'svelte';

  const SIZE = 800;
  const PRECISION = 0.1;
  const COLORS = ['red', 'blue', 'green', 'purple', 'black'];

  let canvas = $state<HTMLCanvasElement>();
  let input = $state<string>('');
  let ctx = $state<CanvasRenderingContext2D>();

  onMount(() => {
    ctx = canvas!.getContext('2d')!;
    draw([]);
  });

  function handleInput() {
    if (ctx === undefined) return;
    draw(parse(input));
  }

  // warning: very cursed
  function parse(equation: string): [number, number][] {
    const points: [number, number][] = [];

    const globalMath = `const { ${Object.getOwnPropertyNames(Math).join(', ')} } = Math; const [pi, e, rnd] = [PI, E, random];`;

    try {
      for (let x = -(SIZE / 2); x < SIZE / 2; x += PRECISION) {
        const y = eval(`${globalMath} ${equation}`) as number;
        points.push([x, y]);
      }

      return points;
    } catch {
      return [];
    }
  }

  function draw(points: [number, number][]) {
    if (ctx === undefined) throw 'undefined canvas context';

    ctx.clearRect(0, 0, SIZE, SIZE);

    // x and y axis
    ctx.fillStyle = 'black';
    ctx.fillRect(SIZE / 2, 0, 1, SIZE);
    ctx.fillRect(0, SIZE / 2, SIZE, 1);

    // the function
    ctx.fillStyle = COLORS[Math.floor(Math.random() * COLORS.length)];
    for (const [x, y] of points) {
      ctx.fillRect(SIZE / 2 + x - 1, SIZE / 2 - y - 1, 2, 2);
    }
  }
</script>

<h1>Chess Battle Desmos ({SIZE}x{SIZE} grid)</h1>
<main>
  <canvas bind:this={canvas} width={SIZE} height={SIZE}></canvas>
  <span>y=<input bind:value={input} oninput={() => handleInput()} type="text" /></span>
</main>
<div>
  cool equations:
  <pre>rnd()*{SIZE}-{SIZE / 2}</pre>
  <pre>sin(x)*x</pre>
  <pre>tan(x)*x</pre>
  <pre>{SIZE / 4}/tan(x)</pre>
  <pre>tan(x*pi)*x</pre>
  <pre>sin({SIZE}/x)*tan(x*pi)*x</pre>
  <pre>100*(sin(x)*sqrt(5-x*x/2e4)+sqrt(abs(x/100))-.5)</pre>
  <small>do you have more? message me on discord (@voytxt) and i may add them lol</small>
</div>

<svelte:head>
  <title>Bootleg Desmos | voytxt</title>
  <meta name="description" content="It's like Desmos except with less features and more bugs" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<style>
  h1 {
    text-align: center;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    canvas {
      border: 1px solid black;
      max-width: 90vw;
    }

    span,
    input {
      font-size: 3rem;
      font-family: 'JetBrains Mono';

      @media (width < 800px) {
        font-size: 1.5rem;
      }
    }
  }

  div {
    text-align: center;
    font-size: 2rem;
    margin: 1rem;

    @media (width < 800px) {
      font-size: 1rem;
    }

    * {
      margin: 0;
    }

    small {
      font-size: 0.75em;
    }
  }
</style>
