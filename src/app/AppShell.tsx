import type { ReactNode } from 'react';

interface IAppShell {
	children: ReactNode;
}

export function AppShell({ children }: IAppShell) {
	return (
		<div className='mx-auto w-full max-w-6xl pb-[calc(4rem+env(safe-area-inset-bottom))] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]'>
			{children}
		</div>
	);
}
