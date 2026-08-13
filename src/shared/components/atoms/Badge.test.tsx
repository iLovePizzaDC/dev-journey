import { describe, expect, it } from 'vitest';
import { Badge, TechBadge } from '@/shared/components/atoms';
import { renderWithProviders } from '@/test/render';

describe('Badge', () => {
	it('renders category label', () => {
		const { getByText } = renderWithProviders(<Badge category='frontend' />);
		expect(getByText('Frontend')).toBeInTheDocument();
	});
});

describe('TechBadge', () => {
	it('renders tech name', () => {
		const { getByTestId } = renderWithProviders(<TechBadge name='React' />);
		expect(getByTestId('tech-badge')).toHaveTextContent('React');
	});
});
