import {
	useEffect,
	useRef,
	useState,
	type ComponentPropsWithoutRef,
	type CSSProperties,
	type ElementType,
	type ReactNode,
} from 'react';
import { cn } from '@/shared/utils/cn';
import { prefersReducedMotion } from '@/shared/utils/motion';
import type { RevealTag } from '@/shared/types';

type IReveal<T extends RevealTag = 'div'> = {
	children: ReactNode;
	className?: string;
	delay?: number;
	as?: T;
} & Omit<ComponentPropsWithoutRef<T>, 'children' | 'className'>;

export function Reveal<T extends RevealTag = 'div'>({
	children,
	className,
	delay = 0,
	as,
	style,
	...rest
}: IReveal<T>) {
	const Tag = (as ?? 'div') as ElementType;
	const elementRef = useRef<HTMLElement | null>(null);
	const [isVisible, setIsVisible] = useState(prefersReducedMotion);

	useEffect(() => {
		const element = elementRef.current;
		if (!element || prefersReducedMotion()) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry?.isIntersecting) return;

				setIsVisible(true);
				observer.disconnect();
			},
			{
				threshold: 0.12,
				rootMargin: '0px 0px -8% 0px',
			},
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, []);

	const visibilityClass = isVisible
		? 'translate-y-0 opacity-100'
		: 'translate-y-4 opacity-0';

	const transitionDelay = isVisible ? `${delay}ms` : '0ms';

	return (
		<Tag
			ref={elementRef}
			className={cn(
				'transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
				visibilityClass,
				className,
			)}
			style={
				{
					...(style as CSSProperties | undefined),
					transitionDelay,
				} as CSSProperties
			}
			{...rest}
		>
			{children}
		</Tag>
	);
}
