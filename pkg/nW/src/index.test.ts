// index.test.ts of nW
import { describe, it, expect } from 'vitest';
import { addi, apiW } from './index.js';

describe('tests of nW', () => {
	it('function addi()', () => {
		expect(addi(50)).toBe(55);
	});
	it('apiW GET /apiW', async () => {
		const res = await apiW.request('/apiW');
		expect(res.status).toBe(200);
		expect(await res.text()).toBe('Hello Hono!');
	});
});
