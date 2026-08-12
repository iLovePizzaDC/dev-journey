import { groupTechnologiesByYear, technologies } from '@/shared/content';
import { TechYearGroup } from '@/features/tech-timeline/components/molecules/TechYearGroup';
import type { Technology } from '@/shared/types';
import { SECTION_IDS } from '@/shared/constants';
import { useLocale } from '@/shared/i18n';
import { Section } from '@/shared/components/organisms';

interface ITechTimeline {
	items?: Technology[];
}

export function TechTimeline({ items = technologies }: ITechTimeline) {
	const { m } = useLocale();
	const groups = groupTechnologiesByYear(items);
	const years = [...groups.keys()];

	return (
		<Section
			id={SECTION_IDS.journey}
			eyebrow={m.journey.eyebrow}
			title={m.journey.title}
			description={m.journey.description}
		>
			<ol className='grid gap-8 border-l border-line pl-5 md:pl-6'>
				{years.map((year, index) => (
					<TechYearGroup key={year} year={year} techs={groups.get(year) ?? []} delay={index * 50} />
				))}
			</ol>
		</Section>
	);
}
