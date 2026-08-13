import { describe, expect, it } from 'vitest';
import { CommitMeta } from '@/shared/components/molecules/CommitMeta';
import { renderWithProviders } from '@/test/render';

describe('CommitMeta', () => {
	it('shows loading copy', () => {
		const { getByText } = renderWithProviders(<CommitMeta loading />);
		expect(getByText(/geladen|Loading/i)).toBeInTheDocument();
	});

	it('shows unavailable copy', () => {
		const { getByText } = renderWithProviders(<CommitMeta error />);
		expect(getByText(/nicht verfügbar|unavailable/i)).toBeInTheDocument();
	});

	it('shows relative last push with language and stars', () => {
		const { getByText, getByTitle } = renderWithProviders(
			<CommitMeta pushedAt={new Date().toISOString()} language='TypeScript' stars={3} />,
		);
		expect(getByText(/Letzter Push|Last push/i)).toBeInTheDocument();
		expect(getByText('TypeScript')).toBeInTheDocument();
		expect(getByText('3')).toBeInTheDocument();
		expect(getByTitle(/Sterne|Stars/i)).toBeInTheDocument();
	});

	it('hides zero stars', () => {
		const { queryByTitle, getByText } = renderWithProviders(
			<CommitMeta pushedAt={new Date().toISOString()} language='TypeScript' stars={0} />,
		);
		expect(getByText('TypeScript')).toBeInTheDocument();
		expect(queryByTitle(/Sterne|Stars/i)).not.toBeInTheDocument();
	});
});
