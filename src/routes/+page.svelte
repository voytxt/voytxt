<script lang="ts">
  import Project from './Project.svelte';

  let clicks = $state(0);

  $effect(() => {
    if (clicks === 15) {
      location.assign('https://google.com/search?q=cute+cat+pics');
    }
  });
</script>

<div class="outer">
  <button onclick={() => clicks++}>
    <h1>voytxt</h1>
  </button>

  <main class="teal">
    <Project time="2024-??" name="cube timer" link="https://timer.voytxt.com/" />
    <Project time="2023-07" name="pickle hunt" link="https://picklehunt.voytxt.com" />
    <Project time="2023-05" name="geocaching stats" link="/gcstats" />
    <Project time="2023-02" name="geocache lookup" link="/gc" />
    <Project time="2023-02" name="flashlight" link="https://github.com/voytxt/flashlight" />
    <Project time="2022-12" name="popeláři" link="https://github.com/voytxt/popelari" />
    <Project time="2022-09" name="translator" link="/translator" />
    <Project time="2022-09" name="TLGE2 explorer" link="https://tlge2.vercel.app/" />
    <Project time="2022-05" name="bio changer" link="https://github.com/voytxt/about-me-changer" />
    <Project time="2022-05" name="czechia" link="/czechia" />
    <Project time="2022-05" name="old portfolio 2" link="https://vojta.vercel.app/" />
    <Project time="2022-03" name="wocabee bot" link="https://wocabot.vercel.app/" />
    <Project time="2022-03" name="random image" link="/image" />
    <Project time="2022-03" name="16 assholes" link="/16" />
    <Project time="2022-02" name="password generator" link="/password" />
    <Project time="2022-02" name="robtop bot" link="https://github.com/voytxt/robtop-bot" />
    <Project time="2021-10" name="snake" link="/snake" />
    <Project time="2021-08" name="aim trainer" link="/aim" />
    <Project time="2021-08" name="old portfolio" link="/repos" />
    <Project time="2021-07" name="bogo sort" link="/bogo" />
    <Project time="2021-07" name="analog clock" link="/clock" />
    <Project time="2021-07" name="15 puzzle" link="/15" />
    <Project time="2021-06" name="old cube timer" link="https://cube-timer-1.vercel.app/" />
    <!-- <Project time="2021-03" name="covid chart" link="" /> -->
    <Project time="2020-05" name="time online" link="/time" />
  </main>
</div>

<svelte:head>
  <title>voytxt portfolio</title>
  <meta name="description" content="Click for cat pics!" />

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
    --textOffsetBottom: -0.3365em;
    --textOffsetRight: -0.32em;

    --numberOfColumns: 3;
  }
  @media screen and (width < 700px) {
    :root {
      --numberOfColumns: 2;
    }
  }
  @media screen and (width < 500px) {
    :root {
      --textSize: 5rem;
      --textStrokeWidth: 3px;
      --numberOfColumns: 1;
    }
  }
  @media screen and (width < 400px) {
    :root {
      --textSize: 4rem;
      --textStrokeWidth: 2px;
    }
  }

  .outer {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: 0 auto;
  }

  button {
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
    border: none;
    cursor: pointer;
  }
  button:hover {
    filter: saturate(1.5);
    outline-color: var(--orange);
  }
  button:active {
    transition: none;
    filter: saturate(1.75);
    outline-color: white;
  }
  button h1 {
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
  button:hover h1 {
    -webkit-text-stroke-color: var(--orange);
    --purple: var(--orange);
    --teal: transparent;
  }
  button:active h1 {
    transition: none;
    -webkit-text-stroke-color: white;
    --purple: white;
  }

  main {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(var(--numberOfColumns), 1fr);
    gap: 0.75rem;
  }
</style>
