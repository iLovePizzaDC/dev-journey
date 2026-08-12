import type { ITechItemProps } from '@/features/tech-timeline/types';
import { Text } from '@/shared/components/atoms';
import { t, useLocale } from '@/shared/i18n';
import { categoryLabel } from '@/shared/utils/labels';

export function TechItem({ tech }: ITechItemProps) {
	const { locale, m } = useLocale();

	return (
		<li className='flex flex-wrap items-baseline gap-x-3 gap-y-1 py-1.5 transition duration-300 hover:translate-x-[2px]'>
			<Text as='span' variant='body' className='font-medium text-ink'>
				{tech.name}
			</Text>
			<Text as='span' variant='meta'>
				{categoryLabel(tech.category, m.categories)}
			</Text>
			{tech.note ? (
				<Text as='span' variant='meta' className='w-full text-muted/90 md:w-auto'>
					— {t(locale, tech.note)}
				</Text>
			) : null}
		</li>
	);
}
