import { StatusDot, Text } from '@/shared/atoms';
import type { IBulletListProps } from '@/features/experience/experience.types';

export function BulletList({ items }: IBulletListProps) {
	return (
		<ul className='mt-2 grid gap-2'>
			{items.map((item) => (
				<li key={item} className='flex items-start gap-2'>
					<StatusDot className='mt-2 shrink-0' />
					<Text variant='body'>{item}</Text>
				</li>
			))}
		</ul>
	);
}
