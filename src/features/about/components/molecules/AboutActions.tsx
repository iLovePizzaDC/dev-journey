import { ArrowTopRightOnSquareIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { githubProfileUrl } from '@/shared/api/github';
import { Button, Icon } from '@/shared/components/atoms';
import { profile } from '@/shared/content';
import { useLocale } from '@/shared/i18n';

export function AboutActions() {
	const { messages } = useLocale();

	return (
		<div className='flex flex-col gap-3'>
			<Button href={`mailto:${profile.email}`} variant='primary'>
				<Icon icon={EnvelopeIcon} />
				{messages.about.writeMessage}
			</Button>
			<Button
				href={githubProfileUrl(profile.githubUsername)}
				variant='ghost'
				target='_blank'
				rel='noreferrer'
			>
				{messages.about.githubProfile}
				<Icon icon={ArrowTopRightOnSquareIcon} className='h-3.5 w-3.5 opacity-70' />
			</Button>
		</div>
	);
}
