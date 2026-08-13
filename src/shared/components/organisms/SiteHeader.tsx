import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { Button, Icon, LanguageToggle, ThemeToggle } from '@/shared/components/atoms';
import { NAV_LINKS, NAV_SECTION_IDS, SECTION_IDS } from '@/shared/constants';
import { profile } from '@/shared/content';
import { useScrollSpy } from '@/shared/hooks';
import { useLocale } from '@/shared/i18n';
import { cn } from '@/shared/utils/cn';
import { scrollToSection } from '@/shared/utils/scroll';

interface ISiteHeader {
	brand?: string;
}

export function SiteHeader({ brand = profile.name }: ISiteHeader) {
	const { messages } = useLocale();
	const activeSectionId = useScrollSpy(NAV_SECTION_IDS);

	return (
		<header className='sticky top-0 z-20 border-b border-transparent bg-paper/78 backdrop-blur-md transition-[background-color,border-color] duration-300'>
			<div className='mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-4 md:gap-4'>
				<button
					type='button'
					onClick={() => scrollToSection(SECTION_IDS.top)}
					className='font-display mr-auto cursor-pointer border-none bg-transparent p-0 text-[1.05rem] font-bold tracking-[-0.02em] text-ink no-underline transition-opacity hover:opacity-80'
				>
					{brand}
				</button>
				<nav className='hidden gap-4 md:flex' aria-label={messages.nav.aria}>
					{NAV_LINKS.map((link) => {
						const isActive = activeSectionId === link.sectionId;

						return (
							<button
								key={link.sectionId}
								type='button'
								aria-current={isActive ? 'true' : undefined}
								onClick={() => scrollToSection(link.sectionId)}
								className={cn(
									'group relative cursor-pointer border-none bg-transparent p-0 text-[0.92rem] font-medium no-underline transition-colors',
									isActive ? 'text-ink' : 'text-muted hover:text-ink',
								)}
							>
								{messages.nav[link.labelKey]}
								<span
									className={cn(
										'absolute inset-x-0 -bottom-1 h-px origin-left bg-accent transition-transform duration-300',
										isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
									)}
								/>
							</button>
						);
					})}
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
			</div>
		</header>
	);
}
