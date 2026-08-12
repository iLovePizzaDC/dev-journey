export type { Locale, Localized } from '@/shared/types';
export { LOCALES, LOCALE_LABELS } from '@/shared/constants';
export { t, isLocale, readInitialLocale } from '@/shared/i18n/locale';
export { messages } from '@/shared/i18n/messages';
export type { Messages } from '@/shared/i18n/messages.types';
export { LocaleProvider } from '@/shared/i18n/LocaleProvider';
export { useLocale } from '@/shared/i18n/LocaleContext';
