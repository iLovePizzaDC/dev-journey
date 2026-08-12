import type { CSSProperties, ElementType, ReactNode } from 'react';
import type { TextVariant } from '@/shared/types';
import { TEXT_VARIANT_CLASS } from '@/shared/constants';
import { cn } from '@/shared/utils/cn';

interface IText {
	as?: ElementType;
	variant?: TextVariant;
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
	id?: string;
}

export function Text({ as: Tag = 'p', variant = 'body', children, className, style, id }: IText) {
	return (
		<Tag id={id} className={cn('m-0', TEXT_VARIANT_CLASS[variant], className)} style={style}>
			{children}
		</Tag>
	);
}
