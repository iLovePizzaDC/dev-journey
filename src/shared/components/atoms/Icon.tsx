import type { ComponentType, SVGProps } from 'react';
import { cn } from '@/shared/utils/cn';

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface IIconProps {
	icon: IconComponent;
	className?: string;
	title?: string;
}

export function Icon({ icon: IconSvg, className, title }: IIconProps) {
	return (
		<IconSvg
			aria-hidden={title ? undefined : true}
			aria-label={title}
			className={cn('h-4 w-4 shrink-0', className)}
		/>
	);
}
