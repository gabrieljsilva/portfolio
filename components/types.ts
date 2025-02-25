import {
	SiFirebase,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

export interface Project {
	id: number;
	title: string;
	description: string;
	image?: string;
	technologies: string[];
}

export type TechIconKey = keyof typeof techIcons;

export const techIcons = {
	React: SiReact,
	"Next.js": SiNextdotjs,
	TailwindCSS: SiTailwindcss,
	TypeScript: SiTypescript,
	"Node.js": SiNodedotjs,
	MongoDB: SiMongodb,
	Postgresql: SiPostgresql,
	Prisma: SiPrisma,
	Firebase: SiFirebase,
};

export const projects = [
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
];
