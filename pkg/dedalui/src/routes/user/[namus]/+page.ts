import type { tPerson, tApiA } from 'nA';
import { hc } from 'hono/client';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url, params }) {
	const origin = url.origin;
	//console.log(`dbg349: origin: ${origin}`);
	const clientA = hc<tApiA>(origin, { fetch });
	const res = await clientA.api.perso.$get({ query: { id: params.namus } });

	const pers: tPerson = { name: 'tbd', age: -1, lieu: 'tbd' };
	if (res.ok) {
		const resp = await res.json();
		Object.assign(pers, resp.pers);
	}
	return { person: pers };
}
