import { TechBadge } from '@/shared/components/atoms';
import { useLocale } from '@/shared/i18n';
import type { TechCategory } from '@/shared/types';

interface IStackList {
	items: string[];
	categories?: Record<string, TechCategory>;
}

export function StackList({ items, categories }: IStackList) {
	const { messages } = useLocale();

	return (
		<ul className='mt-3 flex flex-wrap gap-2' aria-label={messages.common.stackAria}>
			{items.map((item) => (
				<li key={item}>
					<TechBadge name={item} category={categories?.[item]} />
				</li>
			))}
		</ul>
	);
}
