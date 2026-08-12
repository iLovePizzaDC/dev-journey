import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { STORAGE_KEYS } from '@/shared/constants';
import { LocaleContext } from '@/shared/i18n/LocaleContext';
import { readInitialLocale } from '@/shared/i18n/locale';
import { messages } from '@/shared/i18n/messages';
import type { Locale } from '@/shared/types';

interface ILocaleProvider {
	children: ReactNode;
	initialLocale?: Locale;
}

export function LocaleProvider({ children, initialLocale }: ILocaleProvider) {
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
