import { StatusDot, Text } from '@/shared/components/atoms';

interface IProjectHighlights {
	items: string[];
}

export function ProjectHighlights({ items }: IProjectHighlights) {
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
