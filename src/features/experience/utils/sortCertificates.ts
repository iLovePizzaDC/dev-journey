import type { Certificate } from '@/shared/types';

export function sortCertificatesByDateDesc(certs: Certificate[]): Certificate[] {
	return [...certs].sort((left, right) => right.date.localeCompare(left.date));
}
