import { describe, expect, it, vi } from 'vitest';
import {
	fetchGitHubRepo,
	fetchGitHubRepos,
	githubProfileUrl,
	githubRepoUrl,
	GitHubApiError,
} from '@/shared/api/github';

function jsonResponse(body: unknown, status = 200): Response {
	return {
		ok: status >= 200 && status < 300,
		status,
		json: async () => body,
	} as Response;
}

describe('githubRepoUrl', () => {
	it('builds a github url', () => {
		expect(githubRepoUrl('iLovePizzaDC/trading-dashboard')).toBe(
			'https://github.com/iLovePizzaDC/trading-dashboard',
		);
	});
});

describe('githubProfileUrl', () => {
	it('builds a github profile url', () => {
		expect(githubProfileUrl('iLovePizzaDC')).toBe('https://github.com/iLovePizzaDC');
	});
});

describe('fetchGitHubRepo', () => {
	it('maps API payload to GitHubRepoInfo', async () => {
		const fetchFn = vi.fn().mockResolvedValue(
			jsonResponse({
				description: 'Dashboard',
				pushed_at: '2026-08-01T10:00:00Z',
				language: 'TypeScript',
				stargazers_count: 3,
			}),
		);

		const result = await fetchGitHubRepo('iLovePizzaDC/trading-dashboard', fetchFn);

		expect(result).toEqual({
			description: 'Dashboard',
			pushedAt: '2026-08-01T10:00:00Z',
			language: 'TypeScript',
			stars: 3,
		});
		expect(fetchFn).toHaveBeenCalledOnce();
	});

	it('throws GitHubApiError on non-ok responses', async () => {
		const fetchFn = vi.fn().mockResolvedValue(jsonResponse({}, 404));

		await expect(fetchGitHubRepo('missing/repo', fetchFn)).rejects.toBeInstanceOf(GitHubApiError);
	});
});

describe('fetchGitHubRepos', () => {
	it('returns null for failed repos without failing the batch', async () => {
		const fetchFn = vi
			.fn()
			.mockResolvedValueOnce(
				jsonResponse({
					description: null,
					pushed_at: '2026-01-01T00:00:00Z',
					language: null,
					stargazers_count: 0,
				}),
			)
			.mockResolvedValueOnce(jsonResponse({}, 500));

		const map = await fetchGitHubRepos(['a/b', 'c/d'], fetchFn);

		expect(map.get('a/b')?.pushedAt).toBe('2026-01-01T00:00:00Z');
		expect(map.get('c/d')).toBeNull();
	});
});
