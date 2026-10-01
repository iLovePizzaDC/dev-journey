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

	const setTheme = useCallback((nextTheme: Theme) => {
		setThemeState(nextTheme);
	}, []);

	const toggleTheme = useCallback(() => {
		setThemeState((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
	}, []);

	const contextValue = useMemo(
		() => ({
			theme,
			setTheme,
			toggleTheme,
		}),
		[theme, setTheme, toggleTheme],
	);

	return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}
