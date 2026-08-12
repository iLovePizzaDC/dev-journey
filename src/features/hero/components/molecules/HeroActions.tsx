import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { profile } from '@/content';
import { SECTION_IDS } from '@/shared/constants';
import { Button, Icon } from '@/shared/atoms';
import { useLocale } from '@/shared/i18n';

export function HeroActions() {
	const { m } = useLocale();

	return (
		<div className='flex flex-wrap gap-3'>
			<Button href={`#${SECTION_IDS.projects}`} variant='primary' className='group'>
				{m.hero.viewProjects}
				<Icon
					icon={ArrowRightIcon}
					className='transition-transform duration-300 group-hover:translate-x-0.5'
				/>
			</Button>
			<Button href={`mailto:${profile.email}`} variant='ghost'>
				<Icon icon={EnvelopeIcon} />
				{m.hero.contact}
			</Button>
		</div>
	);
}
