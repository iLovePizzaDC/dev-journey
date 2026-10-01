import { education } from '@/shared/content';
import { Text } from '@/shared/components/atoms';
import { LabelHeading } from '@/shared/components/molecules';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { localize, useLocale } from '@/shared/i18n';
import { formatDateRange, sortByStartDesc } from '@/shared/utils/date';
import type { Education } from '@/shared/types';

interface IEducationList {
	items?: Education[];
}

export function EducationList({ items = education }: IEducationList) {
	const { locale, messages } = useLocale();
	const educationNewestFirst = sortByStartDesc(items);

	return (
		<div>
			<LabelHeading icon={AcademicCapIcon}>{messages.experience.education}</LabelHeading>

			<ul className='grid gap-0'>
				{educationNewestFirst.map((item) => {
					const dateRange = formatDateRange(
						item.start,
						item.end,
						locale,
						messages.experience.present,
					);
					const title = localize(locale, item.title);

					return (
						<li
							key={item.id}
							className='grid gap-1 border-t border-line py-4 first:border-t-0 first:pt-0'
						>
							<Text as='span' variant='meta' className='text-accent-strong'>
								{dateRange}
							</Text>
							<Text as='span' variant='subtitle'>
								{title}
							</Text>
							<Text variant='meta'>{item.institution}</Text>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
