import { describe, expect, it } from 'vitest';
import { ProjectStatusMeta } from '@/features/projects/components/molecules/ProjectStatusMeta';
import type { GitHubRepoInfo, Project } from '@/shared/types';
import { renderWithProviders } from '@/test/render';

const baseProject: Project = {
	id: 'demo',
	name: 'Demo',
	description: { de: 'Beschreibung', en: 'Description' },
	stack: ['React'],
};

const github: GitHubRepoInfo = {
	description: null,
	pushedAt: new Date().toISOString(),
	language: 'TypeScript',
	stars: 2,
};

describe('ProjectStatusMeta', () => {
	it('shows App Store copy when only appStoreUrl is set', () => {
		const { getByText } = renderWithProviders(
			<ProjectStatusMeta project={{ ...baseProject, appStoreUrl: 'https://apps.apple.com/app/1' }} />,
		);

		expect(getByText('Im App Store')).toBeInTheDocument();
	});

	it('shows no-repo copy when neither github nor app store is set', () => {
		const { getByText } = renderWithProviders(<ProjectStatusMeta project={baseProject} />);

		expect(getByText(/Kein öffentliches Repo/i)).toBeInTheDocument();
	});

	it('shows loading commit status for github projects', () => {
		const { getByText } = renderWithProviders(
			<ProjectStatusMeta
				project={{ ...baseProject, githubRepo: 'owner/demo' }}
				loading
			/>,
		);

		expect(getByText(/geladen/i)).toBeInTheDocument();
	});

	it('shows commit meta when github data is available', () => {
		const { getByText } = renderWithProviders(
			<ProjectStatusMeta
				project={{ ...baseProject, githubRepo: 'owner/demo' }}
				github={github}
			/>,
		);

		expect(getByText(/Letzter Push/i)).toBeInTheDocument();
		expect(getByText('TypeScript')).toBeInTheDocument();
	});
});
