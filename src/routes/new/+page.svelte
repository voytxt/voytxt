<script>
  import Project from './Project.svelte';
</script>

<div class="outer">
  <main>
    <h1><a href="https://github.com/voytxt">voytxt</a></h1>

    <Project time="2023-07" name="pickle hunt" link="https://github.com/voytxt/pickle-hunt" />
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
    <Project time="2021-06" name="cube timer" link="https://cube-timer-1.vercel.app/" />
    <Project time="2020-05" name="time online" link="/time" />
  </main>

  <img src="https://media1.tenor.com/m/TeW54nXF2QAAAAAC/cat.gif" alt="funny cat" />
</div>

<style>
  .outer {
    padding: 2.75rem;
    display: flex;
    align-items: end;
    justify-content: space-between;

    background-color: #20ebc6;
  }

  main {
    margin-left: 2rem;
    font-family: 'SF Mono', monospace;
  }

  main h1 {
    font-size: 2.5rem;
    border-left: 1rem solid #800080;
    padding-left: 1rem;
  }

  main a {
    text-decoration: none;
    color: white;
  }
</style>
