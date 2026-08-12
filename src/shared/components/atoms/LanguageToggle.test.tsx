import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { LanguageToggle } from '@/shared/components/atoms';
import { renderWithProviders } from '@/test/render';

describe('LanguageToggle (Vitest + Testing Library)', () => {
	it('switches locale from DE to EN', async () => {
		const user = userEvent.setup();
		renderWithProviders(<LanguageToggle />, { locale: 'de' });

		expect(screen.getByRole('button', { name: 'DE' })).toHaveAttribute('aria-pressed', 'true');

		await user.click(screen.getByRole('button', { name: 'EN' }));

		expect(screen.getByRole('button', { name: 'EN' })).toHaveAttribute('aria-pressed', 'true');
	});
});
