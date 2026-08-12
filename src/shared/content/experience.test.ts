import { describe, expect, it } from 'vitest';
import { experiences } from '@/shared/content';
import { sortByStartDesc } from '@/shared/utils/date';

describe('career content', () => {
	it('lists work stations newest-first when sorted', () => {
		const sorted = sortByStartDesc(experiences);
		expect(sorted[0]?.company).toBe('EckStack');
		expect(sorted.map((job) => job.start)).toEqual(
			[...sorted.map((job) => job.start)].sort((left, right) => right.localeCompare(left)),
		);
	});

	it('includes apprenticeship and frontend roles', () => {
		const ids = experiences.map((job) => job.id);
		expect(ids).toContain('eckstack-senior-fullstack');
		expect(ids).toContain('wuerth-frontend');
		expect(ids).toContain('wuerth-apprenticeship');
	});
});
