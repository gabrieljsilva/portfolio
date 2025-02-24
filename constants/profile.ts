import { SiAmazonwebservices, SiLinkedin, SiReact } from "react-icons/si";

export const profile = {
	name: "Gabriel Silva",
	fullName: "Gabriel de Jesus Silva",
	birthdayDate: "2000-01-23",
	resume: `
		I'm a passionate Full Stack Developer with over 5 years of
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
		of community-driven development and continuous learning.
	`,
	social: {
		email: "contact@gabrieljs.dev",
		linkedin: "https://www.linkedin.com/in/gabrieldjs21/",
		github: "https://github.com/gabrieljsilva",
	},
	location: {
		city: "Senhor do Bonfim",
		state: "Bahia",
		country: "Brazil",
	},
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
	experiencies: [
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
	],
};
