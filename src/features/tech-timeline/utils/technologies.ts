import type { TechCategoryFilter } from '@/features/tech-timeline/types';
import type { Technology } from '@/shared/types';

export function sortTechnologiesByAcquisition(items: Technology[]): Technology[] {
	return [...items].sort((left, right) => {
		const leftKey = left.acquiredYear * 100 + (left.acquiredMonth ?? 1);
		const rightKey = right.acquiredYear * 100 + (right.acquiredMonth ?? 1);
		if (leftKey !== rightKey) return leftKey - rightKey;
		return left.name.localeCompare(right.name);
	});
}

export function groupTechnologiesByYear(items: Technology[]): Map<number, Technology[]> {
	const sorted = sortTechnologiesByAcquisition(items);
	const groups = new Map<number, Technology[]>();
	for (const tech of sorted) {
		const list = groups.get(tech.acquiredYear) ?? [];
		list.push(tech);
		groups.set(tech.acquiredYear, list);
	}
	return groups;
}

export function filterTechnologiesByCategory(
	items: Technology[],
	category: TechCategoryFilter,
): Technology[] {
	if (category === 'all') return items;
	return items.filter((item) => item.category === category);
}
