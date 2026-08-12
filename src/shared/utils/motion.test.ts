import { afterEach, describe, expect, it, vi } from 'vitest';
import { prefersReducedMotion } from '@/shared/utils/motion';

describe('prefersReducedMotion()', () => {
	afterEach(() => {
		vi.unstubAllGlobals();
	});

	it('returns true when reduced motion is preferred', () => {
		vi.stubGlobal(
			'matchMedia',
			vi.fn().mockReturnValue({ matches: true }),
		);
		expect(prefersReducedMotion()).toBe(true);
	});

	it('returns false when reduced motion is not preferred', () => {
		vi.stubGlobal(
			'matchMedia',
			vi.fn().mockReturnValue({ matches: false }),
		);
		expect(prefersReducedMotion()).toBe(false);
	});
});
