import {
	SCROLL_SPY_BOTTOM_OFFSET_PX,
	SCROLL_SPY_ROOT_MARGIN,
	SCROLL_SPY_THRESHOLDS,
} from '@/shared/constants';
import { useEffect, useState } from 'react';

function isNearDocumentBottom(offsetPx: number): boolean {
	const scrollPosition = window.scrollY + window.innerHeight;
	const documentHeight = document.documentElement.scrollHeight;
	return scrollPosition >= documentHeight - offsetPx;
}

export function useScrollSpy(sectionIds: readonly string[], rootMargin = SCROLL_SPY_ROOT_MARGIN) {
	const [activeId, setActiveId] = useState<string | null>(null);

	useEffect(() => {
		const elements = sectionIds
			.map((id) => document.getElementById(id))
			.filter((element): element is HTMLElement => element != null);

		if (elements.length === 0) return;

		const visibility = new Map<string, number>();
		const lastSectionId = sectionIds[sectionIds.length - 1] ?? null;

		const syncActiveSection = () => {
			if (lastSectionId && isNearDocumentBottom(SCROLL_SPY_BOTTOM_OFFSET_PX)) {
				setActiveId(lastSectionId);
				return;
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
		};

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
				}
				syncActiveSection();
			},
			{ rootMargin, threshold: [...SCROLL_SPY_THRESHOLDS] },
		);

		for (const element of elements) observer.observe(element);

		window.addEventListener('scroll', syncActiveSection, { passive: true });
		window.addEventListener('resize', syncActiveSection);

		syncActiveSection();

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', syncActiveSection);
			window.removeEventListener('resize', syncActiveSection);
		};
	}, [sectionIds, rootMargin]);

	return activeId;
}
