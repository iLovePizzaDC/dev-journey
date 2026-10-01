import { describe, expect, it } from 'vitest';
import { StackList } from '@/shared/components/molecules/StackList';
import { renderWithProviders } from '@/test/render';

describe('StackList', () => {
	it('renders stack badges with accessible label', () => {
		const { getByLabelText, getByText } = renderWithProviders(
			<StackList items={['React', 'TypeScript']} />,
		);

		expect(getByLabelText('Tech-Stack')).toBeInTheDocument();
		expect(getByText('React')).toBeInTheDocument();
		expect(getByText('TypeScript')).toBeInTheDocument();
	});
});
