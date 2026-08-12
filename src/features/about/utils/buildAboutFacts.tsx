import { EnvelopeIcon, LanguageIcon, MapPinIcon } from '@heroicons/react/24/outline';
import type { AboutFact } from '@/features/about/types';
import type { Messages } from '@/shared/i18n/messages.types';
import type { Locale, Profile } from '@/shared/types';
import { localize } from '@/shared/i18n';

export function buildAboutFacts(locale: Locale, messages: Messages, profile: Profile): AboutFact[] {
	return [
		{
			icon: MapPinIcon,
			label: messages.about.location,
			value: profile.location,
		},
		{
			icon: EnvelopeIcon,
			label: messages.about.email,
			value: (
				<a href={`mailto:${profile.email}`} className='transition-colors'>
					{profile.email}
				</a>
			),
		},
		{
			icon: LanguageIcon,
			label: messages.about.languages,
			value: profile.languages
				.map((language) => `${localize(locale, language.name)} (${localize(locale, language.level)})`)
				.join(' · '),
		},
	];
}
