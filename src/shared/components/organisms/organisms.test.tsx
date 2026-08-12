import { describe, expect, it } from 'vitest';
import { SectionHeader, StackList, CommitMeta } from '@/shared/molecules';
import { SiteHeader, SiteFooter, Section } from '@/shared/organisms';
import { renderWithProviders } from '@/test/render';

describe('SectionHeader', () => {
	it('renders title', () => {
		const { getByRole } = renderWithProviders(<SectionHeader title='Title' description='Desc' />);
		expect(getByRole('heading', { name: 'Title' })).toBeInTheDocument();
	});
});

describe('StackList', () => {
	it('renders stack items', () => {
		const { getByText } = renderWithProviders(<StackList items={['React']} />);
		expect(getByText('React')).toBeInTheDocument();
	});
});

describe('CommitMeta', () => {
	it('shows loading copy', () => {
		const { getByText } = renderWithProviders(<CommitMeta loading />);
		expect(getByText(/geladen|Loading/i)).toBeInTheDocument();
	});
});

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
