import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Button, Icon } from '@/shared/components/atoms';

interface IProjectExternalLink {
	url: string;
	label: string;
}

export function ProjectExternalLink({ url, label }: IProjectExternalLink) {
	return (
		<div>
			<Button
				href={url}
				variant='link'
				target='_blank'
				rel='noreferrer'
				className='group/link inline-flex items-center gap-1.5'
			>
				{label}
				<Icon
					icon={ArrowTopRightOnSquareIcon}
					className='h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5'
				/>
			</Button>
		</div>
	);
}
