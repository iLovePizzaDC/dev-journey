import type { ButtonVariant } from '@/shared/types';

export const BUTTON_VARIANT_CLASS: Record<ButtonVariant, string> = {
	primary:
		'border-transparent bg-ink text-paper hover:-translate-y-px hover:bg-accent-strong hover:text-white dark:hover:text-ink',
	ghost: 'border-line bg-transparent text-ink hover:border-ink hover:bg-surface',
	link: 'border-none bg-transparent p-0 font-semibold text-accent-strong hover:text-ink',
};
