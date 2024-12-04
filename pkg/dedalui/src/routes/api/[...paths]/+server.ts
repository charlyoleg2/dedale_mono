//import { backCfg } from 'back-config';
import { apiA } from 'nA';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ request }) => apiA.fetch(request);
export const POST: RequestHandler = ({ request }) => apiA.fetch(request);
//export const PUT: RequestHandler = ({ request }) => apiA.fetch(request);
//export const GET: RequestHandler = async ({ request }) => {
//	console.log(request);
//	const lurl = new URL(request.url);
//	return fetch(`${backCfg.nZ_host}:${backCfg.nZ_port}${lurl.pathname}${lurl.search}`);
//};
