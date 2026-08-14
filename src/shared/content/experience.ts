import type { Certificate, Education, Experience } from '@/shared/types';

export const experiences: Experience[] = [
	{
		id: 'eckstack-senior-fullstack',
		role: {
			de: 'Softwareentwickler (Full-Stack)',
			en: 'Software Developer (Full-Stack)',
		},
		company: 'EckStack',
		location: 'Waiblingen',
		start: '2026-09',
		end: null,
		stack: ['React', 'TypeScript', 'ProvideX'],
		bullets: {
			de: [],
			en: [],
		},
	},
	{
		id: 'wuerth-frontend',
		role: {
			de: 'Frontend Developer',
			en: 'Frontend Developer',
		},
		company: 'Würth IT',
		location: 'Schorndorf',
		start: '2024-07',
		end: '2026-07',
		stack: ['React', 'TypeScript', 'SAP Commerce Cloud', 'BFF', 'Jest', 'Cypress', 'GitLab CI/CD'],
		bullets: {
			de: [
				'Weiterentwicklung eines React-/TypeScript-B2B-Marktplatzes für Würth-Gesellschaften',
				'Neue Features umgesetzt und bestehende Stellen für Performance und Wartbarkeit verbessert',
				'Wiederverwendbare React-Komponenten in TypeScript gebaut',
				'SAP Commerce, CMS und ERP über REST-APIs und eine BFF-Schicht angebunden',
				'Qualität über Unit- und E2E-Tests, Code Reviews und SonarQube abgesichert',
				'CI/CD-Pipelines und Deployments mit GitLab mitbetreut',
				'Dokumentation in Confluence; internationales Team auf Englisch',
			],
			en: [
				'Further developed a React/TypeScript B2B marketplace for Würth companies',
				'Shipped new features and improved existing ones for performance and maintainability',
				'Built reusable React components in TypeScript',
				'Connected SAP Commerce, CMS and ERP via REST APIs and a BFF layer',
				'Covered quality with unit and E2E tests, code reviews and SonarQube',
				'Helped with CI/CD pipelines and deployments in GitLab',
				'Documentation in Confluence; international English-speaking team',
			],
		},
	},
	{
		id: 'wuerth-apprenticeship',
		role: {
			de: 'Fachinformatiker Anwendungsentwicklung (Ausbildung)',
			en: 'IT Specialist for Application Development (Apprenticeship)',
		},
		company: 'Würth IT',
		location: 'Schorndorf',
		start: '2021-09',
		end: '2024-06',
		stack: ['Java', 'Spring Boot', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
		bullets: {
			de: [
				'Ausbildung zum Fachinformatiker Anwendungsentwicklung bei Würth IT',
				'Grundlagen in Java, Webtechnologien und Softwareentwicklung im Team',
				'Praxisprojekte und Mitarbeit in bestehenden Entwicklerteams',
			],
			en: [
				'Apprenticeship as IT Specialist for Application Development at Würth IT',
				'Fundamentals in Java, web technologies and building software as a team',
				'Hands-on projects and work inside existing development teams',
			],
		},
	},
];

export const education: Education[] = [
	{
		id: 'fhr',
		title: {
			de: 'Fachhochschulreife',
			en: 'University of Applied Sciences entrance qualification',
		},
		institution: 'Gewerbliche Schule Backnang',
		start: '2021-09',
		end: '2024-06',
	},
	{
		id: 'mr',
		title: {
			de: 'Mittlere Reife',
			en: 'Secondary school certificate',
		},
		institution: 'Gewerbliche Schule Schwäbisch Gmünd',
		start: '2019-09',
		end: '2021-07',
	},
];

export const certificates: Certificate[] = [
	{
		id: 'clean-code',
		title: {
			de: 'Clean Code Training',
			en: 'Clean Code Training',
		},
		issuer: 'CCD Akademie',
		date: '2025-06',
	},
	{
		id: 'csd',
		title: {
			de: 'Certified Scrum Developer',
			en: 'Certified Scrum Developer',
		},
		issuer: 'Scrum Alliance',
		date: '2024-12',
	},
	{
		id: 'kmk-en',
		title: {
			de: 'KMK-Fremdsprachenzertifikat Englisch – Niveau B2',
			en: 'KMK foreign language certificate English – Level B2',
		},
		issuer: 'Gewerbliche Schule Backnang',
		date: '2024-07',
	},
];
