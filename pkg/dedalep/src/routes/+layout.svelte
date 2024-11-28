<script lang="ts">
	import type { Snippet } from 'svelte';

	// props
	interface Props {
		children?: Snippet;
	}
	let { children }: Props = $props();
</script>

<main>
	{@render children?.()}
</main>

<style>
	:global(body) {
		font-family: 'Courier New', 'Helvetica', 'Arial', 'Verdana';
		margin: 0;
		background-color: LightCyan;
		color: Indigo;
	}
	main {
		color: Indigo;
	}
</style>
