import type { Locale, Localized } from '@/shared/types';
import { LOCALES } from '@/shared/constants';

export function t<T>(locale: Locale, value: Localized<T>): T {
	return value[locale];
}

export function isLocale(value: string): value is Locale {
	return (LOCALES as readonly string[]).includes(value);
}
