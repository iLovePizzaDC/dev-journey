import { EnvelopeIcon, LanguageIcon, MapPinIcon } from '@heroicons/react/24/outline';
import type { AboutFact } from '@/features/about/types';
import type { Messages } from '@/shared/i18n/messages.types';
import type { Locale, Profile } from '@/shared/types';
import { localize } from '@/shared/i18n';

function formatLanguages(locale: Locale, profile: Profile): string {
	return profile.languages
		.map((language) => {
			const name = localize(locale, language.name);
			const level = localize(locale, language.level);
			return `${name} (${level})`;
		})
		.join(' · ');
}

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
			value: profile.email,
			href: `mailto:${profile.email}`,
		},
		{
			icon: LanguageIcon,
			label: messages.about.languages,
			value: formatLanguages(locale, profile),
		},
	];
}
