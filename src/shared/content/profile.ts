import type { Profile } from '@/shared/types';

export const profile: Profile = {
	name: 'Nico Betz',
	title: {
		de: 'Frontend Developer',
		en: 'Frontend Developer',
	},
	location: 'Waiblingen',
	email: 'n.betz1102@gmail.com',
	phone: '0178-4512503',
	githubUsername: 'iLovePizzaDC',
	summary: {
		de: 'Frontend Developer mit zwei Jahren Berufserfahrung im React- und TypeScript-Umfeld. Neben der beruflichen Tätigkeit entwickle ich private Webanwendungen und erweitere kontinuierlich meine Kenntnisse.',
		en: 'Frontend developer with two years of professional experience in React and TypeScript. Alongside my day job I build personal web apps and keep expanding my skill set.',
	},
	languages: [
		{
			name: { de: 'Deutsch', en: 'German' },
			level: { de: 'Muttersprache', en: 'Native' },
		},
		{
			name: { de: 'Englisch', en: 'English' },
			level: { de: 'B2', en: 'B2' },
		},
	],
};
