import type { GitHubRepoInfo } from '@/shared/types';

export type GitHubRepoStatusMap = Map<string, GitHubRepoInfo | null>;

export type UseGitHubReposResult = {
	repos: GitHubRepoStatusMap;
	loading: boolean;
};
