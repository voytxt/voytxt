<script lang="ts">
  const { time, link, name }: { time: string; link: string; name: string } = $props();
</script>

<a href={link}>
  <time datetime={time}>{time}</time>
  <span>{name}<span class="arrow">↗</span></span>
</a>

<style>
  a {
    display: block;
    text-decoration: none;
    transition: border-left 100ms ease-out;
    padding: 1rem;
    color: white;
    font-family: 'SomeType Mono', monospace;
    border-left: 1px solid #fffa;

    &:hover,
    &:focus {
      border-color: white;
      border-width: 5px;
      padding-right: 0.75rem;

      time {
        color: white;
      }
    }

    time {
      transition: color 100ms ease-out;
      color: #fffa;
    }

    span {
      font-weight: bold;

      .arrow {
        font-family: 'Source Code Pro', monospace;
        position: relative;
        bottom: 0.25rem;
        right: -0.25rem;
        font-weight: 700;
        user-select: none;
      }
    }
  }
</style>
