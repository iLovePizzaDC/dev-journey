import { describe, expect, it } from 'vitest';
import { HeroKicker } from '@/features/hero/atoms/HeroKicker';
import { renderWithProviders } from '@/test/render';

describe('HeroKicker', () => {
	it('renders label text', () => {
		const { getByText } = renderWithProviders(<HeroKicker>Dev Journey</HeroKicker>);
		expect(getByText('Dev Journey')).toBeInTheDocument();
	});
});
