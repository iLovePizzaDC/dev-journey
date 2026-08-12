import type { Locale, NavLink, TechCategory, Theme } from '@/shared/types';

export const LOCALES = ['de', 'en'] as const satisfies readonly Locale[];

export const LOCALE_LABELS: Record<Locale, string> = {
	de: 'DE',
	en: 'EN',
};

export const STORAGE_KEYS = {
	locale: 'dev-journey-locale',
	theme: 'dev-journey-theme',
} as const;

export const TECH_CATEGORIES = [
	'frontend',
	'backend',
	'testing',
	'devops',
	'tools',
	'process',
] as const satisfies readonly TechCategory[];

export const SECTION_IDS = {
	top: 'top',
	experience: 'experience',
	projects: 'projects',
	journey: 'journey',
	about: 'about',
} as const;

export const NAV_SECTION_IDS = [
	SECTION_IDS.experience,
	SECTION_IDS.projects,
	SECTION_IDS.journey,
	SECTION_IDS.about,
] as const;

export const NAV_LINKS: readonly NavLink[] = [
	{ sectionId: SECTION_IDS.experience, labelKey: 'experience' },
	{ sectionId: SECTION_IDS.projects, labelKey: 'projects' },
	{ sectionId: SECTION_IDS.journey, labelKey: 'journey' },
	{ sectionId: SECTION_IDS.about, labelKey: 'about' },
] as const;

export const GITHUB_API = {
	accept: 'application/vnd.github+json',
	version: '2022-11-28',
	repoUrl: (repo: string) => `https://api.github.com/repos/${repo}`,
} as const;

export const THEMES = ['light', 'dark'] as const satisfies readonly Theme[];
