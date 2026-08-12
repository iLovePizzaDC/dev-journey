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

	it('shows relative last push', () => {
		const { getByText } = renderWithProviders(<CommitMeta pushedAt={new Date().toISOString()} />);
		expect(getByText(/Letzter Push|Last push/i)).toBeInTheDocument();
	});
});
