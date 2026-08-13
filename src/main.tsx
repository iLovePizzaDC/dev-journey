import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/app/App';
import { LocaleProvider } from '@/shared/i18n';
import { ThemeProvider } from '@/shared/theme';
import '@/app/index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<LocaleProvider>
				<App />
			</LocaleProvider>
		</ThemeProvider>
	</StrictMode>,
);
