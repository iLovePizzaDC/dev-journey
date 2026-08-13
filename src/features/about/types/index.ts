import type { ReactNode } from 'react';
import type { IconComponent } from '@/shared/types';

export type AboutFactIcon = IconComponent;

export type AboutFact = {
	icon: AboutFactIcon;
	label: string;
	value: ReactNode;
};
