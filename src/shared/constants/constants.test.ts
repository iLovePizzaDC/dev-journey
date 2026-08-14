import { describe, expect, it } from 'vitest';
import {
	BADGE_CATEGORY_BORDER,
	BADGE_CATEGORY_SURFACE,
	BUTTON_VARIANT_CLASS,
	GITHUB_API,
	LOCALES,
	NAV_LINKS,
	NAV_SECTION_IDS,
	SCROLL_SPY_BOTTOM_OFFSET_PX,
	SCROLL_SPY_ROOT_MARGIN,
	SCROLL_SPY_THRESHOLDS,
	STORAGE_KEYS,
	TECH_CATEGORIES,
	TEXT_VARIANT_CLASS,
	THEMES,
} from '@/shared/constants';

describe('shared constants', () => {
	it('exposes both locales', () => {
		expect(LOCALES).toEqual(['de', 'en']);
	});

	it('keeps nav links aligned with section ids', () => {
		for (const link of NAV_LINKS) {
			expect(NAV_SECTION_IDS).toContain(link.sectionId);
			expect(link.sectionId).toBe(link.labelKey);
		}
	});

	it('defines storage keys and themes', () => {
		expect(STORAGE_KEYS.locale).toBeTruthy();
		expect(STORAGE_KEYS.theme).toBeTruthy();
		expect(THEMES).toEqual(['light', 'dark']);
	});

	it('lists all tech categories', () => {
		expect(TECH_CATEGORIES).toContain('frontend');
		expect(TECH_CATEGORIES).toContain('database');
		expect(TECH_CATEGORIES).toHaveLength(7);
	});

	it('builds github repo urls', () => {
		expect(GITHUB_API.repoUrl('owner/repo')).toBe('https://api.github.com/repos/owner/repo');
	});

	it('exposes scroll spy thresholds and layout tuning', () => {
		expect(SCROLL_SPY_THRESHOLDS).toHaveLength(11);
		expect(SCROLL_SPY_THRESHOLDS[0]).toBe(0);
		expect(SCROLL_SPY_THRESHOLDS[10]).toBe(1);
		expect(SCROLL_SPY_ROOT_MARGIN).toContain('%');
		expect(SCROLL_SPY_BOTTOM_OFFSET_PX).toBeGreaterThan(0);
	});

	it('exposes UI variant and category class maps', () => {
		expect(BUTTON_VARIANT_CLASS.primary).toBeTruthy();
		expect(TEXT_VARIANT_CLASS.body).toBeTruthy();
		expect(BADGE_CATEGORY_BORDER.frontend).toBeTruthy();
		expect(BADGE_CATEGORY_SURFACE.frontend).toBeTruthy();
	});
});
