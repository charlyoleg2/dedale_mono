//import type { tApiA, tClientA } from 'nA';
import type { tApiA } from 'nA';
import { hc } from 'hono/client';
//import { preClientA } from 'nA';
import { honoIntegrated } from '$lib/front-config';
import { backCfg } from 'back-config';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
	const target1 = url.origin;
	const target2 = `${backCfg.nA_host}:${backCfg.nA_port}`;
	const target = honoIntegrated.inClientNCors ? target1 : target2;
	//console.log(`dbg349: target: ${target`);
	const clientA = hc<tApiA>(target, { fetch });
	let res: Response;
	if (honoIntegrated.inClientFetch) {
		res = await clientA.api.addi.$get({ query: { numa: 13 } });
	} else {
		const url = `${target}/api/addi?` + new URLSearchParams({ numa: '17' });
		res = await fetch(url);
	}

	let rMsg = 'dbg308: nZ is probably nor running during that build';
	if (res.ok) {
		const resp = await res.json();
		rMsg = resp.msg;
	}
	return { msg: rMsg, target: target, fClientA: clientA };
}
