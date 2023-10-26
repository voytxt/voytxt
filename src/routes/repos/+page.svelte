<script lang="ts">
  async function fetchRepos(): Promise<Repo[]> {
    const response = await fetch('https://api.github.com/users/vojta-dev/repos');
    const repos: Repo[] = await response.json();

    return repos
      .filter((r) => !r.fork)
      .sort((a, b) => {
        return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
      });
  }

  type Repo = {
    name: string;
    description: string;
    fork: boolean;
    homepage: string;
    html_url: string;
    pushed_at: string;
  };
</script>

<h1>Lmao hi</h1>

<main id="repos">
  {#await fetchRepos()}
    <span class="loading">Loading repos...</span>
  {:then repos}
    {#each repos as repo}
      <div class="repo">
        <a href={repo.html_url} class="name">{repo.name}</a>
        <div class="description">{repo.description}</div>
        {#if repo.homepage !== ''}
          <a href={repo.homepage} class="website">Website</a>
        {:else}
          <span>No website</span>
        {/if}
      </div>
    {/each}
  {/await}
</main>

<style>
  h1 {
    text-align: center;
    font-size: 5rem;
  }

  main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 80%;
    margin: 0 auto;
  }

  #repos .loading {
    font-size: 2rem;
    text-align: center;
  }

  .repo {
    font-size: 1.5rem;
    border: 0.25rem solid gray;
    border-radius: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    padding: 2rem;
    transition: 0.25s;
  }

  .repo:hover {
    background-color: azure;
  }

  .repo .name {
    font-size: 2.25rem;
  }
</style>
