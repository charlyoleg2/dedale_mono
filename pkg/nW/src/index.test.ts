// index.test.ts of nW
import { describe, it, expect } from 'vitest';
import { addi } from './index.js';

describe('tests of nW', () => {
	it('function addi()', () => {
		expect(addi(50)).toBe(55);
	});
});
