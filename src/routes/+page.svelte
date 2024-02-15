<script lang="ts">
	import { setupViewTransition } from '$lib';
	const { transition } = setupViewTransition();
</script>

<a href="/docs">sveltekit-view-transition</a>
<h1><code use:transition={'title'} class="text-2xl">Hello</code></h1>
