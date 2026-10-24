import { waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ProjectsSection } from '@/features/projects';
import type { Project } from '@/shared/types';
import { renderWithProviders } from '@/test/render';

vi.mock('@/shared/api/github', () => ({
	fetchGitHubRepos: vi.fn(async () => new Map()),
	githubRepoUrl: (repo: string) => `https://github.com/${repo}`,
}));

const items: Project[] = [
	{
		id: 'side-first',
		name: 'Side First',
		kind: 'side',
		description: { de: 'Side DE', en: 'Side EN' },
		stack: ['React'],
		githubRepo: 'owner/side',
	},
	{
		id: 'app-one',
		name: 'App One',
		kind: 'app',
		description: { de: 'App DE', en: 'App EN' },
		stack: ['Swift'],
		appStoreUrl: 'https://apps.apple.com/app/1',
	},
];

describe('ProjectsSection', () => {
	it('renders projects heading', async () => {
		const { getByRole, queryByText } = renderWithProviders(<ProjectsSection />);

		expect(getByRole('heading', { name: 'Eigene Projekte' })).toBeInTheDocument();

		await waitFor(() => {
			expect(queryByText(/Commit-Status wird geladen/)).not.toBeInTheDocument();
		});
	});

	it('renders apps before side projects', async () => {
		const { getByRole, getAllByTestId, queryByText } = renderWithProviders(
			<ProjectsSection items={items} />,
		);

		expect(getByRole('heading', { name: 'Apps' })).toBeInTheDocument();
		expect(getByRole('heading', { name: 'Side Projects' })).toBeInTheDocument();

		const cards = getAllByTestId('project-card');
		expect(cards[0]).toHaveTextContent('App One');
		expect(cards[0]).toHaveAttribute('data-variant', 'default');
		expect(cards[1]).toHaveTextContent('Side First');
		expect(cards[1]).toHaveAttribute('data-variant', 'compact');

		await waitFor(() => {
			expect(queryByText(/Commit-Status wird geladen/)).not.toBeInTheDocument();
		});
	});
});
