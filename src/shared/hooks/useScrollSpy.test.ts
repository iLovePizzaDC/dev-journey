import { useScrollSpy } from '@/shared/hooks/useScrollSpy';
import { act, renderHook, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

describe('useScrollSpy', () => {
	afterEach(() => {
		document.body.replaceChildren();
		Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });
		Object.defineProperty(window, 'innerHeight', { value: 800, configurable: true });
		Object.defineProperty(document.documentElement, 'scrollHeight', {
			value: 2000,
			configurable: true,
		});
	});

	it('marks the intersecting section as active', async () => {
		const experience = document.createElement('section');
		experience.id = 'experience';
		document.body.append(experience);

		const { result } = renderHook(() => useScrollSpy(['experience', 'about']));

		await waitFor(() => {
			expect(result.current).toBe('experience');
		});
	});

	it('activates the last section when scrolled near the document bottom', async () => {
		const experience = document.createElement('section');
		experience.id = 'experience';
		const about = document.createElement('section');
		about.id = 'about';
		document.body.append(experience, about);

		Object.defineProperty(window, 'innerHeight', { value: 800, configurable: true });
		Object.defineProperty(document.documentElement, 'scrollHeight', {
			value: 1000,
			configurable: true,
		});
		Object.defineProperty(window, 'scrollY', { value: 950, configurable: true });

		const { result } = renderHook(() => useScrollSpy(['experience', 'about']));

		await act(async () => {
			window.dispatchEvent(new Event('scroll'));
		});

		await waitFor(() => {
			expect(result.current).toBe('about');
		});
	});
});
