import type { GitHubApiRepo } from '@/shared/api/github.types';
import { GITHUB_API } from '@/shared/constants';
import type { GitHubRepoInfo } from '@/shared/types';

export class GitHubApiError extends Error {
	readonly status?: number;

	constructor(message: string, status?: number) {
		super(message);
		this.name = 'GitHubApiError';
		this.status = status;
	}
}

export function githubRepoUrl(repo: string): string {
	return `https://github.com/${repo}`;
}

export function githubProfileUrl(username: string): string {
	return `https://github.com/${username}`;
}

export async function fetchGitHubRepo(
	repo: string,
	fetchFn: typeof fetch = fetch,
): Promise<GitHubRepoInfo> {
	const response = await fetchFn(GITHUB_API.repoUrl(repo), {
		headers: {
			Accept: GITHUB_API.accept,
			'X-GitHub-Api-Version': GITHUB_API.version,
		},
	});

	if (!response.ok) {
		throw new GitHubApiError(`GitHub API error for ${repo}: ${response.status}`, response.status);
	}

	const data = (await response.json()) as GitHubApiRepo;

	return {
		fullName: data.full_name,
		description: data.description,
		htmlUrl: data.html_url,
		pushedAt: data.pushed_at,
		language: data.language,
		stars: data.stargazers_count,
		topics: data.topics ?? [],
	};
}

export async function fetchGitHubRepos(
	repos: string[],
	fetchFn: typeof fetch = fetch,
): Promise<Map<string, GitHubRepoInfo | null>> {
	const results = await Promise.all(
		repos.map(async (repo) => {
			try {
				const info = await fetchGitHubRepo(repo, fetchFn);
				return [repo, info] as const;
			} catch {
				return [repo, null] as const;
			}
		}),
	);
	return new Map(results);
}
