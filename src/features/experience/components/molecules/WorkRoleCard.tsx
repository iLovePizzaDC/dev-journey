import { BulletList } from '@/features/experience/components/molecules/BulletList';
import type { Experience } from '@/shared/types';
import { Text } from '@/shared/components/atoms';
import { localize, useLocale } from '@/shared/i18n';
import { formatCareerRange } from '@/shared/utils/date';
import { Reveal, StackList } from '@/shared/components/molecules';

interface IWorkRoleCard {
	job: Experience;
	delay?: number;
	isLast?: boolean;
}

export function WorkRoleCard({ job, delay = 0, isLast = false }: IWorkRoleCard) {
	const { locale, messages } = useLocale();
	const { startLabel, endLabel, rangeLabel } = formatCareerRange(
		job.start,
		job.end,
		locale,
		messages.experience.present,
	);

	return (
		<Reveal
			as='article'
			delay={delay}
			className='relative grid gap-4 md:grid-cols-[11rem_1fr] md:gap-8'
		>
			<div className='md:pt-1'>
				<time
					className='font-display block text-lg font-semibold tracking-[-0.02em] text-ink'
					dateTime={`${job.start}/${job.end ?? ''}`}
					title={rangeLabel}
				>
					<span className='block'>{startLabel}</span>
					<span className='mt-0.5 block text-muted'>– {endLabel}</span>
				</time>
			</div>

			<div
				className={`relative border-l border-line pl-6 md:pl-8 ${isLast ? 'pb-0' : 'pb-10 md:pb-12'}`}
			>
				<span
					className='absolute top-2 left-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_16%,transparent)]'
					aria-hidden='true'
				/>
				<Text as='h3' variant='subtitle' className='text-[1.25rem]'>
					{localize(locale, job.role)}
				</Text>
				<Text variant='body' className='mt-1 font-medium text-ink'>
					{job.company}
					<span className='font-normal text-muted'> · {job.location}</span>
				</Text>
				<div className='mt-4'>
					<BulletList items={localize(locale, job.bullets)} />
				</div>
				{job.stack ? <StackList items={job.stack} /> : null}
			</div>
		</Reveal>
	);
}
