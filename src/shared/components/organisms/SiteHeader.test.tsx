import { describe, expect, it, vi } from 'vitest';
import { SiteHeader } from '@/shared/components/organisms/SiteHeader';
import { profile } from '@/shared/content';
import { renderWithProviders } from '@/test/render';

vi.mock('@/shared/utils/scroll', () => ({
	scrollToSection: vi.fn(),
}));

vi.mock('@/shared/hooks', async (importOriginal) => {
	const actual = await importOriginal<typeof import('@/shared/hooks')>();
	return {
		...actual,
		useScrollSpy: () => 'projects',
	};
});

describe('SiteHeader', () => {
	it('renders brand, nav and github link', () => {
		const { getByRole, getByText } = renderWithProviders(<SiteHeader />);

		expect(getByRole('button', { name: profile.name })).toBeInTheDocument();
		expect(getByRole('navigation', { name: 'Hauptnavigation' })).toBeInTheDocument();
		expect(getByText('Projekte').closest('button')).toHaveAttribute('aria-current', 'true');
		expect(getByRole('link', { name: /GitHub/i })).toHaveAttribute(
			'href',
			`https://github.com/${profile.githubUsername}`,
		);
	});
});
