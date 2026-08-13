import { createContext, useContext } from 'react';
import type { Messages } from '@/shared/i18n/messages.types';
import type { Locale } from '@/shared/types';

export type LocaleContextValue = {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	messages: Messages;
};

export const LocaleContext = createContext<LocaleContextValue | null>(null);

export function useLocale(): LocaleContextValue {
	const ctx = useContext(LocaleContext);
	if (!ctx) {
		throw new Error('useLocale must be used within LocaleProvider');
	}
	return ctx;
}
