import type { Locale } from '@/shared/types';
import type { Theme } from '@/shared/types';
import type { ReactElement } from 'react';

export type RenderProvidersOptions = {
	locale?: Locale;
	theme?: Theme;
};

export type RenderWithProviders = (
	ui: ReactElement,
	options?: RenderProvidersOptions,
) => ReturnType<typeof import('@testing-library/react').render>;
