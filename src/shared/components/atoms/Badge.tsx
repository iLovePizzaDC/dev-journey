import type { BadgeTone, TechCategory } from '@/shared/types';
import { BADGE_CATEGORY_BORDER, BADGE_CATEGORY_SURFACE } from '@/shared/constants';
import { useLocale } from '@/shared/i18n';
import { categoryLabel } from '@/shared/utils/labels';
import { cn } from '@/shared/utils/cn';
import type { HTMLAttributes } from 'react';

interface IBadge {
	children?: string;
	category?: TechCategory;
	tone?: BadgeTone;
	className?: string;
}

interface ITechBadge extends HTMLAttributes<HTMLSpanElement> {
	name: string;
	category?: TechCategory;
	className?: string;
}

export function Badge({ children, category, tone = 'neutral', className }: IBadge) {
	const { messages } = useLocale();
	const label = category ? categoryLabel(category, messages.categories) : (children ?? '');

	return (
		<span
			className={cn(
				'inline-flex items-center rounded-sm border border-line bg-surface px-2 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.04em] text-muted',
				tone === 'accent' && 'border-transparent bg-accent-soft text-accent-strong',
				category && BADGE_CATEGORY_BORDER[category],
				className,
			)}
			data-category={category}
		>
			{label}
		</span>
	);
}

export function TechBadge({ name, category, className, ...rest }: ITechBadge) {
	return (
		<span
			className={cn(
				'inline-flex items-center rounded-sm border border-line bg-paper-elevated px-1.5 py-0.5 text-[0.78rem] font-medium normal-case tracking-normal text-ink',
				category && BADGE_CATEGORY_BORDER[category],
				category && BADGE_CATEGORY_SURFACE[category],
				className,
			)}
			data-testid='tech-badge'
			data-category={category}
			{...rest}
		>
			{name}
		</span>
	);
}
