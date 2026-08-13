import { describe, expect, it } from 'vitest';
import { AboutSection } from '@/features/about';
import { ExperienceSection } from '@/features/experience';
import { HeroSection } from '@/features/hero';
import { TechTimeline } from '@/features/tech-timeline';
import { renderWithProviders } from '@/test/render';

describe('HeroSection', () => {
	it('renders the brand name', () => {
		const { getByRole } = renderWithProviders(<HeroSection />);
		expect(getByRole('heading', { name: 'Nico Betz' })).toBeInTheDocument();
	});
});

describe('ExperienceSection', () => {
	it('renders the career section heading', () => {
		const { getByRole } = renderWithProviders(<ExperienceSection />);
		expect(getByRole('heading', { name: 'Wo ich gearbeitet habe' })).toBeInTheDocument();
	});
});

describe('TechTimeline', () => {
	it('renders the skills section heading', () => {
		const { getByRole } = renderWithProviders(<TechTimeline />);
		expect(getByRole('heading', { name: 'Wann ich was gelernt habe' })).toBeInTheDocument();
	});
});

describe('AboutSection', () => {
	it('renders about heading', () => {
		const { getByRole } = renderWithProviders(<AboutSection />);
		expect(getByRole('heading', { name: 'Über mich' })).toBeInTheDocument();
	});
});
