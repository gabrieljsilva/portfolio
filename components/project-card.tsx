import { Card, CardContent } from "@/components/ui/card";
import type { iconsMaps } from "@/constants/icons";
import Image from "next/image";
import { TechBadge } from "./tech-badge";
import type { Project } from "./types";

const AnimatedBackground = ({ title }: { title: string }) => (
	<div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-background">
		<div className="absolute inset-0">
			<div className="animate-float-1 absolute top-4 left-4 w-20 h-20 rounded-full bg-primary/20" />
			<div className="animate-float-2 absolute top-8 right-8 w-16 h-16 rotate-45 bg-primary/30" />
			<div className="animate-float-3 absolute bottom-4 left-1/4 w-12 h-12 rounded-lg bg-primary/25" />
		</div>
		<div className="absolute inset-0 flex items-center justify-center">
			<h3 className="text-2xl font-bold text-foreground px-4 text-center">
				{title}
			</h3>
		</div>
		<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/5" />
	</div>
);

export const ProjectCard = ({ project }: { project: Project }) => (
	<div className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] snap-center">
		<Card className="h-full group hover:shadow-lg transition-all duration-300 overflow-hidden">
			<CardContent className="p-0">
				{project.image ? (
					<div className="relative h-48 w-full overflow-hidden">
						<Image
							src={project.image}
							alt={project.title}
							fill
							className="object-contain transition-transform duration-500 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/5" />
					</div>
				) : (
					<AnimatedBackground title={project.title} />
				)}
				<div className="p-6 space-y-4">
					<h3 className="text-xl font-bold group-hover:text-primary transition-colors">
						{project.title}
					</h3>
					<p className="text-sm text-muted-foreground line-clamp-2">
						{project.description}
					</p>
					<div className="flex flex-wrap gap-2">
						{project.technologies.map((tech) => (
							<TechBadge
								key={tech}
								tech={tech as keyof typeof iconsMaps.tech}
							/>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	</div>
);
