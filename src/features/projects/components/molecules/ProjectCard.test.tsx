import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { Project } from '@/content';
import { ProjectCard } from '@/features/projects';
import { renderWithProviders } from '@/test/render';

const project: Project = {
	id: 'demo',
	name: 'Demo App',
	description: {
		de: 'Eine Demo-Beschreibung',
		en: 'A demo description',
	},
	githubRepo: 'iLovePizzaDC/demo',
	stack: ['React', 'Vite'],
	highlights: {
		de: ['Feature A'],
		en: ['Feature A'],
	},
};

describe('ProjectCard (Vitest + Testing Library)', () => {
	it('renders localized copy and github link', () => {
		renderWithProviders(
			<ProjectCard
				project={project}
				github={{
					fullName: 'iLovePizzaDC/demo',
					description: null,
					htmlUrl: 'https://github.com/iLovePizzaDC/demo',
					pushedAt: '2026-08-11T10:00:00Z',
					language: 'TypeScript',
					stars: 0,
					topics: [],
				}}
			/>,
		);

		expect(screen.getByRole('heading', { name: 'Demo App' })).toBeInTheDocument();
		expect(screen.getByText('Eine Demo-Beschreibung')).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Auf GitHub öffnen/i })).toHaveAttribute(
			'href',
			'https://github.com/iLovePizzaDC/demo',
		);
	});

	it('switches description with locale', () => {
		renderWithProviders(<ProjectCard project={project} loading />, {
			locale: 'en',
		});
		expect(screen.getByText('A demo description')).toBeInTheDocument();
	});
});
