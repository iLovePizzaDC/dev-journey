import { BADGE_CATEGORY_BORDER } from '@/shared/components/atoms/Badge.constants';
import type { IBadgeProps, ITechBadgeProps } from '@/shared/components/atoms/Badge.types';
import { useLocale } from '@/shared/i18n';
import { categoryLabel } from '@/shared/utils/labels';
import { cn } from '@/shared/utils/cn';

export function Badge({ children, category, tone = 'neutral', className }: IBadgeProps) {
	const { m } = useLocale();
	const label = category ? categoryLabel(category, m.categories) : (children ?? '');

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

export function TechBadge({ name, category, className }: ITechBadgeProps) {
	return (
		<span
			className={cn(
				'inline-flex items-center rounded-sm border border-line bg-paper-elevated px-2 py-1 text-[0.85rem] font-medium normal-case tracking-normal text-ink',
				category && BADGE_CATEGORY_BORDER[category],
				className,
			)}
			data-testid='tech-badge'
		>
			{name}
		</span>
	);
}
