<script lang="ts">
  // WARNING: messy code ahead

  // using <td>s with bold text instead of <th>s, because for some reason,
  // table headings' attributes get removed by the geocaching spaghetti code

  const { chart }: { chart: { combinations: number; chart: number[][] } } = $props();

  const nums = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  function getChartColor(num: number): string {
    if (num === 0) return '#374151'; // gray 700
    if (num < 5) return '#a78bfa'; // violet 400
    return '#22c55e'; // green 500
  }

  function s(...styles: string[]): string {
    const reference: Record<string, string> = {
      box: 'box-sizing:border-box',
      width: 'width:40px',
      height: 'height:40px',
      border: 'border:1px solid #7c3aed',
      border2: 'border:2px solid #7c3aed',
      collapse: 'border-collapse: collapse',
      white: 'color:white',
      blue: 'color:#1d4ed8',
      medium: 'font-size:16px',
      big: 'font-size:28px',
      monospace: 'font-family:monospace',
      center: 'text-align:center',
      bold: 'font-weight:bold',
    };

    return styles.map((style) => reference[style] ?? style).join(';');
  }
</script>

<div
  style={s(
    'display:flex',
    'flex-direction:column',
    'align-items:center',
    'margin-bottom:1rem',
    'min-width:442px',
  )}
>
  <table style={s('border2', 'collapse', 'monospace', 'center', 'medium')}>
    <tbody>
      <tr>
        <td
          colspan="2"
          rowspan="2"
          style={s('border2', 'big', 'cursor:help')}
          title="{chart.combinations} D/T combination{chart.combinations === 1
            ? ''
            : 's'} found, out of total 81"
        >
          {chart.combinations}
        </td>

        <td colspan="9" style={s('box', 'height', 'bold')}>T</td>
      </tr>

      <tr style={s('height')}>
        {#each nums as terrain}
          <td style={s('box', 'width', 'border', 'border-bottom-width:2px', 'bold')}>{terrain}</td>
        {/each}
      </tr>

      {#each nums as difficulty, index}
        <tr style={s('height')}>
          {#if index === 0}
            <td rowspan="9" style={s('box', 'width', 'bold')}>D</td>
          {/if}

          <td style={s('box', 'width', 'border', 'border-right-width:2px', 'bold')}>
            {difficulty}
          </td>

          {#each chart.chart[index] as num}
            <td style={s('white', `background:${getChartColor(num)}`)}>{num}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
  <small><a href={location.href} style={s('blue')}>gcstats</a></small>
</div>
