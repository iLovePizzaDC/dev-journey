import { STORAGE_KEYS, THEME_COLORS } from '@/shared/constants';
import type { Theme } from '@/shared/types';

export function getPreferredTheme(): Theme {
	if (typeof window === 'undefined') return 'light';
	const stored = window.localStorage.getItem(STORAGE_KEYS.theme);
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: Theme) {
	document.documentElement.classList.toggle('dark', theme === 'dark');
	syncThemeColor(theme);
}

function syncThemeColor(theme: Theme) {
	const color = THEME_COLORS[theme];
	let meta = document.querySelector('meta[name="theme-color"]');
	if (!meta) {
		meta = document.createElement('meta');
		meta.setAttribute('name', 'theme-color');
		document.head.appendChild(meta);
	}
	meta.setAttribute('content', color);
}
