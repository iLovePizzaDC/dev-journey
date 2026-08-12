export type RelativeTimeMessages = {
	today: string;
	yesterday: string;
	daysAgo: (n: number) => string;
	weeksAgo: (n: number) => string;
	monthsAgo: (n: number) => string;
	yearsAgo: (n: number) => string;
};
