import { describe, expect, it } from 'vitest';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { LabelHeading } from '@/shared/components/molecules/LabelHeading';
import { renderWithProviders } from '@/test/render';

describe('LabelHeading', () => {
	it('renders icon and title', () => {
		const { getByRole, container } = renderWithProviders(
			<LabelHeading icon={AcademicCapIcon}>Ausbildung & Schule</LabelHeading>,
		);
		expect(getByRole('heading', { name: 'Ausbildung & Schule' })).toBeInTheDocument();
		expect(container.querySelector('svg')).toBeTruthy();
	});
});
