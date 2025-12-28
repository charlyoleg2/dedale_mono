<script lang="ts">
	import type { Snippet } from 'svelte';
	import { resolve } from '$app/paths';

	// props
	interface Props {
		children?: Snippet;
	}
	let { children }: Props = $props();
</script>

<header>
	<a href={resolve('/')}>dedalui-root</a>
</header>
<main>
	{@render children?.()}
</main>

<style>
	:global(body) {
		font-family: 'Courier New', 'Helvetica', 'Arial', 'Verdana';
		margin: 0;
		background-color: Beige;
		color: Indigo;
	}
	main {
		color: Grey;
	}
</style>
