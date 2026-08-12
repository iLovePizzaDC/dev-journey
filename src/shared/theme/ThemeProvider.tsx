import { useCallback, useEffect, useMemo, useState } from 'react';
import { STORAGE_KEYS } from '@/shared/constants';
import { ThemeContext } from '@/shared/theme/ThemeContext';
import type { IThemeProviderProps } from '@/shared/theme/ThemeProvider.types';
import type { Theme } from '@/shared/types';

function getPreferredTheme(): Theme {
	if (typeof window === 'undefined') return 'light';
	const stored = window.localStorage.getItem(STORAGE_KEYS.theme);
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
	document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function ThemeProvider({ children, initialTheme }: IThemeProviderProps) {
	const [theme, setThemeState] = useState<Theme>(() => initialTheme ?? getPreferredTheme());

	useEffect(() => {
		applyTheme(theme);
		window.localStorage.setItem(STORAGE_KEYS.theme, theme);
	}, [theme]);

	const setTheme = useCallback((next: Theme) => {
		setThemeState(next);
	}, []);

	const toggleTheme = useCallback(() => {
		setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
	}, []);

	const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
