import type { tApiA } from 'nA';
import { hc } from 'hono/client';
//import { preClientA } from 'nA';
import { honoIntegrated } from '$lib/front-config';
import { backCfg } from 'back-config';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
	let res: Response;
	const target1 = url.origin;
	const target2 = `${backCfg.nA_host}:${backCfg.nA_port}`;
	const target = honoIntegrated.inClientNCors ? target1 : target2;
	//console.log(`dbg349: target: ${target`);
	if (honoIntegrated.inClientNFetch) {
		const clientA = hc<tApiA>(target, { fetch });
		res = await clientA.api.searchAll.$get();
	} else {
		const url = `${target}/api/searchAll`;
		res = await fetch(url);
	}

	const listPersons: string[] = [];
	if (res.ok) {
		const resp = await res.json();
		listPersons.push(...resp.list);
	}
	return { persons: listPersons };
}

export const prerender = false; // can not be prerender because of mutative method
