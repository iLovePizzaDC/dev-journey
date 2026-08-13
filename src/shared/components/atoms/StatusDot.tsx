import type { StatusDotTone } from '@/shared/types';
import { cn } from '@/shared/utils/cn';

interface IStatusDot {
	className?: string;
	tone?: StatusDotTone;
}

export function StatusDot({ className, tone = 'accent' }: IStatusDot) {
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
