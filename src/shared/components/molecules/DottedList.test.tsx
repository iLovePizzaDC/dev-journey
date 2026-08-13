import { describe, expect, it } from 'vitest';
import { DottedList } from '@/shared/components/molecules/DottedList';
import { renderWithProviders } from '@/test/render';

describe('DottedList', () => {
	it('renders items', () => {
		const { getByText } = renderWithProviders(<DottedList items={['Alpha']} />);
		expect(getByText('Alpha')).toBeInTheDocument();
	});

	it('applies className to the list', () => {
		const { container } = renderWithProviders(<DottedList items={['Beta']} className='mt-2' />);
		expect(container.querySelector('ul')).toHaveClass('mt-2');
	});
});
