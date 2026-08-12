import type { Messages } from '@/shared/i18n';
import type { TechCategory } from '@/shared/types';

export function categoryLabel(category: TechCategory, categories: Messages['categories']): string {
	return categories[category];
}
