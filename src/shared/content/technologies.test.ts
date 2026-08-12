import { describe, expect, it } from 'vitest';
import { groupTechnologiesByYear, sortTechnologiesByAcquisition, type Technology } from '@/content';

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
		expect(sorted.map((t) => t.id)).toEqual(['a', 'c', 'b']);
	});
});

describe('groupTechnologiesByYear', () => {
	it('groups sorted technologies by year', () => {
		const groups = groupTechnologiesByYear(sample);
		expect([...groups.keys()]).toEqual([2021, 2023]);
		expect(groups.get(2023)?.map((t) => t.name)).toEqual(['React', 'TypeScript']);
	});
});
