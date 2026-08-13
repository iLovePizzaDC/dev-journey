import type { Locale, Localized } from '@/shared/types';
import { LOCALES, STORAGE_KEYS } from '@/shared/constants';

export function localize<T>(locale: Locale, value: Localized<T>): T {
	return value[locale];
}

export function isLocale(value: string): value is Locale {
	return (LOCALES as readonly string[]).includes(value);
}

export function readInitialLocale(): Locale {
	if (typeof window === 'undefined') return 'de';
	const stored = window.localStorage.getItem(STORAGE_KEYS.locale);
	if (stored && isLocale(stored)) return stored;
	return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
}
