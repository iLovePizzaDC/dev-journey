import { profile } from '@/content';
import { AboutActions } from '@/features/about/molecules/AboutActions';
import { AboutFacts } from '@/features/about/molecules/AboutFacts';
import { SECTION_IDS } from '@/shared/constants';
import { t, useLocale } from '@/shared/i18n';
import { Reveal } from '@/shared/molecules';
import { Section } from '@/shared/organisms';

export function AboutSection() {
	const { locale, m } = useLocale();

	return (
		<Section
			id={SECTION_IDS.about}
			eyebrow={m.about.eyebrow}
			title={m.about.title}
			description={t(locale, profile.summary)}
		>
			<div className='grid gap-6 md:grid-cols-[1.4fr_auto] md:items-start'>
				<Reveal>
					<AboutFacts />
				</Reveal>
				<Reveal delay={80}>
					<AboutActions />
				</Reveal>
			</div>
		</Section>
	);
}
