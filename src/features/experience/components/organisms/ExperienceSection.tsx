import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { certificates, education, experiences } from '@/shared/content';
import { CertificateList } from '@/features/experience/components/molecules/CertificateList';
import { EducationList } from '@/features/experience/components/molecules/EducationList';
import { WorkRoleCard } from '@/features/experience/components/molecules/WorkRoleCard';
import type { Certificate, Education, Experience } from '@/shared/types';
import { LabelHeading } from '@/shared/components/molecules';
import { SECTION_IDS } from '@/shared/constants';
import { useLocale } from '@/shared/i18n';
import { sortByStartDesc } from '@/shared/utils/date';
import { Section } from '@/shared/components/organisms';

interface IExperienceSection {
	items?: Experience[];
	educationItems?: Education[];
	certificateItems?: Certificate[];
}

export function ExperienceSection({
	items = experiences,
	educationItems = education,
	certificateItems = certificates,
}: IExperienceSection) {
	const { messages } = useLocale();
	const jobsNewestFirst = sortByStartDesc(items);
	const lastJobIndex = jobsNewestFirst.length - 1;

	return (
		<Section
			id={SECTION_IDS.experience}
			eyebrow={messages.experience.eyebrow}
			title={messages.experience.title}
			description={messages.experience.description}
		>
			<div className='mb-4'>
				<LabelHeading icon={BriefcaseIcon} className='mb-6'>
					{messages.experience.work}
				</LabelHeading>

				<div className='grid'>
					{jobsNewestFirst.map((job, index) => (
						<WorkRoleCard
							key={job.id}
							job={job}
							delay={index * 70}
							isLast={index === lastJobIndex}
						/>
					))}
				</div>
			</div>

			<div className='mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-2 md:gap-16'>
				<EducationList items={educationItems} />
				<CertificateList items={certificateItems} />
			</div>
		</Section>
	);
}
