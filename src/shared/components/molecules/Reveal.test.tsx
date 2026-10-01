import { describe, expect, it } from 'vitest';
import { Reveal } from '@/shared/components/molecules/Reveal';
import { renderWithProviders } from '@/test/render';

describe('Reveal', () => {
	it('renders children and becomes visible via IntersectionObserver mock', () => {
		const { getByText, container } = renderWithProviders(
			<Reveal className='custom'>
				<span>Sichtbar</span>
			</Reveal>,
		);

		expect(getByText('Sichtbar')).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('opacity-100');
		expect(container.firstChild).toHaveClass('custom');
	});

	it('supports a custom element tag', () => {
		const { container } = renderWithProviders(
			<Reveal as='article'>
				<span>Artikel</span>
			</Reveal>,
		);

		expect(container.querySelector('article')).toBeInTheDocument();
	});
});
