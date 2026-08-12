import { describe, expect, it } from 'vitest';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';
import { messages } from '@/shared/i18n/messages';

describe('content profile', () => {
	it('has required identity fields', () => {
		expect(profile.name).toBe('Nico Betz');
		expect(profile.githubUsername).toBeTruthy();
		expect(profile.summary.de).toBeTruthy();
		expect(profile.summary.en).toBeTruthy();
	});
});

describe('content projects', () => {
	it('includes github repos where linked', () => {
		const withRepo = projects.filter((p) => p.githubRepo);
		expect(withRepo.length).toBeGreaterThan(0);
	});
});

describe('messages', () => {
	it('exposes both locales with nav keys', () => {
		expect(messages.de.nav.experience).toBeTruthy();
		expect(messages.en.nav.experience).toBeTruthy();
	});
});
