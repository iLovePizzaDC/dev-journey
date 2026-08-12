import { afterEach, describe, expect, it } from 'vitest';
import { STORAGE_KEYS } from '@/shared/constants';
import { applyTheme, getPreferredTheme } from '@/shared/theme/theme.utils';

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
	});

	it('toggles dark class on documentElement', () => {
		applyTheme('dark');
		expect(document.documentElement.classList.contains('dark')).toBe(true);
		applyTheme('light');
		expect(document.documentElement.classList.contains('dark')).toBe(false);
	});
});
