import { describe, expect, it } from 'vitest';
import { CertificateList } from '@/features/experience/components/molecules/CertificateList';
import type { Certificate } from '@/shared/types';
import { renderWithProviders } from '@/test/render';

const items: Certificate[] = [
	{
		id: 'aws',
		title: { de: 'AWS Cloud Practitioner', en: 'AWS Cloud Practitioner' },
		issuer: 'Amazon',
		date: '2024-05',
	},
];

describe('CertificateList', () => {
	it('renders certificate title, issuer and month/year', () => {
		const { getByText } = renderWithProviders(<CertificateList items={items} />);

		expect(getByText('Zertifikate')).toBeInTheDocument();
		expect(getByText('AWS Cloud Practitioner')).toBeInTheDocument();
		expect(getByText('Amazon')).toBeInTheDocument();
		expect(getByText('Mai 2024')).toBeInTheDocument();
	});
});
