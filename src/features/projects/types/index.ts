import type { GitHubRepoInfo, Project } from '@/shared/types';

export type GitHubRepoStatusMap = Map<string, GitHubRepoInfo | null>;

export type UseGitHubReposResult = {
	repos: GitHubRepoStatusMap;
	loading: boolean;
};

export interface IProjectCardProps {
	project: Project;
	github?: GitHubRepoInfo | null;
	loading?: boolean;
	delay?: number;
}

export interface IProjectHighlightsProps {
	items: string[];
}

export interface IProjectsSectionProps {
	items?: Project[];
}
