import { ArrowTopRightOnSquareIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { profile } from '@/content';
import { Button, Icon } from '@/shared/atoms';
import { useLocale } from '@/shared/i18n';

export function AboutActions() {
	const { m } = useLocale();

	return (
		<div className='flex flex-col gap-3'>
			<Button href={`mailto:${profile.email}`} variant='primary'>
				<Icon icon={EnvelopeIcon} />
				{m.about.writeMessage}
			</Button>
			<Button
				href={`https://github.com/${profile.githubUsername}`}
				variant='ghost'
				target='_blank'
				rel='noreferrer'
			>
				{m.about.githubProfile}
				<Icon icon={ArrowTopRightOnSquareIcon} className='h-3.5 w-3.5 opacity-70' />
			</Button>
		</div>
	);
}
