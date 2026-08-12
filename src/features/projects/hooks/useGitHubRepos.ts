import { fetchGitHubRepos } from '@/shared/lib/github';
import type { GitHubRepoStatusMap, UseGitHubReposResult } from '@/features/projects/projects.types';
import { useEffect, useState } from 'react';

const EMPTY_REPOS: GitHubRepoStatusMap = new Map();

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
		return { repos: EMPTY_REPOS, loading: false };
	}

	const ready = data?.key === key;
	return {
		repos: ready ? data.repos : EMPTY_REPOS,
		loading: !ready,
	};
}
