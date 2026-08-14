import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { ProjectHighlights } from '@/features/projects/components/molecules/ProjectHighlights';
import { Button, Icon, Text } from '@/shared/components/atoms';
import { localize, useLocale } from '@/shared/i18n';
import { githubRepoUrl } from '@/shared/api/github';
import { CommitMeta, Reveal, StackList } from '@/shared/components/molecules';
import type { GitHubRepoInfo, Project } from '@/shared/types';

interface IProjectCard {
	project: Project;
	github?: GitHubRepoInfo | null;
	loading?: boolean;
	delay?: number;
}

export function ProjectCard({ project, github, loading, delay = 0 }: IProjectCard) {
	const { locale, messages } = useLocale();
	const repoUrl = project.githubRepo ? githubRepoUrl(project.githubRepo) : project.url;
	const description = localize(locale, project.description) || github?.description || '';

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
				{project.githubRepo ? (
					<CommitMeta
						pushedAt={github?.pushedAt}
						language={github?.language}
						stars={github?.stars}
						loading={loading}
						error={!loading && !github}
					/>
				) : (
					<Text as='span' variant='meta' className='opacity-80'>
						{messages.projects.noRepo}
					</Text>
				)}
			</div>

			<Text variant='body'>{description}</Text>

			{project.highlights ? (
				<ProjectHighlights items={localize(locale, project.highlights)} />
			) : null}

			<div className='mt-auto flex flex-col gap-2.5'>
				<StackList items={project.stack} />

				{repoUrl ? (
					<div>
						<Button
							href={repoUrl}
							variant='link'
							target='_blank'
							rel='noreferrer'
							className='group/link inline-flex items-center gap-1.5'
						>
							{messages.projects.openGithub}
							<Icon
								icon={ArrowTopRightOnSquareIcon}
								className='h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5'
							/>
						</Button>
					</div>
				) : null}
			</div>
		</Reveal>
	);
}
