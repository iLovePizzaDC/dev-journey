import type { IconComponent } from '@/shared/types';

export type AboutFact = {
	icon: IconComponent;
	label: string;
	value: string;
	href?: string;
};
