import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonVariant } from '@/shared/types';
import { cn } from '@/shared/utils/cn';

type ButtonCommon = {
	children: ReactNode;
	variant?: ButtonVariant;
	className?: string;
};

type ButtonAsButton = ButtonCommon & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonCommon & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Discriminated union — `type` required (cannot express as interface). */
type IButtonProps = ButtonAsButton | ButtonAsLink;

const BUTTON_VARIANT_CLASS: Record<ButtonVariant, string> = {
	primary:
		'border-transparent bg-ink text-paper hover:-translate-y-px hover:bg-accent-strong hover:text-white dark:hover:text-ink',
	ghost: 'border-line bg-transparent text-ink hover:border-ink hover:bg-surface',
	link: 'border-none bg-transparent p-0 font-semibold text-accent-strong hover:text-ink',
};

export function Button(props: IButtonProps) {
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
