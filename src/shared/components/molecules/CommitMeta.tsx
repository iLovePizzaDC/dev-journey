import { StarIcon } from '@heroicons/react/24/outline';
import { Icon, Text } from '@/shared/components/atoms';
import { useLocale } from '@/shared/i18n';
import { formatRelativeTime } from '@/shared/utils/date';

interface ICommitMeta {
	pushedAt?: string | null;
	language?: string | null;
	stars?: number | null;
	loading?: boolean;
	error?: boolean;
}

function MetaSeparator() {
	return (
		<span className='mx-1.5 text-muted/50' aria-hidden='true'>
			·
		</span>
	);
}

export function CommitMeta({ pushedAt, language, stars, loading, error }: ICommitMeta) {
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

	const showStars = typeof stars === 'number' && stars > 0;
	const showLanguage = Boolean(language);

	return (
		<Text as='span' variant='meta' className='inline-flex flex-wrap items-center gap-y-1'>
			<span>
				{messages.projects.lastPush}{' '}
				<time dateTime={pushedAt}>{formatRelativeTime(pushedAt, messages.common)}</time>
			</span>
			{showLanguage ? (
				<>
					<MetaSeparator />
					<span className='text-muted'>{language}</span>
				</>
			) : null}
			{showStars ? (
				<>
					<MetaSeparator />
					<span
						className='inline-flex items-center gap-0.5 text-muted'
						title={messages.projects.stars}
					>
						<Icon icon={StarIcon} className='h-3 w-3 opacity-70' />
						<span>{stars}</span>
					</span>
				</>
			) : null}
		</Text>
	);
}
