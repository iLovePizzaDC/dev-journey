import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { TechCategoryFilter } from '@/features/tech-timeline/components/molecules/TechCategoryFilter';
import { renderWithProviders } from '@/test/render';
import { useState } from 'react';
import type { TechCategoryFilter as TechCategoryFilterValue } from '@/features/tech-timeline/types';

function FilterHarness() {
	const [value, setValue] = useState<TechCategoryFilterValue>('all');
	return <TechCategoryFilter value={value} onChange={setValue} />;
}

describe('TechCategoryFilter', () => {
	it('marks all as pressed by default', () => {
		const { getByRole, container } = renderWithProviders(<FilterHarness />);
		expect(getByRole('button', { name: 'Alle' })).toHaveAttribute('aria-pressed', 'true');
		expect(getByRole('button', { name: 'Frontend' })).toHaveAttribute('aria-pressed', 'false');
		expect(container.querySelectorAll('svg').length).toBeGreaterThan(0);
	});

	it('selects a category and can reset to all', async () => {
		const user = userEvent.setup();
		renderWithProviders(<FilterHarness />);

		await user.click(screen.getByRole('button', { name: 'Testing' }));
		expect(screen.getByRole('button', { name: 'Testing' })).toHaveAttribute('aria-pressed', 'true');
		expect(screen.getByRole('button', { name: 'Alle' })).toHaveAttribute('aria-pressed', 'false');

		await user.click(screen.getByRole('button', { name: 'Testing' }));
		expect(screen.getByRole('button', { name: 'Alle' })).toHaveAttribute('aria-pressed', 'true');
	});
});
