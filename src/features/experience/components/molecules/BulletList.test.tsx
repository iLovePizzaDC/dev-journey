import { describe, expect, it } from 'vitest';
import { BulletList } from '@/features/experience/molecules/BulletList';
import { renderWithProviders } from '@/test/render';

describe('BulletList', () => {
	it('renders items', () => {
		const { getByText } = renderWithProviders(<BulletList items={['One']} />);
		expect(getByText('One')).toBeInTheDocument();
	});
});
