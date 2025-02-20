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
import { Card, CardContent } from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
	const skills = [
		{
			category: "Back-end Development",
			icon: <Code2 className="h-6 w-6" />,
			description: "Server-side development and API architecture",
			skills: [
				{
					name: "JavaScript",
					icon: <SiJavascript />,
					description: "Expert in ES6+ features and async programming",
				},
				{
					name: "TypeScript",
					icon: <SiTypescript />,
					description: "Strong typing and advanced TypeScript patterns",
				},
				{
					name: "Node.js",
					icon: <SiNodedotjs />,
					description: "Server-side JavaScript runtime expertise",
				},
				{
					name: "Nest.js",
					icon: <SiNestjs />,
					description: "Enterprise Node.js framework specialist",
				},
				{
					name: "GraphQL",
					icon: <SiGraphql />,
					description: "API development with GraphQL",
				},
				{
					name: "Express",
					icon: <SiExpress />,
					description: "RESTful API development",
				},
			],
		},
		{
			category: "Front-end Development",
			icon: <Layout className="h-6 w-6" />,
			description: "Creating responsive and interactive user interfaces",
			skills: [
				{
					name: "HTML",
					icon: <SiHtml5 />,
					description: "Semantic HTML and accessibility",
				},
				{
					name: "CSS",
					icon: <SiCss3 />,
					description: "Advanced styling and animations",
				},
				{
					name: "React",
					icon: <SiReact />,
					description: "Component-based UI development",
				},
				{
					name: "Tailwind",
					icon: <SiTailwindcss />,
					description: "Utility-first CSS framework",
				},
				{
					name: "Material UI",
					icon: <SiMui />,
					description: "Material Design implementation",
				},
			],
		},
		{
			category: "Databases",
			icon: <Database className="h-6 w-6" />,
			description: "Data storage and management solutions",
			skills: [
				{
					name: "MySQL",
					icon: <SiMysql />,
					description: "Relational database management",
				},
				{
					name: "PostgreSQL",
					icon: <SiPostgresql />,
					description: "Advanced PostgreSQL features",
				},
				{
					name: "SQL Server",
					icon: <Database />,
					description: "Microsoft SQL Server expertise",
				},
				{
					name: "MongoDB",
					icon: <SiMongodb />,
					description: "NoSQL database solutions",
				},
				{
					name: "Redis",
					icon: <SiRedis />,
					description: "In-memory data structure store",
				},
				{
					name: "SQLite",
					icon: <SiSqlite />,
					description: "Lightweight relational database",
				},
			],
		},
		{
			category: "Infrastructure & DevOps",
			icon: <Cloud className="h-6 w-6" />,
			description: "Cloud infrastructure and deployment automation",
			skills: [
				{
					name: "Docker",
					icon: <SiDocker />,
					description: "Containerization and orchestration",
				},
				{
					name: "CI/CD",
					icon: <SiGithubactions />,
					description: "Automated deployment pipelines",
				},
				{
					name: "AWS",
					icon: <SiAmazonwebservices />,
					description: "Cloud infrastructure management",
				},
			],
		},
		{
			category: "Architecture",
			icon: <Network className="h-6 w-6" />,
			description: "System design and message queuing",
			skills: [
				{
					name: "Kafka",
					icon: <SiApachekafka />,
					description: "Event streaming platform",
				},
				{
					name: "RabbitMQ",
					icon: <SiRabbitmq />,
					description: "Message broker expertise",
				},
				{
					name: "AWS SQS",
					icon: <SiAmazonwebservices />,
					description: "Cloud message queuing",
				},
			],
		},
		{
			category: "Methodologies & Quality",
			icon: <CheckSquare className="h-6 w-6" />,
			description: "Development practices and quality assurance",
			skills: [
				{
					name: "Agile",
					icon: <CheckSquare className="h-4 w-4" />,
					description: "Scrum and Kanban methodologies",
				},
				{
					name: "Testing",
					icon: <SiJest />,
					description: "Automated testing strategies",
				},
			],
		},
	];

	return (
		<section className="flex justify-center w-full dark:bg-grid-small-white/[0.2]">
			<div className="container w-full px-4 md:px-6 py-24 relative">
				<div className="absolute inset-0 -z-10 opacity-5">
					<div className="absolute right-20 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
					<div className="absolute left-20 bottom-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
				</div>

				<div className="space-y-1 mb-8">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Skills & Expertise
					</h2>
					<p className="text-muted-foreground">
						Technologies and tools I work with
					</p>
				</div>

				<motion.div
					variants={container}
					initial="hidden"
					animate="show"
					className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
				>
					{skills.map((section) => (
						<motion.div key={section.category} variants={item}>
							<Card className="hover:bg-muted/50 transition-colors">
								<CardContent className="p-6">
									<div className="flex items-center gap-4 mb-4">
										{section.icon}
										<div>
											<h3 className="font-semibold">{section.category}</h3>
											<p className="text-sm text-muted-foreground">
												{section.description}
											</p>
										</div>
									</div>
									<div className="flex flex-wrap gap-2">
										{section.skills.map((skill) => (
											<TooltipProvider key={skill.name}>
												<Tooltip>
													<TooltipTrigger>
														<Badge
															variant="secondary"
															className="flex items-center gap-1"
														>
															{skill.icon}
															{skill.name}
														</Badge>
													</TooltipTrigger>
													<TooltipContent>
														<p>{skill.description}</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										))}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
