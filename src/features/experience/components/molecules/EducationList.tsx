import { education } from '@/shared/content';
import { Text } from '@/shared/components/atoms';
import { LabelHeading } from '@/shared/components/molecules';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { localize, useLocale } from '@/shared/i18n';
import { formatDateRange, sortByStartDesc } from '@/shared/utils/date';

export function EducationList() {
	const { locale, messages } = useLocale();
	const items = sortByStartDesc(education);

	return (
		<div>
			<LabelHeading icon={AcademicCapIcon}>{messages.experience.education}</LabelHeading>
			<ul className='grid gap-0'>
				{items.map((item) => (
					<li
						key={item.id}
						className='grid gap-1 border-t border-line py-4 first:border-t-0 first:pt-0'
					>
						<Text as='span' variant='meta' className='text-accent-strong'>
							{formatDateRange(item.start, item.end, locale, messages.experience.present)}
						</Text>
						<Text as='span' variant='subtitle'>
							{localize(locale, item.title)}
						</Text>
						<Text variant='meta'>{item.institution}</Text>
					</li>
				))}
			</ul>
		</div>
	);
}
