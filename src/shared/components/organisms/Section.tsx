import type { ReactNode } from 'react';
import { Reveal, SectionHeader } from '@/shared/components/molecules';
import { cn } from '@/shared/utils/cn';

interface ISectionProps {
	id: string;
	eyebrow?: string;
	title: string;
	description?: string;
	children: ReactNode;
	className?: string;
}

export function Section({ id, eyebrow, title, description, children, className }: ISectionProps) {
	return (
		<section id={id} className={cn('scroll-mt-20 pt-16', className)}>
			<Reveal>
				<SectionHeader eyebrow={eyebrow} title={title} description={description} />
			</Reveal>
			<div>{children}</div>
		</section>
	);
}
