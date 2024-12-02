<script lang="ts">
	import { makeClient } from '$lib/make-client';
	/** @type {{ data: import('./$types').PageData }} */
	//let { data } = $props();
	const client = makeClient(fetch);

	async function actionSearch(iLetters: string): Promise<string[]> {
		let rPersons: string[] = [];
		try {
			const res = await client.api.search.$get({ query: { letters: iLetters } });
			if (res.ok) {
				const resp = await res.json();
				rPersons = resp.list;
			}
		} catch (error) {
			console.error(error);
		}
		return rPersons;
	}

	let lettres = $state('ual');
	let personsP = $derived.by(async () => {
		return await actionSearch(lettres);
	});
</script>

<h1>Searching page with dynamic content</h1>
<p>some letter <input type="text" bind:value={lettres} /></p>
<ol>
	{#await personsP then persons}
		{#each persons as item, idx}
			<li>{item} [{idx}]</li>
		{/each}
	{/await}
</ol>
