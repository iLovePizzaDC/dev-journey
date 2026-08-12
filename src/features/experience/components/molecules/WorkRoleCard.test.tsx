import { describe, expect, it } from 'vitest';
import { WorkRoleCard } from '@/features/experience/molecules/WorkRoleCard';
import type { Experience } from '@/shared/types';
import { renderWithProviders } from '@/test/render';

const job: Experience = {
	id: 'test-job',
	company: 'Acme',
	location: 'Remote',
	role: { de: 'Entwickler', en: 'Developer' },
	start: '2024-01',
	end: '2024-12',
	bullets: { de: ['Punkt A'], en: ['Point A'] },
	stack: ['React'],
};

describe('WorkRoleCard', () => {
	it('renders company and role', () => {
		const { getByText } = renderWithProviders(<WorkRoleCard job={job} />);
		expect(getByText('Acme', { exact: false })).toBeInTheDocument();
		expect(getByText('Entwickler')).toBeInTheDocument();
	});
});
