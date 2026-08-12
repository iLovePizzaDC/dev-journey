import { useEffect, useRef, useState, type CSSProperties, type ElementType } from 'react';
import { cn } from '@/shared/lib/cn';
import type { IRevealProps } from '@/shared/molecules/Reveal.types';
import type { RevealTag } from '@/shared/types';

function prefersReducedMotion(): boolean {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function Reveal<T extends RevealTag = 'div'>({
	children,
	className,
	delay = 0,
	as,
	style,
	...rest
}: IRevealProps<T>) {
	const Tag = (as ?? 'div') as ElementType;
	const ref = useRef<HTMLElement | null>(null);
	const [visible, setVisible] = useState(prefersReducedMotion);

	useEffect(() => {
		const node = ref.current;
		if (!node || prefersReducedMotion()) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<Tag
			ref={ref}
			className={cn(
				'transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
				visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
				className,
			)}
			style={
				{
					...(style as CSSProperties | undefined),
					transitionDelay: visible ? `${delay}ms` : '0ms',
				} as CSSProperties
			}
			{...rest}
		>
			{children}
		</Tag>
	);
}
