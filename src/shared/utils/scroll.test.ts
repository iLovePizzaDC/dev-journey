import { describe, expect, it, vi } from 'vitest';
import {
	isNearDocumentBottom,
	pickActiveSectionId,
	resolveSectionElements,
	scrollToSection,
} from '@/shared/utils/scroll';

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

describe('isNearDocumentBottom', () => {
	it('is true when within the offset of the document end', () => {
		expect(isNearDocumentBottom(80, 920, 800, 1000)).toBe(true);
	});

	it('is false when still above the bottom offset', () => {
		expect(isNearDocumentBottom(80, 100, 800, 2000)).toBe(false);
	});
});

describe('pickActiveSectionId', () => {
	it('returns the section with the highest visibility ratio', () => {
		const visibility = new Map([
			['experience', 0.2],
			['about', 0.8],
		]);

		expect(pickActiveSectionId(visibility, ['experience', 'about'], false)).toBe('about');
	});

	it('forces the last section when near the document bottom', () => {
		const visibility = new Map([
			['experience', 0.9],
			['about', 0.1],
		]);

		expect(pickActiveSectionId(visibility, ['experience', 'about'], true)).toBe('about');
	});

	it('does not force last section when it was never observed', () => {
		const visibility = new Map([
			['experience', 0.5],
		]);

		expect(pickActiveSectionId(visibility, ['experience', 'about'], true)).toBe('experience');
	});

	it('returns null when nothing is visible and not near bottom', () => {
		expect(pickActiveSectionId(new Map([['experience', 0]]), ['experience', 'about'], false)).toBe(
			null,
		);
	});
});

describe('resolveSectionElements', () => {
	it('returns only elements that exist in the document', () => {
		const about = document.createElement('section');
		about.id = 'about';
		document.body.append(about);

		const elements = resolveSectionElements(['missing', 'about']);
		expect(elements).toHaveLength(1);
		expect(elements[0]?.id).toBe('about');

		about.remove();
	});
});
