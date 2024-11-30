// index.test.ts of nA
import { describe, it, expect } from 'vitest';
import { addi, apiA } from './index.js';

describe('tests of nA', () => {
	it('function addi()', () => {
		expect(addi(50)).toBe(55);
	});
	it('apiA GET /api', async () => {
		const res = await apiA.request('/api');
		expect(res.status).toBe(200);
		expect(await res.text()).toBe('Hello Hono A!');
	});
	it('apiA GET /api/argy', async () => {
		//const res = await apiA.request('/api/argy?namo=kifo');
		const query = new URLSearchParams({ namo: 'kifo', forfun: 'useless' });
		const res = await apiA.request(`/api/argy?${query}`);
		expect(res.status).toBe(200);
		expect(await res.text()).toBe('lala kifo');
	});
});
