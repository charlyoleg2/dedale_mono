<script lang="ts">
	import { base } from '$app/paths';
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
	const clientA = data.fClientA;

	async function fetchSearch(iLetters: string): Promise<string[]> {
		let rPersons: string[] = [];
		//console.log(`dbg098: iLetters: ${iLetters}`);
		try {
			const res = await clientA.api.search.$get({ query: { letters: iLetters } });
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
		<li><a href="{base}/person/{item}">{item} [{idx}]</a></li>
	{/each}
</ol>
