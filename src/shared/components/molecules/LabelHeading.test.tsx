import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { describe, expect, it } from 'vitest';
import { LabelHeading } from '@/shared/components/molecules/LabelHeading';
import { renderWithProviders } from '@/test/render';

describe('LabelHeading', () => {
	it('renders icon label text', () => {
		const { getByText } = renderWithProviders(
			<LabelHeading icon={AcademicCapIcon}>Ausbildung</LabelHeading>,
		);

		expect(getByText('Ausbildung')).toBeInTheDocument();
	});
});
