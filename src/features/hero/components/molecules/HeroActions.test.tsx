import { describe, expect, it } from 'vitest';
import { HeroActions } from '@/features/hero/components/molecules/HeroActions';
import { profile } from '@/shared/content';
import { renderWithProviders } from '@/test/render';

describe('HeroActions', () => {
	it('renders primary and secondary CTAs', () => {
		const { getByRole } = renderWithProviders(<HeroActions />);
		expect(getByRole('button', { name: /Projekte|projects/i })).toBeInTheDocument();
		expect(getByRole('link', { name: /Kontakt|Contact/i })).toHaveAttribute(
			'href',
			`mailto:${profile.email}`,
		);
	});
});
