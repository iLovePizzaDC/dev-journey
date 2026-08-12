import type { ReactNode } from 'react';
import { profile } from '@/shared/content';
import { Text } from '@/shared/components/atoms';

interface ISiteFooterProps {
	children?: ReactNode;
}

export function SiteFooter({ children }: ISiteFooterProps) {
	const year = new Date().getFullYear();
	return (
		<footer className='mt-16 flex items-center justify-between border-t border-line py-8'>
			<Text variant='meta'>
				© {year} {profile.name}
			</Text>
			{children}
		</footer>
	);
}
