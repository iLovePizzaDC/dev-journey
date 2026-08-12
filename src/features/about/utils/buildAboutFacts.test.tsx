import { describe, expect, it } from 'vitest';
import { buildAboutFacts } from '@/features/about/utils/buildAboutFacts';
import { profile } from '@/shared/content';
import { messages } from '@/shared/i18n';

describe('buildAboutFacts', () => {
	it('returns 3 facts with expected de labels', () => {
		const facts = buildAboutFacts('de', messages.de, profile);
		expect(facts).toHaveLength(3);
		expect(facts.map((f) => f.label)).toEqual([
			messages.de.about.location,
			messages.de.about.email,
			messages.de.about.languages,
		]);
	});
});
