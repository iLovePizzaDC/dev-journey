import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { profile } from '@/shared/content';
import { SECTION_IDS } from '@/shared/constants';
import { Button, Icon } from '@/shared/components/atoms';
import { useLocale } from '@/shared/i18n';
import { scrollToSection } from '@/shared/utils/scroll';

export function HeroActions() {
	const { messages } = useLocale();

	return (
		<div className='flex flex-wrap gap-3'>
			<Button
				onClick={() => scrollToSection(SECTION_IDS.projects)}
				variant='primary'
				className='group'
			>
				{messages.hero.viewProjects}
				<Icon
					icon={ArrowRightIcon}
					className='transition-transform duration-300 group-hover:translate-x-0.5'
				/>
			</Button>
			<Button href={`mailto:${profile.email}`} variant='ghost'>
				<Icon icon={EnvelopeIcon} />
				{messages.hero.contact}
			</Button>
		</div>
	);
}
