import { waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ProjectsSection } from '@/features/projects';
import { renderWithProviders } from '@/test/render';

vi.mock('@/shared/api/github', () => ({
	fetchGitHubRepos: vi.fn(async () => new Map()),
	githubRepoUrl: (repo: string) => `https://github.com/${repo}`,
}));

describe('ProjectsSection', () => {
	it('renders projects heading', async () => {
		const { getByRole, queryByText } = renderWithProviders(<ProjectsSection />);

		expect(getByRole('heading', { name: 'Persönliche Projekte' })).toBeInTheDocument();

		await waitFor(() => {
			expect(queryByText(/Commit-Status wird geladen/)).not.toBeInTheDocument();
		});
	});
});
