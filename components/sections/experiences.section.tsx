"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, ChevronDown } from "lucide-react";
import type React from "react";
import { useState } from "react";
import {
	SiAmazonwebservices,
	SiCss3,
	SiExpress,
	SiGraphql,
	SiHtml5,
	SiJavascript,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiRedux,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

interface Technology {
	name: string;
	icon: React.ElementType;
}

interface Experience {
	id: number;
	company: string;
	role: string;
	startDate: string;
	endDate?: string;
	description: string;
	detailedDescription?: string;
	achievements?: string[];
	technologies: Technology[];
}

const experiences: Experience[] = [
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
			{ name: "React", icon: SiReact },
			{ name: "Next.js", icon: SiNextdotjs },
			{ name: "TypeScript", icon: SiTypescript },
			{ name: "Tailwind CSS", icon: SiTailwindcss },
			{ name: "GraphQL", icon: SiGraphql },
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
			{ name: "React", icon: SiReact },
			{ name: "Node.js", icon: SiNodedotjs },
			{ name: "PostgreSQL", icon: SiPostgresql },
			{ name: "Express", icon: SiExpress },
			{ name: "AWS", icon: SiAmazonwebservices },
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
			{ name: "React", icon: SiReact },
			{ name: "JavaScript", icon: SiJavascript },
			{ name: "CSS3", icon: SiCss3 },
			{ name: "HTML5", icon: SiHtml5 },
			{ name: "Redux", icon: SiRedux },
		],
	},
];

export default function ExperienceSection() {
	const [expandedCards, setExpandedCards] = useState<number[]>([]);

	const toggleCard = (index: number) => {
		setExpandedCards((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
		);
	};

	return (
		<section
			id={"experiences"}
			className="flex justify-center dark:bg-grid-small-white/[0.2] mt-24"
		>
			<div className="container px-4 mt-8 md:px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="flex flex-col items-start gap-4"
				>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Experience
					</h2>
					<p className="text-xl text-muted-foreground">
						My professional journey and the projects I&apos;ve worked on.
					</p>
				</motion.div>
				<div className="mt-12 grid gap-8">
					{experiences.map((experience, index) => {
						const isExpanded = expandedCards.includes(index);
						return (
							<motion.div
								key={experience.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Card className="relative overflow-hidden">
									<CardHeader className="pb-4">
										<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
											<div className="space-y-1">
												<div className="flex items-center gap-2">
													<Building2 className="h-5 w-5 text-muted-foreground" />
													<CardTitle>{experience.company}</CardTitle>
												</div>
												<CardDescription className="text-lg font-medium text-primary">
													{experience.role}
												</CardDescription>
											</div>
											<div className="text-sm text-muted-foreground">
												{experience.startDate} -{" "}
												{experience.endDate || "Present"}
											</div>
										</div>
									</CardHeader>
									<CardContent className="grid gap-6">
										<motion.p
											initial={false}
											animate={{ height: "auto" }}
											className="text-muted-foreground"
										>
											{isExpanded
												? experience.detailedDescription
												: experience.description}
										</motion.p>
										<AnimatePresence>
											{isExpanded && (
												<motion.div
													initial={{ opacity: 0, height: 0 }}
													animate={{ opacity: 1, height: "auto" }}
													exit={{ opacity: 0, height: 0 }}
													transition={{ duration: 0.3, ease: "easeInOut" }}
													className="space-y-4 overflow-hidden"
												>
													<h4 className="font-semibold">Key Achievements:</h4>
													<ul className="ml-6 list-disc space-y-2 text-muted-foreground">
														{experience.achievements?.map(
															(achievement, index) => (
																<motion.li
																	key={achievement}
																	initial={{ opacity: 0, x: -20 }}
																	animate={{ opacity: 1, x: 0 }}
																	transition={{
																		duration: 0.3,
																		delay: index * 0.1,
																	}}
																>
																	{achievement}
																</motion.li>
															),
														)}
													</ul>
												</motion.div>
											)}
										</AnimatePresence>
										<div className="flex flex-wrap gap-3">
											{experience.technologies.map(
												({ name, icon: Icon }, i) => (
													<motion.div
														key={name}
														initial={{ opacity: 0, scale: 0.8 }}
														animate={{ opacity: 1, scale: 1 }}
														transition={{ duration: 0.2, delay: i * 0.05 }}
													>
														<Badge
															variant="secondary"
															className="flex items-center gap-1 px-3 py-1"
														>
															<Icon className="h-4 w-4" />
															{name}
														</Badge>
													</motion.div>
												),
											)}
										</div>
										<Button
											variant="ghost"
											className="w-full transition-colors"
											onClick={() => toggleCard(index)}
										>
											<motion.div
												initial={false}
												animate={{ rotate: isExpanded ? 180 : 0 }}
												transition={{ duration: 0.3 }}
												className="flex items-center gap-2"
											>
												<ChevronDown className="h-4 w-4" />
											</motion.div>
										</Button>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
