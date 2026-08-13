import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { STORAGE_KEYS } from '@/shared/constants';
import { ThemeContext } from '@/shared/theme/ThemeContext';
import { applyTheme, getPreferredTheme } from '@/shared/utils/theme';
import type { Theme } from '@/shared/types';

interface IThemeProvider {
	children: ReactNode;
	initialTheme?: Theme;
}

export function ThemeProvider({ children, initialTheme }: IThemeProvider) {
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
