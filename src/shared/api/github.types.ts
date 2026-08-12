export type GitHubApiRepo = {
	full_name: string;
	description: string | null;
	html_url: string;
	pushed_at: string;
	language: string | null;
	stargazers_count: number;
	topics?: string[];
};
