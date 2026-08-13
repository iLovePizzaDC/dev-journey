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
			de: [
				'Eigenständige Full-Stack-Entwicklung von Anwendungen mit React JS im Frontend und ProvideX im fachnahen Systemkontext',
				'Umsetzung von Produkt- und Nutzeranforderungen in wartbare, getestete und produktionsreife Software',
				'Technische Konzeption und Gestaltung von Schnittstellen zwischen UI, Business-Logik, Datenhaltung und bestehenden Systemen',
				'Enge Zusammenarbeit mit Produktmanagement und Fachbereichen',
				'Qualitätssicherung durch Tests sowie Fokus auf Nutzerfreundlichkeit und UX in der Umsetzung',
			],
			en: [
				'Independent full-stack development of applications with React JS in the frontend and ProvideX in the domain-specific system context',
				'Translating product and user requirements into maintainable, tested and production-ready software',
				'Technical design of interfaces between UI, business logic, data storage and existing systems',
				'Close collaboration with product management and business units',
				'Quality assurance through testing with a focus on usability and UX in implementation',
			],
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
				'Weiterentwicklung eines produktiven React-/TypeScript-basierten B2B-Marktplatzes für internationale Würth-Gesellschaften',
				'Implementierung neuer Features sowie Optimierung bestehender Funktionen für Performance und Wartbarkeit',
				'Erstellung wiederverwendbarer React-Komponenten (TypeScript)',
				'Integration des SAP CX Stacks inkl. SAP Commerce Cloud, CMS und ERP über REST APIs sowie BFF als Proxy-Schicht',
				'Qualitätssicherung durch Unit- und E2E-Tests, Code Reviews und SonarQube',
				'Mitarbeit an CI/CD-Pipelines und Deployments mit GitLab',
				'Technische Dokumentation in Confluence; internationales Scrum-Umfeld',
			],
			en: [
				'Further developed a production React/TypeScript B2B marketplace for international Würth companies',
				'Implemented new features and optimized existing ones for performance and maintainability',
				'Built reusable React components in TypeScript',
				'Integrated the SAP CX stack including Commerce Cloud, CMS and ERP via REST APIs and a BFF proxy layer',
				'Quality assurance with unit and E2E tests, code reviews and SonarQube',
				'Contributed to CI/CD pipelines and deployments with GitLab',
				'Technical documentation in Confluence; international Scrum environment',
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
				'Grundlagen in Java, Webtechnologien und Softwareentwicklungsprozessen',
				'Praxisprojekte und Mitarbeit in bestehenden Entwicklungsteams',
			],
			en: [
				'Apprenticeship as IT Specialist for Application Development at Würth IT',
				'Fundamentals in Java, web technologies and software development processes',
				'Practical projects and collaboration with existing development teams',
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
