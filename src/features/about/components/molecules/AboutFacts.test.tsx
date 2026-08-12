import { describe, expect, it } from 'vitest';
import { AboutFacts } from '@/features/about/components/molecules/AboutFacts';
import { AboutActions } from '@/features/about/components/molecules/AboutActions';
import { renderWithProviders } from '@/test/render';

describe('AboutFacts', () => {
	it('renders location and email labels', () => {
		const { getByText } = renderWithProviders(<AboutFacts />);
		expect(getByText('Standort')).toBeInTheDocument();
		expect(getByText('E-Mail')).toBeInTheDocument();
	});
});

describe('AboutActions', () => {
	it('renders contact CTA', () => {
		const { getByRole } = renderWithProviders(<AboutActions />);
		expect(getByRole('link', { name: /Nachricht|message/i })).toBeInTheDocument();
	});
});
