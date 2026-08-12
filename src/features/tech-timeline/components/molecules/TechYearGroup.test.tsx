import { describe, expect, it } from 'vitest';
import { TechYearGroup } from '@/features/tech-timeline/components/molecules/TechYearGroup';
import type { Technology } from '@/shared/types';
import { renderWithProviders } from '@/test/render';

const techs: Technology[] = [
	{ id: 'react', name: 'React', category: 'frontend', acquiredYear: 2023 },
];

describe('TechYearGroup', () => {
	it('renders year', () => {
		const { getByRole } = renderWithProviders(
			<ul>
				<TechYearGroup year={2023} techs={techs} />
			</ul>,
		);
		expect(getByRole('heading', { name: '2023' })).toBeInTheDocument();
	});
});
