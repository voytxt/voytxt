import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  build: { target: ['chrome140', 'edge140', 'firefox140', 'safari26'] },
});
