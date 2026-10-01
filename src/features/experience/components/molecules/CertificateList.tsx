import { certificates } from '@/shared/content';
import { sortCertificatesByDateDesc } from '@/features/experience/utils/sortCertificates';
import { Text } from '@/shared/components/atoms';
import { LabelHeading } from '@/shared/components/molecules';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import { localize, useLocale } from '@/shared/i18n';
import { formatMonthYear } from '@/shared/utils/date';
import type { Certificate } from '@/shared/types';

interface ICertificateList {
	items?: Certificate[];
}

export function CertificateList({ items = certificates }: ICertificateList) {
	const { locale, messages } = useLocale();
	const certificatesNewestFirst = sortCertificatesByDateDesc(items);

	return (
		<div>
			<LabelHeading icon={CheckBadgeIcon}>{messages.experience.certificates}</LabelHeading>

			<ul className='grid gap-0'>
				{certificatesNewestFirst.map((certificate) => {
					const dateLabel = formatMonthYear(certificate.date, locale);
					const title = localize(locale, certificate.title);

					return (
						<li
							key={certificate.id}
							className='grid gap-1 border-t border-line py-4 first:border-t-0 first:pt-0'
						>
							<Text as='span' variant='meta' className='text-accent-strong'>
								{dateLabel}
							</Text>
							<Text as='span' variant='subtitle'>
								{title}
							</Text>
							<Text variant='meta'>{certificate.issuer}</Text>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
