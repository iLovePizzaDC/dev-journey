import { profile } from '@/shared/content';
import { HeroKicker } from '@/features/hero/components/atoms/HeroKicker';
import { HeroActions } from '@/features/hero/components/molecules/HeroActions';
import { Text } from '@/shared/components/atoms';
import { SECTION_IDS } from '@/shared/constants';
import { t, useLocale } from '@/shared/i18n';

export function HeroSection() {
	const { locale, m } = useLocale();

	return (
		<section
			id={SECTION_IDS.top}
			className='relative grid min-h-[min(88svh,52rem)] items-end overflow-clip py-12'
			aria-labelledby='hero-name'
		>
			<div
				className='pointer-events-none absolute inset-[8%_-10%_auto_auto] h-[min(52vw,28rem)] w-[min(52vw,28rem)] animate-drift rounded-full bg-[radial-gradient(circle,var(--color-glow-a)_0%,transparent_70%)] blur-md dark:opacity-70'
				aria-hidden='true'
			/>
			<div className='relative max-w-xl'>
				<div className='animate-fade-up' style={{ animationDelay: '40ms' }}>
					<HeroKicker>{m.hero.kicker}</HeroKicker>
				</div>
				<div className='animate-fade-up' style={{ animationDelay: '120ms' }}>
					<Text as='h1' variant='display' className='mb-3' id='hero-name'>
						{profile.name}
					</Text>
				</div>
				<div className='animate-fade-up' style={{ animationDelay: '200ms' }}>
					<Text as='p' variant='subtitle' className='mb-5 text-accent-strong'>
						{t(locale, profile.title)}
					</Text>
				</div>
				<div className='animate-fade-up' style={{ animationDelay: '280ms' }}>
					<Text variant='body' className='mb-6 max-w-md text-[1.05rem]'>
						{t(locale, profile.summary)}
					</Text>
				</div>
				<div className='animate-fade-up' style={{ animationDelay: '360ms' }}>
					<HeroActions />
				</div>
			</div>
		</section>
	);
}
