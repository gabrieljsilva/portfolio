import ContactModal from "@/components/contact-modal";
import { SocialLinks } from "@/components/social-link";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { profile } from "@/constants/profile";

export const HeroSection = () => (
	<div id="home" className="w-full">
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
						{profile.role}
					</h2>
					<h1 className="mb-4 mt-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-7xl">
						{profile.name}
					</h1>
					<p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
						{profile.shortDescription}
					</p>
					<div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Link href="#projects">
							<Button size="lg" className="min-w-[160px]">
								View Projects
							</Button>
						</Link>
						<ContactModal />
					</div>
					<SocialLinks />
				</div>
			</div>
		</div>
	</div>
);
