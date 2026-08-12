import { EnvelopeIcon, LanguageIcon, MapPinIcon } from '@heroicons/react/24/outline';
import type { AboutFact } from '@/features/about/types';
import type { Messages } from '@/shared/i18n/messages.types';
import type { Locale, Profile } from '@/shared/types';
import { t } from '@/shared/i18n';

export function buildAboutFacts(locale: Locale, m: Messages, profile: Profile): AboutFact[] {
	return [
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
}
