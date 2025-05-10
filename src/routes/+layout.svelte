<script lang="ts">
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import './styles.css';

  injectAnalytics({ mode: dev ? 'development' : 'production' });

  const { children } = $props();
</script>

{@render children()}
