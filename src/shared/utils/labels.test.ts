import { describe, expect, it } from 'vitest';
import { categoryLabel } from '@/shared/utils/labels';
import { messages } from '@/shared/i18n';

describe('categoryLabel()', () => {
	it('maps category keys to localized labels', () => {
		expect(categoryLabel('frontend', messages.de.categories)).toBe('Frontend');
		expect(categoryLabel('database', messages.de.categories)).toBe('Datenbank');
		expect(categoryLabel('process', messages.en.categories)).toBe('Process');
	});
});
