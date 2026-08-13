import { describe, expect, it } from 'vitest';
import { EducationList } from '@/features/experience/components/molecules/EducationList';
import { renderWithProviders } from '@/test/render';

describe('EducationList', () => {
	it('renders education heading', () => {
		const { getByRole } = renderWithProviders(<EducationList />);
		expect(getByRole('heading', { name: /Ausbildung|Education/i })).toBeInTheDocument();
	});
});
