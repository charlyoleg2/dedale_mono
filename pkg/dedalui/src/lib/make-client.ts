// make-client.ts
// inspired by https://www.bop.systems/writings/using-hono-with-sveltekit-full-type-safety-with-rpc

import type { tApiA } from 'nA';
import { hc } from 'hono/client';

let browserClient: ReturnType<typeof hc<tApiA>>;

const makeClient = (fetch: Window['fetch']) => {
	const isBrowser = typeof window !== 'undefined';
	const origin = isBrowser ? window.location.origin : '';

	if (isBrowser && browserClient) {
		return browserClient;
	}

	//const client = hc<tApiA>(origin + '/api', { fetch });
	const client = hc<tApiA>(origin, { fetch });

	if (isBrowser) {
		browserClient = client;
	}

	return client;
};

export { makeClient };
