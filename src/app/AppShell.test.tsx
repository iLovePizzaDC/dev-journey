import { describe, expect, it } from 'vitest';
import { AppShell } from '@/app/AppShell';
import { renderWithProviders } from '@/test/render';

describe('AppShell', () => {
	it('wraps children', () => {
		const { getByText } = renderWithProviders(<AppShell>Shell</AppShell>);
		expect(getByText('Shell')).toBeInTheDocument();
	});
});
