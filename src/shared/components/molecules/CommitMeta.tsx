import { Text } from '@/shared/components/atoms';
import { useLocale } from '@/shared/i18n';
import { formatRelativeTime } from '@/shared/utils/date';

interface ICommitMeta {
	pushedAt?: string | null;
	loading?: boolean;
	error?: boolean;
}

export function CommitMeta({ pushedAt, loading, error }: ICommitMeta) {
	const { messages } = useLocale();

	if (loading) {
		return (
			<Text as='span' variant='meta' className='opacity-70'>
				{messages.projects.commitLoading}
			</Text>
		);
	}

	if (error || !pushedAt) {
		return (
			<Text as='span' variant='meta' className='opacity-80'>
				{messages.projects.commitUnavailable}
			</Text>
		);
	}

	return (
		<Text as='span' variant='meta'>
			{messages.projects.lastPush}{' '}
			<time dateTime={pushedAt}>{formatRelativeTime(pushedAt, messages.common)}</time>
		</Text>
	);
}
