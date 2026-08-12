import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { profile } from '@/content';
import { Button, Icon, LanguageToggle, ThemeToggle } from '@/shared/atoms';
import { NAV_LINKS } from '@/shared/constants';
import { useLocale } from '@/shared/i18n';
import type { ISiteHeaderProps } from '@/shared/organisms/SiteHeader.types';

export function SiteHeader({ brand = profile.name }: ISiteHeaderProps) {
	const { m } = useLocale();

	return (
		<header className='sticky top-0 z-20 flex items-center gap-3 border-b border-transparent bg-paper/78 p-4 backdrop-blur-md transition-[background-color,border-color] duration-300 md:gap-4'>
			<a
				className='font-display mr-auto text-[1.05rem] font-bold tracking-[-0.02em] text-ink no-underline transition-opacity hover:opacity-80'
				href='#top'
			>
				{brand}
			</a>
			<nav className='hidden gap-4 md:flex' aria-label={m.nav.aria}>
				{NAV_LINKS.map((link) => (
					<a
						key={link.href}
						href={link.href}
						className='group relative text-[0.92rem] font-medium text-muted no-underline transition-colors hover:text-ink'
					>
						{m.nav[link.labelKey]}
						<span className='absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100' />
					</a>
				))}
			</nav>
			<LanguageToggle />
			<ThemeToggle />
			<Button
				href={`https://github.com/${profile.githubUsername}`}
				variant='ghost'
				target='_blank'
				rel='noreferrer'
				className='hidden sm:inline-flex'
			>
				<Icon icon={CodeBracketIcon} />
				GitHub
				<Icon icon={ArrowTopRightOnSquareIcon} className='h-3.5 w-3.5 opacity-70' />
			</Button>
		</header>
	);
}
