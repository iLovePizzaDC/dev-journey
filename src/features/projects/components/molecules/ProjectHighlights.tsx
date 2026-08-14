import { DottedList } from '@/shared/components/molecules/DottedList';

interface IProjectHighlights {
	items: string[];
}

export function ProjectHighlights({ items }: IProjectHighlights) {
	return <DottedList items={items} textVariant='meta' className='gap-1.5' />;
}
