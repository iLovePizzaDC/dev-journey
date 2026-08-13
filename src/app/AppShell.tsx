import type { ReactNode } from 'react';

interface IAppShell {
	children: ReactNode;
}

export function AppShell({ children }: IAppShell) {
	return <div className='mx-auto w-full max-w-6xl px-4 pb-16'>{children}</div>;
}
