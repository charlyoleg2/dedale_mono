//import type { tClientA } from 'nA';
//import { hc } from 'hono/client';
import { preClientA } from 'nA';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
	const origin = url.origin;
	//console.log(`dbg349: origin: ${origin}`);
	const clientA = preClientA(origin, { fetch });

	return { fClientA: clientA };
}
