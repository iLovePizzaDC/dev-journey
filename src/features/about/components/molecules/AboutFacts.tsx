import { profile } from '@/shared/content';
import { buildAboutFacts } from '@/features/about/utils/buildAboutFacts';
import { Icon, Text } from '@/shared/components/atoms';
import { useLocale } from '@/shared/i18n';

export function AboutFacts() {
	const { locale, messages } = useLocale();
	const facts = buildAboutFacts(locale, messages, profile);

	return (
		<dl className='m-0 grid gap-4'>
			{facts.map((fact) => (
				<div key={fact.label} className='group'>
					<dt className='mb-1 flex items-center gap-1.5'>
						<Icon
							icon={fact.icon}
							className='h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent'
						/>
						<Text as='span' variant='label'>
							{fact.label}
						</Text>
					</dt>
					<dd className='m-0 pl-5'>
						{typeof fact.value === 'string' ? <Text variant='body'>{fact.value}</Text> : fact.value}
					</dd>
				</div>
			))}
		</dl>
	);
}
