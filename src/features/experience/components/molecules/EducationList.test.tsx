import { describe, expect, it } from 'vitest';
import { EducationList } from '@/features/experience/components/molecules/EducationList';
import type { Education } from '@/shared/types';
import { renderWithProviders } from '@/test/render';

const items: Education[] = [
	{
		id: 'school',
		title: { de: 'Fachhochschulreife', en: 'University entrance qualification' },
		institution: 'Demo Schule',
		start: '2018-09',
		end: '2021-07',
	},
];

describe('EducationList', () => {
	it('renders education entries newest-aware with localized title', () => {
		const { getByText } = renderWithProviders(<EducationList items={items} />);

		expect(getByText('Ausbildung & Schule')).toBeInTheDocument();
		expect(getByText('Fachhochschulreife')).toBeInTheDocument();
		expect(getByText('Demo Schule')).toBeInTheDocument();
	});
});
