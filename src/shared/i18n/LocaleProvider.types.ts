import type { ReactNode } from 'react';
import type { Locale } from '@/shared/types';

export interface ILocaleProviderProps {
	children: ReactNode;
	initialLocale?: Locale;
}
