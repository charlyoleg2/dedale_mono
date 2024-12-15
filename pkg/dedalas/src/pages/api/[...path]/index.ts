// api/[...path]/index.ts

import { backCfg } from "back-config";
import { apiA } from "nA";
import type { APIRoute } from "astro";

// configuration of integration of Hono
const honoIntegrated = true; // true: no network call; false: hono must run during the build time

// sub-function for writing url
const base = import.meta.env.BASE_URL;
const base2 = base === "/" ? "" : base;
function stripBaseU(iUrl: string): URL {
	const rUrl = new URL(iUrl);
	const tPath = rUrl.pathname;
	let nPath = tPath;
	if (base2 !== "") {
		nPath = tPath.replace(base2, "");
	}
	rUrl.pathname = nPath;
	return rUrl;
}
function stripBaseR(req: Request): Request {
	const tUrl = stripBaseU(req.url);
	const rReq = new Request(tUrl, req);
	return rReq;
}

const GETin: APIRoute = async ({ request }) =>
	await apiA.fetch(stripBaseR(request));
//const POSTin: APIRoute = async ({ request }) => await apiA.fetch(request);
//const PUTin: APIRoute = ({ request }) => apiA.fetch(request);

const GETout: RequestHandler = async ({ request }) => {
	//console.log(request);
	const lurl = stripBaseU(request.url);
	const url = `${backCfg.nA_host}:${backCfg.nA_port}${lurl.pathname}${lurl.search}`;
	//console.log(`dbg295: url: ${url}`);
	return fetch(url);
};

//export const ALL: APIRoute = (context) => app.fetch(context.request);
export const GET: APIRoute = honoIntegrated ? GETin : GETout;

export function getStaticPaths() {
	return [{ params: { path: "searchAll" } }];
}
