import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import type { AppType } from 'nW';
import { hc } from 'hono/client';

const clientnW = hc<AppType>('http://localhost:3010/');
const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!')
}).get('/two', async (c) => {
	const res = await clientnW.what.$get({ query: { name: 'gogo'}});
	const resp = await res.json();
	//console.log(resp);
  return c.text(resp.msg);
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port
});
