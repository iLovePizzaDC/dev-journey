import type { BadgeTone, TechCategory } from '@/shared/types';

export interface IBadgeProps {
	children?: string;
	category?: TechCategory;
	tone?: BadgeTone;
	className?: string;
}

export interface ITechBadgeProps {
	name: string;
	category?: TechCategory;
	className?: string;
}
