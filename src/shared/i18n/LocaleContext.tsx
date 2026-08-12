import { createContext, useContext } from 'react';
import type { LocaleContextValue } from '@/shared/i18n/LocaleContext.types';

export const LocaleContext = createContext<LocaleContextValue | null>(null);

export function useLocale(): LocaleContextValue {
	const ctx = useContext(LocaleContext);
	if (!ctx) {
		throw new Error('useLocale must be used within LocaleProvider');
	}
	return ctx;
}
