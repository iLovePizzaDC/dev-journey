import type { Project } from '@/shared/types';

export const projects: Project[] = [
	{
		id: 'dev-journey',
		name: 'Dev Journey',
		description: {
			de: 'Mein öffentliches Portfolio: Berufsweg, Skills und Projekte — mit Live-Daten von GitHub.',
			en: 'My public portfolio: career, skills and projects — with live data from GitHub.',
		},
		githubRepo: 'iLovePizzaDC/dev-journey',
		stack: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'Vitest'],
		highlights: {
			de: [
				'Feature-driven Atomic Design',
				'DE/EN und Light/Dark Theme',
				'CI/CD mit GitHub Actions',
			],
			en: [
				'Feature-driven Atomic Design',
				'DE/EN and light/dark theme',
				'CI/CD with GitHub Actions',
			],
		},
	},
	{
		id: 'migraine-tracker',
		name: 'Migraine Tracker',
		description: {
			de: 'Web-App zum Erfassen und Auswerten von Migräne-Episoden, inklusive Google-Calendar-Anbindung.',
			en: 'Web app for logging and reviewing migraine episodes, including Google Calendar integration.',
		},
		githubRepo: 'iLovePizzaDC/migrainetracker-gui-v4',
		stack: [
			'Vite',
			'React',
			'TypeScript',
			'Tailwind CSS',
			'Vitest',
			'Spring Boot',
			'Google Calendar API',
		],
		highlights: {
			de: [
				'Episoden erfassen und auswerten',
				'Integration der Google Calendar API',
				'Full-Stack mit Vite-Frontend und Spring Boot',
			],
			en: [
				'Log and review episodes',
				'Google Calendar API integration',
				'Full stack with Vite frontend and Spring Boot',
			],
		},
	},
	{
		id: 'trading-dashboard',
		name: 'Market Data Dashboard',
		description: {
			de: 'Dashboard zur Visualisierung und Auswertung von Kurs- und Systemdaten.',
			en: 'Dashboard for visualizing and exploring market and system data.',
		},
		githubRepo: 'iLovePizzaDC/trading-dashboard',
		stack: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'Vitest', 'Python'],
		highlights: {
			de: ['Daten visualisieren und aufbereiten', 'Python-Backend', 'React-Oberfläche'],
			en: ['Visualize and prepare data', 'Python backend', 'React UI'],
		},
	},
	{
		id: 'chorely',
		name: 'Chorely',
		description: {
			de: 'Haushalts-App mit wiederkehrenden Aufgaben, Login und Nutzerverwaltung.',
			en: 'Household app with recurring chores, login and user management.',
		},
		stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API Routes', 'BFF'],
		highlights: {
			de: [
				'Wiederkehrende Aufgaben',
				'Authentifizierung und Nutzerverwaltung',
				'API über Next.js Routes',
			],
			en: ['Recurring tasks', 'Authentication and user management', 'API via Next.js routes'],
		},
	},
];
