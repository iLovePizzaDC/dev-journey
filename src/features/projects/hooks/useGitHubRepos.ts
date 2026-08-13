import { fetchGitHubRepos } from '@/shared/api/github';
import { EMPTY_GITHUB_REPOS } from '@/features/projects/constants';
import type { GitHubRepoStatusMap, UseGitHubReposResult } from '@/features/projects/types';
import { useEffect, useState } from 'react';

export function useGitHubRepos(repoIds: string[]): UseGitHubReposResult {
	const key = repoIds.join(',');
	const [data, setData] = useState<{ key: string; repos: GitHubRepoStatusMap } | null>(null);

	useEffect(() => {
		if (!key) return;

		let cancelled = false;

		void fetchGitHubRepos(key.split(',')).then((repos) => {
			if (!cancelled) {
				setData({ key, repos });
			}
		});

		return () => {
			cancelled = true;
		};
	}, [key]);

	if (!key) {
		return { repos: EMPTY_GITHUB_REPOS, loading: false };
	}

	const ready = data?.key === key;
	return {
		repos: ready ? data.repos : EMPTY_GITHUB_REPOS,
		loading: !ready,
	};
}
