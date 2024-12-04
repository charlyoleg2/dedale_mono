import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { hc } from 'hono/client';
import esMain from 'es-main';
import type { tApiW } from 'nZ';
import { addi } from 'nZ';

interface tPerson {
	name: string;
	age: number;
	lieu: string;
}

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

const apiA = new Hono();
const clientnZ = hc<tApiW>('http://localhost:3010/');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routeA = apiA
	.basePath('/api')
	.get('/', (c) => {
		return c.text('Hello Hono A!');
	})
	.get('/argy', zValidator('query', z.object({ namo: z.string() })), async (c) => {
		const query = c.req.valid('query');
		return c.text(`lala ${query.namo}`);
	})
	.get('/two', zValidator('query', z.object({ nama: z.string() })), async (c) => {
		const query = c.req.valid('query');
		// const res = await apiW.request('/apiW/what', { query: { name: query.nama } });
		const res = await clientnZ.apiW.what.$get({ query: { name: query.nama } });
		const resp = await res.json();
		//console.log(resp);
		return c.text(resp.msg);
	})
	.get(
		'/addi',
		zValidator('query', z.object({ numa: z.number({ coerce: true }).int() })),
		async (c) => {
			const query = c.req.valid('query');
			const res = await clientnZ.apiW.addi.$get({ query: { num: query.numa } });
			const resp = await res.json();
			//console.log(resp);
			const toto = addi(3).toString();
			return c.text(resp.msg + '   ' + toto);
		}
	)
	.get('/searchAll', async (c) => {
		return c.json({ list: db_list_name() }, 200);
	})
	.get('/search', zValidator('query', z.object({ letters: z.string() })), async (c) => {
		const query = c.req.valid('query');
		return c.json({ list: db_search_name(query.letters) }, 200);
	})
	.get('/perso', zValidator('query', z.object({ id: z.string() })), async (c) => {
		const query = c.req.valid('query');
		return c.json({ pers: db_read_person(query.id) }, 200);
	});

if (esMain(import.meta)) {
	const port = 3000;
	console.log(`Server is running on http://localhost:${port}`);
	serve({
		fetch: apiA.fetch,
		port
	});
}

type tApiA = typeof routeA;
export type { tPerson, tApiA };
export { addi, apiA };
