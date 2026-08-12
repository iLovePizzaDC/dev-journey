import { StatusDot, Text } from '@/shared/atoms';
import type { IProjectHighlightsProps } from '@/features/projects/projects.types';

export function ProjectHighlights({ items }: IProjectHighlightsProps) {
	return (
		<ul className='mb-3 grid gap-2'>
			{items.map((item) => (
				<li key={item} className='flex items-start gap-2'>
					<StatusDot className='mt-2 shrink-0' />
					<Text variant='meta'>{item}</Text>
				</li>
			))}
		</ul>
	);
}
