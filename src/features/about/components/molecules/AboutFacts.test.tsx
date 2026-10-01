import { describe, expect, it } from 'vitest';
import { AboutFacts } from '@/features/about/components/molecules/AboutFacts';
import { profile } from '@/shared/content';
import { renderWithProviders } from '@/test/render';

describe('AboutFacts', () => {
	it('renders location, email link and languages', () => {
		const { getByText, getByRole } = renderWithProviders(<AboutFacts />);

		expect(getByText('Standort')).toBeInTheDocument();
		expect(getByText(profile.location)).toBeInTheDocument();
		expect(getByRole('link', { name: profile.email })).toHaveAttribute(
			'href',
			`mailto:${profile.email}`,
		);
		expect(getByText('Sprachen')).toBeInTheDocument();
	});
});
