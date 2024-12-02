<script lang="ts">
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<h1>Searching page with dynamic content</h1>
<ol>
	{#each data.persons as item, idx}
		<li>{item} [{idx}]</li>
	{/each}
</ol>
