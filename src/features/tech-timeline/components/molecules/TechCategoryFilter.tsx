import type { TechCategoryFilter as TechCategoryFilterValue } from '@/features/tech-timeline/types';
import { CATEGORY_FILTER_ICONS } from '@/features/tech-timeline/constants/categoryIcons';
import { Icon } from '@/shared/components/atoms';
import { BADGE_CATEGORY_BORDER, BADGE_CATEGORY_SURFACE, TECH_CATEGORIES } from '@/shared/constants';
import { useLocale } from '@/shared/i18n';
import { cn } from '@/shared/utils/cn';
import { categoryLabel } from '@/shared/utils/labels';

interface ITechCategoryFilter {
	value: TechCategoryFilterValue;
	onChange: (value: TechCategoryFilterValue) => void;
}

export function TechCategoryFilter({ value, onChange }: ITechCategoryFilter) {
	const { messages } = useLocale();

	return (
		<div
			role='toolbar'
			aria-label={messages.journey.categoriesAria}
			className='mb-8 flex flex-wrap gap-1.5'
		>
			<button
				type='button'
				aria-pressed={value === 'all'}
				onClick={() => onChange('all')}
				className={cn(
					'inline-flex cursor-pointer items-center gap-1 rounded-sm border px-2 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.04em] transition duration-200',
					value === 'all'
						? 'border-transparent bg-accent-soft text-accent-strong'
						: 'border-line bg-transparent text-muted hover:border-ink hover:text-ink',
				)}
			>
				<Icon icon={CATEGORY_FILTER_ICONS.all} className='h-3 w-3' />
				{messages.journey.all}
			</button>
			{TECH_CATEGORIES.map((category) => {
				const selected = value === category;

				return (
					<button
						key={category}
						type='button'
						aria-pressed={selected}
						onClick={() => onChange(selected ? 'all' : category)}
						className={cn(
							'inline-flex cursor-pointer items-center gap-1 rounded-sm border px-2 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.04em] transition duration-200',
							selected
								? cn(
										'text-ink',
										BADGE_CATEGORY_BORDER[category],
										BADGE_CATEGORY_SURFACE[category],
									)
								: 'border-line bg-transparent text-muted hover:border-ink hover:text-ink',
						)}
					>
						<Icon icon={CATEGORY_FILTER_ICONS[category]} className='h-3 w-3' />
						{categoryLabel(category, messages.categories)}
					</button>
				);
			})}
		</div>
	);
}
