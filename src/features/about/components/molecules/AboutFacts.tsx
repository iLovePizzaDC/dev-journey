import { EnvelopeIcon, LanguageIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { profile } from '@/content';
import type { AboutFact } from '@/features/about/about.types';
import { Icon, Text } from '@/shared/atoms';
import { t, useLocale } from '@/shared/i18n';

export function AboutFacts() {
	const { locale, m } = useLocale();

	const facts: AboutFact[] = [
		{
			icon: MapPinIcon,
			label: m.about.location,
			value: profile.location,
		},
		{
			icon: EnvelopeIcon,
			label: m.about.email,
			value: (
				<a href={`mailto:${profile.email}`} className='transition-colors'>
					{profile.email}
				</a>
			),
		},
		{
			icon: LanguageIcon,
			label: m.about.languages,
			value: profile.languages
				.map((l) => `${t(locale, l.name)} (${t(locale, l.level)})`)
				.join(' · '),
		},
	];

	return (
		<dl className='m-0 grid gap-4'>
			{facts.map((fact) => (
				<div key={fact.label} className='group'>
					<dt className='mb-1 flex items-center gap-1.5'>
						<Icon
							icon={fact.icon}
							className='h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent'
						/>
						<Text as='span' variant='label'>
							{fact.label}
						</Text>
					</dt>
					<dd className='m-0 pl-5'>
						{typeof fact.value === 'string' ? <Text variant='body'>{fact.value}</Text> : fact.value}
					</dd>
				</div>
			))}
		</dl>
	);
}
