// index.test.ts of nZ
import { describe, it, expect } from 'vitest';
import { addi, apiZ } from './index.js';

describe('tests of nZ', () => {
	it('function addi()', () => {
		expect(addi(50)).toBe(55);
	});
	it('apiZ GET /apiZ', async () => {
		const res = await apiZ.request('/apiZ');
		expect(res.status).toBe(200);
		expect(await res.text()).toBe('Hello Hono!');
	});
});
