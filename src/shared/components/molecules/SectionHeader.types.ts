import type { ReactNode } from 'react';

export interface ISectionHeaderProps {
	eyebrow?: string;
	title: string;
	description?: string;
	action?: ReactNode;
}
