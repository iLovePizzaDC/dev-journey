import type { Technology } from '@/shared/types';
import { TechBadge } from '@/shared/components/atoms';
import { localize, useLocale } from '@/shared/i18n';
import { categoryLabel } from '@/shared/utils/labels';

interface ITechItem {
	tech: Technology;
}

export function TechItem({ tech }: ITechItem) {
	const { locale, messages } = useLocale();

	const note = tech.note ? localize(locale, tech.note) : undefined;
	const categoryName = categoryLabel(tech.category, messages.categories);

	const ariaLabel = note
		? `${tech.name}, ${categoryName}. ${note}`
		: `${tech.name}, ${categoryName}`;

	return (
		<li className='transition duration-300 hover:-translate-y-px'>
			<TechBadge
				name={tech.name}
				category={tech.category}
				title={note}
				aria-label={ariaLabel}
			/>
		</li>
	);
}
