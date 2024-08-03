<script lang="ts">
  export let time: string;
  export let link: string;
  export let name: string;
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
