import type { Experience } from '@/shared/types';

export interface IWorkRoleCardProps {
	job: Experience;
	delay?: number;
	isLast?: boolean;
}

export interface IBulletListProps {
	items: string[];
}

export interface IExperienceSectionProps {
	items?: Experience[];
}
