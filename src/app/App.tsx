import { AppShell } from '@/app/AppShell';
import { AboutSection } from '@/features/about';
import { ExperienceSection } from '@/features/experience';
import { HeroSection } from '@/features/hero';
import { ProjectsSection } from '@/features/projects';
import { TechTimeline } from '@/features/tech-timeline';
import { SiteFooter, SiteHeader } from '@/shared/organisms';

export default function App() {
	return (
		<AppShell>
			<SiteHeader />
			<main>
				<HeroSection />
				<ExperienceSection />
				<ProjectsSection />
				<TechTimeline />
				<AboutSection />
			</main>
			<SiteFooter />
		</AppShell>
	);
}
