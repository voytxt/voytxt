<script lang="ts">
  import Project from './Project.svelte';

  let clicks = $state(0);

  $effect(() => {
    if (clicks === 15) {
      location.assign('https://google.com/search?q=cute+cat+pics');
    }
  });
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="outer homepage">
  <header>
    <a href="https://github.com/voytxt/" aria-label="GitHub">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
        <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        />
      </svg>
    </a>
    <a href="https://bsky.app/profile/voytxt.com" aria-label="Bluesky">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0 0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z"
        />
      </svg>
    </a>
  </header>

  <button onclick={() => clicks++} aria-label="profile picture - a cat holding a mug"></button>

  <h1>voytxt</h1>

  <main>
    <Project time="eternal" name="voytxt" link="/" />
    <Project time="eternal" name="cube timer" link="https://timer.voytxt.com/" />
    <Project time="eternal" name="pickle hunt" link="https://picklehunt.voytxt.com" />
    <Project time="eternal" name="geocaching stats" link="/gcstats" />
    <Project time="2024-12" name="robtop bot" link="https://bsky.app/profile/robtop.voytxt.com" />
    <Project time="2024-12" name="stacker stats" link="https://stackerstats.voytxt.com" />
    <Project time="2024-12" name="low-budget desmos" link="/desmos" />
    <Project time="2023-02" name="geocache lookup" link="/gc" />
    <Project time="2023-02" name="flashlight" link="https://github.com/voytxt/flashlight" />
    <Project time="2022-12" name="popeláři" link="https://github.com/voytxt/popelari" />
    <Project time="2022-09" name="translator" link="/translator" />
    <Project time="2022-09" name="TLGE2 explorer" link="https://tlge2.vercel.app/" />
    <Project time="2022-09" name="more or less" link="/mol" />
    <Project time="2022-05" name="bio changer" link="https://github.com/voytxt/about-me-changer" />
    <Project time="2022-05" name="czechia" link="/czechia" />
    <Project time="2022-05" name="old portfolio 2" link="https://vojta.vercel.app/" />
    <Project time="2022-03" name="wocabee bot" link="https://wocabot.vercel.app/" />
    <Project time="2022-03" name="random image" link="/image" />
    <Project time="2022-03" name="16 assholes" link="/16" />
    <Project time="2022-02" name="password generator" link="/password" />
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
  <title>voytxt</title>
  <meta name="description" content="Click for cat pics!" />
  <meta property="og:image" content="https://avatars.githubusercontent.com/u/65811166" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Sometype+Mono:wght@400..700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<style>
  /* replace with google fonts once https://github.com/google/fonts/issues/8030 gets merged */
  @font-face {
    font-family: 'Source Code Pro';
    font-display: swap;
    src: url(/SourceCodePro-Bold.ttf.woff2) format('woff2');
  }

  :root {
    --textSize: 6rem;
    --columnCount: 3;
  }

  @media screen and (width < 1000px) {
    :root {
      --columnCount: 2;
    }
  }
  @media screen and (width < 650px) {
    :root {
      --columnCount: 1;
    }
  }
  @media screen and (width < 400px) {
    :root {
      --textSize: 4rem;
    }
  }

  .outer {
    display: flex;
    flex-direction: column;
    width: max-content;
    max-width: min(90vw, 70rem);
    margin: 0 auto;
    gap: 1rem;
    margin-top: 1rem;
  }

  header {
    font-family: 'SomeType Mono', monospace;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    a svg {
      color: white;
      fill: currentColor;
      width: 32px;

      &:hover {
        color: #fffc;
      }
    }
  }

  button {
    background: url('/cattus512.png');
    background-size: 120%;
    background-position: 20% 20%;
    margin: 0 auto;
    width: min(420px, 80vw);
    height: min(420px, 80vw);
    border-radius: 40px;
    transition: all 125ms ease-out;
    border: none;

    &:hover {
      filter: saturate(1.25);
      box-shadow:
        0 10px 15px -3px rgb(0 0 0 / 0.2),
        0 4px 6px -4px rgb(0 0 0 / 0.2);
    }

    &:active {
      transition: none;
      filter: saturate(1.5);
    }
  }

  h1 {
    font-family: 'SomeType Mono', monospace;
    text-align: center;
    font-size: var(--textSize);
    margin: 0;
    color: white;
  }

  main {
    margin: 1rem 0 2rem;
    display: grid;
    grid-template-columns: repeat(var(--columnCount), 1fr);
    gap: 1rem;
  }
</style>
