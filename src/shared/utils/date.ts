import { MONTH_LABELS } from '@/shared/constants';
import type { Locale, RelativeTimeMessages } from '@/shared/types';

const MS_PER_DAY = 1000 * 60 * 60 * 24;
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30;
const DAYS_IN_YEAR = 365;

export function formatMonthYear(value: string, locale: Locale = 'de'): string {
	const [year, month] = value.split('-').map(Number);

	if (!year || !month) return value;

	const monthName = MONTH_LABELS[locale][month - 1];
	return `${monthName} ${year}`;
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
	const daysAgo = Math.floor(diffMs / MS_PER_DAY);

	if (daysAgo < 0) {
		const yearMonth = isoDate.slice(0, 7);
		return formatMonthYear(yearMonth);
	}

	if (daysAgo === 0) return messages.today;
	if (daysAgo === 1) return messages.yesterday;
	if (daysAgo < DAYS_IN_WEEK) return messages.daysAgo(daysAgo);

	if (daysAgo < DAYS_IN_MONTH) {
		const weeksAgo = Math.floor(daysAgo / DAYS_IN_WEEK);
		return messages.weeksAgo(weeksAgo);
	}

	if (daysAgo < DAYS_IN_YEAR) {
		const monthsAgo = Math.floor(daysAgo / DAYS_IN_MONTH);
		return messages.monthsAgo(monthsAgo);
	}

	const yearsAgo = Math.floor(daysAgo / DAYS_IN_YEAR);
	return messages.yearsAgo(yearsAgo);
}
