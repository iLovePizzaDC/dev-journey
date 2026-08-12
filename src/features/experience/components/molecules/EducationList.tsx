import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { education } from '@/shared/content';
import { Icon, Text } from '@/shared/components/atoms';
import { t, useLocale } from '@/shared/i18n';
import { formatDateRange, sortByStartDesc } from '@/shared/utils/date';

export function EducationList() {
	const { locale, m } = useLocale();
	const items = sortByStartDesc(education);

	return (
		<div>
			<Text as='h3' variant='label' className='mb-4 flex items-center gap-2'>
				<Icon icon={AcademicCapIcon} className='h-3.5 w-3.5' />
				{m.experience.education}
			</Text>
			<ul className='grid gap-0'>
				{items.map((item) => (
					<li
						key={item.id}
						className='grid gap-1 border-t border-line py-4 first:border-t-0 first:pt-0'
					>
						<Text as='span' variant='meta' className='text-accent-strong'>
							{formatDateRange(item.start, item.end, locale, m.experience.present)}
						</Text>
						<Text as='span' variant='subtitle'>
							{t(locale, item.title)}
						</Text>
						<Text variant='meta'>{item.institution}</Text>
					</li>
				))}
			</ul>
		</div>
	);
}
