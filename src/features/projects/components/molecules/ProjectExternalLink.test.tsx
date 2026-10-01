import { describe, expect, it } from 'vitest';
import { ProjectExternalLink } from '@/features/projects/components/molecules/ProjectExternalLink';
import { renderWithProviders } from '@/test/render';

describe('ProjectExternalLink', () => {
	it('renders an external link with the given label and url', () => {
		const { getByRole } = renderWithProviders(
			<ProjectExternalLink url='https://github.com/owner/demo' label='Auf GitHub öffnen' />,
		);

		const link = getByRole('link', { name: /Auf GitHub öffnen/i });
		expect(link).toHaveAttribute('href', 'https://github.com/owner/demo');
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', 'noreferrer');
	});
});
