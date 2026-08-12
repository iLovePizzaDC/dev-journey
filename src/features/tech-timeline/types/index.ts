import type { Technology } from '@/shared/types';

export interface ITechItemProps {
	tech: Technology;
}

export interface ITechYearGroupProps {
	year: number;
	techs: Technology[];
	delay?: number;
}

export interface ITechTimelineProps {
	items?: Technology[];
}
