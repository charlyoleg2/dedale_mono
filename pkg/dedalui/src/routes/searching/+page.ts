import type { tApiA } from 'nA';
import { hc } from 'hono/client';
//import { preClientA } from 'nA';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
	const origin = url.origin;
	//console.log(`dbg349: origin: ${origin}`);
	const clientA = hc<tApiA>(origin, { fetch });

	return { fClientA: clientA };
}
