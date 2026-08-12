import { experiences } from '@/shared/content';
import { CertificateList } from '@/features/experience/components/molecules/CertificateList';
import { EducationList } from '@/features/experience/components/molecules/EducationList';
import { WorkRoleCard } from '@/features/experience/components/molecules/WorkRoleCard';
import type { Experience } from '@/shared/types';
import { Text } from '@/shared/components/atoms';
import { SECTION_IDS } from '@/shared/constants';
import { useLocale } from '@/shared/i18n';
import { sortByStartDesc } from '@/shared/utils/date';
import { Section } from '@/shared/components/organisms';

interface IExperienceSection {
	items?: Experience[];
}

export function ExperienceSection({ items = experiences }: IExperienceSection) {
	const { m } = useLocale();
	const jobs = sortByStartDesc(items);

	return (
		<Section
			id={SECTION_IDS.experience}
			eyebrow={m.experience.eyebrow}
			title={m.experience.title}
			description={m.experience.description}
		>
			<div className='mb-4'>
				<Text as='h3' variant='label' className='mb-6 block'>
					{m.experience.work}
				</Text>
				<div className='grid'>
					{jobs.map((job, index) => (
						<WorkRoleCard
							key={job.id}
							job={job}
							delay={index * 70}
							isLast={index === jobs.length - 1}
						/>
					))}
				</div>
			</div>

			<div className='mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-2 md:gap-16'>
				<EducationList />
				<CertificateList />
			</div>
		</Section>
	);
}
