<script lang="ts">
  const {
    main,
    time,
    link,
    name,
    desc,
  }: { main?: boolean; time: string; link: string; name: string; desc?: string } = $props();
</script>

<a href={link} class={{ main }}>
  <time datetime={time}>{time}</time>
  <span>{name}<span class="arrow">↗</span></span>
  {#if desc !== undefined}<p>{desc}</p>{/if}
</a>

<style>
  a {
    display: block;
    text-decoration: none;
    transition: all 100ms ease-out;
    padding: 1rem;
    color: white;
    font-family: 'JetBrains Mono', monospace;
    box-shadow: -1px 0 #fffa;

    &:hover,
    &:focus {
      box-shadow: -5px 0 white;
      transform: translateX(4px);

      time {
        color: white;
      }
    }

    &.main {
      font-size: 1.25rem;
    }

    time {
      transition: color 100ms ease-out;
      color: #fffa;
    }

    span {
      font-weight: bold;
      font-family: 'Atkinson Hyperlegible Next', sans-serif;

      .arrow {
        font-family: 'Source Code Pro', monospace;
        position: relative;
        bottom: 0.25rem;
        right: -0.25rem;
        font-weight: bold;
        user-select: none;
      }
    }

    p {
      margin: 0;
      padding-top: 0.5em;
      font-family: system-ui;
      font-size: 1rem;
    }
  }
</style>
