import { describe, expect, it } from 'vitest';
import { categoryLabel } from '@/shared/utils/labels';
import { messages } from '@/shared/i18n';

describe('categoryLabel', () => {
	it('returns the localized category label', () => {
		expect(categoryLabel('frontend', messages.de.categories)).toBe('Frontend');
		expect(categoryLabel('testing', messages.en.categories)).toBe('Testing');
	});
});
