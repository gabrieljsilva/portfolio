export const en = {
	ui: {
		resume: "Resume",
		downloadResume: "Download Resume",
		viewProjects: "View Projects",
		getInTouch: "Get in Touch",
		sendMeAMessage: "Send me a message and I'll respond as soon as possible",
		aboutMe: "About Me",
		featuredProjects: "Featured Projects",
		discoverMyRecentWork: "Discover some of my recent work",
		myProfessionalJourney:
			"My professional journey and the projects I've worked on",
		experiences: "Experiences",
		professionalExperience: "Professional Experience",
		technicalSkills: "Technical Skills",
		skillsAndExpertise: "Skills & Expertise",
		exploreMySkillsAndExpertise:
			"Explore the technologies and tools I excel at to build scalable and efficient systems.",
		navigation: "navigation",
		inspiration: "Inspiration",
		letsConnect: "Let's Connect",
		latestPosts: "Latest Posts",
		viewMore: "View More",
		minRead: "min read",
		views: "views",
		professionalSummary: "Professional Summary",
		location: "Location",
		present: "present",
		keyAchievements: "Key Achievements",
		at: "at",
		close: "Close",
		keyFeatures: "Key Features",
		whatsYourName: "What's your name?",
		whatsYouEmailAddress: "What's your email address?",
		yourMessage: "Your Message",
		yourNamePlaceholder: "Your name",
		yourEmailPlaceholder: "your.email@example.com",
		yourMessagePlaceholder: "Leave your message here...",
		sendMessage: "Send Message",
		sendingMessage: "Sending...",
		comingSoon: "Coming Soon...",
		viewProject: "View Project",
		technologies: "Technologies",
		academicBackground: "Academic Background",
	},
	profile: {
		name: "Gabriel Silva",
		fullName: "Gabriel de Jesus Silva",
		role: "Software Developer",
		currentCompany: "Hospital Israelita Albert Einstein",
		currentCompanyShortName: "HIAE",
		birthdayDate: "2000-01-23",
		resumeSummary:
			"Full Stack Developer with over 5 years of experience creating corporate solutions for healthcare and technology sectors. Proven ability to build high-performance systems handling over 10k requests per minute. Open source contributor focused on developer tools.",
		resume: `Passionate Full Stack Developer with over 5 years of experience, specializing in efficient technological solutions. My journey began in 2018 as an intern, building the foundation that supports my work to this day.

Throughout my career, I've had the privilege to work on important projects for major healthcare institutions including Hospital Israelita Albert Einstein and Rede Fleury. This experience shaped my approach to developing robust and reliable solutions.

As an open source contributor, I dedicate myself to improving the JavaScript/TypeScript ecosystem by creating libraries and tools that help other developers. I believe in collaborative development and continuous learning.`,
		shortDescription:
			"Creating elegant solutions through code. Specialized in developing modern web applications with cutting-edge technologies and exceptional user experiences.",
		contact: {
			email: "contact@gabrieljs.dev",
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
					"Development of scalable microservices handling over 10k RPM. Node.js and TypeScript expertise optimized API response times while maintaining clean architecture standards.",
				skills: [
					{
						name: "JavaScript",
						description: "ES6+ features and asynchronous programming mastery",
					},
					{
						name: "TypeScript",
						description: "Strong typing and advanced patterns",
					},
					{ name: "Node.js", description: "Efficient server-side runtime" },
					{ name: "Nest.js", description: "Structured and scalable framework" },
					{ name: "GraphQL", description: "GraphQL API development" },
					{
						name: "Express",
						description: "Robust framework for RESTful APIs",
					},
				],
			},
			{
				category: "Front-end",
				description:
					"Delivered 15+ responsive interfaces using React. Focused on performance optimization, reducing initial load time by 40% through code splitting and lazy loading.",
				skills: [
					{ name: "HTML", description: "Semantic structure and accessibility" },
					{ name: "CSS", description: "Creative styling and animations" },
					{ name: "React", description: "Component-based dynamic UI" },
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
					"Designed data models for 8+ production systems. Implemented Redis caching that reduced database calls by 70% in high-traffic e-commerce platforms.",
				skills: [
					{
						name: "MySQL",
						description: "Relational database expertise",
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
					{ name: "SQLite", description: "Lightweight efficient database" },
				],
			},
			{
				category: "Infrastructure & DevOps",
				description:
					"Automated deployment pipelines reducing release cycles from days to hours. Containerized 12+ services improving development environment consistency.",
				skills: [
					{ name: "Docker", description: "Containerization for consistency" },
					{
						name: "CI/CD",
						description: "Efficient development pipelines",
					},
					{ name: "AWS", description: "Cloud infrastructure management" },
				],
			},
			{
				category: "Architecture",
				description:
					"Designed event-driven systems processing over 1M daily events. Kafka implementations reduced system coupling while improving fault tolerance.",
				skills: [
					{ name: "Kafka", description: "Scalable event streaming" },
					{ name: "RabbitMQ", description: "Reliable message brokering" },
					{ name: "AWS", description: "Cloud message queuing" },
				],
			},
			{
				category: "Methodologies & Quality",
				description:
					"Led agile teams delivering 30+ sprints with 95% completion rate. Implemented Jest tests achieving 85% coverage in critical services.",
				skills: [
					{
						name: "Agile",
						description: "Iterative and flexible development",
					},
					{
						name: "Testing",
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
					"A project aimed at connecting Patients with Healthcare Professionals through Care Teams. Developed using Node.js with Nest.js framework, GraphQL and React, the system integrates its front-end with the Hospital Israelita Albert Einstein's Corporate Portal, a micro front-end solution enabling independent team work on each module. Utilizes Vitest for testing, MySQL for data management, and messaging solutions like Kafka, RabbitMQ and SQS supported by AWS infrastructure.",
				image: "/images/logo/hiae.png",
				technologies: [
					"JavaScript",
					"Node.js",
					"TypeScript",
					"GraphQL",
					"Nest.js",
					"React",
					"Material UI",
					"Vite",
					"Vitest",
					"Kafka",
					"RabbitMQ",
					"MySQL",
					"Redis",
					"Docker",
					"Kubernetes",
					"CI/CD",
					"AWS",
					"Microsoft Azure",
				],
				features: [
					"Manage care teams",
					"Manage care plans",
					"Personalized care",
				],
			},
			{
				id: 2,
				title: "Decorated Dataloaders",
				description:
					"NestJS Decorated Dataloaders module simplifies GraphQL dataloader creation using decorators. Solves N+1 problem through request batching and caching, optimizing queries and easing NestJS integration. Offers declarative configuration for caching, batch sizing, and dependency management to create efficient resolvers.",
				technologies: ["Node.js", "TypeScript", "NestJS", "GraphQL"],
				features: [
					"Dataloader declaration via decorators",
					"Efficient batching and caching",
					"Custom configurations",
					"Aliases for abstract classes",
					"Circular dependency resolution",
				],
				link: "https://github.com/gabrieljsilva/nestjs-decorated-dataloaders",
			},
			{
				id: 3,
				title: "Decorated Factory",
				description:
					"Decorated Factory uses decorators to create object instances with Faker-generated data, ideal for testing scenarios. Allows defining field population through decorators, supporting entity relationships, arrays, and value overrides, inspired by PrismaORM's approach.",
				technologies: [
					"TypeScript",
					"Node.js",
					"JavaScript",
					"Faker",
					"Rollup",
				],
				features: [
					"Field declaration with default/fake values using faker",
					"Relationship declaration via decorators",
					"On-demand instance creation with faker",
					"Dynamic value substitution",
				],
				link: "https://github.com/gabrieljsilva/decorated-factory",
			},
			{
				id: 4,
				title: "Untimeless",
				description:
					"Untimeless is a timesheet system facilitating work hour tracking. With report generation features, it provides visibility into task dedication time. Using AI, it offers performance insights to optimize productivity and decision-making.",
				technologies: [
					"JavaScript",
					"Node.js",
					"TypeScript",
					"GraphQL",
					"Nest.js",
					"React",
					"Tailwind",
					"Vite",
					"Vitest",
					"Postgresql",
					"Docker",
					"CI/CD",
				],
				features: [
					"Project management",
					"Time tracking",
					"Shift management",
					"Event management",
					"Bulk time data export",
					"Bulk time data import",
				],
				link: "https://untimeless.com",
			},
			{
				id: 5,
				title: "Demand To Invoice",
				description:
					"Takaoka Anesthesia is a network of anesthesiologists providing on-demand services to hospitals/surgeons. The Demand To Invoice project was a medical shift system covering client registration, patient care, and payment processing.",
				image: "/images/logo/takaoka-logo.png",
				technologies: [
					"JavaScript",
					"Node.js",
					"TypeScript",
					"GraphQL",
					"Nest.js",
					"React",
					"Material UI",
					"Vite",
					"Vitest",
					"Postgresql",
					"Docker",
					"Microsoft Azure",
				],
				features: [
					"Medical shifts",
					"Shift negotiation",
					"Request management",
					"Surgeon management",
					"Anesthesiologist management",
					"Procedure/surgery management",
					"Billing report generation",
					"Secretary data management",
					"Robust notification system",
				],
			},
			{
				id: 6,
				title: "Fleury - Medical Shifts",
				description:
					"Fleury - Medical Shifts project involved full-stack development from back-end to web/mobile front-end using Node.js, React and React Native. The app facilitates shift negotiations among Fleury network doctors.",
				image: "/images/logo/fleury-logo.png",
				technologies: [
					"JavaScript",
					"Node.js",
					"TypeScript",
					"GraphQL",
					"Nest.js",
					"Next.js",
					"React Native",
					"Material UI",
					"Postgresql",
					"Docker",
					"CI/CD",
					"Microsoft Azure",
				],
				features: [
					"Medical shifts",
					"Shift negotiation",
					"Request management",
					"Dynamic anamnesis forms generation",
					"Robust notification system",
				],
			},
			{
				id: 7,
				title: "GoHealth - NPS",
				description:
					"GoHealth offers healthcare products including GoHealth NPS (Net Promoter Score) to evaluate patient satisfaction and service promotion likelihood for partner hospitals.",
				image: "/images/logo/gohealth-logo.png",
				technologies: [
					"JavaScript",
					"Node.js",
					"TypeScript",
					"GraphQL",
					"Nest.js",
					"React",
					"Material UI",
					"Vite",
					"Vitest",
					"Postgresql",
					"Docker",
					"Microsoft Azure",
				],
				features: [
					"Hospital unit management",
					"Care point management",
					"Post-care notification system",
				],
			},
			{
				id: 8,
				title: "Pecunias",
				description:
					"Project focused on dividing large court order titles into smaller negotiable units. Managed user transactions and automated contract generation.",
				technologies: ["Node.js", "MySQL", "Express.js", "Bootstrap"],
				features: [
					"Court order management",
					"Batch title division",
					"Title negotiation",
					"Document generation",
				],
			},
		],

		/**
		 * EXPERIENCES SECTION
		 */
		experiences: [
			{
				id: 1,
				shouldShowInResume: true,
				company: "Hospital Israelita Albert Einstein",
				role: "Fullstack Software Developer",
				startDate: "Mar 2024",
				description:
					"As Fullstack Developer at Hospital Israelita Albert Einstein, worked on various initiatives focusing on Primary Healthcare tools development.",
				detailedDescription:
					"Contributed to improving service efficiency and quality for patients and healthcare professionals, while developing libraries enhancing code quality and developer experience.",
				achievements: [],
				technologies: [
					{ name: "JavaScript" },
					{ name: "Node.js" },
					{ name: "TypeScript" },
					{ name: "GraphQL" },
					{ name: "Nest.js" },
					{ name: "React" },
					{ name: "Material UI" },
					{ name: "Vite" },
					{ name: "Vitest" },
					{ name: "Kafka" },
					{ name: "RabbitMQ" },
					{ name: "MySQL" },
					{ name: "Redis" },
					{ name: "Docker" },
					{ name: "Kubernetes" },
					{ name: "CI/CD" },
					{ name: "AWS" },
					{ name: "Microsoft Azure" },
				],
			},
			{
				id: 2,
				shouldShowInResume: false,
				company: "Grupo GBI",
				role: "Fullstack Software Developer",
				startDate: "Mar 2024",
				endDate: "present",
				description:
					"IT consultant at Grupo GBI, providing fullstack development services for major clients including Hospital Israelita Albert Einstein, Latin America's largest hospital.",
				detailedDescription:
					"Developed customized tech solutions to improve healthcare processes and patient care excellence. As consultant, identified technical needs, proposed innovative solutions, and ensured high-quality project delivery tailored to client demands.",
				achievements: [],
				technologies: [
					{ name: "JavaScript" },
					{ name: "Node.js" },
					{ name: "TypeScript" },
					{ name: "GraphQL" },
					{ name: "Nest.js" },
					{ name: "React" },
					{ name: "Material UI" },
					{ name: "Vite" },
					{ name: "Vitest" },
					{ name: "Kafka" },
					{ name: "RabbitMQ" },
					{ name: "MySQL" },
					{ name: "Redis" },
					{ name: "Docker" },
					{ name: "Kubernetes" },
					{ name: "CI/CD" },
					{ name: "AWS" },
					{ name: "Microsoft Azure" },
				],
			},
			{
				id: 3,
				shouldShowInResume: true,
				company: "Freelance",
				role: "Fullstack Developer",
				startDate: "Oct 2022",
				endDate: "Mar 2024",
				description:
					"As freelance fullstack developer collaborated with diverse companies across HR, Recruitment, and LawTech sectors.",
				detailedDescription:
					"Skills include JavaScript, Next.js, Node.js, TypeScript and GraphQL. Diverse projects provided multidisciplinary perspective to address daily challenges and deliver effective solutions.",
				achievements: [],
				technologies: [
					{ name: "JavaScript" },
					{ name: "Node.js" },
					{ name: "TypeScript" },
					{ name: "GraphQL" },
					{ name: "Nest.js" },
					{ name: "React" },
					{ name: "Material UI" },
					{ name: "Next.js" },
					{ name: "Tailwind" },
					{ name: "Vite" },
					{ name: "Vitest" },
					{ name: "Kafka" },
					{ name: "RabbitMQ" },
					{ name: "MySQL" },
					{ name: "Postgresql" },
					{ name: "SQLite" },
					{ name: "Redis" },
					{ name: "Docker" },
					{ name: "Kubernetes" },
					{ name: "CI/CD" },
					{ name: "AWS" },
					{ name: "Microsoft Azure" },
				],
			},
			{
				id: 4,
				shouldShowInResume: true,
				company: "RedFox Digital Solutions",
				role: "Fullstack Software Developer",
				startDate: "Apr 2021",
				endDate: "Sep 2022",
				description:
					"As Fullstack Developer at RedFox, worked on various healthcare-oriented projects.",
				detailedDescription:
					"Enhanced skills in web development technologies including Typescript, React.js, and GraphQL while contributing to critical healthcare systems.",
				achievements: [],
				technologies: [
					{ name: "JavaScript" },
					{ name: "Node.js" },
					{ name: "TypeScript" },
					{ name: "GraphQL" },
					{ name: "Nest.js" },
					{ name: "React" },
					{ name: "Next.js" },
					{ name: "Material UI" },
					{ name: "Vite" },
					{ name: "Vitest" },
					{ name: "Postgresql" },
					{ name: "Redis" },
					{ name: "Docker" },
					{ name: "CI/CD" },
					{ name: "AWS" },
					{ name: "Microsoft Azure" },
				],
			},
			{
				id: 5,
				shouldShowInResume: false,
				company: "CAMEJA",
				role: "Information Systems Programmer",
				startDate: "Sep 2019",
				endDate: "Feb 2020",
				description:
					"Developed systems for legal and financial sectors at Cameja.",
				detailedDescription:
					"Used Javascript, Node.js and MySQL for API development, user interfaces and process automation.",
				achievements: [],
				technologies: [
					{ name: "Javascript" },
					{ name: "Node.js" },
					{ name: "MySQL" },
				],
			},
			{
				id: 6,
				shouldShowInResume: true,
				company: "Newtic",
				role: "Web Developer",
				startDate: "Dec 2018",
				endDate: "Jan 2019",
				description:
					"Internship at Newtic learning Javascript, Node.js and Vue.js.",
				detailedDescription: "",
				achievements: [],
				technologies: [
					{ name: "Javascript" },
					{ name: "Node.js" },
					{ name: "Vue.js" },
				],
			},
		],
		academicBackground: [
			{
				location: "Instituto Federal de Educação, Ciência e Tecnologia Baiano",
				level: "Higher Education",
				course: "Computer Science",
				startDate: "Apr 2018",
				status: "On Hold",
				workload: "4000 hours",
			},
			{
				location: "Instituto Federal de Educação, Ciência e Tecnologia Baiano",
				level: "Technical Education",
				course: "Information Technology",
				startDate: "Feb 2018",
				endDate: "Aug 2018",
				status: "Completed",
				workload: "1200 hours",
			},
		],
		footer: {
			quote: {
				text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
				author: "Martin Fowler",
			},
			copyright: "© 2025. All rights reserved.",
		},
		posts: [],
	},
};
