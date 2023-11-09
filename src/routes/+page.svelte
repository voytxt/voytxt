<script lang="ts">
  import Card from '$lib/Card.svelte';
  import '$lib/styles.css';
</script>

<header>
  <h1>voytxt</h1>
</header>

<main class="teal">
  <Card time="2022-03" name="16 assholes" link="/16" />
  <Card time="2021-10" name="snake" link="/snake" />
  <Card time="2021-08" name="aim trainer" link="/aim" />
  <Card time="2021-08" name="old portfolio" link="/repos" />
  <Card time="2021-07" name="bogo sort" link="/bogo" />
  <Card time="2021-07" name="analog clock" link="/clock" />
  <Card time="2021-07" name="15 puzzle" link="/15" />
  <Card time="2021-06" name="cube timer" link="https://cube-timer-1.vercel.app/" />
  <Card time="2021-03" name="covid chart (doesn't work anymore)" />
  <Card time="2020-05" name="time online" link="/time" />
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
    --orange: #eba674;

    --imageRoundness: 80px;
    --hoverTransitionDuration: 200ms;

    --textSize: 6rem;
    --textStrokeWidth: 4px;
    --textOffsetBottom: -0.33em;
    --textOffsetRight: -0.32em;
  }
  @media screen and (width < 500px) {
    :root {
      --textSize: 5rem;
      --textStrokeWidth: 3px;
    }
  }
  @media screen and (width < 400px) {
    :root {
      --textSize: 4rem;
      --textStrokeWidth: 2px;
    }
  }

  header {
    background: url('/cattus512.png');
    background-size: 120%;
    background-position: 20% 20%;
    margin: 2rem auto;
    width: min(420px, 80vw);
    height: min(420px, 80vw);
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
      var(--purple) 0.75turn,
      var(--teal) 0.75turn
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-stroke-width: var(--textStrokeWidth);
    transition-property: all, --purple, --teal;
    transition-duration: var(--hoverTransitionDuration);
    transition-timing-function: ease-in-out;
  }
  header:hover h1 {
    -webkit-text-stroke-color: var(--orange);
    --purple: var(--orange);
    --teal: transparent;
  }

  main {
    margin: 0 auto;
    width: max-content;
  }
</style>
