import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { describe, expect, it } from 'vitest';
import { Icon } from '@/shared/components/atoms/Icon';
import { StatusDot } from '@/shared/components/atoms/StatusDot';
import { renderWithProviders } from '@/test/render';

describe('Icon', () => {
	it('renders an accessible icon when a title is provided', () => {
		const { getByLabelText } = renderWithProviders(
			<Icon icon={CodeBracketIcon} title='Code' className='h-4 w-4' />,
		);

		expect(getByLabelText('Code')).toBeInTheDocument();
	});
});

describe('StatusDot', () => {
	it('is decorative and present in the document', () => {
		const { container } = renderWithProviders(<StatusDot />);
		const dot = container.querySelector('[aria-hidden="true"]');

		expect(dot).toBeInTheDocument();
	});
});
