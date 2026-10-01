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

export function githubRepoUrl(repoFullName: string): string {
	return `https://github.com/${repoFullName}`;
}

export function githubProfileUrl(username: string): string {
	return `https://github.com/${username}`;
}

function toGitHubRepoInfo(apiRepo: GitHubApiRepo): GitHubRepoInfo {
	return {
		description: apiRepo.description,
		pushedAt: apiRepo.pushed_at,
		language: apiRepo.language,
		stars: apiRepo.stargazers_count,
	};
}

export async function fetchGitHubRepo(
	repoFullName: string,
	fetchFn: typeof fetch = fetch,
): Promise<GitHubRepoInfo> {
	const response = await fetchFn(GITHUB_API.repoUrl(repoFullName), {
		headers: {
			Accept: GITHUB_API.accept,
			'X-GitHub-Api-Version': GITHUB_API.version,
		},
	});

	if (!response.ok) {
		throw new GitHubApiError(
			`GitHub API error for ${repoFullName}: ${response.status}`,
			response.status,
		);
	}

	const apiRepo = (await response.json()) as GitHubApiRepo;

	return toGitHubRepoInfo(apiRepo);
}

async function fetchRepoOrNull(
	repoFullName: string,
	fetchFn: typeof fetch,
): Promise<readonly [string, GitHubRepoInfo | null]> {
	try {
		const repoInfo = await fetchGitHubRepo(repoFullName, fetchFn);
		return [repoFullName, repoInfo];
	} catch {
		return [repoFullName, null];
	}
}

export async function fetchGitHubRepos(
	repoFullNames: string[],
	fetchFn: typeof fetch = fetch,
): Promise<Map<string, GitHubRepoInfo | null>> {
	const results = await Promise.all(
		repoFullNames.map((repoFullName) => fetchRepoOrNull(repoFullName, fetchFn)),
	);

	return new Map(results);
}
