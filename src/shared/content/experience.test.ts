import { describe, expect, it } from 'vitest';
import { experiences } from '@/content';
import { sortByStartDesc } from '@/shared/lib/date';

describe('career content', () => {
	it('lists work stations newest-first when sorted', () => {
		const sorted = sortByStartDesc(experiences);
		expect(sorted[0]?.company).toBe('Würth IT');
		expect(sorted.map((job) => job.start)).toEqual(
			[...sorted.map((job) => job.start)].sort((a, b) => b.localeCompare(a)),
		);
	});

	it('includes apprenticeship and frontend roles', () => {
		const ids = experiences.map((job) => job.id);
		expect(ids).toContain('wuerth-frontend');
		expect(ids).toContain('wuerth-apprenticeship');
	});
});
