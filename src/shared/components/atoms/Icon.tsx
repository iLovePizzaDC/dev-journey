import type { IconComponent } from '@/shared/types';
import { cn } from '@/shared/utils/cn';

interface IIcon {
	icon: IconComponent;
	className?: string;
	title?: string;
}

export function Icon({ icon: IconSvg, className, title }: IIcon) {
	return (
		<IconSvg
			aria-hidden={title ? undefined : true}
			aria-label={title}
			className={cn('h-4 w-4 shrink-0', className)}
		/>
	);
}
