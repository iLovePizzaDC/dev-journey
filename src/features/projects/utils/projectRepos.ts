import type { Project } from '@/shared/types';

export function getProjectGithubRepoIds(projects: Project[]): string[] {
	const repoIds: string[] = [];

	for (const project of projects) {
		if (project.githubRepo) {
			repoIds.push(project.githubRepo);
		}
	}

	return repoIds;
}
