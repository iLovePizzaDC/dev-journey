import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import { certificates } from '@/content';
import { Icon, Text } from '@/shared/atoms';
import { t, useLocale } from '@/shared/i18n';
import { formatMonthYear } from '@/shared/lib/date';

export function CertificateList() {
	const { locale, m } = useLocale();
	const items = [...certificates].sort((a, b) => b.date.localeCompare(a.date));

	return (
		<div>
			<Text as='h3' variant='label' className='mb-4 flex items-center gap-2'>
				<Icon icon={CheckBadgeIcon} className='h-3.5 w-3.5' />
				{m.experience.certificates}
			</Text>
			<ul className='grid gap-0'>
				{items.map((cert) => (
					<li
						key={cert.id}
						className='grid gap-1 border-t border-line py-4 first:border-t-0 first:pt-0'
					>
						<Text as='span' variant='meta' className='text-accent-strong'>
							{formatMonthYear(cert.date, locale)}
						</Text>
						<Text as='span' variant='subtitle'>
							{t(locale, cert.title)}
						</Text>
						<Text variant='meta'>{cert.issuer}</Text>
					</li>
				))}
			</ul>
		</div>
	);
}
