import { describe, expect, it } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { ThemeProvider } from '@/shared/theme/ThemeProvider';
import { useTheme } from '@/shared/theme/ThemeContext';
import type { ReactNode } from 'react';

function wrapper({ children }: { children: ReactNode }) {
	return <ThemeProvider initialTheme='light'>{children}</ThemeProvider>;
}

describe('ThemeProvider', () => {
	it('starts with initial theme and toggles', () => {
		const { result } = renderHook(() => useTheme(), { wrapper });
		expect(result.current.theme).toBe('light');

		act(() => {
			result.current.toggleTheme();
		});
		expect(result.current.theme).toBe('dark');
	});
});
