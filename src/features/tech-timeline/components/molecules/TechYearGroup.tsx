import { YearMarker } from '@/features/tech-timeline/components/atoms/YearMarker';
import { TechItem } from '@/features/tech-timeline/components/molecules/TechItem';
import type { Technology } from '@/shared/types';
import { Text } from '@/shared/components/atoms';
import { Reveal } from '@/shared/components/molecules';
import { cn } from '@/shared/utils/cn';

interface ITechYearGroup {
	year: number;
	techs: Technology[];
	delay?: number;
	isLast?: boolean;
}

export function TechYearGroup({ year, techs, delay = 0, isLast = false }: ITechYearGroup) {
	return (
		<Reveal as='li' delay={delay}>
			<div className={cn('relative border-l border-line pl-5 md:pl-6', !isLast && 'pb-6')}>
				<YearMarker />
				<Text
					as='h3'
					variant='subtitle'
					className='font-display mb-2.5 text-[1.2rem] tracking-[-0.02em] text-ink'
				>
					{year}
				</Text>
				<ul className='flex flex-wrap gap-1.5'>
					{techs.map((tech) => (
						<TechItem key={tech.id} tech={tech} />
					))}
				</ul>
			</div>
		</Reveal>
	);
}
