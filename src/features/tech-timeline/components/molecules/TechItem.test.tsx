import { describe, expect, it } from 'vitest';
import { TechItem } from '@/features/tech-timeline/components/molecules/TechItem';
import type { Technology } from '@/shared/types';
import { renderWithProviders } from '@/test/render';

const tech: Technology = {
	id: 'react',
	name: 'React',
	category: 'frontend',
	acquiredYear: 2022,
	note: {
		de: 'Für UI-Arbeit',
		en: 'For UI work',
	},
};

describe('TechItem', () => {
	it('renders a tech badge with accessible label including note', () => {
		const { getByLabelText } = renderWithProviders(<TechItem tech={tech} />);

		expect(getByLabelText(/React, Frontend\. Für UI-Arbeit/)).toBeInTheDocument();
	});
});
