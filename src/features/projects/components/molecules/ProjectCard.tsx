import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { ProjectHighlights } from '@/features/projects/components/molecules/ProjectHighlights';
import type { IProjectCardProps } from '@/features/projects/types';
import { Button, Icon, Text } from '@/shared/components/atoms';
import { t, useLocale } from '@/shared/i18n';
import { githubRepoUrl } from '@/shared/api/github';
import { CommitMeta, Reveal, StackList } from '@/shared/components/molecules';

export function ProjectCard({ project, github, loading, delay = 0 }: IProjectCardProps) {
	const { locale, m } = useLocale();
	const repoUrl = project.githubRepo ? githubRepoUrl(project.githubRepo) : project.url;
	const description = t(locale, project.description) || github?.description || '';

	return (
		<Reveal
			as='article'
			delay={delay}
			className='group flex flex-col gap-3 border-t border-line py-5 transition duration-300 hover:-translate-y-0.5 md:border md:border-line md:bg-surface md:p-5 md:hover:border-accent/35'
			data-testid='project-card'
		>
			<div className='flex flex-col gap-2'>
				<Text as='h3' variant='subtitle'>
					{project.name}
				</Text>
				{project.githubRepo ? (
					<CommitMeta pushedAt={github?.pushedAt} loading={loading} error={!loading && !github} />
				) : (
					<Text as='span' variant='meta' className='opacity-80'>
						{m.projects.noRepo}
					</Text>
				)}
			</div>

			<Text variant='body' className='flex-1'>
				{description}
			</Text>

			{project.highlights ? <ProjectHighlights items={t(locale, project.highlights)} /> : null}

			<StackList items={project.stack} />

			{repoUrl ? (
				<div className='mt-2'>
					<Button
						href={repoUrl}
						variant='link'
						target='_blank'
						rel='noreferrer'
						className='group/link inline-flex items-center gap-1.5'
					>
						{m.projects.openGithub}
						<Icon
							icon={ArrowTopRightOnSquareIcon}
							className='h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5'
						/>
					</Button>
				</div>
			) : null}
		</Reveal>
	);
}
