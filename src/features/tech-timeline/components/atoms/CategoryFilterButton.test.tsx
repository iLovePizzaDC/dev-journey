import { Squares2X2Icon } from '@heroicons/react/24/outline';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { CategoryFilterButton } from '@/features/tech-timeline/components/atoms/CategoryFilterButton';
import { renderWithProviders } from '@/test/render';

describe('CategoryFilterButton', () => {
	it('exposes pressed state and calls onClick', async () => {
		const user = userEvent.setup();
		const onClick = vi.fn();

		const { getByRole } = renderWithProviders(
			<CategoryFilterButton
				label='Alle'
				icon={Squares2X2Icon}
				isSelected
				selectedClassName='bg-accent-soft'
				onClick={onClick}
			/>,
		);

		const button = getByRole('button', { name: 'Alle' });
		expect(button).toHaveAttribute('aria-pressed', 'true');

		await user.click(button);
		expect(onClick).toHaveBeenCalledOnce();
	});
});
