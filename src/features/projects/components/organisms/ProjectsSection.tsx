import { projects as defaultProjects } from '@/shared/content';
import { useGitHubRepos } from '@/features/projects/hooks/useGitHubRepos';
import { ProjectCard } from '@/features/projects/components/molecules/ProjectCard';
import type { IProjectsSectionProps } from '@/features/projects/types';
import { SECTION_IDS } from '@/shared/constants';
import { useLocale } from '@/shared/i18n';
import { Section } from '@/shared/components/organisms';

export function ProjectsSection({ items = defaultProjects }: IProjectsSectionProps) {
	const { m } = useLocale();
	const repoIds = items.map((p) => p.githubRepo).filter((repo): repo is string => Boolean(repo));
	const { repos, loading } = useGitHubRepos(repoIds);

	return (
		<Section
			id={SECTION_IDS.projects}
			eyebrow={m.projects.eyebrow}
			title={m.projects.title}
			description={m.projects.description}
		>
			<div className='grid gap-5 md:grid-cols-2'>
				{items.map((project, index) => (
					<ProjectCard
						key={project.id}
						project={project}
						github={project.githubRepo ? repos.get(project.githubRepo) : undefined}
						loading={Boolean(project.githubRepo) && loading}
						delay={index * 80}
					/>
				))}
			</div>
		</Section>
	);
}
