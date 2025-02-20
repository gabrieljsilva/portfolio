"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
	SiFirebase,
	SiGithub,
	SiLinkedin,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

const techIcons = {
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

export default function Page() {
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

	return (
		<div id={"home"} className="w-full">
			<div className="relative min-h-screen w-full overflow-hidden bg-background">
				<div className="absolute inset-0 z-0">
					<div className="relative h-full w-full bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
						<div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
						<div className="absolute left-[-20%] top-[-20%] h-[800px] w-[800px] animate-pulse rounded-full bg-primary/20 blur-3xl filter dark:bg-primary/10" />
						<div className="absolute right-[-20%] top-[50%] translate-y-[-50%] h-[600px] w-[600px] animate-pulse rounded-full bg-primary/20 blur-3xl filter dark:bg-primary/10" />
					</div>
				</div>

				<div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
					<div className="text-center">
						<h2 className="mb-2 inline-block rounded-full bg-muted px-4 py-1.5 text-sm font-semibold">
							Fullstack Software Developer
						</h2>
						<h1 className="mb-4 mt-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-7xl">
							Gabriel Silva
						</h1>
						<p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
							Crafting elegant solutions through code. Specialized in building
							modern web applications with cutting-edge technologies and
							exceptional user experiences.
						</p>

						<div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Button size="lg" className="min-w-[160px]">
								View Projects
							</Button>
							<Button size="lg" variant="outline" className="min-w-[160px]">
								Get in Touch
							</Button>
						</div>

						<div className="flex items-center justify-center gap-4">
							<Link
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
							>
								<span className="sr-only">GitHub Profile</span>
								<SiGithub className="h-6 w-6" />
							</Link>
							<Link
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
							>
								<span className="sr-only">LinkedIn Profile</span>
								<SiLinkedin className="h-6 w-6" />
							</Link>
							<Link
								href="mailto:contact@example.com"
								className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
							>
								<span className="sr-only">Email Contact</span>
								<Mail className="h-6 w-6" />
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div
				id={"about"}
				className={"flex justify-center dark:bg-grid-small-white/[0.2]"}
			>
				<div className={"container dark:bg-grid-small-white/[0.2]"}>
					<section className="w-full relative overflow-hidden dark:bg-grid-small-white/[0.2] py-24">
						<div className="absolute inset-0 -z-10 opacity-5">
							<div className="absolute right-20 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
							<div className="absolute left-20 bottom-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
						</div>

						<div className="container mx-auto px-4 md:px-6">
							<div className="flex flex-col items-start gap-8">
								<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
									About Me
								</h2>

								<div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
									<div className="space-y-6">
										<h3 className="text-2xl font-semibold tracking-tight">
											Gabriel de Jesus Silva
										</h3>

										<div className="flex items-center text-muted-foreground">
											<MapPin className="mr-2 h-4 w-4" />
											Senhor do Bonfim, Bahia, Brazil
										</div>

										<div className="space-y-4 text-base/relaxed text-muted-foreground">
											<p>
												I'm a passionate Full Stack Developer with over 5 years
												of experience, specializing in creating efficient
												technological solutions. My journey in technology began
												in 2018 as an intern, where I built the foundation that
												supports my work to this day.
											</p>

											<p>
												Throughout my career, I've had the privilege of working
												on significant projects for major healthcare
												institutions, including Hospital Israelita Albert
												Einstein and Fleury Health Network. This experience has
												shaped my approach to developing robust and reliable
												solutions.
											</p>

											<p>
												As an open source contributor, I'm committed to
												enhancing the JavaScript/TypeScript ecosystem by
												creating libraries and tools that help other developers.
												I believe in the power of community-driven development
												and continuous learning.
											</p>
										</div>
									</div>

									<div className="hidden xl:block relative aspect-square overflow-hidden rounded-full border bg-muted lg:h-[400px]">
										<img
											src="/placeholder.svg?height=400&width=400"
											alt="Profile"
											className="object-cover"
											width={400}
											height={400}
										/>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section id={"projects"} className="w-full py-12 to-muted/20">
						<div className="px-4 md:px-6 relative">
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
									className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
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
															const Icon =
																techIcons[tech as keyof typeof techIcons];
															return (
																<div
																	key={tech}
																	className="flex items-center gap-1.5 text-sm bg-muted px-2.5 py-1 rounded-full"
																>
																	<Icon className="h-4 w-4" />
																	<span className="text-xs font-medium">
																		{tech}
																	</span>
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
				</div>
			</div>
		</div>
	);
}
