import { describe, expect, it } from 'vitest';
import { BulletList } from '@/features/experience/components/molecules/BulletList';
import { renderWithProviders } from '@/test/render';

describe('BulletList', () => {
	it('renders all bullet items', () => {
		const { getByText } = renderWithProviders(<BulletList items={['Eins', 'Zwei']} />);

		expect(getByText('Eins')).toBeInTheDocument();
		expect(getByText('Zwei')).toBeInTheDocument();
	});
});
