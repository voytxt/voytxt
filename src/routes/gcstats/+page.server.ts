import { fail } from '@sveltejs/kit';
import wretch from 'wretch';
import FormUrlAddon from 'wretch/addons/formUrl';
import type { Actions } from './$types';

const api = wretch('https://project-gc.com')
  .addon(FormUrlAddon)
  .resolve((r) => r.text());

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const username = data.get('username')?.toString();

    if (isEmpty(username)) {
      return fail(400, { success: false, error: 'No username' });
    }

    try {
      const { id, llh } = await getUser(username!);
      const chart = await getDtChart(id, llh);

      return { success: true, data: chart };
    } catch (error) {
      return fail(500, {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  },
} satisfies Actions;

function isEmpty(str: string | undefined) {
  return str === undefined || str === '';
}

async function getUser(username: string): Promise<{ id: string; llh: string }> {
  const user = await api.get(`/ProfileStats/${username}`);

  const id = user.match(/(?<=profileId: ')\d+(?=')/)?.[0];
  const llh = user.match(/(?<=llh: ')\d+(?=')/)?.[0];

  if (isEmpty(id) || isEmpty(llh)) {
    throw new Error("This user doesn't exist, note that usernames are case-sensitive");
  }

  return { id: id!, llh: llh! };
}

async function getDtChart(
  id: string,
  llh: string,
): Promise<{ chart: number[][]; combinations: number }> {
  const dtChart = await api
    .url('/ajax/profilestats.php')
    .formUrl({
      cmd: 'getmodule',
      module: 'dtchart',
      'params[profileId]': id,
      'params[llh]': llh,
    })
    .post();

  const chart = dtChart.match(/(?<=>\s*)\d+(?=\s*<\/(td|b)>)|&nbsp;/g);
  const dtCombinations = dtChart.match(/(?<=<b>)\d+(?=<\/b> Diff)/)?.[0];

  if (chart === null || isEmpty(dtCombinations)) {
    throw new Error('Undefined D/T chart');
  }

  const chartArray = chart
    .slice(0, 81)
    .map((element) => (element === '&nbsp;' ? 0 : parseInt(element)));

  const chart2d: number[][] = [];

  for (let i = 0; i < 9; i++) {
    chart2d.push(chartArray.splice(0, 9));
  }

  return {
    chart: chart2d,
    combinations: parseInt(dtCombinations!),
  };
}
