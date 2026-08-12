import { Text } from '@/shared/atoms';
import { useLocale } from '@/shared/i18n';
import { formatRelativeTime } from '@/shared/lib/date';
import type { ICommitMetaProps } from '@/shared/molecules/CommitMeta.types';

export function CommitMeta({ pushedAt, loading, error }: ICommitMetaProps) {
	const { m } = useLocale();

	if (loading) {
		return (
			<Text as='span' variant='meta' className='opacity-70'>
				{m.projects.commitLoading}
			</Text>
		);
	}

	if (error || !pushedAt) {
		return (
			<Text as='span' variant='meta' className='opacity-80'>
				{m.projects.commitUnavailable}
			</Text>
		);
	}

	return (
		<Text as='span' variant='meta'>
			{m.projects.lastPush}{' '}
			<time dateTime={pushedAt}>{formatRelativeTime(pushedAt, m.common)}</time>
		</Text>
	);
}
