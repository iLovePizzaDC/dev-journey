import { describe, expect, it } from 'vitest';
import { AboutFacts } from '@/features/about/components/molecules/AboutFacts';
import { renderWithProviders } from '@/test/render';

describe('AboutFacts', () => {
	it('renders location and email labels', () => {
		const { getByText } = renderWithProviders(<AboutFacts />);
		expect(getByText('Standort')).toBeInTheDocument();
		expect(getByText('E-Mail')).toBeInTheDocument();
	});
});
