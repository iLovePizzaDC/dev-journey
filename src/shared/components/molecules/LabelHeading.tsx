import type { ReactNode } from 'react';
import { Icon, Text } from '@/shared/components/atoms';
import type { IconComponent } from '@/shared/types';
import { cn } from '@/shared/utils/cn';

interface ILabelHeading {
	icon: IconComponent;
	children: ReactNode;
	className?: string;
}

export function LabelHeading({ icon, children, className }: ILabelHeading) {
	return (
		<Text as='h3' variant='label' className={cn('mb-4 flex items-center gap-2', className)}>
			<Icon icon={icon} className='h-3.5 w-3.5' />
			{children}
		</Text>
	);
}
