import { describe, expect, it } from 'vitest';
import { CertificateList } from '@/features/experience/components/molecules/CertificateList';
import { renderWithProviders } from '@/test/render';

describe('CertificateList', () => {
	it('renders certificates heading', () => {
		const { getByRole } = renderWithProviders(<CertificateList />);
		expect(getByRole('heading', { name: /Zertifikate|Certificates/i })).toBeInTheDocument();
	});
});
