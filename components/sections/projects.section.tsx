"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ProjectCard } from "../project-card";
import type { Project } from "../types";

export const ProjectsSection = ({ projects }: { projects: Project[] }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [mounted, setMounted] = useState(false);

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

	useEffect(() => {
		setMounted(true); // Indicate client-side mounting
		const container = document.getElementById("projects-container");
		if (!container) return;

		const handleScroll = () => {
			const scrollPosition = container.scrollLeft;
			const itemWidth = container.clientWidth;
			const newIndex = Math.round(scrollPosition / itemWidth);
			setActiveIndex(Math.min(newIndex, projects.length - 1));
		};

		container.addEventListener("scroll", handleScroll);
		return () => container.removeEventListener("scroll", handleScroll);
	}, [projects.length]);

	return (
		<section
			id="projects"
			className="flex justify-center w-full dark:bg-grid-small-white/[0.2]"
		>
			<div className="w-full px-4 md:px-6 relative container">
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

				<div className="relative">
					<div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" />
					<div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" />

					<div
						id="projects-container"
						className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
					>
						{projects.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				</div>

				{/* Render mobile dots only after mounting to prevent hydration mismatches */}
				{mounted && (
					<div className="mt-4 flex justify-center gap-1 md:hidden">
						{projects.map((project, index) => (
							<div
								key={project.id}
								className={`h-1.5 rounded-full transition-all duration-300 ${
									index === activeIndex ? "w-10 bg-primary" : "w-1.5 bg-muted"
								}`}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
};
