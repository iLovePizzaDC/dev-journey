import type { ComponentType, ReactNode, SVGProps } from 'react';

export type AboutFactIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type AboutFact = {
	icon: AboutFactIcon;
	label: string;
	value: ReactNode;
};
