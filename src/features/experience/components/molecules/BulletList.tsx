import { StatusDot, Text } from '@/shared/components/atoms';

interface IBulletList {
	items: string[];
}

export function BulletList({ items }: IBulletList) {
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
