import type { tApiA } from 'nA';
import { hc } from 'hono/client';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
	const origin = url.origin;
	//console.log(`dbg349: origin: ${origin}`);
	const clientA = hc<tApiA>(origin, { fetch });
	const res = await clientA.api.addi.$get({ query: { numa: 13 } });

	let rMsg = 'dbg308: nZ is probably nor running during that build';
	if (res.ok) {
		const resp = await res.json();
		rMsg = resp.msg;
	}
	return { msg: rMsg, fClientA: clientA };
}
