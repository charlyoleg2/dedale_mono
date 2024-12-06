//import { backCfg } from 'back-config';
import { backCfg } from 'back-config';
import { apiA } from 'nA';
import type { RequestHandler } from '@sveltejs/kit';
import { honoIntegrated } from '$lib/front-config';

const GETin: RequestHandler = async ({ request }) => await apiA.fetch(request);
const POSTin: RequestHandler = async ({ request }) => await apiA.fetch(request);
//const PUTin: RequestHandler = ({ request }) => apiA.fetch(request);

const GETout: RequestHandler = async ({ request }) => {
	//console.log(request);
	const lurl = new URL(request.url);
	return fetch(`${backCfg.nZ_host}:${backCfg.nZ_port}${lurl.pathname}${lurl.search}`);
};
const POSTout: RequestHandler = async ({ request }) => {
	//console.log(request);
	const lurl = new URL(request.url);
	const reqOpt = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: request.body
	};
	return fetch(`${backCfg.nZ_host}:${backCfg.nZ_port}${lurl.pathname}${lurl.search}`, reqOpt);
};

export const GET: RequestHandler = honoIntegrated.inServer ? GETin : GETout;
export const POST: RequestHandler = honoIntegrated.inServer ? POSTin : POSTout;
//export const PUT: RequestHandler = honoIntegrated.inServer ? PUTin : PUTout;
