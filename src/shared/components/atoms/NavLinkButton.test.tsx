import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { NavLinkButton } from '@/shared/components/atoms/NavLinkButton';
import { renderWithProviders } from '@/test/render';

vi.mock('@/shared/utils/scroll', () => ({
	scrollToSection: vi.fn(),
}));

import { scrollToSection } from '@/shared/utils/scroll';

describe('NavLinkButton', () => {
	it('marks the active link and scrolls on click', async () => {
		const user = userEvent.setup();
		const { getByRole } = renderWithProviders(
			<NavLinkButton sectionId='projects' label='Projekte' isActive />,
		);

		const button = getByRole('button', { name: 'Projekte' });
		expect(button).toHaveAttribute('aria-current', 'true');

		await user.click(button);
		expect(scrollToSection).toHaveBeenCalledWith('projects');
	});

	it('does not set aria-current when inactive', () => {
		const { getByRole } = renderWithProviders(
			<NavLinkButton sectionId='about' label='Über mich' isActive={false} />,
		);

		expect(getByRole('button', { name: 'Über mich' })).not.toHaveAttribute('aria-current');
	});
});
