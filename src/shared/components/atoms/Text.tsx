import { TEXT_VARIANT_CLASS } from '@/shared/atoms/Text.constants';
import type { ITextProps } from '@/shared/atoms/Text.types';
import { cn } from '@/shared/lib/cn';

export function Text({
	as: Tag = 'p',
	variant = 'body',
	children,
	className,
	style,
	id,
}: ITextProps) {
	return (
		<Tag id={id} className={cn('m-0', TEXT_VARIANT_CLASS[variant], className)} style={style}>
			{children}
		</Tag>
	);
}
