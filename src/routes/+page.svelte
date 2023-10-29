<header>
  <h1>voytxt</h1>
</header>

<main>
  <time datetime="2021-08">2021-08</time> <a href="/repos">old portfolio</a> <br />
  <time datetime="2021-07">2021-07</time> <a href="/clock">analog clock</a> <br />
  <time datetime="2021-03">2021-03</time> covid chart (doesn't work anymore) <br />
  <time datetime="2020-05">2020-05</time> <a href="/time">time online</a> <br />
</main>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Sometype+Mono:wght@700&display=block"
    rel="stylesheet"
  />
</svelte:head>

<style>
  :root {
    --teal: #20ebc6;
    --purple: purple;
    --orange: #eba674;

    --imageRoundness: 80px;
    --hoverTransitionDuration: 200ms;

    --textSize: 6rem;
    --textStrokeWidth: 4px;
    --textOffsetBottom: -0.33em;
    --textOffsetRight: -0.32em;
  }

  /* using properties, so we can use a hover transition on the gradient */
  /* not supported in Firefox */
  @property --gradientColorA {
    syntax: '<color>';
    initial-value: purple;
    inherits: false;
  }
  @property --gradientColorB {
    syntax: '<color>';
    initial-value: #20ebc6;
    inherits: false;
  }

  :global(body) {
    background-color: var(--teal);
    color: var(--colorPrimary) !important;
  }

  header {
    background: url('/cattus512.png');
    margin: 2rem auto;
    width: 420px;
    height: 420px;
    position: relative;
    border-radius: 0 var(--imageRoundness) 0;
    user-select: none;
    transition: all var(--hoverTransitionDuration) ease-in-out;
    outline: 9px solid transparent;
  }
  header:hover {
    filter: saturate(1.5);
    outline-color: var(--orange);
  }
  header h1 {
    font-family: 'SomeType Mono', monospace;
    text-align: center;
    position: absolute;
    bottom: var(--textOffsetBottom);
    right: var(--textOffsetRight);
    font-size: var(--textSize);
    margin: 0;
    background-image: conic-gradient(
      at calc(100% + var(--textOffsetRight)) calc(100% + var(--textOffsetBottom)),
      var(--gradientColorA) 0.75turn,
      var(--gradientColorB) 0.75turn
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-stroke-width: var(--textStrokeWidth);
    transition-property: all, --gradientColorA, --gradientColorB;
    transition-duration: var(--hoverTransitionDuration);
    transition-timing-function: ease-in-out;
  }
  header:hover h1 {
    -webkit-text-stroke-color: var(--orange);
    --gradientColorA: var(--orange);
    --gradientColorB: transparent;
  }

  main {
    margin: 0 auto;
    width: max-content;
  }
  main a {
    color: var(--purple);
    font-weight: bold;
    text-decoration: none;
  }
  main a::after {
    content: '↗';
  }
</style>
