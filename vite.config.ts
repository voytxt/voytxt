import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter(),
      preprocess: vitePreprocess(),
      compilerOptions: { runes: true },
    }),
  ],
  build: { target: ['chrome140', 'edge140', 'firefox150', 'safari26'] },
});
