import { Text } from '@/shared/components/atoms';
import { useLocale } from '@/shared/i18n';
import { formatRelativeTime } from '@/shared/utils/date';
import type { ICommitMetaProps } from '@/shared/components/molecules/CommitMeta.types';

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
