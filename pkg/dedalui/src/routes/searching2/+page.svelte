<script lang="ts">
	import { makeClient } from '$lib/make-client';
	/** @type {{ data: import('./$types').PageData }} */
	//let { data } = $props();
	const client = makeClient(fetch);

	async function fetchSearch(iLetters: string): Promise<string[]> {
		let rPersons: string[] = [];
		//console.log(`dbg098: iLetters: ${iLetters}`);
		try {
			const res = await client.api.search.$get({ query: { letters: iLetters } });
			if (res.ok) {
				const resp = await res.json();
				//console.log(resp);
				rPersons = resp.list;
			}
		} catch (error) {
			console.error(error);
		}
		return rPersons;
	}

	let lettres = $state('aul');
	let persons: string[] = $state([]);
	async function actionSearch() {
		persons = await fetchSearch(lettres);
	}
</script>

<h1>Searching page with dynamic content</h1>
<p>
	some letter <input type="text" bind:value={lettres} /><button onclick={actionSearch}
		>Search</button
	>
</p>
<ol>
	{#each persons as item, idx}
		<li>{item} [{idx}]</li>
	{/each}
</ol>
