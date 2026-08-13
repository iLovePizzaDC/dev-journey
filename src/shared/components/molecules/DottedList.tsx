import { StatusDot, Text } from '@/shared/components/atoms';
import type { TextVariant } from '@/shared/types';
import { cn } from '@/shared/utils/cn';

interface IDottedList {
	items: string[];
	textVariant?: Extract<TextVariant, 'body' | 'meta'>;
	className?: string;
}

export function DottedList({ items, textVariant = 'body', className }: IDottedList) {
	return (
		<ul className={cn('grid gap-2', className)}>
			{items.map((item) => (
				<li key={item} className='flex items-start gap-2'>
					<StatusDot className='mt-2 shrink-0' />
					<Text variant={textVariant}>{item}</Text>
				</li>
			))}
		</ul>
	);
}
