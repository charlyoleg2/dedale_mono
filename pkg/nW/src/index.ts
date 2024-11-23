import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import esMain from 'es-main';

function addi(aOne: number): number {
	const rNum = aOne + 5;
	return rNum;
}

const app = new Hono();

const route = app
	.get('/', (c) => {
		return c.text('Hello Hono!');
	})
	.get(
		'/what',
		//zValidator('query', z.object({ name: z.string().optional() }).optional()),
		zValidator('query', z.object({ name: z.string() })),
		(c) => {
			const query = c.req.valid('query');
			//console.log(query);
			//const name = query.name ? query.name : "blouf";
			return c.json(
				{
					ok: true,
					msg: `What ${query.name}`
				},
				200
			);
		}
	)
	.get('/addi', zValidator('query', z.object({ num: z.number({ coerce: true }).int() })), (c) => {
		const query = c.req.valid('query');
		return c.json(
			{
				ok: true,
				msg: `5 + ${query.num.toString()} = ${addi(query.num).toString()}`
			},
			200
		);
	});

if (esMain(import.meta)) {
	const port = 3010;
	console.log(`Server is running on http://localhost:${port}`);
	serve({
		fetch: app.fetch,
		port
	});
}

export type nWType = typeof route;
export { addi };
