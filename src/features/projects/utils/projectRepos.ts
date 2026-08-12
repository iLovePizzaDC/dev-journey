import type { Project } from '@/shared/types';

export function getProjectGithubRepoIds(projects: Project[]): string[] {
	return projects
		.map((project) => project.githubRepo)
		.filter((repo): repo is string => Boolean(repo));
}
