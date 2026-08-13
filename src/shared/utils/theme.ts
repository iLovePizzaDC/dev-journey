import { STORAGE_KEYS } from '@/shared/constants';
import type { Theme } from '@/shared/types';

export function getPreferredTheme(): Theme {
	if (typeof window === 'undefined') return 'light';
	const stored = window.localStorage.getItem(STORAGE_KEYS.theme);
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: Theme) {
	document.documentElement.classList.toggle('dark', theme === 'dark');
}
