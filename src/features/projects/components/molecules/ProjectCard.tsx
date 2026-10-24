import { ProjectExternalLink } from '@/features/projects/components/molecules/ProjectExternalLink';
import { ProjectHighlights } from '@/features/projects/components/molecules/ProjectHighlights';
import { ProjectStatusMeta } from '@/features/projects/components/molecules/ProjectStatusMeta';
import { Text } from '@/shared/components/atoms';
import { localize, useLocale } from '@/shared/i18n';
import { githubRepoUrl } from '@/shared/api/github';
import { Reveal, StackList } from '@/shared/components/molecules';
import type { GitHubRepoInfo, Project } from '@/shared/types';
import { cn } from '@/shared/utils/cn';

type ProjectCardVariant = 'default' | 'compact';

interface IProjectCard {
	project: Project;
	github?: GitHubRepoInfo | null;
	loading?: boolean;
	delay?: number;
	variant?: ProjectCardVariant;
}

export function ProjectCard({
	project,
	github,
	loading,
	delay = 0,
	variant = 'default',
}: IProjectCard) {
	const { locale, messages } = useLocale();
	const isCompact = variant === 'compact';

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
			className={cn(
				'group flex h-full flex-col border-t border-line transition duration-300 hover:-translate-y-0.5',
				isCompact
					? 'gap-2 py-4 md:border-0 md:border-t md:bg-transparent md:p-0 md:py-4'
					: 'gap-2.5 py-5 md:border md:border-line md:bg-surface md:p-5 md:hover:border-accent/35',
			)}
			data-testid='project-card'
			data-variant={variant}
		>
			<div className='flex flex-col gap-2'>
				<Text as='h3' variant='subtitle'>
					{project.name}
				</Text>
				<ProjectStatusMeta project={project} github={github} loading={loading} />
			</div>

			<Text variant='body'>{description}</Text>

			{!isCompact && highlights ? <ProjectHighlights items={highlights} /> : null}

			<div className={cn('mt-auto flex flex-col', isCompact ? 'gap-2' : 'gap-2.5')}>
				<StackList items={project.stack} />

				{externalUrl ? <ProjectExternalLink url={externalUrl} label={linkLabel} /> : null}
			</div>
		</Reveal>
	);
}
