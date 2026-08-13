import type { Technology } from '@/shared/types';
import { Text } from '@/shared/components/atoms';
import { localize, useLocale } from '@/shared/i18n';
import { categoryLabel } from '@/shared/utils/labels';

interface ITechItem {
	tech: Technology;
}

export function TechItem({ tech }: ITechItem) {
	const { locale, messages } = useLocale();

	return (
		<li className='flex flex-wrap items-baseline gap-x-3 gap-y-1 py-1.5 transition duration-300 hover:translate-x-0.5'>
			<Text as='span' variant='body' className='font-medium text-ink'>
				{tech.name}
			</Text>
			<Text as='span' variant='meta'>
				{categoryLabel(tech.category, messages.categories)}
			</Text>
			{tech.note ? (
				<>
					<span aria-hidden className='hidden text-sm text-muted/40 md:inline'>
						—
					</span>
					<Text as='span' variant='meta' className='w-full text-muted/90 md:w-auto'>
						{localize(locale, tech.note)}
					</Text>
				</>
			) : null}
		</li>
	);
}
