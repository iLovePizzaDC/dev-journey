import type { TechCategoryFilter } from '@/features/tech-timeline/types';
import type { Technology } from '@/shared/types';

function acquisitionSortKey(tech: Technology): number {
	const month = tech.acquiredMonth ?? 1;
	return tech.acquiredYear * 100 + month;
}

export function sortTechnologiesByAcquisition(items: Technology[]): Technology[] {
	return [...items].sort((left, right) => {
		const leftKey = acquisitionSortKey(left);
		const rightKey = acquisitionSortKey(right);

		if (leftKey !== rightKey) {
			return leftKey - rightKey;
		}

		return left.name.localeCompare(right.name);
	});
}

export function groupTechnologiesByYear(items: Technology[]): Map<number, Technology[]> {
	const sortedTechs = sortTechnologiesByAcquisition(items);
	const techsByYear = new Map<number, Technology[]>();

	for (const tech of sortedTechs) {
		const techsInYear = techsByYear.get(tech.acquiredYear) ?? [];
		techsInYear.push(tech);
		techsByYear.set(tech.acquiredYear, techsInYear);
	}

	return techsByYear;
}

export function filterTechnologiesByCategory(
	items: Technology[],
	category: TechCategoryFilter,
): Technology[] {
	if (category === 'all') return items;

	return items.filter((tech) => tech.category === category);
}
