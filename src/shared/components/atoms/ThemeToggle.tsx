import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Icon } from '@/shared/components/atoms/Icon';
import type { IThemeToggleProps } from '@/shared/components/atoms/Toggle.types';
import { useLocale } from '@/shared/i18n';
import { cn } from '@/shared/utils/cn';
import { useTheme } from '@/shared/theme';

export function ThemeToggle({ className }: IThemeToggleProps) {
	const { theme, toggleTheme } = useTheme();
	const { m } = useLocale();
	const isDark = theme === 'dark';

	return (
		<button
			type='button'
			onClick={toggleTheme}
			className={cn(
				'inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm border border-line text-ink transition duration-200 hover:border-ink hover:bg-surface',
				'[&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:rotate-12',
				className,
			)}
			aria-label={isDark ? m.common.themeToLight : m.common.themeToDark}
			title={isDark ? m.common.themeToLight : m.common.themeToDark}
		>
			<Icon icon={isDark ? SunIcon : MoonIcon} className='h-[1.05rem] w-[1.05rem]' />
		</button>
	);
}
