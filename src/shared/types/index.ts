export type Locale = 'de' | 'en';

export type Localized<T = string> = Record<Locale, T>;

export type Theme = 'light' | 'dark';

export type TechCategory = 'frontend' | 'backend' | 'testing' | 'devops' | 'tools' | 'process';

export type Technology = {
	id: string;
	name: string;
	category: TechCategory;
	acquiredYear: number;
	acquiredMonth?: number;
	note?: Localized;
};

export type Experience = {
	id: string;
	role: Localized;
	company: string;
	location: string;
	start: string;
	end: string | null;
	bullets: Localized<string[]>;
	stack?: string[];
};

export type Education = {
	id: string;
	title: Localized;
	institution: string;
	start: string;
	end: string;
};

export type Certificate = {
	id: string;
	title: Localized;
	issuer: string;
	date: string;
};

export type Project = {
	id: string;
	name: string;
	description: Localized;
	githubRepo?: string;
	url?: string;
	stack: string[];
	highlights?: Localized<string[]>;
};

export type Profile = {
	name: string;
	title: Localized;
	location: string;
	email: string;
	phone?: string;
	githubUsername: string;
	summary: Localized;
	languages: { name: Localized; level: Localized }[];
};

export type GitHubRepoInfo = {
	fullName: string;
	description: string | null;
	htmlUrl: string;
	pushedAt: string;
	language: string | null;
	stars: number;
	topics: string[];
};

export type NavLink = {
	href: string;
	labelKey: 'experience' | 'projects' | 'journey' | 'about';
};

export type TextVariant = 'display' | 'title' | 'subtitle' | 'body' | 'meta' | 'label';

export type ButtonVariant = 'primary' | 'ghost' | 'link';

export type StatusDotTone = 'accent' | 'ink';

export type BadgeTone = 'neutral' | 'accent';

export type RevealTag = 'div' | 'li' | 'article' | 'section';
