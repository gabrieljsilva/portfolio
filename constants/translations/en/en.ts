import { mailtoHref, profile, telHref } from "@/constants/profile";

export const en = {
	meta: {
		portfolio: {
			title: "Gabriel Silva - Software Engineer",
			description:
				"Software engineer since 2018. Web systems and distributed backends in Node.js and TypeScript, focused on applied AI: RAG, MCP and agents.",
		},
		linktree: {
			title: "Gabriel Silva - Links",
			description: "Where to find Gabriel de Jesus Silva.",
		},
	},

	ui: {
		themeToggle: "Toggle theme",
		openMenu: "Open menu",
		closeMenu: "Close menu",
		language: "Language",
	},

	site: {
		resumeBtn: "Resume",
		nav: [
			{ label: "About", href: "#about" },
			{ label: "Work", href: "#work" },
			{ label: "Experience", href: "#experience" },
			{ label: "Skills", href: "#skills" },
			{ label: "Contact", href: "#contact" },
		],
		hero: {
			kicker: "Software Engineer",
			statement: "From discovery to deployment.",
			rotating: [
				"From discovery to deployment.",
				"Distributed systems for healthcare.",
				"Backend, product and infrastructure.",
			],
			support:
				"I'm Gabriel de Jesus Silva, a software engineer since 2018. I build web systems and distributed backends in Node.js and TypeScript, from technical discovery to deployment. Today I work mostly on AI products at Sami Saúde and Untimeless AI.",
			ctaWork: "See the work",
			ctaContact: "Get in touch",
		},
		untimeless: {
			kicker: "Own product · SaaS",
			lead: "A meeting intelligence platform. A browser extension captures live captions from Google Meet, Teams and Zoom, and the platform turns that material into a knowledge base for AI chats and agents.",
			cta: "Visit untimeless.com",
			tags: [
				"Browser extension",
				"Google Meet · Teams · Zoom",
				"MCP",
				"Workspaces",
			],
			bullets: [
				{
					title: "Caption capture",
					body: "Browser extension that scrapes live captions from Meet, Teams and Zoom.",
				},
				{
					title: "AI chats",
					body: "Conversations over meeting content, with the full history as context.",
				},
				{
					title: "MCP server",
					body: "A first-party MCP server that plugs meetings into any AI tool the team uses.",
				},
				{
					title: "External integrations",
					body: "Connects to third-party MCP servers to extend actions and data sources.",
				},
				{
					title: "Teams and workspaces",
					body: "Workspace-based organisation with member and access management.",
				},
			],
		},
		about: {
			kicker: "About",
			title: "From architecture to product in production.",
			caption: "Senhor do Bonfim, Bahia, Brazil",
			paragraphs: [
				"I've been building software since 2018, designing and implementing scalable, high-performance systems across healthcare, technology, legal, finance and HR.",
				"I work mainly with Node.js, TypeScript and NestJS in distributed architectures (modular monoliths, microservices and event-driven systems with Kafka, RabbitMQ and SQS), supported by CI/CD, OpenTelemetry, Grafana and automated testing.",
				"In recent years my focus has shifted to applied AI: solutions built on generative AI, RAG and MCP, from technical discovery and architecture modelling through to implementation, deployment and validation with real users.",
			],
			facts: [
				"Since 2018",
				"Node.js · TypeScript · NestJS",
				"RAG · MCP · Agents",
				"Healthcare · SaaS · Fintech",
			],
		},
		work: {
			kicker: "Work",
			title: "Selected projects",
			sub: "Production systems, own products and open source libraries.",
			visit: "Open",
			items: [
				{
					kind: "Own product",
					year: "2025 to 2026",
					name: "Untimeless AI",
					description:
						"Meeting intelligence SaaS: caption capture through a browser extension, AI chats, an MCP server and team management. Built end-to-end, from discovery to deployment.",
					tags: [
						"TypeScript",
						"NestJS",
						"React",
						"PostgreSQL",
						"Generative AI",
						"MCP",
					],
					link: profile.social.product,
				},
				{
					kind: "Sami Saúde",
					year: "since 2025",
					name: "Samira",
					description:
						"AI support agent combining RAG, internal MCP servers and intelligent agents, integrated with Zendesk and internal services. Raised resolution without human handoff from 19% to 53%, with over 85% positive ratings.",
					tags: ["RAG", "MCP", "Agents", "NestJS", "RabbitMQ", "OpenTelemetry"],
					link: "",
				},
				{
					kind: "Albert Einstein",
					year: "2024 to 2025",
					name: "Care Coordination",
					description:
						"System linking patients to healthcare professionals through care teams, integrated into the hospital's micro front-end portal.",
					tags: ["NestJS", "GraphQL", "React", "Kafka", "MySQL", "Kubernetes"],
					link: "",
				},
				{
					kind: "Open source",
					year: "2023",
					name: "Decorated Dataloaders",
					description:
						"NestJS module that declares GraphQL dataloaders through decorators, solving the N+1 problem with configurable batching and caching.",
					tags: ["NestJS", "GraphQL", "TypeScript"],
					link: "https://decorated-dataloaders.gabrieljs.dev/",
				},
				{
					kind: "Open source",
					year: "2023",
					name: "Decorated Factory",
					description:
						"Library that generates object instances for testing from decorators, with support for relations, arrays and value overrides.",
					tags: ["TypeScript", "Faker", "Rollup"],
					link: "https://github.com/gabrieljsilva/decorated-factory",
				},
				{
					kind: "Takaoka Anestesia",
					year: "2022 to 2024",
					name: "Demand To Invoice",
					description:
						"Medical scheduling system covering the full flow, from registration and patient care through to billing and payment.",
					tags: ["NestJS", "GraphQL", "React", "PostgreSQL", "Azure"],
					link: "",
				},
				{
					kind: "Fleury",
					year: "2021 to 2023",
					name: "Medical Scheduling",
					description:
						"Web and mobile application for shift scheduling and negotiation among network physicians, with dynamic anamnesis forms.",
					tags: ["Node.js", "React Native", "Next.js", "GraphQL", "PostgreSQL"],
					link: "",
				},
				{
					kind: "GoHealth",
					year: "2021 to 2022",
					name: "NPS for clinics and hospitals",
					description:
						"SaaS Net Promoter Score platform measuring patient satisfaction across partner hospital units.",
					tags: ["NestJS", "GraphQL", "React", "PostgreSQL", "Docker"],
					link: "",
				},
			],
		},
		experience: {
			kicker: "Track record",
			title: "Professional experience",
			items: [
				{
					company: "Sami Saúde",
					role: "Software Engineer",
					period: "Jul 2025 to present",
					summary:
						"Health plan systems, leading technical discovery and architecture for the AI-driven support automation solution.",
					bullets: [
						"Grew support automation from 19% to 53% resolution without human handoff, combining RAG, MCP servers and intelligent agents.",
						"Over 85% positive ratings on automated support.",
						"Architecture modelling and technical decisions for cross-team integrations, including Zendesk, MCP servers and internal services.",
						"Medical systems built with generative AI, including RAG-based applications and MCP servers.",
						"Scalable backends in Node.js, TypeScript, Fastify and NestJS, with microservices and event-driven flows over RabbitMQ.",
						"Observability with OpenTelemetry and Grafana: instrumented logs, metrics and alerts.",
						"Mentoring non-technical colleagues on adopting generative AI for productivity.",
					],
					stack: [
						"TypeScript",
						"Node.js",
						"Fastify",
						"NestJS",
						"RabbitMQ",
						"PostgreSQL",
						"MongoDB",
						"Redis",
						"OpenTelemetry",
						"Grafana",
						"GCP",
					],
				},
				{
					company: "Hospital Israelita Albert Einstein",
					role: "Fullstack Software Developer",
					period: "Mar 2024 to Jun 2025",
					summary:
						"Systems for primary healthcare, focused on modular architecture and service integration.",
					bullets: [
						"Web applications with JavaScript, Node.js, TypeScript and GraphQL.",
						"Modular, scalable applications with NestJS and GraphQL.",
						"Event-driven systems and microservices with Kafka, RabbitMQ and SQS.",
						"Infrastructure with Docker and Kubernetes, plus CI/CD environments to automate deployment.",
						"Internal libraries improving code quality and developer experience.",
						"Supervision and mentoring of junior developers.",
					],
					stack: [
						"NestJS",
						"GraphQL",
						"React",
						"Kafka",
						"RabbitMQ",
						"MySQL",
						"Redis",
						"Docker",
						"Kubernetes",
						"AWS",
						"Azure",
					],
				},
				{
					company: "Freelance",
					role: "Fullstack Developer",
					period: "Oct 2022 to Mar 2024",
					summary:
						"Projects across HR, recruiting and LawTech, with tailored solutions in Next.js and NestJS.",
					bullets: [
						"Integrated applications with JavaScript, Node.js and TypeScript.",
						"Microservices with Kafka and RabbitMQ for inter-system communication.",
						"Responsive interfaces with React, Tailwind and Material UI.",
						"CI/CD, Docker and Kubernetes for continuous delivery.",
					],
					stack: [
						"Next.js",
						"NestJS",
						"GraphQL",
						"React",
						"Tailwind",
						"Kafka",
						"RabbitMQ",
						"PostgreSQL",
						"Docker",
					],
				},
				{
					company: "RedFox Digital Solutions",
					role: "Fullstack Software Developer",
					period: "Apr 2021 to Mar 2024",
					summary:
						"Technology services company. Development of healthcare applications.",
					bullets: [
						"Medical scheduling, a SaaS NPS platform for clinics and hospitals, and mobile applications.",
						"Web development with JavaScript, Node.js, TypeScript and React.",
						"Mobile development with React Native.",
						"Modular, scalable applications with NestJS.",
						"Relational databases such as PostgreSQL and MySQL.",
					],
					stack: [
						"Node.js",
						"TypeScript",
						"React",
						"React Native",
						"NestJS",
						"GraphQL",
						"PostgreSQL",
						"MySQL",
					],
				},
				{
					company: "CAMEJA",
					role: "Information Systems Programmer",
					period: "Sep 2019 to Feb 2020",
					summary:
						"Integrated solutions for legal and financial areas, focused on process automation.",
					bullets: [
						"APIs and user interfaces connecting different modules.",
						"Systems in JavaScript, Node.js and MySQL.",
					],
					stack: ["JavaScript", "Node.js", "MySQL"],
				},
				{
					company: "Newtic",
					role: "Web Development Intern",
					period: "Dec 2018 to Jan 2019",
					summary:
						"First professional experience: building and maintaining features in web applications.",
					bullets: [
						"Dynamic interfaces with Vue.js.",
						"Feature support with Node.js and JavaScript.",
					],
					stack: ["JavaScript", "Node.js", "Vue.js"],
				},
			],
		},
		education: {
			kicker: "Education",
			title: "Academic background",
			items: [
				{
					course: "Computer Science",
					place: "Instituto Federal de Educação, Ciência e Tecnologia",
					level: "Bachelor's degree",
					period: "Started 2018",
					status: "Paused in the 4th semester",
				},
				{
					course: "Technical Course in Computing",
					place: "Instituto Federal de Educação, Ciência e Tecnologia",
					level: "Technical degree",
					period: "2018 to 2019",
					status: "Completed",
				},
			],
		},
		skills: {
			kicker: "Stack",
			title: "Technical skills",
			sub: "The technologies I use day to day to design, build and operate systems.",
			groups: [
				{
					name: "Applied AI",
					items: [
						"Generative AI",
						"RAG",
						"MCP",
						"Agents",
						"Gemini",
						"Prompt engineering",
					],
				},
				{
					name: "Back-end",
					items: [
						"JavaScript",
						"TypeScript",
						"Node.js",
						"NestJS",
						"Fastify",
						"GraphQL",
						"Express",
					],
				},
				{
					name: "Front-end",
					items: [
						"React",
						"Next.js",
						"React Native",
						"Tailwind",
						"Material UI",
						"HTML",
						"CSS",
					],
				},
				{
					name: "Data",
					items: [
						"PostgreSQL",
						"MySQL",
						"MongoDB",
						"Redis",
						"SQLite",
						"SQL Server",
					],
				},
				{
					name: "Architecture & messaging",
					items: [
						"Microservices",
						"Event-driven",
						"Kafka",
						"RabbitMQ",
						"AWS SQS",
					],
				},
				{
					name: "Infra & DevOps",
					items: [
						"Docker",
						"Kubernetes",
						"CI/CD",
						"AWS",
						"Azure",
						"GCP",
						"GitHub Actions",
						"Jenkins",
						"Coolify",
					],
				},
				{
					name: "Observability & quality",
					items: [
						"OpenTelemetry",
						"Grafana",
						"Kibana",
						"Automated testing",
						"Scrum",
						"Kanban",
					],
				},
			],
		},
		links: {
			kicker: "Links",
			title: "Where to find me",
			items: [
				{
					icon: "github" as const,
					label: "GitHub",
					value: "gabrieljsilva",
					href: profile.social.github,
				},
				{
					icon: "linkedin" as const,
					label: "LinkedIn",
					value: "gabrieldjs21",
					href: profile.social.linkedin,
				},
				{
					icon: "mail" as const,
					label: "Email",
					value: profile.email,
					href: mailtoHref,
				},
				{
					icon: "phone" as const,
					label: "Phone",
					value: profile.phoneIntl,
					href: telHref,
				},
				{
					icon: "globe" as const,
					label: "Product",
					value: "untimeless.com",
					href: profile.social.product,
				},
			],
		},
		contact: {
			kicker: "Contact",
			title: "Let's build something with AI",
			lead: "Open to conversations about AI products, distributed systems architecture and engineering work.",
			resume: "Download resume (EN)",
		},
		footer: {
			copyright: "© 2026 Gabriel de Jesus Silva. All rights reserved.",
			quote:
				"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
			author: "Martin Fowler",
		},
	},

	linktree: {
		role: "Software Engineer at Sami Saúde",
		bio: "Web systems and distributed backends in Node.js and TypeScript.",
		portfolio: "See the full portfolio",
		footer: "© 2026 Gabriel de Jesus Silva",
		links: [
			{
				icon: "linkedin" as const,
				label: "LinkedIn",
				value: "in/gabrieldjs21",
				href: profile.social.linkedin,
			},
			{
				icon: "github" as const,
				label: "GitHub",
				value: "github.com/gabrieljsilva",
				href: profile.social.github,
			},
			{
				icon: "instagram" as const,
				label: "Instagram",
				value: "@gabrieljsillva",
				href: profile.social.instagram,
			},
			{
				icon: "globe" as const,
				label: "Website",
				value: "gabrieljs.dev",
				href: profile.social.website,
			},
			{
				icon: "mail" as const,
				label: "Email",
				value: profile.email,
				href: mailtoHref,
			},
		],
	},

	resume: {
		fileName: "Gabriel_Silva_Resume.pdf",
		role: "Software Engineer",
		summaryTitle: "Professional summary",
		summary: [
			"Software Engineer with over 6 years of experience designing and implementing scalable, high-performance systems across the healthcare, technology, legal, financial and HR sectors.",
			"Specialist in Node.js, TypeScript and NestJS, with solid experience in distributed architectures, including modular monoliths, microservices and event-driven systems. Hands-on experience with Kafka, RabbitMQ, AWS SQS, CI/CD, OpenTelemetry, Grafana and automated testing, as well as the development of solutions based on generative AI, RAG and MCP.",
			"Experience in technical discovery, architecture modelling and technical decision-making, taking part in defining and evolving solutions and integrations between different systems and teams. Also experienced in building end-to-end SaaS products, from discovery and architecture through implementation, infrastructure, deployment and validation with real users.",
		],
		resultsLead:
			"Focused on code quality, scalability, reliability and operational efficiency, with results such as:",
		results: [
			"Annual cost of external services reduced from R$220,000 to R$40,000.",
			"Deployment failure rate reduced from 60% to 8%.",
			"Development of a medical system with generative AI that cut average clinical writing time from 10 minutes to approximately 30 seconds.",
			"Evolution of a support solution based on RAG, MCP and intelligent agents, raising resolution without handoff to human support from 19% to 53%.",
		],
		educationTitle: "Academic background",
		education: [
			"Bachelor's degree in Computer Science – Instituto Federal de Educação, Ciência e Tecnologia (paused – 4th semester) – Started in 2018",
			"Technical Course in Computing – Instituto Federal de Educação, Ciência e Tecnologia - Started in 2018 - Completed in 2019",
		],
		experienceTitle: "Professional experience",
		experience: [
			{
				company: "Sami Saúde - 07/2025",
				note: "",
				role: "Software Engineer",
				bullets: [
					"Grew support automation from 19% to 53% resolution without handoff to human agents, by combining RAG, MCP servers and intelligent agents, increasing the operational efficiency of the support team.",
					"Led the technical discovery of the automated support solution, conducting research, refinements, evaluation of alternatives and technical discussions to define and evolve the solution.",
					"Architecture modelling and technical decision-making for integrations between systems owned by different teams, including Zendesk, MCP servers and internal services, producing diagrams and defining critical flows from member onboarding through to technical support.",
					"Diagnosis and resolution of critical technical problems in the early phases of the project, supporting the stabilisation of integrations and the evolution of the architecture.",
					"Development of scalable backend applications using Node.js, TypeScript, Fastify and NestJS, focused on performance, code quality and modular architecture.",
					"Development of microservices and event-driven systems using RabbitMQ, plus integrations between services and internal systems.",
					"Integration with relational and non-relational databases, including PostgreSQL, MySQL, MongoDB and Redis.",
					"Development and maintenance of unit and integration tests, plus internal libraries to standardise testing and improve developer experience.",
					"Implementation of observability using OpenTelemetry and Grafana, instrumenting logs, metrics and alerts for application and service monitoring.",
					"Development of medical systems using generative AI, including RAG-based applications and MCP (Model Context Protocol) servers integrating language models, tools and internal services.",
					"Mentoring non-technical professionals on adopting generative AI for productivity, using Google ecosystem tools such as Gemini, Antigravity, Apps Script and Stitch.",
				],
			},
			{
				company: "Hospital Israelita Albert Einstein - 03/2024 – 06/2025",
				note: "",
				role: "Fullstack Software Developer",
				bullets: [
					"Development of systems for the primary healthcare area.",
					"Implementation of web applications using JavaScript, Node.js, TypeScript and GraphQL.",
					"Use of relational databases such as MySQL.",
					"Creation of modular, scalable applications with Nest.js and GraphQL.",
					"Creation of event-driven systems and microservices with Kafka, RabbitMQ and SQS.",
					"Creation of automated tests.",
					"Development of libraries to improve code quality and developer experience.",
					"Implementation of front-end and back-end integrations using REST and GraphQL APIs.",
					"Infrastructure deployment with Docker and Kubernetes.",
					"Creation of CI/CD environments to automate deployment processes.",
					"Supervision and mentoring of junior developers.",
				],
			},
			{
				company: "RedFox Digital Solutions – 04/2021 – 03/2024",
				note: "Technology solutions and services company",
				role: "Fullstack Software Developer",
				bullets: [
					"Development of healthcare applications, such as: medical scheduling, a SaaS NPS platform for clinics and hospitals, and mobile applications.",
					"Work with web development technologies such as JavaScript, Node.js, TypeScript and React.",
					"Work with mobile development technologies such as React Native.",
					"Development of modular, scalable applications with Nest.js.",
					"Use of relational databases such as PostgreSQL and MySQL.",
				],
			},
			{
				company: "CAMEJA – 09/2019 – 02/2020",
				note: "",
				role: "Information Systems Programmer",
				bullets: [
					"Development of integrated solutions for the legal and financial areas, focused on automating critical processes.",
					"Implementation of APIs and user interfaces connecting different system modules.",
					"Use of JavaScript, Node.js and MySQL to build and maintain the applications.",
				],
			},
			{
				company: "Newtic – 12/2018 – 01/2019",
				note: "",
				role: "Web Development Intern",
				bullets: [
					"Participation in building and maintaining features in web applications.",
					"Development of dynamic, responsive interfaces with Vue.js.",
					"Support for feature implementation with Node.js and JavaScript.",
				],
			},
		],
		projectsTitle: "Independent projects",
		projects: [
			{
				name: "Untimeless – 2025 – 2026",
				kind: "Independent SaaS",
				role: "Founder / Software Engineer",
				bullets: [
					"End-to-end development of a meeting intelligence SaaS based on caption capture and generative AI.",
					"Development of a browser extension that scrapes captions from Google Meet, Microsoft Teams and Zoom, used as input for the platform's AI features.",
					"Implementation of AI chats over meeting content, with a first-party MCP server for integration with AI tools and connections to external MCP servers.",
					"Implementation of backend, infrastructure, authentication, team and workspace management, and AI features.",
					"Responsible for the entire product cycle, from discovery and solution definition through architecture, implementation, deployment and validation with real users.",
					"Continuous product evolution driven by real user feedback and business hypothesis validation.",
				],
			},
		],
		skillsTitle: "Courses and qualifications",
		skills: [
			"Artificial Intelligence - generative AI, RAG, MCP (Model Context Protocol), intelligent agents.",
			"Back-end - JavaScript, TypeScript, Node.js, Nest.js, Fastify, GraphQL, Express.",
			"Front-end - HTML, CSS, JavaScript, React, Tailwind, Material UI.",
			"Databases - MySQL, PostgreSQL, MongoDB, Redis, SQLite, SQLServer.",
			"Infrastructure & DevOps - Docker, Kubernetes, CI/CD, AWS, Azure, Jenkins, Github Actions, S3, EC2, Coolify, VPS.",
			"Architecture - Kafka, RabbitMQ.",
			"Methodologies & Quality - Scrum, Kanban, Automated Testing.",
			"Observability - OpenTelemetry, Grafana and Kibana.",
			"English – Technical reading.",
		],
	},
};
