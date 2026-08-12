import type { Certificate } from '@/shared/types';

export function sortCertificatesByDateDesc(certs: Certificate[]): Certificate[] {
	return [...certs].sort((a, b) => b.date.localeCompare(a.date));
}
