import { TechBadge } from '@/shared/atoms';
import { useLocale } from '@/shared/i18n';
import type { IStackListProps } from '@/shared/molecules/StackList.types';

export function StackList({ items, categories }: IStackListProps) {
	const { m } = useLocale();

	return (
		<ul className='mt-3 flex flex-wrap gap-2' aria-label={m.common.stackAria}>
			{items.map((item) => (
				<li key={item}>
					<TechBadge name={item} category={categories?.[item]} />
				</li>
			))}
		</ul>
	);
}
