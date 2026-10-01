import { cn } from '@/shared/utils/cn';
import { scrollToSection } from '@/shared/utils/scroll';

interface INavLinkButton {
	sectionId: string;
	label: string;
	isActive: boolean;
}

export function NavLinkButton({ sectionId, label, isActive }: INavLinkButton) {
	return (
		<button
			type='button'
			aria-current={isActive ? 'true' : undefined}
			onClick={() => scrollToSection(sectionId)}
			className={cn(
				'group relative cursor-pointer border-none bg-transparent p-0 text-[0.92rem] font-medium no-underline transition-colors',
				isActive ? 'text-ink' : 'text-muted hover:text-ink',
			)}
		>
			{label}
			<span
				className={cn(
					'absolute inset-x-0 -bottom-1 h-px origin-left bg-accent transition-transform duration-300',
					isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
				)}
			/>
		</button>
	);
}
