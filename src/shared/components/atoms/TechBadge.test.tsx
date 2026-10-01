import { describe, expect, it } from 'vitest';
import { TechBadge } from '@/shared/components/atoms/TechBadge';
import { renderWithProviders } from '@/test/render';

describe('TechBadge', () => {
	it('renders the tech name and category data attribute', () => {
		const { getByTestId, getByText } = renderWithProviders(
			<TechBadge name='React' category='frontend' />,
		);

		expect(getByText('React')).toBeInTheDocument();
		expect(getByTestId('tech-badge')).toHaveAttribute('data-category', 'frontend');
	});
});
