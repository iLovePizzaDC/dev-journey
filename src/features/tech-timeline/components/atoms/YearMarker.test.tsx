import { describe, expect, it } from 'vitest';
import { YearMarker } from '@/features/tech-timeline/components/atoms/YearMarker';
import { renderWithProviders } from '@/test/render';

describe('YearMarker', () => {
	it('renders a decorative marker', () => {
		const { container } = renderWithProviders(<YearMarker />);
		expect(container.querySelector('[aria-hidden="true"]')).toBeTruthy();
	});
});
