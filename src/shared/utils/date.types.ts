export type RelativeTimeMessages = {
	today: string;
	yesterday: string;
	daysAgo: (count: number) => string;
	weeksAgo: (count: number) => string;
	monthsAgo: (count: number) => string;
	yearsAgo: (count: number) => string;
};
