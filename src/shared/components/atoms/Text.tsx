import type { CSSProperties, ElementType, ReactNode } from 'react';
import type { TextVariant } from '@/shared/types';
import { cn } from '@/shared/utils/cn';

interface ITextProps {
	as?: ElementType;
	variant?: TextVariant;
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
	id?: string;
}

const TEXT_VARIANT_CLASS: Record<TextVariant, string> = {
	display:
		'font-display text-[clamp(2.75rem,7vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-ink',
	title:
		'font-display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-ink',
	subtitle: 'font-display text-[1.15rem] font-semibold leading-snug tracking-[-0.02em] text-ink',
	body: 'text-base text-ink-soft',
	meta: 'text-sm text-muted',
	label: 'text-xs font-semibold uppercase tracking-[0.12em] text-muted',
};

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
