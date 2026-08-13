import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useScrollSpy } from '@/shared/hooks/useScrollSpy';

describe('useScrollSpy', () => {
	it('marks the intersecting section as active', async () => {
		const experience = document.createElement('section');
		experience.id = 'experience';
		document.body.append(experience);

		const { result } = renderHook(() => useScrollSpy(['experience']));

		await waitFor(() => {
			expect(result.current).toBe('experience');
		});

		experience.remove();
	});
});
