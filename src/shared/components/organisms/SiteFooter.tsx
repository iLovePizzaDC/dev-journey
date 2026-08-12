import { profile } from '@/content';
import { Text } from '@/shared/atoms';
import type { ISiteFooterProps } from '@/shared/organisms/SiteFooter.types';

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
