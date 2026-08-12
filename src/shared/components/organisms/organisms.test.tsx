import { describe, expect, it } from 'vitest';
import { SiteHeader, SiteFooter, Section } from '@/shared/components/organisms';
import { renderWithProviders } from '@/test/render';

describe('SiteHeader', () => {
	it('renders brand', () => {
		const { getByText } = renderWithProviders(<SiteHeader brand='Nico' />);
		expect(getByText('Nico')).toBeInTheDocument();
	});
});

describe('SiteFooter', () => {
	it('renders copyright year', () => {
		const { getByText } = renderWithProviders(<SiteFooter />);
		expect(getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument();
	});
});

describe('Section', () => {
	it('renders section content', () => {
		const { getByRole, getByText } = renderWithProviders(
			<Section id='x' title='Section' description='D'>
				Body
			</Section>,
		);
		expect(getByRole('heading', { name: 'Section' })).toBeInTheDocument();
		expect(getByText('Body')).toBeInTheDocument();
	});
});
