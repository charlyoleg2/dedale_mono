import type { tApiA } from 'nA';
import { hc } from 'hono/client';
//import { preClientA } from 'nA';
import { honoIntegrated } from '$lib/front-config';
import { backCfg } from 'back-config';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
	let res: Response;
	if (honoIntegrated.inClient) {
		const origin = url.origin;
		//console.log(`dbg349: origin: ${origin}`);
		const clientA = hc<tApiA>(origin, { fetch });
		res = await clientA.api.searchAll.$get();
	} else {
		const url = `${backCfg.nA_host}:${backCfg.nA_port}/api/searchAll`;
		res = await fetch(url);
	}

	const listPersons: string[] = [];
	if (res.ok) {
		const resp = await res.json();
		listPersons.push(...resp.list);
	}
	return { persons: listPersons };
}
