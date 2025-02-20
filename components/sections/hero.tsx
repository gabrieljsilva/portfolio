import { SocialLinks } from "@/components/social-link";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => (
	<div id="home" className="w-full">
		<div className="relative min-h-screen w-full overflow-hidden bg-background">
			<div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
				<div className="text-center">
					<h2 className="mb-2 inline-block rounded-full bg-muted px-4 py-1.5 text-sm font-semibold">
						Fullstack Software Developer
					</h2>
					<h1 className="mb-4 mt-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-7xl">
						Gabriel Silva
					</h1>
					<p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
						Crafting elegant solutions through code...
					</p>
					<div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Link href="#projects">
							<Button size="lg" className="min-w-[160px]">
								View Projects
							</Button>
						</Link>
						<Button size="lg" variant="outline" className="min-w-[160px]">
							Get in Touch
						</Button>
					</div>
					<SocialLinks />
				</div>
			</div>
		</div>
	</div>
);
