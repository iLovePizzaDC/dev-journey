import { describe, expect, it } from 'vitest';
import { EducationList } from '@/features/experience/components/molecules/EducationList';
import { CertificateList } from '@/features/experience/components/molecules/CertificateList';
import { renderWithProviders } from '@/test/render';

describe('EducationList', () => {
	it('renders education heading', () => {
		const { getByRole } = renderWithProviders(<EducationList />);
		expect(getByRole('heading', { name: /Ausbildung|Education/i })).toBeInTheDocument();
	});
});

describe('CertificateList', () => {
	it('renders certificates heading', () => {
		const { getByRole } = renderWithProviders(<CertificateList />);
		expect(getByRole('heading', { name: /Zertifikate|Certificates/i })).toBeInTheDocument();
	});
});
