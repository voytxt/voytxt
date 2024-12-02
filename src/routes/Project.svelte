<script lang="ts">
  const { time, link, name }: { time: string; link: string; name: string } = $props();
</script>

<a href={link}>
  <time datetime={time}>{time}</time>
  <span>{name} <span class="arrow">↗</span></span>
</a>

<style>
  a {
    display: block;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.5);
    outline: 4px solid transparent;
    transition: 150ms all;
    padding: 1rem;
    border-radius: 16px 0;
    color: var(--purple);
    font-family: 'SomeType Mono', monospace;
  }
  a:hover {
    background-color: white;
    outline-color: var(--orange);
  }

  a span {
    color: var(--purple);
    font-weight: bold;
    text-decoration: none;
  }

  a span .arrow {
    position: relative;
    bottom: 0.25rem;
    right: 0.25rem;
    font-family: 'Source Code Pro', monospace;
    font-weight: 700;
  }
</style>
