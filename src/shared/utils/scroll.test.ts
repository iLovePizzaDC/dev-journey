import { describe, expect, it, vi } from 'vitest';
import { scrollToSection } from '@/shared/utils/scroll';

describe('scrollToSection', () => {
	it('scrolls to an existing section', () => {
		const scrollIntoView = vi.fn();
		const element = document.createElement('section');
		element.id = 'projects';
		element.scrollIntoView = scrollIntoView;
		document.body.append(element);

		scrollToSection('projects');

		expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });

		element.remove();
	});

	it('does nothing when the section is missing', () => {
		expect(() => scrollToSection('missing')).not.toThrow();
	});
});
