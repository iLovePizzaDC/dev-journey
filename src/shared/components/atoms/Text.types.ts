import type { CSSProperties, ElementType, ReactNode } from 'react';
import type { TextVariant } from '@/shared/types';

export interface ITextProps {
	as?: ElementType;
	variant?: TextVariant;
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
	id?: string;
}
