import { LOCALE_LABELS, LOCALES, useLocale } from '@/shared/i18n';
import { cn } from '@/shared/utils/cn';

interface ILanguageToggle {
	className?: string;
}

export function LanguageToggle({ className }: ILanguageToggle) {
	const { locale, setLocale, messages } = useLocale();

	return (
		<div
			className={cn(
				'inline-flex items-center gap-1 rounded-sm border border-line p-0.5',
				className,
			)}
			role='group'
			aria-label={messages.common.languageSwitch}
		>
			{LOCALES.map((localeCode) => {
				const isActive = locale === localeCode;

				return (
					<button
						key={localeCode}
						type='button'
						className={cn(
							'cursor-pointer rounded-sm px-2 py-1 text-xs font-semibold tracking-wide transition duration-200',
							isActive ? 'bg-ink text-paper' : 'bg-transparent text-muted hover:text-ink',
						)}
						aria-pressed={isActive}
						onClick={() => setLocale(localeCode)}
					>
						{LOCALE_LABELS[localeCode]}
					</button>
				);
			})}
		</div>
	);
}
