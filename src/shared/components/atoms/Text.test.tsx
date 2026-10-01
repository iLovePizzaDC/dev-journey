import { describe, expect, it } from 'vitest';
import { Text } from '@/shared/components/atoms/Text';
import { renderWithProviders } from '@/test/render';

describe('Text', () => {
	it('renders as the requested element with content', () => {
		const { getByRole } = renderWithProviders(
			<Text as='h2' variant='title'>
				Überschrift
			</Text>,
		);

		expect(getByRole('heading', { name: 'Überschrift' })).toBeInTheDocument();
	});
});
