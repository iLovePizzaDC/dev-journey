import { describe, expect, it } from 'vitest';
import { TechItem } from '@/features/tech-timeline/components/molecules/TechItem';
import type { Technology } from '@/shared/types';
import { renderWithProviders } from '@/test/render';

const tech: Technology = {
	id: 'react',
	name: 'React',
	category: 'frontend',
	acquiredYear: 2023,
};

describe('TechItem', () => {
	it('renders tech name', () => {
		const { getByText, getByTestId } = renderWithProviders(
			<ul>
				<TechItem tech={tech} />
			</ul>,
		);
		expect(getByText('React')).toBeInTheDocument();
		expect(getByTestId('tech-badge')).toHaveAttribute('data-category', 'frontend');
	});
});
