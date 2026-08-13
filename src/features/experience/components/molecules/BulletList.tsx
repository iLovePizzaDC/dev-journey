import { DottedList } from '@/shared/components/molecules/DottedList';

interface IBulletList {
	items: string[];
}

export function BulletList({ items }: IBulletList) {
	return <DottedList items={items} textVariant='body' className='mt-2' />;
}
