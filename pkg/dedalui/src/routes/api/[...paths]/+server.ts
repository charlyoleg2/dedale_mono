import { apiA } from 'nA';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ request }) => apiA.fetch(request);
export const POST: RequestHandler = ({ request }) => apiA.fetch(request);
//export const PUT: RequestHandler = ({ request }) => apiA.fetch(request);
//export const GET: RequestHandler = async ({ request }) => {
//	console.log(request);
//	const lurl = new URL(request.url);
//	return fetch(`http://localhost:3000${lurl.pathname}${lurl.search}`);
//};
