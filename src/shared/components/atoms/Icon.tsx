import type { IIconProps } from '@/shared/atoms/Icon.types';
import { cn } from '@/shared/lib/cn';

export function Icon({ icon: IconSvg, className, title }: IIconProps) {
	return (
		<IconSvg
			aria-hidden={title ? undefined : true}
			aria-label={title}
			className={cn('h-4 w-4 shrink-0', className)}
		/>
	);
}

export type { IconComponent } from '@/shared/atoms/Icon.types';
