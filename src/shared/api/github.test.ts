import { describe, expect, it, vi } from 'vitest';
import {
	fetchGitHubRepo,
	fetchGitHubRepos,
	githubRepoUrl,
	GitHubApiError,
} from '@/shared/lib/github';

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

describe('fetchGitHubRepo', () => {
	it('maps API payload to GitHubRepoInfo', async () => {
		const fetchFn = vi.fn().mockResolvedValue(
			jsonResponse({
				full_name: 'iLovePizzaDC/trading-dashboard',
				description: 'Dashboard',
				html_url: 'https://github.com/iLovePizzaDC/trading-dashboard',
				pushed_at: '2026-08-01T10:00:00Z',
				language: 'TypeScript',
				stargazers_count: 3,
				topics: ['vite', 'react'],
			}),
		);

		const result = await fetchGitHubRepo('iLovePizzaDC/trading-dashboard', fetchFn);

		expect(result).toEqual({
			fullName: 'iLovePizzaDC/trading-dashboard',
			description: 'Dashboard',
			htmlUrl: 'https://github.com/iLovePizzaDC/trading-dashboard',
			pushedAt: '2026-08-01T10:00:00Z',
			language: 'TypeScript',
			stars: 3,
			topics: ['vite', 'react'],
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
					full_name: 'a/b',
					description: null,
					html_url: 'https://github.com/a/b',
					pushed_at: '2026-01-01T00:00:00Z',
					language: null,
					stargazers_count: 0,
				}),
			)
			.mockResolvedValueOnce(jsonResponse({}, 500));

		const map = await fetchGitHubRepos(['a/b', 'c/d'], fetchFn);

		expect(map.get('a/b')?.fullName).toBe('a/b');
		expect(map.get('c/d')).toBeNull();
	});
});
