import '@testing-library/jest-dom/vitest';

function createIntersectionObserver(callback: IntersectionObserverCallback): IntersectionObserver {
	const observer: IntersectionObserver = {
		root: null,
		rootMargin: '',
		scrollMargin: '',
		thresholds: [],
		observe(target: Element) {
			callback(
				[
					{
						isIntersecting: true,
						target,
						intersectionRatio: 1,
						time: 0,
						boundingClientRect: target.getBoundingClientRect(),
						intersectionRect: target.getBoundingClientRect(),
						rootBounds: null,
					},
				],
				observer,
			);
		},
		unobserve() {},
		disconnect() {},
		takeRecords(): IntersectionObserverEntry[] {
			return [];
		},
	};

	return observer;
}

Object.defineProperty(window, 'IntersectionObserver', {
	writable: true,
	configurable: true,
	value: createIntersectionObserver,
});

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	configurable: true,
	value: (query: string): MediaQueryList => ({
		matches: false,
		media: query,
		onchange: null,
		addListener() {},
		removeListener() {},
		addEventListener() {},
		removeEventListener() {},
		dispatchEvent() {
			return false;
		},
	}),
});
