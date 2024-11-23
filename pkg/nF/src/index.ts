import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { hc } from 'hono/client';
import type { nWType } from 'nW';
import { addi } from 'nW';

const clientnW = hc<nWType>('http://localhost:3010/');
const app = new Hono();

app.get('/', (c) => {
	return c.text('Hello Hono!');
})
	.get('/two', async (c) => {
		const res = await clientnW.what.$get({ query: { name: 'gogo' } });
		const resp = await res.json();
		//console.log(resp);
		return c.text(resp.msg);
	})
	.get('/addi', async (c) => {
		const res = await clientnW.addi.$get({ query: { num: '12' } });
		const resp = await res.json();
		//console.log(resp);
		const toto = addi(3).toString();
		return c.text(resp.msg + '   ' + toto);
	});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
	fetch: app.fetch,
	port
});
