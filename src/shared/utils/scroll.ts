export function scrollToSection(id: string) {
	const element = document.getElementById(id);
	if (!element) return;
	element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function isNearDocumentBottom(
	offsetPx: number,
	scrollY: number,
	viewportHeight: number,
	documentHeight: number,
): boolean {
	return scrollY + viewportHeight >= documentHeight - offsetPx;
}

export function pickActiveSectionId(
	visibilityBySectionId: ReadonlyMap<string, number>,
	sectionIds: readonly string[],
	nearBottom: boolean,
): string | null {
	const lastSectionId = sectionIds[sectionIds.length - 1] ?? null;

	if (nearBottom && lastSectionId && visibilityBySectionId.has(lastSectionId)) {
		return lastSectionId;
	}

	let nextActiveId: string | null = null;
	let bestRatio = 0;

	for (const [id, ratio] of visibilityBySectionId) {
		if (ratio > bestRatio) {
			bestRatio = ratio;
			nextActiveId = id;
		}
	}

	return bestRatio > 0 ? nextActiveId : null;
}

export function resolveSectionElements(sectionIds: readonly string[]): HTMLElement[] {
	return sectionIds
		.map((id) => document.getElementById(id))
		.filter((element): element is HTMLElement => element != null);
}
