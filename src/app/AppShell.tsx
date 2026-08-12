import type { IAppShellProps } from '@/app/AppShell.types';

export function AppShell({ children }: IAppShellProps) {
	return <div className='mx-auto w-[min(100%-2rem,72rem)] pb-16'>{children}</div>;
}
