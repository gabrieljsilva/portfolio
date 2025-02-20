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
		<TooltipProvider>
			<section
				id={"skills"}
				className="flex justify-center dark:bg-grid-small-white/[0.2] mt-24"
			>
				<div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-5">
					<div className="blur-[106px] h-56 bg-gradient-to-br from-gray-300 to-gray-500" />
					<div className="blur-[106px] h-32 bg-gradient-to-r from-gray-500 to-gray-300" />
				</div>

				<div className="container px-4 md:px-6 relative">
					<div className="flex flex-col space-y-4">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Skills & Expertise
							</h2>
							<p className="max-w-[700px] text-muted-foreground md:text-xl mt-4">
								Comprehensive technical expertise across the full software
								development stack
							</p>
						</motion.div>
					</div>

					<motion.div
						variants={container}
						initial="hidden"
						animate="show"
						className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3"
					>
						{skills.map((category) => (
							<motion.div key={category.category} variants={item}>
								<Card className="h-full hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-800/50 backdrop-blur-sm">
									<CardContent className="p-6">
										<div className="flex items-center space-x-4 mb-6">
											<div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
												{category.icon}
											</div>
											<div>
												<h3 className="text-xl font-semibold">
													{category.category}
												</h3>
												<p className="text-sm text-muted-foreground">
													{category.description}
												</p>
											</div>
										</div>

										<div className="grid grid-cols-2 gap-4">
											{category.skills.map((skill) => (
												<Tooltip key={skill.name}>
													<TooltipTrigger asChild>
														<div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
															<div className="text-xl opacity-70 group-hover:opacity-100">
																{skill.icon}
															</div>
															<span className="font-medium">{skill.name}</span>
														</div>
													</TooltipTrigger>
													<TooltipContent>
														<p>{skill.description}</p>
													</TooltipContent>
												</Tooltip>
											))}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>
		</TooltipProvider>
	);
}
