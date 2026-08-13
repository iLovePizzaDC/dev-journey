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
		de: 'Frontend Developer aus Waiblingen mit zwei Jahren Erfahrung in React und TypeScript. Ich baue Web-Apps, arbeite mich gerne in neue Stacks ein und entwickle nebenbei eigene Projekte.',
		en: 'Frontend developer from Waiblingen with two years of experience in React and TypeScript. I build web apps, pick up new stacks quickly and work on my own projects on the side.',
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
