import { Text } from '@/shared/components/atoms';

interface IHeroKicker {
	children: string;
}

export function HeroKicker({ children }: IHeroKicker) {
	return (
		<Text as='p' variant='label' className='mb-4'>
			{children}
		</Text>
	);
}
