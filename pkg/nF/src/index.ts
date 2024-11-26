import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { hc } from 'hono/client';
import esMain from 'es-main';
import type { nWType } from 'nW';
import { addi } from 'nW';

const clientnW = hc<nWType>('http://localhost:3010/');
const app = new Hono();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const route = app
	.get('/', (c) => {
		return c.text('Hello Hono!');
	})
	.get('/two', zValidator('query', z.object({ nama: z.string() })), async (c) => {
		const query = c.req.valid('query');
		const res = await clientnW.what.$get({ query: { name: query.nama } });
		const resp = await res.json();
		//console.log(resp);
		return c.text(resp.msg);
	})
	.get(
		'/addi',
		zValidator('query', z.object({ numa: z.number({ coerce: true }).int() })),
		async (c) => {
			const query = c.req.valid('query');
			const res = await clientnW.addi.$get({ query: { num: query.numa } });
			const resp = await res.json();
			//console.log(resp);
			const toto = addi(3).toString();
			return c.text(resp.msg + '   ' + toto);
		}
	);

if (esMain(import.meta)) {
	const port = 3000;
	console.log(`Server is running on http://localhost:${port}`);
	serve({
		fetch: app.fetch,
		port
	});
}

export type nFType = typeof route;
export { addi }; // re-export addi
