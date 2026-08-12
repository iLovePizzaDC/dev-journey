import { YearMarker } from '@/features/tech-timeline/components/atoms/YearMarker';
import { TechItem } from '@/features/tech-timeline/components/molecules/TechItem';
import type { ITechYearGroupProps } from '@/features/tech-timeline/types';
import { Text } from '@/shared/components/atoms';
import { Reveal } from '@/shared/components/molecules';

export function TechYearGroup({ year, techs, delay = 0 }: ITechYearGroupProps) {
	return (
		<Reveal as='li' delay={delay} className='relative'>
			<YearMarker />
			<Text
				as='h3'
				variant='subtitle'
				className='font-display mb-2 text-[1.35rem] tracking-[-0.02em] text-ink'
			>
				{year}
			</Text>
			<ul className='grid gap-0.5'>
				{techs.map((tech) => (
					<TechItem key={tech.id} tech={tech} />
				))}
			</ul>
		</Reveal>
	);
}
