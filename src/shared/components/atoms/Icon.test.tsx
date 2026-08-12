import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { describe, expect, it } from 'vitest';
import { Icon } from '@/shared/atoms';
import { renderWithProviders } from '@/test/render';

describe('Icon', () => {
	it('renders the given icon', () => {
		const { container } = renderWithProviders(<Icon icon={CodeBracketIcon} />);
		expect(container.querySelector('svg')).toBeTruthy();
	});
});
