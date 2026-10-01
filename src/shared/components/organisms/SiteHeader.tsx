import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { githubProfileUrl } from '@/shared/api/github';
import { Button, Icon, LanguageToggle, NavLinkButton, ThemeToggle } from '@/shared/components/atoms';
import { NAV_LINKS, NAV_SECTION_IDS, SECTION_IDS } from '@/shared/constants';
import { profile } from '@/shared/content';
import { useScrollSpy } from '@/shared/hooks';
import { useLocale } from '@/shared/i18n';
import { scrollToSection } from '@/shared/utils/scroll';

interface ISiteHeader {
	brand?: string;
}

export function SiteHeader({ brand = profile.name }: ISiteHeader) {
	const { messages } = useLocale();
	const activeSectionId = useScrollSpy(NAV_SECTION_IDS);

	return (
		<header className='sticky top-0 z-20 border-b border-transparent bg-paper/78 pt-[env(safe-area-inset-top)] backdrop-blur-md transition-[background-color,border-color] duration-300'>
			<div className='mx-auto flex w-full max-w-6xl items-center gap-3 py-4 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] md:gap-4'>
				<button
					type='button'
					onClick={() => scrollToSection(SECTION_IDS.top)}
					className='font-display mr-auto cursor-pointer border-none bg-transparent p-0 text-[1.05rem] font-bold tracking-[-0.02em] text-ink no-underline transition-opacity hover:opacity-80'
				>
					{brand}
				</button>

				<nav className='hidden gap-4 md:flex' aria-label={messages.nav.aria}>
					{NAV_LINKS.map((link) => (
						<NavLinkButton
							key={link.sectionId}
							sectionId={link.sectionId}
							label={messages.nav[link.labelKey]}
							isActive={activeSectionId === link.sectionId}
						/>
					))}
				</nav>

				<LanguageToggle />
				<ThemeToggle />

				<Button
					href={githubProfileUrl(profile.githubUsername)}
					variant='ghost'
					target='_blank'
					rel='noreferrer'
					className='hidden sm:inline-flex'
				>
					<Icon icon={CodeBracketIcon} />
					GitHub
					<Icon icon={ArrowTopRightOnSquareIcon} className='h-3.5 w-3.5 opacity-70' />
				</Button>
			</div>
		</header>
	);
}
