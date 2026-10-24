import type { Project, ProjectKind } from '@/shared/types';

export type ProjectsByKind = Record<ProjectKind, Project[]>;

export function groupProjectsByKind(projects: Project[]): ProjectsByKind {
	const grouped: ProjectsByKind = {
		app: [],
		side: [],
	};

	for (const project of projects) {
		grouped[project.kind].push(project);
	}

	return grouped;
}
