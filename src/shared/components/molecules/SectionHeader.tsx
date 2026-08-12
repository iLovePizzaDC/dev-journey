import type { ReactNode } from 'react';
import { Text } from '@/shared/components/atoms';

interface ISectionHeader {
	eyebrow?: string;
	title: string;
	description?: string;
	action?: ReactNode;
}

export function SectionHeader({ eyebrow, title, description, action }: ISectionHeader) {
	return (
		<header className='mb-6 flex max-w-xl items-end justify-between gap-5'>
			<div>
				{eyebrow ? (
					<Text as='span' variant='label' className='mb-2 block'>
						{eyebrow}
					</Text>
				) : null}
				<Text as='h2' variant='title'>
					{title}
				</Text>
				{description ? (
					<Text variant='body' className='mt-3 max-w-lg'>
						{description}
					</Text>
				) : null}
			</div>
			{action ? <div>{action}</div> : null}
		</header>
	);
}
