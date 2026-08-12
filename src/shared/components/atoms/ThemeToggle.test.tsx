import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ThemeToggle } from '@/shared/components/atoms';
import { renderWithProviders } from '@/test/render';

describe('ThemeToggle (Vitest + Testing Library)', () => {
	it('toggles dark class on documentElement', async () => {
		const user = userEvent.setup();
		document.documentElement.classList.remove('dark');
		renderWithProviders(<ThemeToggle />, { theme: 'light' });

		await user.click(screen.getByRole('button', { name: /dunklen Modus|dark mode/i }));
		expect(document.documentElement.classList.contains('dark')).toBe(true);
	});
});
