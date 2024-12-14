// api/[...path]/index.ts

import { backCfg } from 'back-config';
import { apiA } from 'nA';
import type { APIRoute } from 'astro';

// configuration of integration of Hono
const honoIntegrated = true; // true: no network call; false: hono must run during the build time


const GETin: APIRoute = async ({ request }) => await apiA.fetch(request);
//const POSTin: APIRoute = async ({ request }) => await apiA.fetch(request);
//const PUTin: APIRoute = ({ request }) => apiA.fetch(request);

const GETout: RequestHandler = async ({ request }) => {
	//console.log(request);
	const lurl = new URL(request.url);
	const url = `${backCfg.nA_host}:${backCfg.nA_port}${lurl.pathname}${lurl.search}`;
	//console.log(`dbg295: url: ${url}`);
	return fetch(url);
};

//export const ALL: APIRoute = (context) => app.fetch(context.request);
export const GET: APIRoute = honoIntegrated ? GETin : GETout;

export function getStaticPaths() {
	return [
		{ params: { path: 'searchAll' } }
	]
}
