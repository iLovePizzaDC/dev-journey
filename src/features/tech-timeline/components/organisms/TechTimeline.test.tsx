import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { TechTimeline } from '@/features/tech-timeline';
import type { Technology } from '@/shared/types';
import { renderWithProviders } from '@/test/render';

const items: Technology[] = [
	{ id: 'react', name: 'React', category: 'frontend', acquiredYear: 2023 },
	{ id: 'jest', name: 'Jest', category: 'testing', acquiredYear: 2023 },
	{ id: 'java', name: 'Java', category: 'backend', acquiredYear: 2021 },
];

describe('TechTimeline', () => {
	it('filters technologies by category', async () => {
		const user = userEvent.setup();
		renderWithProviders(<TechTimeline items={items} />);

		expect(screen.getByText('React')).toBeInTheDocument();
		expect(screen.getByText('Jest')).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: '2021' })).toBeInTheDocument();

		await user.click(screen.getByRole('button', { name: 'Testing' }));

		expect(screen.getByText('Jest')).toBeInTheDocument();
		expect(screen.queryByText('React')).not.toBeInTheDocument();
		expect(screen.queryByRole('heading', { name: '2021' })).not.toBeInTheDocument();
		expect(screen.getByRole('heading', { name: '2023' })).toBeInTheDocument();
	});
});
