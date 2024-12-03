import type { tApiA } from 'nA';
import { hc } from 'hono/client';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
	const origin = url.origin;
	//console.log(`dbg349: origin: ${origin}`);
	const clientA = hc<tApiA>(origin, { fetch });
	const res = await clientA.api.searchAll.$get();

	const listPersons: string[] = [];
	if (res.ok) {
		const resp = await res.json();
		listPersons.push(...resp.list);
	}
	return { persons: listPersons };
}