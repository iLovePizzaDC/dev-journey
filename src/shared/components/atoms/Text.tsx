import { TEXT_VARIANT_CLASS } from '@/shared/components/atoms/Text.constants';
import type { ITextProps } from '@/shared/components/atoms/Text.types';
import { cn } from '@/shared/utils/cn';

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
