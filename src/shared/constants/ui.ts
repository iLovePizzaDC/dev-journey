import type { ButtonVariant, TechCategory, TextVariant } from '@/shared/types';

export const BADGE_CATEGORY_BORDER: Record<TechCategory, string> = {
	frontend: 'border-cat-frontend/35',
	backend: 'border-cat-backend/35',
	database: 'border-cat-database/35',
	testing: 'border-cat-testing/35',
	devops: 'border-cat-devops/35',
	tools: 'border-cat-tools/35',
	process: 'border-cat-process/35',
};

export const BADGE_CATEGORY_SURFACE: Record<TechCategory, string> = {
	frontend: 'bg-cat-frontend/10',
	backend: 'bg-cat-backend/10',
	database: 'bg-cat-database/10',
	testing: 'bg-cat-testing/10',
	devops: 'bg-cat-devops/10',
	tools: 'bg-cat-tools/10',
	process: 'bg-cat-process/10',
};

export const TEXT_VARIANT_CLASS: Record<TextVariant, string> = {
	display:
		'font-display text-[clamp(2.75rem,7vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-ink',
	title:
		'font-display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-ink',
	subtitle: 'font-display text-[1.15rem] font-semibold leading-snug tracking-[-0.02em] text-ink',
	body: 'text-base text-ink-soft',
	meta: 'text-sm text-muted',
	label: 'text-xs font-semibold uppercase tracking-[0.12em] text-muted',
};

export const BUTTON_VARIANT_CLASS: Record<ButtonVariant, string> = {
	primary:
		'border-transparent bg-ink text-paper hover:-translate-y-px hover:bg-accent-strong hover:text-white dark:hover:text-black',
	ghost: 'border-line bg-transparent text-ink hover:border-ink hover:bg-surface',
	link: 'border-none bg-transparent p-0 font-semibold text-accent-strong hover:text-ink',
};
