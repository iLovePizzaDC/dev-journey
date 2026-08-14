import { describe, expect, it } from 'vitest';
import type { Technology } from '@/shared/types';
import {
	filterTechnologiesByCategory,
	groupTechnologiesByYear,
	sortTechnologiesByAcquisition,
} from '@/features/tech-timeline/utils/technologies';

const sample: Technology[] = [
	{
		id: 'b',
		name: 'TypeScript',
		category: 'frontend',
		acquiredYear: 2023,
		acquiredMonth: 3,
	},
	{
		id: 'a',
		name: 'HTML5',
		category: 'frontend',
		acquiredYear: 2021,
		acquiredMonth: 9,
	},
	{
		id: 'c',
		name: 'React',
		category: 'frontend',
		acquiredYear: 2023,
		acquiredMonth: 1,
	},
];

describe('sortTechnologiesByAcquisition', () => {
	it('sorts by year then month then name', () => {
		const sorted = sortTechnologiesByAcquisition(sample);
		expect(sorted.map((tech) => tech.id)).toEqual(['a', 'c', 'b']);
	});
});

describe('groupTechnologiesByYear', () => {
	it('groups sorted technologies by year', () => {
		const groups = groupTechnologiesByYear(sample);
		expect([...groups.keys()]).toEqual([2021, 2023]);
		expect(groups.get(2023)?.map((tech) => tech.name)).toEqual(['React', 'TypeScript']);
	});
});

describe('filterTechnologiesByCategory', () => {
	it('returns all items when filter is all', () => {
		expect(filterTechnologiesByCategory(sample, 'all')).toEqual(sample);
	});

	it('keeps only matching categories', () => {
		const mixed: Technology[] = [
			...sample,
			{ id: 'd', name: 'Jest', category: 'testing', acquiredYear: 2023 },
		];
		expect(filterTechnologiesByCategory(mixed, 'testing').map((tech) => tech.id)).toEqual(['d']);
	});
});
