import { useCallback, useEffect, useMemo, useState } from 'react';
import { STORAGE_KEYS } from '@/shared/constants';
import { LocaleContext } from '@/shared/i18n/LocaleContext';
import { isLocale } from '@/shared/i18n/locale';
import { messages } from '@/shared/i18n/messages';
import type { ILocaleProviderProps } from '@/shared/i18n/LocaleProvider.types';
import type { Locale } from '@/shared/types';

function readInitialLocale(): Locale {
	if (typeof window === 'undefined') return 'de';
	const stored = window.localStorage.getItem(STORAGE_KEYS.locale);
	if (stored && isLocale(stored)) return stored;
	return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
}

export function LocaleProvider({ children, initialLocale }: ILocaleProviderProps) {
	const [locale, setLocaleState] = useState<Locale>(() => initialLocale ?? readInitialLocale());

	const setLocale = useCallback((next: Locale) => {
		setLocaleState(next);
		window.localStorage.setItem(STORAGE_KEYS.locale, next);
	}, []);

	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);

	const value = useMemo(
		() => ({
			locale,
			setLocale,
			m: messages[locale],
		}),
		[locale, setLocale],
	);

	return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
