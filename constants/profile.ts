export const profile = {
	name: "Gabriel Silva",
	fullName: "Gabriel de Jesus Silva",
	role: "Fullstack Software Developer",
	birthdayDate: "2000-01-23",
	resumeSummary:
		"Full Stack Developer with 5+ years experience delivering enterprise solutions for healthcare and tech sectors. Proven track record in building high-performance systems handling 10k+ RPM. Open source contributor focused on developer tooling.",
	resume: `I'm a passionate Full Stack Developer with over 5 years of
experience, specializing in creating efficient technological
solutions. My journey in technology began in 2018 as an
intern, where I built the foundation that supports my work
to this day.

Throughout my career, I've had the privilege of working on
significant projects for major healthcare institutions,
including Hospital Israelita Albert Einstein and Fleury
Health Network. This experience has shaped my approach to
developing robust and reliable solutions.

As an open source contributor, I'm committed to enhancing
the JavaScript/TypeScript ecosystem by creating libraries
and tools that help other developers. I believe in the power
of community-driven development and continuous learning.`,
	shortDescription:
		"Crafting elegant solutions through code. Specialized in building modern web applications with cutting-edge technologies and exceptional user experiences.",
	contact: {
		email: "contact@gabrieljs.dev",
		formAccessKey: "81309db0-39fb-4bb6-8738-4dae02fcbd40",
	},
	social: {
		linkedin: "https://www.linkedin.com/in/gabrieldjs21/",
		github: "https://github.com/gabrieljsilva",
	},
	location: {
		city: "Senhor do Bonfim",
		state: "Bahia",
		country: "Brazil",
	},
	navigation: [
		{ title: "Home", href: "/#home" },
		{ title: "About", href: "/#about" },
		{ title: "Projects", href: "/#projects" },
		{ title: "Experiences", href: "/#experiences" },
		{ title: "Skills", href: "/#skills" },
		{ title: "Blog", href: "/blog" },
	],
	skillsSet: [
		{
			category: "Back-end Development",
			description:
				"Built scalable microservices handling 10k+ RPM. My expertise in Node.js and TypeScript enabled optimized API response times while maintaining clean architecture patterns.",
			skills: [
				{
					name: "JavaScript",
					description: "Expert in ES6+ features and async programming.",
				},
				{
					name: "TypeScript",
					description: "Strong typing and advanced patterns.",
				},
				{ name: "Node.js", description: "Efficient server-side runtime." },
				{ name: "Nest.js", description: "Structured and scalable framework." },
				{ name: "GraphQL", description: "API development with GraphQL." },
				{ name: "Express", description: "Robust RESTful API framework." },
			],
		},
		{
			category: "Front-end Development",
			description:
				"Delivered 15+ responsive interfaces using React. Focused on performance optimization, reducing initial load times by 40% through code splitting and lazy loading.",
			skills: [
				{ name: "HTML", description: "Semantic structure and accessibility." },
				{ name: "CSS", description: "Creative styling and animations." },
				{ name: "React", description: "Dynamic component-based UI." },
				{
					name: "Tailwind",
					description: "Rapid UI development with utility classes.",
				},
				{
					name: "Material UI",
					description: "Modern design with Material principles.",
				},
			],
		},
		{
			category: "Databases",
			description:
				"Designed data models for 8+ production systems. Implemented Redis caching that reduced database calls by 70% in high-traffic e-commerce platforms.",
			skills: [
				{ name: "MySQL", description: "Relational database expertise." },
				{
					name: "PostgreSQL",
					description: "Advanced SQL features and reliability.",
				},
				{ name: "MongoDB", description: "Flexible NoSQL solutions." },
				{ name: "Redis", description: "High-performance in-memory storage." },
				{ name: "SQLite", description: "Lightweight and efficient database." },
			],
		},
		{
			category: "Infrastructure & DevOps",
			description:
				"Automated deployment pipelines cutting release cycles from days to hours. Containerized 12+ services improving development environment consistency.",
			skills: [
				{ name: "Docker", description: "Containerization for consistency." },
				{ name: "CI/CD", description: "Streamlined development pipelines." },
				{ name: "AWS", description: "Robust cloud infrastructure management." },
			],
		},
		{
			category: "Architecture",
			description:
				"Designed event-driven systems processing 1M+ daily events. Kafka implementations reduced system coupling while improving fault tolerance.",
			skills: [
				{ name: "Kafka", description: "Scalable event streaming." },
				{ name: "RabbitMQ", description: "Reliable message brokering." },
				{ name: "AWS", description: "Cloud message queuing." },
			],
		},
		{
			category: "Methodologies & Quality",
			description:
				"Led Agile teams delivering 30+ sprints with 95% completion rate. Introduced Jest testing achieving 85% coverage across critical services.",
			skills: [
				{ name: "Agile", description: "Iterative and flexible development." },
				{
					name: "Testing",
					description: "Automated testing and quality assurance.",
				},
			],
		},
	],
	projects: [
		{
			id: 1,
			title: "E-commerce Platform",
			description:
				"Full-stack e-commerce solution with real-time inventory management",
			image: "/placeholder.svg",
			technologies: ["Next.js", "TypeScript", "Postgresql", "Prisma"],
		},
		{
			id: 2,
			title: "Social Media Dashboard",
			description: "Real-time analytics and content management platform",
			image: "/placeholder.svg",
			technologies: ["React", "Firebase", "TailwindCSS", "TypeScript"],
		},
		{
			id: 3,
			title: "Task Management App",
			description: "Collaborative task management tool with real-time updates",
			image: "/placeholder.svg",
			technologies: ["Next.js", "MongoDB", "Node.js", "TypeScript"],
		},
		{
			id: 4,
			title: "Portfolio Website",
			description: "Modern portfolio with dynamic content management",
			image: "/placeholder.svg",
			technologies: ["React", "TailwindCSS", "TypeScript", "Prisma"],
		},
		{
			id: 5,
			title: "AI Content Platform",
			description: "Content generation platform powered by AI",
			image: "/placeholder.svg",
			technologies: ["Next.js", "TypeScript", "MongoDB", "Node.js"],
		},
	],
	experiences: [
		{
			id: 1,
			company: "Tech Solutions Inc",
			role: "Senior Frontend Developer",
			startDate: "Jan 2023",
			description:
				"Led the development of multiple high-impact web applications, focusing on performance optimization and accessibility.",
			detailedDescription:
				"Spearheaded the development of enterprise-level web applications with a focus on performance, accessibility, and user experience. Implemented modern frontend architectures using React and Next.js, resulting in improved user engagement and faster load times.",
			achievements: [
				"Reduced application load time by 60% through implementation of dynamic imports and code splitting",
				"Led a team of 5 developers in delivering a major healthcare platform",
				"Implemented automated testing that increased code coverage to 90%",
				"Mentored junior developers and conducted technical interviews",
			],
			technologies: [
				{ name: "React" },
				{ name: "Next.js" },
				{ name: "TypeScript" },
				{ name: "Tailwind CSS" },
				{ name: "GraphQL" },
			],
		},
		{
			id: 2,
			company: "Digital Innovations Co",
			role: "Full Stack Developer",
			startDate: "Mar 2021",
			endDate: "Dec 2022",
			description:
				"Developed and maintained multiple full-stack applications, working closely with cross-functional teams.",
			detailedDescription:
				"Played a key role in developing and maintaining full-stack applications while collaborating with cross-functional teams. Specialized in implementing RESTful APIs, optimizing database queries, and creating responsive user interfaces.",
			achievements: [
				"Developed a high-performance payment processing system",
				"Reduced API response time by 40% through query optimization",
				"Implemented real-time data synchronization system",
			],
			technologies: [
				{ name: "React" },
				{ name: "Node.js" },
				{ name: "PostgreSQL" },
				{ name: "Express" },
				{ name: "AWS" },
			],
		},
		{
			id: 3,
			company: "Creative Tech Labs",
			role: "Frontend Developer",
			startDate: "Jun 2019",
			endDate: "Feb 2021",
			description:
				"Built responsive web applications and implemented UI/UX designs.",
			detailedDescription:
				"Focused on creating responsive and intuitive web applications while working closely with designers to implement pixel-perfect UI/UX designs. Specialized in frontend development and modern JavaScript frameworks.",
			achievements: [
				"Developed and maintained 3 major client projects",
				"Implemented responsive design system used across 10+ projects",
				"Reduced bug reports by 45% through comprehensive testing",
			],
			technologies: [
				{ name: "React" },
				{ name: "JavaScript" },
				{ name: "CSS3" },
				{ name: "HTML5" },
				{ name: "Redux" },
			],
		},
	],

	footer: {
		quote: {
			text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
			author: "Martin Fowler",
		},
		copyright: "© 2025. All rights reserved.",
	},
	posts: [
		{
			id: 1,
			title: "Understanding the Basics of TypeScript",
			content: `TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. In this comprehensive guide, we'll explore the fundamental concepts of TypeScript and how it can improve your development workflow. We'll cover everything from basic types to advanced features, helping you understand why TypeScript has become an essential tool in modern web development.`,
			date: new Date("2024-02-15"),
			tags: ["TypeScript", "Programming", "Web Development"],
			views: 1234,
		},
		{
			id: 2,
			title: "The Future of Web Development with Next.js",
			content: `Next.js has revolutionized the way we build web applications by providing a powerful framework that combines the best of React with server-side rendering capabilities. As we look towards the future, Next.js continues to evolve with exciting new features and improvements. The introduction of the App Router has changed how we think about routing and data fetching, while server components have opened up new possibilities for performance optimization. In this article, we'll explore the latest developments in Next.js and what they mean for the future of web development.`,
			date: new Date("2024-02-18"),
			tags: ["Next.js", "React", "Web Development"],
			views: 856,
		},
		{
			id: 3,
			title: "Mastering CSS Grid Layout",
			content: `CSS Grid Layout is a powerful tool that has transformed how we create website layouts. It provides a two-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a one-dimensional system. With CSS Grid, you can create complex layouts with less HTML markup and more flexibility. This comprehensive guide will walk you through everything you need to know about CSS Grid, from basic concepts to advanced techniques. We'll cover grid containers, grid items, template areas, and responsive design patterns.`,
			date: new Date("2024-02-20"),
			tags: ["CSS", "Web Design", "Frontend"],
			views: 2341,
		},
		{
			id: 4,
			title: "The Complete Guide to React Server Components",
			content: `React Server Components represent a paradigm shift in how we build React applications. They allow us to render components on the server while maintaining the interactivity and dynamism that React is known for. This innovative approach brings several benefits, including improved performance, reduced client-side JavaScript, and better SEO. In this comprehensive guide, we'll dive deep into Server Components, exploring their benefits, use cases, and best practices for implementation.`,
			date: new Date("2024-02-21"),
			tags: ["React", "Server Components", "Performance"],
			views: 1567,
		},
		{
			id: 5,
			title: "Optimizing Database Queries for Better Performance",
			content: `Database optimization is crucial for maintaining the performance and scalability of your applications. Whether you're working with SQL or NoSQL databases, understanding how to write efficient queries and structure your data properly can make a significant difference. This article explores various techniques for optimizing database queries, including indexing strategies, query planning, and caching mechanisms. We'll also look at common pitfalls and how to avoid them.`,
			date: new Date("2024-02-22"),
			tags: ["Database", "Performance", "Backend"],
			views: 987,
		},
		{
			id: 6,
			title: "Building Accessible Web Applications",
			content: `Web accessibility is not just a nice-to-have feature—it's a necessity. Creating accessible web applications ensures that everyone, regardless of their abilities, can use your website effectively. This guide covers the fundamental principles of web accessibility, including ARIA attributes, keyboard navigation, semantic HTML, and color contrast. Learn how to make your web applications more inclusive while maintaining a beautiful user interface.`,
			date: new Date("2024-02-23"),
			tags: ["Accessibility", "Web Development", "UI/UX"],
			views: 654,
		},
		{
			id: 7,
			title: "Introduction to Microservices Architecture",
			content: `Microservices architecture has become increasingly popular for building scalable and maintainable applications. This architectural style structures an application as a collection of loosely coupled services, each implementing a specific business capability. In this article, we'll explore the principles of microservices, their benefits and challenges, and best practices for implementing them in your organization.`,
			date: new Date("2024-02-24"),
			tags: ["Microservices", "Architecture", "Backend"],
			views: 432,
		},
	],
};
