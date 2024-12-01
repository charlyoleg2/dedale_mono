// src/routes/searching/+page.ts
// inspired by https://www.bop.systems/writings/using-hono-with-sveltekit-full-type-safety-with-rpc

import { makeClient } from '$lib/make-client';
//import type { PageLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const client = makeClient(fetch);
	const res = await client.api.search.$get();
	const resp = await res.json();

	const listPersons: string[] = [];
	if (resp.ok) {
		listPersons.push(...resp.list);
	}
	return { persons: listPersons };
}
