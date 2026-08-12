import { describe, expect, it } from 'vitest';
import {
	formatCareerRange,
	formatDateRange,
	formatMonthYear,
	formatRelativeTime,
	sortByStartDesc,
} from '@/shared/lib/date';
import { messages } from '@/shared/i18n';

describe('formatMonthYear', () => {
	it('formats YYYY-MM for both locales', () => {
		expect(formatMonthYear('2024-07', 'de')).toBe('Jul 2024');
		expect(formatMonthYear('2025-12', 'en')).toBe('Dec 2025');
	});
});

describe('formatCareerRange', () => {
	it('splits start and end labels for scannable timelines', () => {
		expect(formatCareerRange('2024-07', '2026-07', 'de', 'heute')).toEqual({
			startLabel: 'Jul 2024',
			endLabel: 'Jul 2026',
			rangeLabel: 'Jul 2024 – Jul 2026',
		});
	});
});

describe('formatDateRange', () => {
	it('shows both ends when end is set', () => {
		expect(formatDateRange('2024-07', '2026-07', 'de', 'heute')).toBe('Jul 2024 – Jul 2026');
	});

	it('uses present label when end is null', () => {
		expect(formatDateRange('2024-07', null, 'en', 'present')).toBe('Jul 2024 – present');
	});
});

describe('sortByStartDesc', () => {
	it('orders newest first', () => {
		const sorted = sortByStartDesc([
			{ start: '2021-09', id: 'a' },
			{ start: '2024-07', id: 'b' },
		]);
		expect(sorted.map((i) => i.id)).toEqual(['b', 'a']);
	});
});

describe('formatRelativeTime', () => {
	const now = new Date('2026-08-12T12:00:00Z');

	it('formats relative times in German', () => {
		expect(formatRelativeTime('2026-08-12T08:00:00Z', messages.de.common, now)).toBe('heute');
		expect(formatRelativeTime('2026-08-11T08:00:00Z', messages.de.common, now)).toBe('gestern');
	});
});
