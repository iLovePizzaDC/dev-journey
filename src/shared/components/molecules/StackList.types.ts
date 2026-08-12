import type { TechCategory } from '@/shared/types';

export interface IStackListProps {
	items: string[];
	categories?: Record<string, TechCategory>;
}
