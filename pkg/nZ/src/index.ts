import { serve } from '@hono/node-server';
//import { Hono } from 'hono';
//import { z } from 'zod';
//import { zValidator } from '@hono/zod-validator';
import { z, createRoute, OpenAPIHono } from '@hono/zod-openapi';
import { swaggerUI } from '@hono/swagger-ui';
import esMain from 'es-main';

function addi(aOne: number): number {
	const rNum = aOne + 5;
	return rNum;
}

// openapi routes

const rtGet_root = createRoute({
	method: 'get',
	path: '/',
	request: {},
	responses: {
		200: {
			content: {
				'text/plain': {
					schema: z.string()
				}
			},
			description: 'A sweet message'
		}
	}
});
const rtGet_what = createRoute({
	method: 'get',
	path: '/what',
	request: {
		query: z.object({ name: z.string() })
	},
	responses: {
		200: {
			content: {
				'application/json': {
					schema: z.object({ good: z.boolean(), msg: z.string() })
				}
			},
			description: 'Just a question'
		}
	}
});
const rtGet_addi = createRoute({
	method: 'get',
	path: '/addi',
	request: {
		query: z.object({ num: z.number({ coerce: true }).int() })
	},
	responses: {
		200: {
			content: {
				'application/json': {
					schema: z.object({ good: z.boolean(), msg: z.string() })
				}
			},
			description: 'A line of mathematic'
		}
	}
});

// openapi app-apiW
const apiW = new OpenAPIHono();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routeW = apiW
	.basePath('/apiW')
	.openapi(rtGet_root, (c) => {
		return c.text('Hello Hono!');
	})
	.openapi(
		//'/what',
		rtGet_what,
		//zValidator('query', z.object({ name: z.string().optional() }).optional()),
		//zValidator('query', z.object({ name: z.string() })),
		(c) => {
			const query = c.req.valid('query');
			//console.log(query);
			//const name = query.name ? query.name : "blouf";
			return c.json(
				{
					good: true,
					msg: `What ${query.name}`
				},
				200
			);
		}
	)
	.openapi(
		//'/addi',
		rtGet_addi,
		//zValidator('query', z.object({ num: z.number({ coerce: true }).int() })),
		(c) => {
			const query = c.req.valid('query');
			return c.json(
				{
					good: true,
					msg: `5 + ${query.num} = ${addi(query.num)}`
				},
				200
			);
		}
	);

if (esMain(import.meta)) {
	// swagger-ui
	apiW.get('/swagger', swaggerUI({ url: '/doc' }));
	// The OpenAPI documentation will be available at /doc
	apiW.doc('/doc', {
		openapi: '3.0.0',
		info: {
			version: '1.0.0',
			title: 'REST-API of nZ'
		}
	});
	const port = 3010;
	console.log(`Server is running on http://localhost:${port}`);
	serve({
		fetch: apiW.fetch,
		port
	});
}

export type tApiW = typeof routeW;
export { addi, apiW };
