import { describe, expect, it } from 'vitest';
import { ProjectHighlights } from '@/features/projects/components/molecules/ProjectHighlights';
import { renderWithProviders } from '@/test/render';

describe('ProjectHighlights', () => {
	it('renders each highlight item', () => {
		const { getByText } = renderWithProviders(
			<ProjectHighlights items={['Feature A', 'Feature B']} />,
		);

		expect(getByText('Feature A')).toBeInTheDocument();
		expect(getByText('Feature B')).toBeInTheDocument();
	});
});
