import type { ReactNode } from 'react';

interface IAppShellProps {
	children: ReactNode;
}

export function AppShell({ children }: IAppShellProps) {
	return <div className='mx-auto w-full max-w-6xl px-4 pb-16'>{children}</div>;
}
