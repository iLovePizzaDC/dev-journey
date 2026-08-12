import { describe, expect, it } from 'vitest';
import {
	GITHUB_API,
	LOCALES,
	NAV_LINKS,
	SECTION_IDS,
	STORAGE_KEYS,
	TECH_CATEGORIES,
	THEMES,
} from '@/shared/constants';

describe('shared constants', () => {
	it('exposes both locales', () => {
		expect(LOCALES).toEqual(['de', 'en']);
	});

	it('keeps nav links aligned with section ids', () => {
		for (const link of NAV_LINKS) {
			expect(link.href.startsWith('#')).toBe(true);
			const id = link.href.slice(1);
			expect(Object.values(SECTION_IDS)).toContain(id);
		}
	});

	it('defines storage keys and themes', () => {
		expect(STORAGE_KEYS.locale).toBeTruthy();
		expect(STORAGE_KEYS.theme).toBeTruthy();
		expect(THEMES).toEqual(['light', 'dark']);
	});

	it('lists all tech categories', () => {
		expect(TECH_CATEGORIES).toContain('frontend');
		expect(TECH_CATEGORIES).toHaveLength(6);
	});

	it('builds github repo urls', () => {
		expect(GITHUB_API.repoUrl('owner/repo')).toBe('https://api.github.com/repos/owner/repo');
	});
});
