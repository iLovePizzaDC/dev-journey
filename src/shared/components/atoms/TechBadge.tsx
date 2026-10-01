import type { TechCategory } from '@/shared/types';
import { BADGE_CATEGORY_BORDER, BADGE_CATEGORY_SURFACE } from '@/shared/constants';
import { cn } from '@/shared/utils/cn';
import type { HTMLAttributes } from 'react';

interface ITechBadge extends HTMLAttributes<HTMLSpanElement> {
	name: string;
	category?: TechCategory;
	className?: string;
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
