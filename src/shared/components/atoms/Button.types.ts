import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonVariant } from '@/shared/types';

type ButtonCommon = {
	children: ReactNode;
	variant?: ButtonVariant;
	className?: string;
};

type ButtonAsButton = ButtonCommon & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonCommon & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Discriminated union — `type` required (cannot express as interface). */
export type IButtonProps = ButtonAsButton | ButtonAsLink;
