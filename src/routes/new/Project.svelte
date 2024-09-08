<script lang="ts">
  const { time, link, name }: { time: string; link: string; name: string } = $props();
</script>

<a href={link}>
  <time datetime={time}>{time}</time>
  <span>{name}</span>
</a>
<br />

<style>
  a {
    text-decoration: none;
    color: black;
    font-size: 1.25rem;
    color: white;
  }
</style>
