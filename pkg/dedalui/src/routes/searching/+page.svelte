<script lang="ts">
	import { honoIntegrated } from '$lib/front-config';
	//import { backCfg } from 'back-config';

	import { resolve } from '$app/paths';
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();

	async function actionSearch(iLetters: string): Promise<string[]> {
		let rPersons: string[] = [];
		try {
			let res: Response;
			if (honoIntegrated.inClientNFetch) {
				const clientA = data.fClientA;
				res = await clientA.api.search.$get({ query: { letters: iLetters } });
			} else {
				const url =
					`${data.target}/api/search?` + new URLSearchParams({ letters: iLetters });
				res = await fetch(url);
			}
			if (res.ok) {
				const resp = await res.json();
				rPersons = resp.list;
			} else {
				console.log('dbg893: res with errors');
				console.log(res);
			}
		} catch (error) {
			console.error(error);
		}
		return rPersons;
	}

	let lettres = $state('aul');
	let personsP = $derived.by(async () => {
		return await actionSearch(lettres);
	});
</script>

<h1>Searching page with dynamic content</h1>
<p>some letter <input type="text" bind:value={lettres} /></p>
<ol>
	{#await personsP then persons}
		{#each persons as item, idx (idx)}
			<li><a href={resolve(`/user/${item}`)}>{item} [{idx}]</a></li>
		{/each}
	{/await}
</ol>
