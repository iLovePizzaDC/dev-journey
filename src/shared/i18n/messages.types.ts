import type { Localized } from '@/shared/types';

export type Messages = {
	nav: {
		journey: string;
		experience: string;
		projects: string;
		about: string;
		aria: string;
	};
	hero: {
		kicker: string;
		viewProjects: string;
		contact: string;
	};
	journey: {
		eyebrow: string;
		title: string;
		description: string;
		categoriesAria: string;
	};
	experience: {
		eyebrow: string;
		title: string;
		description: string;
		work: string;
		education: string;
		certificates: string;
		present: string;
	};
	projects: {
		eyebrow: string;
		title: string;
		description: string;
		openGithub: string;
		noRepo: string;
		commitLoading: string;
		commitUnavailable: string;
		lastPush: string;
	};
	about: {
		eyebrow: string;
		title: string;
		location: string;
		email: string;
		languages: string;
		writeMessage: string;
		githubProfile: string;
	};
	common: {
		stackAria: string;
		today: string;
		yesterday: string;
		daysAgo: (n: number) => string;
		weeksAgo: (n: number) => string;
		monthsAgo: (n: number) => string;
		yearsAgo: (n: number) => string;
		languageSwitch: string;
		themeToLight: string;
		themeToDark: string;
	};
	categories: {
		frontend: string;
		backend: string;
		testing: string;
		devops: string;
		tools: string;
		process: string;
	};
};

export type MessagesByLocale = Localized<Messages>;
