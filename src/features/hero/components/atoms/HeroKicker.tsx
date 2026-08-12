import { Text } from '@/shared/components/atoms';
import type { IHeroKickerProps } from '@/features/hero/types';

export function HeroKicker({ children }: IHeroKickerProps) {
	return (
		<Text as='p' variant='label' className='mb-4'>
			{children}
		</Text>
	);
}
