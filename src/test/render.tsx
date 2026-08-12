import { LocaleProvider } from '@/shared/i18n';
import { ThemeProvider } from '@/shared/theme';
import type { RenderProvidersOptions } from '@/test/render.types';
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';

export function renderWithProviders(ui: ReactElement, options: RenderProvidersOptions = {}) {
	const { locale = 'de', theme = 'light' } = options;
	return render(
		<ThemeProvider initialTheme={theme}>
			<LocaleProvider initialLocale={locale}>{ui}</LocaleProvider>
		</ThemeProvider>,
	);
}
