import { describe, expect, it } from 'vitest';
import { cn } from '@/shared/utils/cn';

describe('cn()', () => {
	it('merges class names and resolves tailwind conflicts', () => {
		const hidden: string | false = false;
		expect(cn('px-2', 'px-4', hidden, 'text-ink')).toBe('px-4 text-ink');
	});
});
