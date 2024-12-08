//import { backCfg } from 'back-config';
import { backCfg } from 'back-config';
import { apiA } from 'nA';
import type { RequestHandler } from '@sveltejs/kit';
import { honoIntegrated } from '$lib/front-config';

const GETin: RequestHandler = async ({ request }) => await apiA.fetch(request);
//const POSTin: RequestHandler = async ({ request }) => await apiA.fetch(request);
//const PUTin: RequestHandler = ({ request }) => apiA.fetch(request);

const GETout: RequestHandler = async ({ request }) => {
	//console.log(request);
	const lurl = new URL(request.url);
	const url = `${backCfg.nA_host}:${backCfg.nA_port}${lurl.pathname}${lurl.search}`;
	//console.log(`dbg295: url: ${url}`);
	return fetch(url);
};
//const POSTout: RequestHandler = async ({ request }) => {
//	//console.log(request);
//	const lurl = new URL(request.url);
//	const url = `${backCfg.nA_host}:${backCfg.nA_port}${lurl.pathname}${lurl.search}`;
//	//console.log(`dbg295: url: ${url}`);
//	const reqOpt = {
//		method: 'POST',
//		headers: { 'Content-Type': 'application/json' },
//		body: request.body
//	};
//	return fetch(url, reqOpt);
//};

export const GET: RequestHandler = honoIntegrated.inServerNFetch ? GETin : GETout;
//export const POST: RequestHandler = honoIntegrated.inServerNFetch ? POSTin : POSTout;
//export const PUT: RequestHandler = honoIntegrated.inServerNFetch ? PUTin : PUTout;

///** @type {import('./$types').EntryGenerator} */
//export function entries() {
//	return [
//		{ paths: 'searchAll' }
//		//{ paths: 'addi' }
//	];
//}
//export const prerender = true; // +server.ts prerender doesnot inherit from +layout.ts
