import { describe, expect, it } from 'vitest';
import { TechYearGroup } from '@/features/tech-timeline/components/molecules/TechYearGroup';
import type { Technology } from '@/shared/types';
import { renderWithProviders } from '@/test/render';

const techs: Technology[] = [
	{
		id: 'react',
		name: 'React',
		category: 'frontend',
		acquiredYear: 2022,
	},
	{
		id: 'vitest',
		name: 'Vitest',
		category: 'testing',
		acquiredYear: 2022,
	},
];

describe('TechYearGroup', () => {
	it('renders year heading and tech names', () => {
		const { getByRole, getByText } = renderWithProviders(
			<ul>
				<TechYearGroup year={2022} techs={techs} isLast />
			</ul>,
		);

		expect(getByRole('heading', { name: '2022' })).toBeInTheDocument();
		expect(getByText('React')).toBeInTheDocument();
		expect(getByText('Vitest')).toBeInTheDocument();
	});
});
