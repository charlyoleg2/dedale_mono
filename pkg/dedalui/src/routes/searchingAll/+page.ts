// src/routes/searching/+page.ts
// inspired by https://www.bop.systems/writings/using-hono-with-sveltekit-full-type-safety-with-rpc

import { makeClient } from '$lib/make-client';
//import type { PageLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const client = makeClient(fetch);
	const res = await client.api.searchAll.$get();

	const listPersons: string[] = [];
	if (res.ok) {
		const resp = await res.json();
		listPersons.push(...resp.list);
	}
	return { persons: listPersons };
}
