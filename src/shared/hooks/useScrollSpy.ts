import {
	SCROLL_SPY_BOTTOM_OFFSET_PX,
	SCROLL_SPY_ROOT_MARGIN,
	SCROLL_SPY_THRESHOLDS,
} from '@/shared/constants';
import {
	isNearDocumentBottom,
	pickActiveSectionId,
	resolveSectionElements,
} from '@/shared/utils/scroll';
import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: readonly string[], rootMargin = SCROLL_SPY_ROOT_MARGIN) {
	const [activeId, setActiveId] = useState<string | null>(null);

	useEffect(() => {
		const elements = resolveSectionElements(sectionIds);
		if (elements.length === 0) return;

		const visibilityBySectionId = new Map<string, number>(
			elements.map((element) => [element.id, 0]),
		);

		const syncActiveSection = () => {
			const nearBottom = isNearDocumentBottom(
				SCROLL_SPY_BOTTOM_OFFSET_PX,
				window.scrollY,
				window.innerHeight,
				document.documentElement.scrollHeight,
			);

			setActiveId(pickActiveSectionId(visibilityBySectionId, sectionIds, nearBottom));
		};

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					visibilityBySectionId.set(
						entry.target.id,
						entry.isIntersecting ? entry.intersectionRatio : 0,
					);
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
