export const en = {
	ui: {
		resume: "Resume",
		downloadResume: "Download Resume",
		viewProjects: "View Projects",
		getInTouch: "Get in Touch",
		sendMeAMessage: "Send me a message and I will reply as soon as possible",
		aboutMe: "About Me",
		featuredProjects: "Featured Projects",
		discoverMyRecentWork: "Discover some of my recent work",
		myProfessionalJourney:
			"My professional journey and the projects I have worked on",
		experiences: "Experiences",
		professionalExperience: "Professional Experience",
		technicalSkills: "Technical Skills",
		skillsAndExpertise: "Skills and Expertise",
		exploreMySkillsAndExpertise:
			"Explore the technologies and tools in which I excel to build scalable and efficient systems.",
		navigation: "navigation",
		inspiration: "Inspiration",
		letsConnect: "Let's Connect",
		latestPosts: "Latest Posts",
		viewMore: "View More",
		minRead: "Reading Time",
		views: "Views",
		professionalSummary: "Professional Summary",
		location: "Address",
		present: "present",
		keyAchievements: "Achievements",
		at: "at",
		close: "Close",
		keyFeatures: "Key Features",
		whatsYourName: "What's your name?",
		whatsYouEmailAddress: "What's your email address?",
		yourMessage: "Your message",
		yourNamePlaceholder: "your name",
		yourEmailPlaceholder: "your.email@example.com",
		yourMessagePlaceholder: "Write your message here...",
		sendMessage: "Send message",
		sendingMessage: "Sending...",
		comingSoon: "Coming Soon...",
		viewProject: "View Project",
	},
	profile: {
		name: "Gabriel Silva",
		fullName: "Gabriel de Jesus Silva",
		role: "Software Developer",
		currentCompany: "Hospital Israelita Albert Einstein",
		currentCompanyShortName: "HIAE",
		birthdayDate: "2000-01-23",
		resumeSummary:
			"Full Stack Developer with over 5 years of experience creating corporate solutions for the healthcare and technology sectors. Proven ability in building high-performance systems capable of handling over 10k requests per minute. Open source contributor focused on developer tools.",
		resume: `Passionate Full Stack Developer with over 5 years of experience, specialized in creating efficient technological solutions. My journey began in 2018 as an intern, where I built the foundation that supports my work to this day.

Throughout my career, I had the privilege of working on important projects for major healthcare institutions, including Hospital Israelita Albert Einstein and Rede Fleury. This experience shaped my approach to developing robust and reliable solutions.

As an open source contributor, I dedicate myself to improving the JavaScript/TypeScript ecosystem by creating libraries and tools that help other developers. I believe in the power of collaborative development and continuous learning.`,
		shortDescription:
			"Creating elegant solutions through code. Specialized in developing modern web applications with cutting-edge technologies and exceptional user experiences.",
		contact: {
			email: "contato@gabrieljs.dev",
			formAccessKey: "81309db0-39fb-4bb6-8738-4dae02fcbd40",
		},
		social: {
			linkedin: "https://www.linkedin.com/in/gabrieldjs21/",
			github: "https://github.com/gabrieljsilva",
			website: "https://gabrieljs.dev",
		},
		location: {
			city: "Senhor do Bonfim",
			state: "Bahia",
			country: "Brazil",
		},
		navigation: [
			{ key: "Home", title: "Home", href: "/#home" },
			{ key: "About", title: "About", href: "/#about" },
			{ key: "Projects", title: "Projects", href: "/#projects" },
			{ key: "Experiences", title: "Experiences", href: "/#experiences" },
			{ key: "Skills", title: "Skills", href: "/#skills" },
			{ key: "Blog", title: "Blog", href: "/blog" },
		],

		/**
		 * SKILL SECTION
		 */

		skillsSet: [
			{
				category: "Back-end",
				description:
					"Development of scalable microservices that handle over 10k RPM. Expertise in Node.js and TypeScript allowed optimizing API response times while maintaining clean architecture standards.",
				skills: [
					{
						name: "JavaScript",
						description:
							"Mastery of ES6+ features and asynchronous programming",
					},
					{
						name: "TypeScript",
						description: "Strong typing and advanced patterns",
					},
					{
						name: "Node.js",
						description: "Efficient server-side runtime",
					},
					{
						name: "Nest.js",
						description: "Structured and scalable framework",
					},
					{
						name: "GraphQL",
						description: "GraphQL API development",
					},
					{
						name: "Express",
						description: "Robust framework for RESTful APIs",
					},
				],
			},
			{
				category: "Front-end",
				description:
					"Delivered over 15 responsive interfaces using React. Focused on performance optimization, reducing initial load time by 40% through code splitting and lazy loading.",
				skills: [
					{
						name: "HTML",
						description: "Semantic structure and accessibility",
					},
					{
						name: "CSS",
						description: "Creative styling and animations",
					},
					{
						name: "React",
						description: "Dynamic, component-based UI",
					},
					{
						name: "Tailwind",
						description: "Rapid development with utility classes",
					},
					{
						name: "Material UI",
						description: "Modern design with Material principles",
					},
				],
			},
			{
				category: "Database",
				description:
					"Designed data models for over 8 production systems. Implemented Redis caching that reduced database calls by 70% on high-traffic e-commerce platforms.",
				skills: [
					{
						name: "MySQL",
						description: "Expertise in relational databases",
					},
					{
						name: "PostgreSQL",
						description: "Advanced SQL features and reliability",
					},
					{
						name: "MongoDB",
						description: "Flexible NoSQL solutions",
					},
					{
						name: "Redis",
						description: "High-performance in-memory storage",
					},
					{
						name: "SQLite",
						description: "Lightweight and efficient database",
					},
				],
			},
			{
				category: "Infrastructure & DevOps",
				description:
					"Automated deployment pipelines, reducing release cycles from days to hours. Containerized over 12 services, improving development environment consistency.",
				skills: [
					{
						name: "Docker",
						description: "Containerization for consistency",
					},
					{
						name: "CI/CD",
						description: "Efficient development pipelines",
					},
					{
						name: "AWS",
						description: "Cloud infrastructure management",
					},
				],
			},
			{
				category: "Architecture",
				description:
					"Designed event-driven systems processing over 1M daily events. Implementations with Kafka reduced system coupling while improving fault tolerance.",
				skills: [
					{
						name: "Kafka",
						description: "Scalable event streaming",
					},
					{
						name: "RabbitMQ",
						description: "Reliable message brokering",
					},
					{
						name: "AWS",
						description: "Cloud message queuing",
					},
				],
			},
			{
				category: "Methodologies & Quality",
				description:
					"Led agile teams delivering over 30 sprints with a 95% completion rate. Implemented tests with Jest achieving 85% coverage in critical services.",
				skills: [
					{
						name: "Agile",
						description: "Iterative and flexible development",
					},
					{
						name: "Testes",
						description: "Automated testing and quality assurance",
					},
				],
			},
		],

		/**
		 * PROJECTS SECTION
		 */

		projects: [
			{
				id: 1,
				title: "Care Coordination",
				description:
					"The project aims to connect Patients to Healthcare Professionals through Care Teams. Developed using Node.js with the Nest.js framework, GraphQL and React, the system integrates its front-end with the Hospital Israelita Albert Einstein's Corporate Portal, a solution composed of micro front-ends that allows various teams to operate independently in each module. The project also adopts Vitest for testing, MySQL for data management, and uses messaging solutions such as Kafka, RabbitMQ, and SQS, supported by Amazon Web Services infrastructure.",
				image: "/images/logo/hiae.png",
				technologies: [
					"Node.js",
					"Nest.js",
					"GraphQL",
					"React",
					"Vite",
					"Vitest",
					"MySQL",
					"Kafka",
					"RabbitMQ",
					"SQS",
					"AWS",
				],
				features: [],
			},
			{
				id: 2,
				title: "Decorated Dataloaders",
				description:
					"NestJS Decorated Dataloaders is a module that simplifies the creation of dataloaders for GraphQL using decorators. It solves the N+1 problem by batching and caching requests, optimizing queries and facilitating integration with NestJS. The module offers a declarative configuration for caching, batch size definition, and dependency handling, allowing the creation of efficient and scalable resolvers.",
				technologies: ["NestJS", "TypeScript", "GraphQL"],
				features: [],
			},
			{
				id: 3,
				title: "Decorated Factory",
				description:
					"Decorated Factory is a library that uses decorators to create object instances with data generated via Faker, ideal for testing scenarios. It allows defining, through decorators, how each field of a class should be populated, supporting relationships between entities, arrays, and value overriding, inspired by the PrismaORM approach.",
				technologies: ["TypeScript", "JavaScript", "Faker", "Rollup"],
				features: [],
			},
			{
				id: 4,
				title: "Untimeless",
				description:
					"Untimeless is a timesheet and timetracker system that facilitates tracking of hours worked. With report generation features, it offers an overview of the time dedicated to tasks. Using artificial intelligence, it provides insights on employee performance, helping to optimize productivity and decision-making.",
				technologies: [
					"Node.js",
					"TypeScript",
					"React.js",
					"Nest.js",
					"PostgreSQL",
					"GraphQL",
					"Docker",
					"Vite",
				],
				features: [],
			},
			{
				id: 5,
				title: "Demand To Invoice",
				description:
					"Takaoka Anestesia is a network of anesthesiologists that hires anesthetists on demand for hospitals or surgeons. The developed Demand To Invoice project was a medical scheduling system that serves the client from registration, through patient care, to payment.",
				image: "/images/logo/takaoka-logo.png",
				technologies: [
					"Node.js",
					"TypeScript",
					"React.js",
					"Nest.js",
					"PostgreSQL",
					"GraphQL",
					"Docker",
				],
				features: [],
			},
			{
				id: 6,
				title: "Fleury - Medical Schedules",
				description:
					"Fleury - Medical Schedules was a project where I worked on both the back-end and the web and mobile front-end. Using Node.js, React, and React Native, the project's idea was to create a scheduling app for Fleury network doctors. The goal was to facilitate schedule negotiations among doctors.",
				image: "/images/logo/fleury-logo.png",
				technologies: [
					"Node.js",
					"TypeScript",
					"React.js",
					"React Native",
					"Next.js",
					"Nest.js",
					"PostgreSQL",
					"GraphQL",
					"Docker",
				],
				features: [],
			},
			{
				id: 7,
				title: "GoHealth - NPS",
				description:
					"GoHealth is a company that offers a range of products for clinics and hospitals. One of these products is GoHealth NPS (Net Promoter Score), which aims to evaluate patient satisfaction and identify the potential for promoting partner hospital services.",
				image: "/images/logo/gohealth-logo.png",
				technologies: [
					"Node.js",
					"TypeScript",
					"React.js",
					"Nest.js",
					"Postgresql",
					"GraphQL",
					"Docker",
					"Vite",
				],
				features: [],
			},
			{
				id: 8,
				title: "Pecunias",
				description:
					"This was a project that aimed to split large precatory titles into smaller ones, making them more accessible for negotiation. The project, in addition to managing transactions between users, also generated contracts automatically.",
				technologies: ["Node.js", "MySQL", "Express.js", "Bootstrap"],
				features: [],
			},
		],

		/**
		 * EXPERIENCES SECTION
		 */
		experiences: [
			{
				id: 1,
				company: "Hospital Israelita Albert Einstein",
				role: "Fullstack Software Developer",
				startDate: "Mar 2024",
				description:
					"As a Fullstack Developer at Hospital Israelita Albert Einstein, I worked on various initiatives, focusing on developing tools for Primary Healthcare.",
				detailedDescription:
					"I contributed to improving the efficiency and quality of services offered to patients and healthcare professionals, as well as developing libraries that enhanced code quality and the development experience.",
				achievements: [],
				technologies: [],
			},
			{
				id: 2,
				company: "Grupo GBI",
				role: "Fullstack Software Developer",
				startDate: "Mar 2024",
				endDate: "present",
				description:
					"I am an IT consultant at Grupo GBI, providing services as a Fullstack Developer for major clients, including Hospital Israelita Albert Einstein, the largest hospital in Latin America.",
				detailedDescription:
					"My work involves developing customized technological solutions, focusing on improving the efficiency of healthcare processes and contributing to excellence in patient and healthcare professional care. Additionally, as a consultant, I work on various fronts, identifying technical needs, proposing innovative solutions, and ensuring the delivery of high-quality projects tailored to each client's demands.",
				achievements: [],
				technologies: [],
			},
			{
				id: 3,
				company: "Freelance",
				role: "Fullstack Developer",
				startDate: "Oct 2022",
				endDate: "Mar 2024",
				description:
					"As a freelance fullstack developer, I had the opportunity to collaborate with various companies in diverse sectors including Human Resources, Recruitment & Selection, and LawTech.",
				detailedDescription:
					"My skill set includes technologies such as JavaScript, Next.js, Node.js, TypeScript, and GraphQL, among others. The diversity of projects I led provided me with a multidisciplinary perspective, capable of addressing daily challenges and delivering effective and innovative solutions.",
				achievements: [],
				technologies: [
					{ name: "JavaScript" },
					{ name: "Next.js" },
					{ name: "Node.js" },
					{ name: "TypeScript" },
					{ name: "GraphQL" },
				],
			},
			{
				id: 4,
				company: "RedFox Digital Solutions",
				role: "Fullstack Software Developer",
				startDate: "Apr 2021",
				endDate: "Sep 2022",
				description:
					"As a Fullstack Developer at RedFox, I had the opportunity to work on several projects focused on the healthcare sector.",
				detailedDescription:
					"Furthermore, I was able to learn and enhance my skills in various technologies of the web development ecosystem, such as Typescript, React.js, GraphQL, among others.",
				achievements: [],
				technologies: [
					{ name: "TypeScript" },
					{ name: "React.js" },
					{ name: "GraphQL" },
				],
			},
			{
				id: 5,
				company: "CAMEJA",
				role: "Information Systems Programmer",
				startDate: "Sep 2019",
				endDate: "Feb 2020",
				description:
					"I worked as an information systems programmer at Cameja and had the opportunity to develop systems for the legal and financial sectors.",
				detailedDescription:
					"During this time, I used technologies such as Javascript, Node.js, and MySQL for API development, user interface, and process automation.",
				achievements: [],
				technologies: [
					{ name: "Javascript" },
					{ name: "Node.js" },
					{ name: "MySQL" },
				],
			},
			{
				id: 6,
				company: "Newtic",
				role: "Web Developer",
				startDate: "Dec 2018",
				endDate: "Jan 2019",
				description:
					"I had the opportunity to work as an intern at Newtic, where I learned technologies such as Javascript, Node.js, and Vue.js.",
				detailedDescription: "",
				achievements: [],
				technologies: [
					{ name: "Javascript" },
					{ name: "Node.js" },
					{ name: "Vue.js" },
				],
			},
		],

		footer: {
			quote: {
				text: "Anyone can write code that a computer understands. Good programmers write code that humans understand.",
				author: "Martin Fowler",
			},
			copyright: "© 2025. All rights reserved.",
		},
		posts: [],
	},
};
