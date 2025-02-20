"use client";

import { motion } from "framer-motion";
import {
	CheckSquare,
	Cloud,
	Code2,
	Database,
	Layout,
	Network,
} from "lucide-react";
import {
	SiAmazonwebservices,
	SiApachekafka,
	SiCss3,
	SiDocker,
	SiExpress,
	SiGithubactions,
	SiGraphql,
	SiHtml5,
	SiJavascript,
	SiJest,
	SiMongodb,
	SiMui,
	SiMysql,
	SiNestjs,
	SiNodedotjs,
	SiPostgresql,
	SiRabbitmq,
	SiReact,
	SiRedis,
	SiSqlite,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

// -----------------------
// TypeScript interfaces
// -----------------------
interface Skill {
	name: string;
	icon: React.ReactNode;
	description: string;
}

interface SkillCategory {
	category: string;
	icon: React.ReactNode;
	description: string;
	skills: Skill[];
}

// -----------------------
// Skills data
// -----------------------
const skillsData: SkillCategory[] = [
	{
		category: "Back-end Development",
		icon: <Code2 className="h-6 w-6" />,
		description: "Server-side development and API architecture.",
		skills: [
			{
				name: "JavaScript",
				icon: <SiJavascript />,
				description: "Expert in ES6+ features and async programming.",
			},
			{
				name: "TypeScript",
				icon: <SiTypescript />,
				description: "Strong typing and advanced patterns.",
			},
			{
				name: "Node.js",
				icon: <SiNodedotjs />,
				description: "Efficient server-side runtime.",
			},
			{
				name: "Nest.js",
				icon: <SiNestjs />,
				description: "Structured and scalable framework.",
			},
			{
				name: "GraphQL",
				icon: <SiGraphql />,
				description: "API development with GraphQL.",
			},
			{
				name: "Express",
				icon: <SiExpress />,
				description: "Robust RESTful API framework.",
			},
		],
	},
	{
		category: "Front-end Development",
		icon: <Layout className="h-6 w-6" />,
		description: "Crafting interactive and responsive interfaces.",
		skills: [
			{
				name: "HTML",
				icon: <SiHtml5 />,
				description: "Semantic structure and accessibility.",
			},
			{
				name: "CSS",
				icon: <SiCss3 />,
				description: "Creative styling and animations.",
			},
			{
				name: "React",
				icon: <SiReact />,
				description: "Dynamic component-based UI.",
			},
			{
				name: "Tailwind",
				icon: <SiTailwindcss />,
				description: "Rapid UI development with utility classes.",
			},
			{
				name: "Material UI",
				icon: <SiMui />,
				description: "Modern design with Material principles.",
			},
		],
	},
	{
		category: "Databases",
		icon: <Database className="h-6 w-6" />,
		description: "Efficient and reliable data management.",
		skills: [
			{
				name: "MySQL",
				icon: <SiMysql />,
				description: "Relational database expertise.",
			},
			{
				name: "PostgreSQL",
				icon: <SiPostgresql />,
				description: "Advanced SQL features and reliability.",
			},
			{
				name: "SQL Server",
				icon: <Database />,
				description: "Enterprise-level database management.",
			},
			{
				name: "MongoDB",
				icon: <SiMongodb />,
				description: "Flexible NoSQL solutions.",
			},
			{
				name: "Redis",
				icon: <SiRedis />,
				description: "High-performance in-memory storage.",
			},
			{
				name: "SQLite",
				icon: <SiSqlite />,
				description: "Lightweight and efficient database.",
			},
		],
	},
	{
		category: "Infrastructure & DevOps",
		icon: <Cloud className="h-6 w-6" />,
		description: "Automated deployments and scalable systems.",
		skills: [
			{
				name: "Docker",
				icon: <SiDocker />,
				description: "Containerization for consistency.",
			},
			{
				name: "CI/CD",
				icon: <SiGithubactions />,
				description: "Streamlined development pipelines.",
			},
			{
				name: "AWS",
				icon: <SiAmazonwebservices />,
				description: "Robust cloud infrastructure management.",
			},
		],
	},
	{
		category: "Architecture",
		icon: <Network className="h-6 w-6" />,
		description: "Robust system design and event-driven architecture.",
		skills: [
			{
				name: "Kafka",
				icon: <SiApachekafka />,
				description: "Scalable event streaming.",
			},
			{
				name: "RabbitMQ",
				icon: <SiRabbitmq />,
				description: "Reliable message brokering.",
			},
			{
				name: "AWS SQS",
				icon: <SiAmazonwebservices />,
				description: "Cloud message queuing.",
			},
		],
	},
	{
		category: "Methodologies & Quality",
		icon: <CheckSquare className="h-6 w-6" />,
		description: "Agile practices and robust testing strategies.",
		skills: [
			{
				name: "Agile",
				icon: <CheckSquare className="h-4 w-4" />,
				description: "Iterative and flexible development.",
			},
			{
				name: "Testing",
				icon: <SiJest />,
				description: "Automated testing and quality assurance.",
			},
		],
	},
];

// -----------------------
// SkillsSection Component
// -----------------------
export default function SkillsSection() {
	return (
		<section
			id="skills"
			className="flex justify-center w-full dark:bg-grid-small-white/[0.2] mt-24"
		>
			<div className="w-full px-4 md:px-6 relative container">
				{/* Header */}
				<div className="mb-8">
					<h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
						Skills & Expertise
					</h2>
					<p className="text-lg text-muted-foreground dark:text-gray-300 mt-2">
						Explore the technologies and tools I excel in to build scalable,
						efficient systems.
					</p>
				</div>

				<Card className="overflow-hidden ">
					<CardContent className="p-8">
						{/* Content */}
						<div className="space-y-8">
							{skillsData.map((category) => (
								<div key={category.category} className="pb-6 last:pb-0">
									<div className="flex items-center gap-3 mb-3">
										<div className="text-black dark:text-white">
											{category.icon}
										</div>
										<h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
											{category.category}
										</h3>
									</div>
									<p className="text-gray-600 dark:text-gray-300 mb-4">
										{category.description}
									</p>
									<div className="flex flex-wrap gap-3">
										{category.skills.map((skill) => (
											<TooltipProvider key={skill.name}>
												<Tooltip>
													<TooltipTrigger asChild>
														<Badge
															variant="secondary"
															className="flex items-center gap-1 text-sm"
														>
															<span className="text-black dark:text-white">
																{skill.icon}
															</span>
															{skill.name}
														</Badge>
													</TooltipTrigger>
													<TooltipContent>
														<p className="text-sm">{skill.description}</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										))}
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
