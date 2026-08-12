import { describe, expect, it } from 'vitest';
import { Text } from '@/shared/components/atoms';
import { renderWithProviders } from '@/test/render';

describe('Text', () => {
	it('renders children', () => {
		const { getByText } = renderWithProviders(<Text>Hello</Text>);
		expect(getByText('Hello')).toBeInTheDocument();
	});
});
