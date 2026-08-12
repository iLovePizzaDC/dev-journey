import type { IStatusDotProps } from '@/shared/components/atoms/StatusDot.types';
import { cn } from '@/shared/utils/cn';

export function StatusDot({ className, tone = 'accent' }: IStatusDotProps) {
	return (
		<span
			aria-hidden='true'
			className={cn(
				'inline-block h-1.5 w-1.5 rounded-full',
				tone === 'accent' ? 'bg-accent' : 'bg-ink',
				className,
			)}
		/>
	);
}
