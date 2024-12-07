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

	return { target: target, fClientA: clientA };
}
