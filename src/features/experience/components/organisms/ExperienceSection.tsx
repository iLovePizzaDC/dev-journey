import { experiences } from '@/content';
import { CertificateList } from '@/features/experience/molecules/CertificateList';
import { EducationList } from '@/features/experience/molecules/EducationList';
import { WorkRoleCard } from '@/features/experience/molecules/WorkRoleCard';
import type { IExperienceSectionProps } from '@/features/experience/experience.types';
import { Text } from '@/shared/atoms';
import { SECTION_IDS } from '@/shared/constants';
import { useLocale } from '@/shared/i18n';
import { sortByStartDesc } from '@/shared/lib/date';
import { Section } from '@/shared/organisms';

export function ExperienceSection({ items = experiences }: IExperienceSectionProps) {
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
