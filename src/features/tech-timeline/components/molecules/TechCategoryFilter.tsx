import type { TechCategoryFilter as TechCategoryFilterValue } from '@/features/tech-timeline/types';
import { CATEGORY_FILTER_ICONS } from '@/features/tech-timeline/constants/categoryIcons';
import { CategoryFilterButton } from '@/features/tech-timeline/components/atoms/CategoryFilterButton';
import { BADGE_CATEGORY_BORDER, BADGE_CATEGORY_SURFACE, TECH_CATEGORIES } from '@/shared/constants';
import { useLocale } from '@/shared/i18n';
import { cn } from '@/shared/utils/cn';
import { categoryLabel } from '@/shared/utils/labels';
import type { TechCategory } from '@/shared/types';

interface ITechCategoryFilter {
	value: TechCategoryFilterValue;
	onChange: (value: TechCategoryFilterValue) => void;
}

export function TechCategoryFilter({ value, onChange }: ITechCategoryFilter) {
	const { messages } = useLocale();

	function handleCategoryClick(category: TechCategory, isAlreadySelected: boolean) {
		onChange(isAlreadySelected ? 'all' : category);
	}

	return (
		<div
			role='toolbar'
			aria-label={messages.journey.categoriesAria}
			className='mb-8 flex flex-wrap gap-1.5'
		>
			<CategoryFilterButton
				label={messages.journey.all}
				icon={CATEGORY_FILTER_ICONS.all}
				isSelected={value === 'all'}
				selectedClassName='border-transparent bg-accent-soft text-accent-strong'
				onClick={() => onChange('all')}
			/>

			{TECH_CATEGORIES.map((category) => {
				const isSelected = value === category;
				const selectedClassName = cn(
					'text-ink',
					BADGE_CATEGORY_BORDER[category],
					BADGE_CATEGORY_SURFACE[category],
				);

				return (
					<CategoryFilterButton
						key={category}
						label={categoryLabel(category, messages.categories)}
						icon={CATEGORY_FILTER_ICONS[category]}
						isSelected={isSelected}
						selectedClassName={selectedClassName}
						onClick={() => handleCategoryClick(category, isSelected)}
					/>
				);
			})}
		</div>
	);
}
