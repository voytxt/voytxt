import adapter from '@sveltejs/adapter-vercel';
import type { Config } from '@sveltejs/kit';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: { adapter: adapter() },
  compilerOptions: { runes: true },
} satisfies Config;
