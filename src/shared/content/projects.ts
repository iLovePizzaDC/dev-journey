import type { Project } from '@/shared/types';

export const projects: Project[] = [
	{
		id: 'migraine-tracker',
		name: 'Migraine Tracker',
		description: {
			de: 'Webanwendung zur Erfassung und Auswertung von Migräne-Episoden mit Google-Calendar-Anbindung.',
			en: 'Web app for tracking and analyzing migraine episodes with Google Calendar integration.',
		},
		githubRepo: 'iLovePizzaDC/migrainetracker-gui-v4',
		stack: ['Vite', 'React', 'TypeScript', 'Spring Boot', 'Google Calendar API'],
		highlights: {
			de: [
				'Episoden erfassen und auswerten',
				'Google Calendar API Integration',
				'Fullstack mit Vite-Frontend und Spring Boot',
			],
			en: [
				'Capture and analyze episodes',
				'Google Calendar API integration',
				'Full stack with Vite frontend and Spring Boot',
			],
		},
	},
	{
		id: 'trading-dashboard',
		name: 'Market Data Dashboard',
		description: {
			de: 'Dashboard zur Analyse und Visualisierung von Finanz- und Systemdaten.',
			en: 'Dashboard for analyzing and visualizing financial and system data.',
		},
		githubRepo: 'iLovePizzaDC/trading-dashboard',
		stack: ['Vite', 'React', 'TypeScript', 'Python'],
		highlights: {
			de: [
				'Datenvisualisierung und Aufbereitung',
				'Python-basiertes Backend',
				'Moderne Weboberfläche',
			],
			en: ['Data visualization and preparation', 'Python-based backend', 'Modern web UI'],
		},
	},
	{
		id: 'chorely',
		name: 'Chorely',
		description: {
			de: 'Aufgaben- und Haushalts-Webanwendung mit wiederkehrenden Tasks, Auth und Benutzerverwaltung.',
			en: 'Household task web app with recurring chores, auth and user management.',
		},
		stack: ['Next.js', 'TypeScript', 'API Routes', 'BFF'],
		highlights: {
			de: [
				'Wiederkehrende Aufgaben',
				'Authentifizierung und Benutzerverwaltung',
				'BFF-Pattern über Next.js API Routes',
			],
			en: [
				'Recurring tasks',
				'Authentication and user management',
				'BFF pattern via Next.js API routes',
			],
		},
	},
];
