import type { Certificate } from '@/shared/types';

export function sortCertificatesByDateDesc(certificates: Certificate[]): Certificate[] {
	return [...certificates].sort((left, right) => right.date.localeCompare(left.date));
}
