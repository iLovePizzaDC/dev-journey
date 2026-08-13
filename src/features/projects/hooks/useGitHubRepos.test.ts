import { describe, expect, it, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useGitHubRepos } from '@/features/projects/hooks/useGitHubRepos';

vi.mock('@/shared/api/github', () => ({
	fetchGitHubRepos: vi.fn(async () => new Map([['a/b', null]])),
}));

describe('useGitHubRepos', () => {
	it('loads repo map for given ids', async () => {
		const { result } = renderHook(() => useGitHubRepos(['a/b']));
		expect(result.current.loading).toBe(true);
		await waitFor(() => expect(result.current.loading).toBe(false));
		expect(result.current.repos.get('a/b')).toBeNull();
	});

	it('handles empty repo list', async () => {
		const { result } = renderHook(() => useGitHubRepos([]));
		expect(result.current.loading).toBe(false);
		expect(result.current.repos.size).toBe(0);
	});
});
