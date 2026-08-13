import { BUTTON_VARIANT_CLASS } from '@/shared/constants';
import type { ButtonVariant } from '@/shared/types';
import { cn } from '@/shared/utils/cn';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonCommon = {
	children: ReactNode;
	variant?: ButtonVariant;
	className?: string;
};

type ButtonAsButton = ButtonCommon & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonCommon & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type IButton = ButtonAsButton | ButtonAsLink;

export function Button(props: IButton) {
	const { children, variant = 'primary', className, ...rest } = props;
	const classes = cn(
		'inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm border px-[1.15rem] py-[0.7rem] font-body text-[0.95rem] font-medium no-underline transition duration-200',
		BUTTON_VARIANT_CLASS[variant],
		className,
	);

	if ('href' in props && props.href) {
		const { href, ...linkRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
		return (
			<a className={classes} href={href} {...linkRest}>
				{children}
			</a>
		);
	}

	return (
		<button
			type='button'
			className={classes}
			{...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
		>
			{children}
		</button>
	);
}
