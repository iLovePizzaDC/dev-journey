import { cn } from '@/shared/utils/cn';

interface IStatusDot {
	className?: string;
}

export function StatusDot({ className }: IStatusDot) {
	return (
		<span
			aria-hidden='true'
			className={cn('inline-block h-1.5 w-1.5 rounded-full bg-accent', className)}
		/>
	);
}
