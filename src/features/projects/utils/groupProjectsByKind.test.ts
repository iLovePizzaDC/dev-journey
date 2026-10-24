import { describe, expect, it } from 'vitest';
import { groupProjectsByKind } from '@/features/projects/utils/groupProjectsByKind';
import type { Project } from '@/shared/types';

function project(partial: Pick<Project, 'id' | 'kind'>): Project {
	return {
		id: partial.id,
		name: partial.id,
		kind: partial.kind,
		description: { de: '', en: '' },
		stack: [],
	};
}

describe('groupProjectsByKind', () => {
	it('splits projects into app and side while preserving order', () => {
		const projects = [
			project({ id: 'app-1', kind: 'app' }),
			project({ id: 'side-1', kind: 'side' }),
			project({ id: 'app-2', kind: 'app' }),
			project({ id: 'side-2', kind: 'side' }),
		];

		expect(groupProjectsByKind(projects)).toEqual({
			app: [projects[0], projects[2]],
			side: [projects[1], projects[3]],
		});
	});

	it('returns empty arrays when a kind is missing', () => {
		const projects = [project({ id: 'only-side', kind: 'side' })];

		expect(groupProjectsByKind(projects)).toEqual({
			app: [],
			side: [projects[0]],
		});
	});
});
