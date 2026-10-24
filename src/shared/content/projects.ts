import type { Project } from '@/shared/types';

export const projects: Project[] = [
	{
		id: 'hoeher',
		name: 'Höher',
		description: {
			de: 'iOS-Würfelspiel im Mäxchen-Stil: Zwei Würfel unter dem Becher, ansagen oder aufdecken. Solo gegen Mika, Pass-and-Play und Nearby über Bluetooth und lokales WLAN. Ohne Konto, ohne Werbung.',
			en: 'iOS bluffing dice game in the Mäxchen style: two dice under a cup, announce or call the bluff. Solo against Mika, pass-and-play, and Nearby over Bluetooth and local Wi‑Fi. No account, no ads.',
		},
		appStoreUrl: 'https://apps.apple.com/de/app/h%C3%B6her/id6822855855',
		stack: ['Swift', 'SwiftUI', 'Multipeer Connectivity'],
		highlights: {
			de: [
				'Bluff-Spiel: ansagen, glauben oder aufdecken',
				'Solo gegen Mika, Pass-and-Play (2–4) und Nearby ohne Server',
				'iCloud-Sync, VoiceOver und große Schrift',
			],
			en: [
				'Bluffing game: announce, believe, or call',
				'Solo against Mika, pass-and-play (2–4), and nearby without a server',
				'iCloud sync, VoiceOver, and large text',
			],
		},
	},
	{
		id: 'pasch',
		name: 'Pasch',
		description: {
			de: 'iOS-Würfelspiel im Kniffel-Stil: Solo, Pass-and-Play und Nearby über Bluetooth und lokales WLAN. Klassische Regeln oder Hausregeln, ohne Konto und ohne Werbung.',
			en: 'iOS Yahtzee-style dice game: solo, pass-and-play, and Nearby over Bluetooth and local Wi‑Fi. Classic or house rules, no account, no ads.',
		},
		appStoreUrl: 'https://apps.apple.com/de/app/pasch-dice/id6821607952',
		stack: ['Swift', 'SwiftUI', 'Multipeer Connectivity'],
		highlights: {
			de: [
				'Klassische Regeln oder Hausregeln, per Code teilbar',
				'Solo, Pass-and-Play und Nearby ohne Server',
				'iCloud-Sync, VoiceOver und große Schrift',
			],
			en: [
				'Classic or house rules, shareable via code',
				'Solo, pass-and-play, and nearby without a server',
				'iCloud sync, VoiceOver, and large text',
			],
		},
	},
	{
		id: 'mealpin',
		name: 'Mealpin',
		description: {
			de: 'iOS-App für den Wochenplan: Rezepte, Einkauf und Kochmodus, geteilt im Haushalt. Daten bleiben auf dem Gerät und in iCloud.',
			en: 'iOS app for the weekly plan: recipes, shopping and cook mode, shared with the household. Data stays on the device and in iCloud.',
		},
		appStoreUrl: 'https://apps.apple.com/de/app/mealpin/id6809128468',
		stack: ['Swift', 'SwiftUI', 'SwiftData', 'CloudKit', 'WidgetKit'],
		highlights: {
			de: [
				'Wochenplan, Rezepte und Einkaufsliste',
				'Kochmodus mit Live Activity und Timern',
				'Plan mit dem Haushalt teilen',
			],
			en: [
				'Weekly plan, recipes and shopping list',
				'Cook mode with Live Activity and timers',
				'Share the plan with the household',
			],
		},
	},
	{
		id: 'schadenakte',
		name: 'Schadenakte',
		description: {
			de: 'iOS-App für Wasserschäden vor Ort: Fotos, Checkliste, Zeitlinie und Inventar, mit PDF für die Versicherung. Daten bleiben auf dem Gerät.',
			en: 'iOS app for water damage on site: photos, checklist, timeline and inventory, with a PDF for the insurer. Data stays on the device.',
		},
		appStoreUrl: 'https://apps.apple.com/de/app/schadenakte/id6806029264',
		stack: ['Expo', 'React Native', 'TypeScript', 'StoreKit'],
		highlights: {
			de: [
				'Akte mit Kamera, Checkliste und Zeitlinie',
				'PDF-Export für die Versicherung',
				'Offline auf dem Gerät, ohne Konto',
			],
			en: [
				'Case file with camera, checklist and timeline',
				'PDF export for the insurer',
				'Offline on device, no account',
			],
		},
	},
	{
		id: 'dev-journey',
		name: 'Dev Journey',
		description: {
			de: 'Mein öffentliches Portfolio: Berufsweg, Skills und Projekte, mit Live-Daten von GitHub.',
			en: 'My public portfolio: career, skills and projects, with live data from GitHub.',
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
