import { projects as defaultProjects } from '@/shared/content';
import { useGitHubRepos } from '@/features/projects/hooks/useGitHubRepos';
import { ProjectCard } from '@/features/projects/components/molecules/ProjectCard';
import { getProjectGithubRepoIds } from '@/features/projects/utils/projectRepos';
import type { Project } from '@/shared/types';
import { SECTION_IDS } from '@/shared/constants';
import { useLocale } from '@/shared/i18n';
import { Section } from '@/shared/components/organisms';

interface IProjectsSection {
	items?: Project[];
}

export function ProjectsSection({ items = defaultProjects }: IProjectsSection) {
	const { messages } = useLocale();

	const githubRepoIds = getProjectGithubRepoIds(items);
	const { repos, loading } = useGitHubRepos(githubRepoIds);

	return (
		<Section
			id={SECTION_IDS.projects}
			eyebrow={messages.projects.eyebrow}
			title={messages.projects.title}
			description={messages.projects.description}
		>
			<div className='grid gap-5 md:grid-cols-2'>
				{items.map((project, index) => {
					const hasGithubRepo = Boolean(project.githubRepo);
					const githubInfo = project.githubRepo ? repos.get(project.githubRepo) : undefined;

					return (
						<ProjectCard
							key={project.id}
							project={project}
							github={githubInfo}
							loading={hasGithubRepo && loading}
							delay={index * 80}
						/>
					);
				})}
			</div>
		</Section>
	);
}
