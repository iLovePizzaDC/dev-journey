import { describe, expect, it } from 'vitest';
import { Button } from '@/shared/atoms';
import { renderWithProviders } from '@/test/render';

describe('Button', () => {
	it('renders a link when href is set', () => {
		const { getByRole } = renderWithProviders(<Button href='#projects'>Go</Button>);
		expect(getByRole('link', { name: 'Go' })).toHaveAttribute('href', '#projects');
	});

	it('renders a button by default', () => {
		const { getByRole } = renderWithProviders(<Button>Click</Button>);
		expect(getByRole('button', { name: 'Click' })).toBeInTheDocument();
	});
});
