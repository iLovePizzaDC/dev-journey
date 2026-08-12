import type { ReactNode } from 'react';

export interface ISectionProps {
	id: string;
	eyebrow?: string;
	title: string;
	description?: string;
	children: ReactNode;
	className?: string;
}
