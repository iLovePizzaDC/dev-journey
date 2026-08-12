import { describe, expect, it } from 'vitest';
import { categoryLabel } from '@/shared/lib/labels';
import { messages } from '@/shared/i18n';

describe('categoryLabel()', () => {
	it('maps category keys to localized labels', () => {
		expect(categoryLabel('frontend', messages.de.categories)).toBe('Frontend');
		expect(categoryLabel('process', messages.en.categories)).toBe('Process');
	});
});
