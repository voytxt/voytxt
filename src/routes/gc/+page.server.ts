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

    function matchData(regex: RegExp, index = 0): string | null {
      const matches = data.match(regex);
      return matches === null ? null : matches[index];
    }

    return {
      success: true,
      data: {
        name: matchData(
          /(?<=<div id="divContentMain" class="span-24&#32;last">\s*<h1 class="visually-hidden">).{1,70}(?=<\/h1>)/,
        ),
        link:
          'https://www.geocaching.com' +
          matchData(/(?<=<form method="post" action=")\/geocache\/.{1,60}(?=" id="aspnetForm">)/),
        difficulty: matchData(/(?<=alt=").{1,3}(?= out of 5")/),
        terrain: matchData(/(?<=alt=").{1,3}(?= out of 5")/g, 1),
        size: matchData(/(?<=&nbsp<small>\().{1,20}(?=\)<\/small><\/span>)/),
      },
    };
  },
} satisfies Actions;
