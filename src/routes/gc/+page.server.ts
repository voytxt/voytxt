import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
  default: async ({ request }) => {
    const gcCode = (await request.formData()).get('gcCode')?.toString();

    if (gcCode === undefined || gcCode === '' || gcCode.length > 7) {
      return fail(500, { success: false, error: 'GC Code is invalid' });
    }

    const gcResponse = await fetch('https://www.geocaching.com/geocache/GC' + gcCode);

    if (!gcResponse.ok) {
      return fail(500, { success: false, error: "Couldn't find cache" });
    }

    const data = await gcResponse.text();

    const isPremium = matchData(/Premium Member Only Cache/) !== null;

    function matchData(regex: RegExp, index = 0): string | null {
      const matches = data.match(regex);
      return matches === null ? null : matches[index];
    }

    return {
      success: true,
      data: {
        name: matchData(
          isPremium
            ? /(?<=<h1 class="heading-3">).{1,70}(?=<\/h1>)/
            : /(?<=<span id="ctl00_ContentBody_CacheName" class="tex2jax_ignore">).{1,70}(?=<\/span>)/,
        ),
        difficulty: matchData(
          isPremium
            ? /(?<=Difficulty<\/span>\s*<span>).{1,3}(?=<\/span>)/
            : /(?<=alt=").{1,3}(?= out of 5")/,
        ),
        terrain: isPremium
          ? matchData(/(?<=Terrain<\/span>\s*<span>).{1,3}(?=<\/span>)/)
          : matchData(/(?<=alt=").{1,3}(?= out of 5")/g, 1),
        size: matchData(
          isPremium
            ? /(?<=Size<\/span>\s*<span>).{1,20}(?=<\/span>)/
            : /(?<=&nbsp<small>\().{1,20}(?=\)<\/small><\/span>)/,
        ),
      },
    };
  },
} satisfies Actions;
