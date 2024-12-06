import type { tClientA } from 'nA';
import { preClientA } from 'nA';
import { honoIntegrated } from '$lib/front-config';
import { backCfg } from 'back-config';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
	let clientA: tClientA;
	let res: Response;
	if (honoIntegrated.inClient) {
		const origin = url.origin;
		//console.log(`dbg349: origin: ${origin}`);
		clientA = preClientA(origin, { fetch });
		res = await clientA.api.addi.$get({ query: { numa: 13 } });
	} else {
		const url =
			`${backCfg.nA_host}:${backCfg.nA_port}/api/addi?` + new URLSearchParams({ numa: 17 });
		res = await fetch(url);
	}

	let rMsg = 'dbg308: nZ is probably nor running during that build';
	if (res.ok) {
		const resp = await res.json();
		rMsg = resp.msg;
	}
	return { msg: rMsg, fClientA: clientA };
}
