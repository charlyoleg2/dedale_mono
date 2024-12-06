import { serve } from '@hono/node-server';
//import { Hono } from 'hono';
//import { z } from 'zod';
//import { zValidator } from '@hono/zod-validator';
import { cors } from 'hono/cors';
import { OpenAPIHono } from '@hono/zod-openapi';
import { swaggerUI } from '@hono/swagger-ui';
import { hc } from 'hono/client';
import esMain from 'es-main';
import { backCfg } from 'back-config';
import type { tApiZ } from 'nZ';
import { addi } from 'nZ';
import type { tPerson } from './nAroutes.ts';
import {
	rtGet_root,
	rtGet_argy,
	rtGet_two,
	rtGet_addi,
	rtGet_searchAll,
	rtGet_search,
	rtGet_perso
} from './nAroutes.js';

const mydb: tPerson[] = [
	{
		name: 'thierry',
		age: 678,
		lieu: 'geneve'
	},
	{
		name: 'joseph',
		age: 21,
		lieu: 'caen'
	},
	{
		name: 'paul',
		age: 51,
		lieu: 'bordeau'
	}
];

function db_list_name(): string[] {
	const rList: string[] = [];
	for (const obj of mydb) {
		rList.push(obj.name);
	}
	return rList;
}
function db_search_name(iLetters: string): string[] {
	const rList: string[] = [];
	if (iLetters.length > 0) {
		const regex = new RegExp(iLetters);
		for (const obj of mydb) {
			if (regex.test(obj.name)) {
				rList.push(obj.name);
			}
		}
	}
	return rList;
}
function db_read_person(name: string): tPerson {
	const rPerson: tPerson = { name: 'toto', age: 0, lieu: 'nirvana' };
	for (const obj of mydb) {
		if (obj.name === name) {
			rPerson.name = obj.name;
			rPerson.age = obj.age;
			rPerson.lieu = obj.lieu;
		}
	}
	return rPerson;
}

const clientnZ = hc<tApiZ>(`${backCfg.nZ_host}:${backCfg.nZ_port}/`);

//const apiA = new Hono();
const apiA = new OpenAPIHono();
// middleware cors must be instanciated before the routes
//apiA.use('/api/*', cors());
apiA.use('/*', cors({ origin: ['http://localhost:4173', 'http://localhost:5173'] }));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routeA = apiA
	.basePath('/api') // TODO: basePath breaks the generation of the openapi-doc, wait for fix of OpenAPIHono
	.openapi(
		// '/'
		rtGet_root,
		(c) => {
			return c.text('Hello Hono A!');
		}
	)
	.openapi(
		// '/argy'
		rtGet_argy,
		//zValidator('query', z.object({ namo: z.string() })),
		async (c) => {
			const query = c.req.valid('query');
			return c.text(`lala ${query.namo}`);
		}
	)
	.openapi(
		// '/two'
		rtGet_two,
		//zValidator('query', z.object({ nama: z.string() })),
		async (c) => {
			const query = c.req.valid('query');
			// const res = await apiZ.request('/apiZ/what', { query: { name: query.nama } });
			const res = await clientnZ.apiZ.what.$get({ query: { name: query.nama } });
			const resp = await res.json();
			//console.log(resp);
			return c.text(resp.msg);
		}
	)
	.openapi(
		// '/addi'
		rtGet_addi,
		//zValidator('query', z.object({ numa: z.number({ coerce: true }).int() })),
		async (c) => {
			const query = c.req.valid('query');
			const res = await clientnZ.apiZ.addi.$get({ query: { num: query.numa } });
			const resp = await res.json();
			//console.log(resp);
			const msg2 = addi(100 + query.numa);
			return c.json({ msg: resp.msg + ` :: msg2: ${msg2}` });
		}
	)
	.openapi(
		// '/searchAll'
		rtGet_searchAll,
		async (c) => {
			return c.json({ list: db_list_name() }, 200);
		}
	)
	.openapi(
		// '/search'
		rtGet_search,
		//zValidator('query', z.object({ letters: z.string() })),
		async (c) => {
			const query = c.req.valid('query');
			return c.json({ list: db_search_name(query.letters) }, 200);
		}
	)
	.openapi(
		// '/perso'
		rtGet_perso,
		//zValidator('query', z.object({ id: z.string() })),
		async (c) => {
			const query = c.req.valid('query');
			return c.json({ pers: db_read_person(query.id) }, 200);
		}
	);

if (esMain(import.meta)) {
	// swagger-ui
	apiA.get('/swagger', swaggerUI({ url: '/doc' }));
	// The OpenAPI documentation will be available at /doc
	apiA.doc('/doc', {
		openapi: '3.0.0',
		info: {
			version: '0.5.0',
			title: 'REST-API of nA'
		}
	});
	console.log(`Server is running on ${backCfg.nA_host}:${backCfg.nA_port}`);
	serve({
		fetch: apiA.fetch,
		port: backCfg.nA_port
	});
}

type tApiA = typeof routeA;
export type { tPerson, tApiA };
export { addi, apiA };
