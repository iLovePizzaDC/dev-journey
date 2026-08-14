import { describe, expect, it } from 'vitest';
import { NAV_LINKS, NAV_SECTION_IDS } from '@/shared/constants';

describe('shared constants', () => {
	it('keeps nav links aligned with section ids', () => {
		for (const link of NAV_LINKS) {
			expect(NAV_SECTION_IDS).toContain(link.sectionId);
			expect(link.sectionId).toBe(link.labelKey);
		}
	});
});
