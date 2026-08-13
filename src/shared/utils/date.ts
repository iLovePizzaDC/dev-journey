import { MONTH_LABELS } from '@/shared/constants';
import type { Locale, RelativeTimeMessages } from '@/shared/types';

export function formatMonthYear(value: string, locale: Locale = 'de'): string {
	const [year, month] = value.split('-').map(Number);
	if (!year || !month) return value;
	return `${MONTH_LABELS[locale][month - 1]} ${year}`;
}

export function formatCareerRange(
	start: string,
	end: string | null,
	locale: Locale,
	presentLabel: string,
): { startLabel: string; endLabel: string; rangeLabel: string } {
	const startLabel = formatMonthYear(start, locale);
	const endLabel = end ? formatMonthYear(end, locale) : presentLabel;
	return {
		startLabel,
		endLabel,
		rangeLabel: `${startLabel} – ${endLabel}`,
	};
}

export function formatDateRange(
	start: string,
	end: string | null,
	locale: Locale,
	presentLabel: string,
): string {
	return formatCareerRange(start, end, locale, presentLabel).rangeLabel;
}

export function sortByStartDesc<T extends { start: string }>(items: T[]): T[] {
	return [...items].sort((left, right) => right.start.localeCompare(left.start));
}

export function formatRelativeTime(
	isoDate: string,
	messages: RelativeTimeMessages,
	now: Date = new Date(),
): string {
	const then = new Date(isoDate);
	const diffMs = now.getTime() - then.getTime();
	const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

	if (days < 0) return formatMonthYear(isoDate.slice(0, 7));
	if (days === 0) return messages.today;
	if (days === 1) return messages.yesterday;
	if (days < 7) return messages.daysAgo(days);
	if (days < 30) return messages.weeksAgo(Math.floor(days / 7));
	if (days < 365) return messages.monthsAgo(Math.floor(days / 30));
	return messages.yearsAgo(Math.floor(days / 365));
}
