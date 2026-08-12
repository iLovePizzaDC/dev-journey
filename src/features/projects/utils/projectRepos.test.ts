import { describe, expect, it } from 'vitest';
import { getProjectGithubRepoIds } from '@/features/projects/utils/projectRepos';
import type { Project } from '@/shared/types';

describe('getProjectGithubRepoIds', () => {
	it('extracts githubRepo ids and skips missing', () => {
		const projects: Project[] = [
			{ id: '1', name: 'One', description: { de: '', en: '' }, stack: [], githubRepo: 'owner/one' },
			{ id: '2', name: 'Two', description: { de: '', en: '' }, stack: [] },
			{
				id: '3',
				name: 'Three',
				description: { de: '', en: '' },
				stack: [],
				githubRepo: 'owner/three',
			},
		];

		expect(getProjectGithubRepoIds(projects)).toEqual(['owner/one', 'owner/three']);
	});
});
