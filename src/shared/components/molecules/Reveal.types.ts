import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { RevealTag } from '@/shared/types';

export type { RevealTag };

export type IRevealProps<T extends RevealTag = 'div'> = {
	children: ReactNode;
	className?: string;
	delay?: number;
	as?: T;
} & Omit<ComponentPropsWithoutRef<T>, 'children' | 'className'>;
