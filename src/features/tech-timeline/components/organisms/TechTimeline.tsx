import { useState } from 'react';
import { groupTechnologiesByYear, filterTechnologiesByCategory } from '@/features/tech-timeline/utils/technologies';
import { technologies } from '@/shared/content';
import { TechYearGroup } from '@/features/tech-timeline/components/molecules/TechYearGroup';
import { TechCategoryFilter } from '@/features/tech-timeline/components/molecules/TechCategoryFilter';
import type { TechCategoryFilter as TechCategoryFilterValue } from '@/features/tech-timeline/types';
import type { Technology } from '@/shared/types';
import { SECTION_IDS } from '@/shared/constants';
import { useLocale } from '@/shared/i18n';
import { Section } from '@/shared/components/organisms';

interface ITechTimeline {
	items?: Technology[];
}

export function TechTimeline({ items = technologies }: ITechTimeline) {
	const { messages } = useLocale();
	const [category, setCategory] = useState<TechCategoryFilterValue>('all');
	const groups = groupTechnologiesByYear(filterTechnologiesByCategory(items, category));
	const years = [...groups.keys()];

	return (
		<Section
			id={SECTION_IDS.journey}
			eyebrow={messages.journey.eyebrow}
			title={messages.journey.title}
			description={messages.journey.description}
		>
			<TechCategoryFilter value={category} onChange={setCategory} />
			<ol className='grid'>
				{years.map((year, index) => (
					<TechYearGroup
						key={year}
						year={year}
						techs={groups.get(year) ?? []}
						delay={index * 50}
						isLast={index === years.length - 1}
					/>
				))}
			</ol>
		</Section>
	);
}
