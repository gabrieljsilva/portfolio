import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import type { iconsMaps } from "@/constants/icons";
import Image from "next/image";
import { useState } from "react";
import { TechBadge } from "./tech-badge";
import type { Project } from "./types";
import { useTranslations } from "@/constants/profile";
import { useTheme } from "next-themes";
import Link from "next/link"; // Import useTheme to detect current theme

const AnimatedBackground = ({ title }: { title: string }) => {
	const { theme } = useTheme(); // Get current theme

	return (
		<div
			className={`relative h-48 w-full overflow-hidden transition-transform duration-500 group-hover:scale-105 ${
				theme === "light"
					? "bg-gray-700" // Dark gray background for image area in light theme
					: "bg-gradient-to-br from-primary/20 to-background" // Original gradient for dark theme
			}`}
		>
			<div className="absolute inset-0">
				<div
					className={`animate-float-1 absolute top-4 left-4 w-20 h-20 rounded-full ${
						theme === "light" ? "bg-gray-600" : "bg-primary/20"
					}`}
				/>
				<div
					className={`animate-float-2 absolute top-8 right-8 w-16 h-16 rotate-45 ${
						theme === "light" ? "bg-gray-800" : "bg-primary/30"
					}`}
				/>
				<div
					className={`animate-float-3 absolute bottom-4 left-1/4 w-12 h-12 rounded-lg ${
						theme === "light" ? "bg-gray-600" : "bg-primary/25"
					}`}
				/>
			</div>
			<div className="absolute inset-0 flex items-center justify-center">
				<h3
					className={`text-2xl font-bold px-4 text-center ${
						theme === "light" ? "text-white" : "text-foreground"
					}`}
				>
					{title}
				</h3>
			</div>
			<div
				className={`absolute inset-0 bg-gradient-to-t ${
					theme === "light"
						? "from-gray-700/90 via-gray-700/70 to-gray-700/30" // Dark overlay for light theme
						: "from-background/90 via-background/50 to-background/5" // Original for dark theme
				}`}
			/>
		</div>
	);
};

export const ProjectCard = ({ project }: { project: Project }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { ui } = useTranslations();
	const { theme } = useTheme(); // Get current theme

	return (
		<>
			<div className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] snap-center">
				<Card
					className={`h-full group hover:shadow-lg transition-all duration-300 overflow-hidden ${
						theme === "light" ? "bg-gray-200" : "" // Light gray background for card in light mode
					}`}
				>
					<CardContent className="p-0">
						{project.image ? (
							<div
								className={`relative h-48 w-full overflow-hidden ${
									theme === "light" ? "bg-gray-900" : ""
								}`}
							>
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-contain transition-transform duration-500 p-5 group-hover:scale-105"
								/>
								<div
									className={`absolute inset-0 bg-gradient-to-t ${
										theme === "light"
											? "from-gray-700/90 via-gray-500/50 to-gray-600/60" // Dark gray gradient overlay for light theme
											: "from-background/90 via-background/50 to-background/5" // Original for dark theme
									}`}
								/>
							</div>
						) : (
							<AnimatedBackground title={project.title} />
						)}
						<div
							className={`p-6 space-y-4 ${
								theme === "light" ? "bg-gray-200" : "" // Light gray for content area in light mode
							}`}
						>
							<h3 className="text-xl font-bold group-hover:text-primary transition-colors">
								{project.title}
							</h3>
							<div className="space-y-2">
								<p className="text-sm text-muted-foreground line-clamp-2">
									{project.description}
								</p>
								<Button
									variant="link"
									size="sm"
									className="text-xs px-0 h-auto text-primary font-medium"
									onClick={() => setIsModalOpen(true)}
								>
									{ui.viewMore}
								</Button>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.technologies.slice(0, 5).map((tech) => (
									<TechBadge
										key={tech}
										tech={tech as keyof typeof iconsMaps.tech}
									/>
								))}
								{project.technologies.length > 5 && (
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
										+{project.technologies.length - 5}
									</span>
								)}
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<DialogContent className="sm:max-w-md md:max-w-lg">
					<DialogHeader>
						<DialogTitle className="text-xl md:text-2xl font-bold">
							{project.title}
						</DialogTitle>

						<div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 text-start">
							<p className="text-sm md:text-base text-foreground">
								{project.description}
							</p>

							{project.features && (
								<div className="space-y-2">
									<h4 className="font-semibold">{ui.keyFeatures}:</h4>
									<ul className="list-disc pl-5 text-sm space-y-1">
										{project.features.map((feature) => (
											<li key={feature}>{feature}</li>
										))}
									</ul>
								</div>
							)}
						</div>

						<DialogDescription className="flex flex-wrap gap-2 pt-2">
							{project.technologies.map((tech) => (
								<TechBadge
									key={tech}
									tech={tech as keyof typeof iconsMaps.tech}
								/>
							))}
						</DialogDescription>
					</DialogHeader>

					<DialogFooter className="w-full">
						<div className={"flex w-full items-center justify-between"}>
							<Button variant={"outline"} onClick={() => setIsModalOpen(false)}>
								{ui.close}
							</Button>

							{project.link && (
								<Link
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button>{ui.viewProject}</Button>
								</Link>
							)}
						</div>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
};
