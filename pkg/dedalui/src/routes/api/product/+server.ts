import { apiA } from 'nA';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ request }) => apiA.fetch(request);
//export const POST: RequestHandler = ({ request }) => apiA.fetch(request);
