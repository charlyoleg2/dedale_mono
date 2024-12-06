import type { tPerson, tApiA } from 'nA';
import { hc } from 'hono/client';
//import { preClientA } from 'nA';
import { honoIntegrated } from '$lib/front-config';
import { backCfg } from 'back-config';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url, params }) {
	let res: Response;
	if (honoIntegrated.inClient) {
		const origin = url.origin;
		//console.log(`dbg349: origin: ${origin}`);
		const clientA = hc<tApiA>(origin, { fetch });
		res = await clientA.api.perso.$get({ query: { id: params.namus } });
	} else {
		const url =
			`${backCfg.nA_host}:${backCfg.nA_port}/api/perso?` +
			new URLSearchParams({ id: params.namus });
		res = await fetch(url);
	}

	const pers: tPerson = { name: 'tbd', age: -1, lieu: 'tbd' };
	if (res.ok) {
		const resp = await res.json();
		Object.assign(pers, resp.pers);
	}
	return { person: pers };
}
