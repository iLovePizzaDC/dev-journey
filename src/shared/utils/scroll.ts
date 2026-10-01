export function scrollToSection(sectionId: string) {
	const element = document.getElementById(sectionId);
	if (!element) return;

	element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function isNearDocumentBottom(
	offsetPx: number,
	scrollY: number,
	viewportHeight: number,
	documentHeight: number,
): boolean {
	const distanceFromBottom = documentHeight - (scrollY + viewportHeight);
	return distanceFromBottom <= offsetPx;
}

export function pickActiveSectionId(
	visibilityBySectionId: ReadonlyMap<string, number>,
	sectionIds: readonly string[],
	nearBottom: boolean,
): string | null {
	const lastSectionId = sectionIds[sectionIds.length - 1] ?? null;
	const lastSectionIsTracked = lastSectionId != null && visibilityBySectionId.has(lastSectionId);

	if (nearBottom && lastSectionIsTracked) {
		return lastSectionId;
	}

	let mostVisibleSectionId: string | null = null;
	let highestVisibilityRatio = 0;

	for (const [sectionId, visibilityRatio] of visibilityBySectionId) {
		if (visibilityRatio > highestVisibilityRatio) {
			highestVisibilityRatio = visibilityRatio;
			mostVisibleSectionId = sectionId;
		}
	}

	if (highestVisibilityRatio <= 0) return null;

	return mostVisibleSectionId;
}

export function resolveSectionElements(sectionIds: readonly string[]): HTMLElement[] {
	const elements: HTMLElement[] = [];

	for (const sectionId of sectionIds) {
		const element = document.getElementById(sectionId);
		if (element) elements.push(element);
	}

	return elements;
}
