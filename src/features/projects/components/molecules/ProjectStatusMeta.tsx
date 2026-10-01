import { CommitMeta } from '@/features/projects/components/molecules/CommitMeta';
import { Text } from '@/shared/components/atoms';
import { useLocale } from '@/shared/i18n';
import type { GitHubRepoInfo, Project } from '@/shared/types';

interface IProjectStatusMeta {
	project: Project;
	github?: GitHubRepoInfo | null;
	loading?: boolean;
}

export function ProjectStatusMeta({ project, github, loading }: IProjectStatusMeta) {
	const { messages } = useLocale();

	if (project.githubRepo) {
		const fetchFailed = !loading && !github;

		return (
			<CommitMeta
				pushedAt={github?.pushedAt}
				language={github?.language}
				stars={github?.stars}
				loading={loading}
				error={fetchFailed}
			/>
		);
	}

	if (project.appStoreUrl) {
		return (
			<Text as='span' variant='meta' className='opacity-80'>
				{messages.projects.onAppStore}
			</Text>
		);
	}

	return (
		<Text as='span' variant='meta' className='opacity-80'>
			{messages.projects.noRepo}
		</Text>
	);
}
