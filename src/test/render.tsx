import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { LocaleProvider } from '@/shared/i18n';
import { ThemeProvider } from '@/shared/theme';
import type { RenderProvidersOptions } from '@/test/render.types';
import type { Locale } from '@/shared/types';

export function renderWithProviders(ui: ReactElement, options: RenderProvidersOptions = {}) {
	const { locale = 'de', theme = 'light' } = options;
	return render(
		<ThemeProvider initialTheme={theme}>
			<LocaleProvider initialLocale={locale}>{ui}</LocaleProvider>
		</ThemeProvider>,
	);
}

/** @deprecated Prefer renderWithProviders */
export function renderWithLocale(ui: ReactElement, locale: Locale = 'de') {
	return renderWithProviders(ui, { locale });
}
