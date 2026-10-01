import { describe, expect, it } from 'vitest';
import { SectionHeader } from '@/shared/components/molecules/SectionHeader';
import { Section } from '@/shared/components/organisms/Section';
import { renderWithProviders } from '@/test/render';

describe('SectionHeader', () => {
	it('renders eyebrow, title and description', () => {
		const { getByText, getByRole } = renderWithProviders(
			<SectionHeader eyebrow='Eyebrow' title='Titel' description='Beschreibung' />,
		);

		expect(getByText('Eyebrow')).toBeInTheDocument();
		expect(getByRole('heading', { name: 'Titel' })).toBeInTheDocument();
		expect(getByText('Beschreibung')).toBeInTheDocument();
	});
});

describe('Section', () => {
	it('wraps content with section id and header', () => {
		const { container, getByRole, getByText } = renderWithProviders(
			<Section id='about' title='Über mich' description='Kurz'>
				<p>Inhalt</p>
			</Section>,
		);

		expect(container.querySelector('#about')).toBeInTheDocument();
		expect(getByRole('heading', { name: 'Über mich' })).toBeInTheDocument();
		expect(getByText('Inhalt')).toBeInTheDocument();
	});
});
