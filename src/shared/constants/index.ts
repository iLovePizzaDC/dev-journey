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

export const NAV_LINKS: readonly NavLink[] = [
	{ href: `#${SECTION_IDS.experience}`, labelKey: 'experience' },
	{ href: `#${SECTION_IDS.projects}`, labelKey: 'projects' },
	{ href: `#${SECTION_IDS.journey}`, labelKey: 'journey' },
	{ href: `#${SECTION_IDS.about}`, labelKey: 'about' },
] as const;

export const GITHUB_API = {
	accept: 'application/vnd.github+json',
	version: '2022-11-28',
	repoUrl: (repo: string) => `https://api.github.com/repos/${repo}`,
} as const;

export const THEMES = ['light', 'dark'] as const satisfies readonly Theme[];
