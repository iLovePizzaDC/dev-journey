import { LOCALE_LABELS, LOCALES, useLocale } from '@/shared/i18n';
import type { ILanguageToggleProps } from '@/shared/components/atoms/Toggle.types';
import { cn } from '@/shared/utils/cn';

export function LanguageToggle({ className }: ILanguageToggleProps) {
	const { locale, setLocale, m } = useLocale();

	return (
		<div
			className={cn(
				'inline-flex items-center gap-1 rounded-sm border border-line p-0.5',
				className,
			)}
			role='group'
			aria-label={m.common.languageSwitch}
		>
			{LOCALES.map((code) => (
				<button
					key={code}
					type='button'
					className={cn(
						'cursor-pointer rounded-sm px-2 py-1 text-xs font-semibold tracking-wide transition duration-200',
						locale === code ? 'bg-ink text-paper' : 'bg-transparent text-muted hover:text-ink',
					)}
					aria-pressed={locale === code}
					onClick={() => setLocale(code)}
				>
					{LOCALE_LABELS[code]}
				</button>
			))}
		</div>
	);
}
