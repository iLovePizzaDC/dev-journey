import { STORAGE_KEYS, THEME_COLORS } from '@/shared/constants';
import type { Theme } from '@/shared/types';

export function getPreferredTheme(): Theme {
	if (typeof window === 'undefined') return 'light';

	const storedTheme = window.localStorage.getItem(STORAGE_KEYS.theme);

	if (storedTheme === 'light' || storedTheme === 'dark') {
		return storedTheme;
	}

	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	return prefersDark ? 'dark' : 'light';
}

export function applyTheme(theme: Theme) {
	const root = document.documentElement;
	root.classList.toggle('dark', theme === 'dark');
	syncThemeColor(theme);
}

function syncThemeColor(theme: Theme) {
	const color = THEME_COLORS[theme];
	let themeColorMeta = document.querySelector('meta[name="theme-color"]');

	if (!themeColorMeta) {
		themeColorMeta = document.createElement('meta');
		themeColorMeta.setAttribute('name', 'theme-color');
		document.head.appendChild(themeColorMeta);
	}

	themeColorMeta.setAttribute('content', color);
}
