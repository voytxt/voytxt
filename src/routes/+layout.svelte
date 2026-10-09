<script lang="ts">
  import { dev } from '$app/env';
  // TODO: replace with '@vercel/analytics/sveltekit' later
  import { injectAnalytics } from '@vercel/analytics/sveltekit-next';
  import './styles.css';

  injectAnalytics({ mode: dev ? 'development' : 'production' });

  const { children } = $props();
</script>

{@render children()}
