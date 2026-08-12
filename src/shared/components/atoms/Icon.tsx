import type { IIconProps } from '@/shared/components/atoms/Icon.types';
import { cn } from '@/shared/utils/cn';

export function Icon({ icon: IconSvg, className, title }: IIconProps) {
	return (
		<IconSvg
			aria-hidden={title ? undefined : true}
			aria-label={title}
			className={cn('h-4 w-4 shrink-0', className)}
		/>
	);
}

export type { IconComponent } from '@/shared/components/atoms/Icon.types';
