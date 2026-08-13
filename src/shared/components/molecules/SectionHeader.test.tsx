import { describe, expect, it } from 'vitest';
import { SectionHeader } from '@/shared/components/molecules/SectionHeader';
import { renderWithProviders } from '@/test/render';

describe('SectionHeader', () => {
	it('renders title', () => {
		const { getByRole } = renderWithProviders(<SectionHeader title='Title' description='Desc' />);
		expect(getByRole('heading', { name: 'Title' })).toBeInTheDocument();
	});
});
