import type { ReactNode } from 'react';
import type { Theme } from '@/shared/types';

export interface IThemeProviderProps {
	children: ReactNode;
	initialTheme?: Theme;
}
