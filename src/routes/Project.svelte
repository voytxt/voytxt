<script lang="ts">
  export let time: string;
  export let link: string;
  export let name: string;
</script>

<a href={link}>
  <time datetime={time}>{time}</time>
  <span>{name} ↗</span>
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
</style>
