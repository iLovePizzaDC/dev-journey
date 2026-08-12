import type { ComponentType, SVGProps } from 'react';

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface IIconProps {
	icon: IconComponent;
	className?: string;
	title?: string;
}
