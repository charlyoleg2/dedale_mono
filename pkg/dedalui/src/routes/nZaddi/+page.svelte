<script lang="ts">
	import { honoIntegrated } from '$lib/front-config';
	//import { backCfg } from 'back-config';

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
	const clientA = data.fClientA;

	async function fnZaddi(iNum: number): Promise<string> {
		let rMsg = 'dbg647: nZ is probablz not running!';
		try {
			let res: Response;
			if (honoIntegrated.inClientNFetch) {
				res = await clientA.api.addi.$get({ query: { numa: iNum } });
			} else {
				const url =
					`${data.target}/api/addi?` + new URLSearchParams({ numa: iNum.toString() });
				res = await fetch(url);
			}
			if (res.ok) {
				const resp = await res.json();
				//console.log(resp);
				rMsg = resp.msg;
			}
		} catch (error) {
			console.error(error);
		}
		return rMsg;
	}

	let sNum = $state(10);
	let sMsg = $state('');
	async function actionAddi() {
		sMsg = await fnZaddi(sNum);
	}
</script>

<h1>nZ addi page</h1>
<p>using services of nZ! Make sure nZ is running</p>
<p>[build] nZ result: {data.msg}</p>
<p><input type="number" bind:value={sNum} /><button onclick={actionAddi}>Call nZ</button></p>
<p>[run] response: {sMsg}</p>
