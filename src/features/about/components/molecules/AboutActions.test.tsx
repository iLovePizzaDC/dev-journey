import { describe, expect, it } from 'vitest';
import { AboutActions } from '@/features/about/components/molecules/AboutActions';
import { profile } from '@/shared/content';
import { renderWithProviders } from '@/test/render';

describe('AboutActions', () => {
	it('renders contact and github links', () => {
		const { getByRole } = renderWithProviders(<AboutActions />);
		expect(getByRole('link', { name: /Nachricht|message/i })).toHaveAttribute(
			'href',
			`mailto:${profile.email}`,
		);
		expect(getByRole('link', { name: /GitHub/i })).toHaveAttribute(
			'href',
			`https://github.com/${profile.githubUsername}`,
		);
	});
});
