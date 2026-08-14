import { TechBadge } from '@/shared/components/atoms';
import { useLocale } from '@/shared/i18n';
import type { TechCategory } from '@/shared/types';
import { cn } from '@/shared/utils/cn';

interface IStackList {
	items: string[];
	categories?: Record<string, TechCategory>;
	className?: string;
}

export function StackList({ items, categories, className }: IStackList) {
	const { messages } = useLocale();

	return (
		<ul className={cn('flex flex-wrap gap-1.5', className)} aria-label={messages.common.stackAria}>
			{items.map((item) => (
				<li key={item}>
					<TechBadge name={item} category={categories?.[item]} />
				</li>
			))}
		</ul>
	);
}
