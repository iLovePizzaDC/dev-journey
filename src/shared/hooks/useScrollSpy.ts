import { useEffect, useState } from 'react';
import { SCROLL_SPY_THRESHOLDS } from '@/shared/constants';

export function useScrollSpy(sectionIds: readonly string[], rootMargin = '-20% 0px -65% 0px') {
	const [activeId, setActiveId] = useState<string | null>(null);

	useEffect(() => {
		const elements = sectionIds
			.map((id) => document.getElementById(id))
			.filter((element): element is HTMLElement => element != null);

		if (elements.length === 0) return;

		const visibility = new Map<string, number>();

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
				}

				let nextActiveId: string | null = null;
				let bestRatio = 0;

				for (const [id, ratio] of visibility) {
					if (ratio > bestRatio) {
						bestRatio = ratio;
						nextActiveId = id;
					}
				}

				setActiveId(bestRatio > 0 ? nextActiveId : null);
			},
			{ rootMargin, threshold: [...SCROLL_SPY_THRESHOLDS] },
		);

		for (const element of elements) observer.observe(element);

		return () => observer.disconnect();
	}, [sectionIds, rootMargin]);

	return activeId;
}
