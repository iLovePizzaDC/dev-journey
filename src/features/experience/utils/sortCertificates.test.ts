import { describe, expect, it } from 'vitest';
import { sortCertificatesByDateDesc } from '@/features/experience/utils/sortCertificates';
import type { Certificate } from '@/shared/types';

describe('sortCertificatesByDateDesc', () => {
	it('sorts by date descending', () => {
		const certs: Certificate[] = [
			{ id: 'a', title: { de: 'A', en: 'A' }, issuer: 'X', date: '2023-01' },
			{ id: 'b', title: { de: 'B', en: 'B' }, issuer: 'Y', date: '2025-06' },
			{ id: 'c', title: { de: 'C', en: 'C' }, issuer: 'Z', date: '2024-03' },
		];

		expect(sortCertificatesByDateDesc(certs).map((certificate) => certificate.id)).toEqual([
			'b',
			'c',
			'a',
		]);
	});
});
