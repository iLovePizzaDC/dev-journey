import { ProjectExternalLink } from '@/features/projects/components/molecules/ProjectExternalLink';
import { ProjectHighlights } from '@/features/projects/components/molecules/ProjectHighlights';
import { ProjectStatusMeta } from '@/features/projects/components/molecules/ProjectStatusMeta';
import { Text } from '@/shared/components/atoms';
import { localize, useLocale } from '@/shared/i18n';
import { githubRepoUrl } from '@/shared/api/github';
import { Reveal, StackList } from '@/shared/components/molecules';
import type { GitHubRepoInfo, Project } from '@/shared/types';

interface IProjectCard {
	project: Project;
	github?: GitHubRepoInfo | null;
	loading?: boolean;
	delay?: number;
}

export function ProjectCard({ project, github, loading, delay = 0 }: IProjectCard) {
	const { locale, messages } = useLocale();

	const localizedDescription = localize(locale, project.description);
	const description = localizedDescription || github?.description || '';

	const appStoreUrl = project.appStoreUrl;
	const githubUrl = project.githubRepo ? githubRepoUrl(project.githubRepo) : undefined;
	const externalUrl = appStoreUrl ?? githubUrl ?? project.url;
	const linkLabel = appStoreUrl ? messages.projects.openAppStore : messages.projects.openGithub;

	const highlights = project.highlights ? localize(locale, project.highlights) : null;

	return (
		<Reveal
			as='article'
			delay={delay}
			className='group flex h-full flex-col gap-2.5 border-t border-line py-5 transition duration-300 hover:-translate-y-0.5 md:border md:border-line md:bg-surface md:p-5 md:hover:border-accent/35'
			data-testid='project-card'
		>
			<div className='flex flex-col gap-2'>
				<Text as='h3' variant='subtitle'>
					{project.name}
				</Text>
				<ProjectStatusMeta project={project} github={github} loading={loading} />
			</div>

			<Text variant='body'>{description}</Text>

			{highlights ? <ProjectHighlights items={highlights} /> : null}

			<div className='mt-auto flex flex-col gap-2.5'>
				<StackList items={project.stack} />

				{externalUrl ? <ProjectExternalLink url={externalUrl} label={linkLabel} /> : null}
			</div>
		</Reveal>
	);
}
