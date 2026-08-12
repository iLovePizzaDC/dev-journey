import { describe, expect, it } from 'vitest';
import { Reveal } from '@/shared/molecules';
import { renderWithProviders } from '@/test/render';

describe('Reveal', () => {
	it('renders children', () => {
		const { getByText } = renderWithProviders(<Reveal>Visible</Reveal>);
		expect(getByText('Visible')).toBeInTheDocument();
	});
});
