import type { Technology } from '@/shared/types';

export function sortTechnologiesByAcquisition(items: Technology[]): Technology[] {
	return [...items].sort((a, b) => {
		const aKey = a.acquiredYear * 100 + (a.acquiredMonth ?? 1);
		const bKey = b.acquiredYear * 100 + (b.acquiredMonth ?? 1);
		if (aKey !== bKey) return aKey - bKey;
		return a.name.localeCompare(b.name);
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
