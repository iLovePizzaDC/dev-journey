import { describe, expect, it } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { LocaleProvider } from '@/shared/i18n/LocaleProvider';
import { useLocale } from '@/shared/i18n/LocaleContext';
import type { ReactNode } from 'react';

function wrapper({ children }: { children: ReactNode }) {
	return <LocaleProvider initialLocale='de'>{children}</LocaleProvider>;
}

describe('LocaleProvider', () => {
	it('exposes de messages by default and can switch locale', () => {
		const { result } = renderHook(() => useLocale(), { wrapper });
		expect(result.current.locale).toBe('de');
		expect(result.current.messages.nav.experience).toBeTruthy();

		act(() => {
			result.current.setLocale('en');
		});
		expect(result.current.locale).toBe('en');
	});
});
