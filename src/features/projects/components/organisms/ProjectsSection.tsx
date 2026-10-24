import { CodeBracketIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { projects as defaultProjects } from '@/shared/content';
import { useGitHubRepos } from '@/features/projects/hooks/useGitHubRepos';
import { ProjectCard } from '@/features/projects/components/molecules/ProjectCard';
import { getProjectGithubRepoIds } from '@/features/projects/utils/projectRepos';
import { groupProjectsByKind } from '@/features/projects/utils/groupProjectsByKind';
import type { Project } from '@/shared/types';
import { LabelHeading } from '@/shared/components/molecules';
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
	const { app: apps, side: sideProjects } = groupProjectsByKind(items);

	return (
		<Section
			id={SECTION_IDS.projects}
			eyebrow={messages.projects.eyebrow}
			title={messages.projects.title}
			description={messages.projects.description}
		>
			{apps.length > 0 ? (
				<div className='mb-4'>
					<LabelHeading icon={DevicePhoneMobileIcon} className='mb-6'>
						{messages.projects.apps}
					</LabelHeading>

					<div className='grid gap-5 md:grid-cols-2'>
						{apps.map((project, index) => {
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
				</div>
			) : null}

			{sideProjects.length > 0 ? (
				<div className={apps.length > 0 ? 'mt-14 border-t border-line pt-10' : undefined}>
					<LabelHeading icon={CodeBracketIcon} className='mb-6'>
						{messages.projects.sideProjects}
					</LabelHeading>

					<div className='grid gap-3 md:grid-cols-2 md:gap-x-8'>
						{sideProjects.map((project, index) => {
							const hasGithubRepo = Boolean(project.githubRepo);
							const githubInfo = project.githubRepo ? repos.get(project.githubRepo) : undefined;

							return (
								<ProjectCard
									key={project.id}
									project={project}
									github={githubInfo}
									loading={hasGithubRepo && loading}
									delay={index * 60}
									variant='compact'
								/>
							);
						})}
					</div>
				</div>
			) : null}
		</Section>
	);
}
