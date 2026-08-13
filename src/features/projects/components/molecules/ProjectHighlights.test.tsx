import { describe, expect, it } from 'vitest';
import { ProjectHighlights } from '@/features/projects/components/molecules/ProjectHighlights';
import { renderWithProviders } from '@/test/render';

describe('ProjectHighlights', () => {
	it('renders highlights', () => {
		const { getByText } = renderWithProviders(<ProjectHighlights items={['Highlight']} />);
		expect(getByText('Highlight')).toBeInTheDocument();
	});
});
