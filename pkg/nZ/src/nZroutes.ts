// nZroutes.ts

//import { z, createRoute, OpenAPIHono } from '@hono/zod-openapi';
import { z, createRoute } from '@hono/zod-openapi';

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

export { rtGet_root, rtGet_what, rtGet_addi };
