import { Icon } from '@/shared/components/atoms';
import type { IconComponent } from '@/shared/types';
import { cn } from '@/shared/utils/cn';

interface ICategoryFilterButton {
	label: string;
	icon: IconComponent;
	isSelected: boolean;
	selectedClassName: string;
	onClick: () => void;
}

const baseClassName =
	'inline-flex cursor-pointer items-center gap-1 rounded-sm border px-2 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.04em] transition duration-200';

const inactiveClassName = 'border-line bg-transparent text-muted hover:border-ink hover:text-ink';

export function CategoryFilterButton({
	label,
	icon,
	isSelected,
	selectedClassName,
	onClick,
}: ICategoryFilterButton) {
	return (
		<button
			type='button'
			aria-pressed={isSelected}
			onClick={onClick}
			className={cn(baseClassName, isSelected ? selectedClassName : inactiveClassName)}
		>
			<Icon icon={icon} className='h-3 w-3' />
			{label}
		</button>
	);
}
