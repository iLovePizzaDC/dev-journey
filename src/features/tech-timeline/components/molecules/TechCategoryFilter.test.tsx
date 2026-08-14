import { TechCategoryFilter } from '@/features/tech-timeline/components/molecules/TechCategoryFilter';
import type { TechCategoryFilter as TechCategoryFilterValue } from '@/features/tech-timeline/types';
import { renderWithProviders } from '@/test/render';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';

function FilterHarness() {
	const [value, setValue] = useState<TechCategoryFilterValue>('all');
	return <TechCategoryFilter value={value} onChange={setValue} />;
}

describe('TechCategoryFilter', () => {
	it('selects a category and can reset to all', async () => {
		const user = userEvent.setup();
		renderWithProviders(<FilterHarness />);

		expect(screen.getByRole('button', { name: 'Alle' })).toHaveAttribute('aria-pressed', 'true');

		await user.click(screen.getByRole('button', { name: 'Testing' }));
		expect(screen.getByRole('button', { name: 'Testing' })).toHaveAttribute('aria-pressed', 'true');
		expect(screen.getByRole('button', { name: 'Alle' })).toHaveAttribute('aria-pressed', 'false');

		await user.click(screen.getByRole('button', { name: 'Testing' }));
		expect(screen.getByRole('button', { name: 'Alle' })).toHaveAttribute('aria-pressed', 'true');
	});
});
