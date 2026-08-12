import { describe, expect, it } from 'vitest';
import { StatusDot } from '@/shared/components/atoms/StatusDot';
import { renderWithProviders } from '@/test/render';

describe('StatusDot', () => {
	it('renders aria-hidden marker', () => {
		const { container } = renderWithProviders(<StatusDot />);
		expect(container.querySelector('[aria-hidden="true"]')).toBeTruthy();
	});
});
