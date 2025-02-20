import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-background">
			<div className="absolute inset-0 z-0">
				<div className="relative h-full w-full bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
					<div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
					<div className="absolute left-[-20%] top-[-20%] h-[800px] w-[800px] animate-pulse rounded-full bg-primary/20 blur-3xl filter dark:bg-primary/10" />
					<div className="absolute right-[-20%] bottom-[10%] h-[400px] w-[400px] animate-pulse rounded-full bg-primary/20 blur-3xl filter dark:bg-primary/10" />
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
							<Github className="h-6 w-6" />
						</Link>
						<Link
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
						>
							<span className="sr-only">LinkedIn Profile</span>
							<Linkedin className="h-6 w-6" />
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
	);
}
