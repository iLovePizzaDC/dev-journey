import type { Project } from '@/shared/types';

export function getProjectGithubRepoIds(projects: Project[]): string[] {
	return projects.map((p) => p.githubRepo).filter((repo): repo is string => Boolean(repo));
}
