import { describe, expect, it } from 'vitest';
import { StackList } from '@/shared/components/molecules/StackList';
import { renderWithProviders } from '@/test/render';

describe('StackList', () => {
	it('renders stack items', () => {
		const { getByText } = renderWithProviders(<StackList items={['React']} />);
		expect(getByText('React')).toBeInTheDocument();
	});
});
