import { describe, expect, it } from 'vitest';
import { isLocale, localize } from '@/shared/i18n/locale';

describe('localize()', () => {
	it('picks the value for the active locale', () => {
		const value = { de: 'Hallo', en: 'Hello' };
		expect(localize('de', value)).toBe('Hallo');
		expect(localize('en', value)).toBe('Hello');
	});

	it('works with non-string localized values', () => {
		const value = { de: ['a'], en: ['b'] };
		expect(localize('en', value)).toEqual(['b']);
	});
});

describe('isLocale()', () => {
	it('accepts supported locales only', () => {
		expect(isLocale('de')).toBe(true);
		expect(isLocale('en')).toBe(true);
		expect(isLocale('fr')).toBe(false);
		expect(isLocale('')).toBe(false);
	});
});
