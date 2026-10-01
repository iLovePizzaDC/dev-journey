import { describe, expect, it } from 'vitest';
import { DottedList } from '@/shared/components/molecules/DottedList';
import { renderWithProviders } from '@/test/render';

describe('DottedList', () => {
	it('renders list items', () => {
		const { getByText } = renderWithProviders(<DottedList items={['Alpha', 'Beta']} />);

		expect(getByText('Alpha')).toBeInTheDocument();
		expect(getByText('Beta')).toBeInTheDocument();
	});
});
