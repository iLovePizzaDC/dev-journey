import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import { LocaleProvider } from '@/shared/i18n';
import { ThemeProvider } from '@/shared/theme';
import '@/shared/styles/global.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<LocaleProvider>
				<App />
			</LocaleProvider>
		</ThemeProvider>
	</StrictMode>,
);
