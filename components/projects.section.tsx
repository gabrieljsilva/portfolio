"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
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

// Map of technology names to their corresponding icons
const techIcons = {
	React: SiReact,
	"Next.js": SiNextdotjs,
	TailwindCSS: SiTailwindcss,
	TypeScript: SiTypescript,
	"Node.js": SiNodedotjs,
	MongoDB: SiMongodb,
	PostgreSQL: SiPostgresql,
	Prisma: SiPrisma,
	Firebase: SiFirebase,
};

export default function ProjectsShowcase() {
	const scrollLeft = () => {
		const container = document.getElementById("projects-container");
		if (container) {
			const scrollAmount = container.clientWidth * 0.8;
			container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		const container = document.getElementById("projects-container");
		if (container) {
			const scrollAmount = container.clientWidth * 0.8;
			container.scrollBy({ left: scrollAmount, behavior: "smooth" });
		}
	};

	const projects = [
		{
			id: 1,
			title: "E-commerce Platform",
			description:
				"Full-stack e-commerce solution with real-time inventory management",
			image: "/placeholder.svg",
			technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
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

	return (
		<section className="w-full py-12 bg-gradient-to-b from-background to-muted/20">
			<div className="container px-4 md:px-6 relative">
				<div className="flex items-center justify-between mb-8">
					<div className="space-y-1">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Featured Projects
						</h2>
						<p className="text-muted-foreground">
							Discover some of my recent work
						</p>
					</div>

					<div className="hidden md:flex items-center gap-2">
						<Button
							variant="outline"
							size="icon"
							onClick={scrollLeft}
							className="h-8 w-8 rounded-full"
						>
							<ChevronLeft className="h-4 w-4" />
							<span className="sr-only">Scroll left</span>
						</Button>
						<Button
							variant="outline"
							size="icon"
							onClick={scrollRight}
							className="h-8 w-8 rounded-full"
						>
							<ChevronRight className="h-4 w-4" />
							<span className="sr-only">Scroll right</span>
						</Button>
					</div>
				</div>

				{/* Scroll container with fade effects */}
				<div className="relative">
					<div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" />
					<div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" />

					<div
						id="projects-container"
						className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
					>
						{projects.map((project) => (
							<Card
								key={project.id}
								className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] snap-center group hover:shadow-lg transition-all duration-300 overflow-hidden"
							>
								<CardContent className="p-0">
									<div className="relative h-48 w-full overflow-hidden">
										<Image
											src={project.image || "/placeholder.svg"}
											alt={project.title}
											fill
											className="object-cover transition-transform duration-500 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/5" />
									</div>
									<div className="p-6 space-y-4">
										<h3 className="text-xl font-bold group-hover:text-primary transition-colors">
											{project.title}
										</h3>
										<p className="text-sm text-muted-foreground line-clamp-2">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech) => {
												const Icon = techIcons[tech as keyof typeof techIcons];
												return (
													<div
														key={tech}
														className="flex items-center gap-1.5 text-sm bg-muted px-2.5 py-1 rounded-full"
													>
														<Icon className="h-4 w-4" />
														<span className="text-xs font-medium">{tech}</span>
													</div>
												);
											})}
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* Mobile scroll indicators */}
				<div className="mt-4 flex justify-center gap-1 md:hidden">
					<div className="h-1.5 w-10 rounded-full bg-primary" />
					<div className="h-1.5 w-1.5 rounded-full bg-muted" />
					<div className="h-1.5 w-1.5 rounded-full bg-muted" />
				</div>
			</div>
		</section>
	);
}
