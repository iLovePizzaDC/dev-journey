import { fetchGitHubRepos } from '@/shared/api/github';
import { EMPTY_GITHUB_REPOS } from '@/features/projects/constants';
import type { GitHubRepoStatusMap, UseGitHubReposResult } from '@/features/projects/types';
import { useEffect, useState } from 'react';

type CachedRepos = {
	repoIdsKey: string;
	repos: GitHubRepoStatusMap;
};

export function useGitHubRepos(repoIds: string[]): UseGitHubReposResult {
	const repoIdsKey = repoIds.join(',');
	const [cachedRepos, setCachedRepos] = useState<CachedRepos | null>(null);

	useEffect(() => {
		if (!repoIdsKey) return;

		let requestWasCancelled = false;
		const repoIdsForRequest = repoIdsKey.split(',');

		void fetchGitHubRepos(repoIdsForRequest).then((repos) => {
			if (requestWasCancelled) return;

			setCachedRepos({
				repoIdsKey,
				repos,
			});
		});

		return () => {
			requestWasCancelled = true;
		};
	}, [repoIdsKey]);

	if (!repoIdsKey) {
		return {
			repos: EMPTY_GITHUB_REPOS,
			loading: false,
		};
	}

	const cacheMatchesCurrentRequest = cachedRepos?.repoIdsKey === repoIdsKey;

	if (!cacheMatchesCurrentRequest) {
		return {
			repos: EMPTY_GITHUB_REPOS,
			loading: true,
		};
	}

	return {
		repos: cachedRepos.repos,
		loading: false,
	};
}
