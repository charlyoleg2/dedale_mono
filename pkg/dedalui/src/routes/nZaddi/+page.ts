//import type { tApiA, tClientA } from 'nA';
import type { tApiA } from 'nA';
import { hc } from 'hono/client';
//import { preClientA } from 'nA';
import { honoIntegrated } from '$lib/front-config';
import { backCfg } from 'back-config';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
	const origin = url.origin;
	//console.log(`dbg349: origin: ${origin}`);
	const clientA = hc<tApiA>(origin, { fetch });
	let res: Response;
	if (honoIntegrated.inClient) {
		res = await clientA.api.addi.$get({ query: { numa: 13 } });
	} else {
		const url =
			`${backCfg.nA_host}:${backCfg.nA_port}/api/addi?` + new URLSearchParams({ numa: '17' });
		res = await fetch(url);
	}

	let rMsg = 'dbg308: nZ is probably nor running during that build';
	if (res.ok) {
		const resp = await res.json();
		rMsg = resp.msg;
	}
	return { msg: rMsg, fClientA: clientA };
}
