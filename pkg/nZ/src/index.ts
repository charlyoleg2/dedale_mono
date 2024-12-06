import { serve } from '@hono/node-server';
//import { Hono } from 'hono';
//import { z } from 'zod';
//import { zValidator } from '@hono/zod-validator';
//import { z, createRoute, OpenAPIHono } from '@hono/zod-openapi';
import { OpenAPIHono } from '@hono/zod-openapi';
import { swaggerUI } from '@hono/swagger-ui';
import { hc } from 'hono/client';
import esMain from 'es-main';
import { backCfg } from 'back-config';
import { rtGet_root, rtGet_what, rtGet_addi } from './nZroutes.js';

function addi(aOne: number): number {
	const rNum = aOne + 5;
	return rNum;
}

// openapi app-apiZ
const apiZ = new OpenAPIHono();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routeZ = apiZ
	.basePath('/apiZ') // TODO: basePath breaks the generation of the openapi-doc, wait for fix of OpenAPIHono
	.openapi(rtGet_root, (c) => {
		return c.text('Hello Hono!');
	})
	.openapi(
		//'/what',
		rtGet_what,
		(c) => {
			const query = c.req.valid('query');
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
	apiZ.get('/swagger', swaggerUI({ url: '/doc' }));
	// The OpenAPI documentation will be available at /doc
	apiZ.doc('/doc', {
		openapi: '3.0.0',
		info: {
			version: '1.0.0',
			title: 'REST-API of nZ'
		}
	});
	console.log(`Server is running on ${backCfg.nZ_host}:${backCfg.nZ_port}`);
	serve({
		fetch: apiZ.fetch,
		port: backCfg.nZ_port
	});
}

type tApiZ = typeof routeZ;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tmpClient = hc<tApiZ>('');
type tClientZ = typeof tmpClient;
const preClientZ = (...args: Parameters<typeof hc>): tClientZ => hc<tApiZ>(...args);
export type { tClientZ };
export { addi, apiZ, preClientZ };
