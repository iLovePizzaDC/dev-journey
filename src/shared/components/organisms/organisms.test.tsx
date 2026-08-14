import { describe, expect, it } from 'vitest';
import { SiteFooter } from '@/shared/components/organisms';
import { renderWithProviders } from '@/test/render';

describe('SiteFooter', () => {
	it('renders copyright year', () => {
		const { getByText } = renderWithProviders(<SiteFooter />);
		expect(getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument();
	});
});
