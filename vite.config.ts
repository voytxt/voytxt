// https://vite.dev/guide/rolldown
// https://github.com/vitejs/vite/discussions/13835
// https://github.com/sveltejs/vite-plugin-svelte/issues/1143

import { sveltekit } from '@sveltejs/kit/vite';
import browserslist from 'browserslist';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import { browserslistToTargets } from 'lightningcss';
import { defineConfig } from 'vite';

const bl = browserslist('since 2025');

export default defineConfig({
  plugins: [sveltekit()],

  build: { target: browserslistToEsbuild(bl) },
  css: {
    transformer: 'lightningcss',
    lightningcss: { targets: browserslistToTargets(bl) },
  },
});
