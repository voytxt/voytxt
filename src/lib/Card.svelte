<script lang="ts">
  export let time: string;
  export let link: string | null = null;
  export let name: string;
</script>

<time datetime={time}>{time}</time>

{#if link !== null}
  <a href={link}>{name}</a>
{:else}
  {name}
{/if}

<br />

<style>
  a {
    color: var(--purple);
    font-weight: bold;
    text-decoration: none;
  }

  a::after {
    content: '↗';
  }
</style>
