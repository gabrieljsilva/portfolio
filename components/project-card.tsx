import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { TechBadge } from "./tech-badge";
import type { Project, TechIconKey } from "./types";

export const ProjectCard = ({ project }: { project: Project }) => (
	<div className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] snap-center">
		<Card className="h-full group hover:shadow-lg transition-all duration-300 overflow-hidden">
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
						{project.technologies.map((tech) => (
							<TechBadge key={tech} tech={tech as TechIconKey} />
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	</div>
);
