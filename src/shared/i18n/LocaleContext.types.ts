import type { Messages } from '@/shared/i18n/messages.types';
import type { Locale } from '@/shared/types';

export type LocaleContextValue = {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	m: Messages;
};
