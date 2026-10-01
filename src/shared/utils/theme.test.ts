import { afterEach, describe, expect, it } from 'vitest';
import { STORAGE_KEYS, THEME_COLORS } from '@/shared/constants';
import { applyTheme, getPreferredTheme } from '@/shared/utils/theme';

describe('getPreferredTheme', () => {
	afterEach(() => {
		window.localStorage.clear();
		document.documentElement.classList.remove('dark');
	});

	it('reads stored theme from localStorage', () => {
		window.localStorage.setItem(STORAGE_KEYS.theme, 'dark');
		expect(getPreferredTheme()).toBe('dark');
	});

	it('falls back to matchMedia when unset', () => {
		expect(getPreferredTheme()).toBe('light');
	});
});

describe('applyTheme', () => {
	afterEach(() => {
		document.documentElement.classList.remove('dark');
		document.querySelector('meta[name="theme-color"]')?.remove();
	});

	it('toggles dark class on documentElement', () => {
		applyTheme('dark');
		expect(document.documentElement.classList.contains('dark')).toBe(true);
		applyTheme('light');
		expect(document.documentElement.classList.contains('dark')).toBe(false);
	});

	it('keeps theme-color meta in sync with the active theme', () => {
		applyTheme('dark');
		expect(document.querySelector('meta[name="theme-color"]')?.getAttribute('content')).toBe(
			THEME_COLORS.dark,
		);

		applyTheme('light');
		expect(document.querySelector('meta[name="theme-color"]')?.getAttribute('content')).toBe(
			THEME_COLORS.light,
		);
	});
});
