import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function AboutMeSection() {
	return (
		<section className="relative overflow-hidden bg-background py-24">
			{/* Decorative Elements */}
			<div className="absolute inset-0 -z-10 opacity-5">
				<div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
				<div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
			</div>

			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-start gap-8">
					{/* Section Title */}
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						About Me
					</h2>

					<div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
						{/* Main Content */}
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
									I'm a passionate Full Stack Developer with over 5 years of
									experience, specializing in creating efficient technological
									solutions. My journey in technology began in 2018 as an
									intern, where I built the foundation that supports my work to
									this day.
								</p>

								<p>
									Throughout my career, I've had the privilege of working on
									significant projects for major healthcare institutions,
									including Hospital Israelita Albert Einstein and Fleury Health
									Network. This experience has shaped my approach to developing
									robust and reliable solutions.
								</p>

								<p>
									As an open source contributor, I'm committed to enhancing the
									JavaScript/TypeScript ecosystem by creating libraries and
									tools that help other developers. I believe in the power of
									community-driven development and continuous learning.
								</p>
							</div>
						</div>

						{/* Profile Image */}
						<div className="relative aspect-square overflow-hidden rounded-full border bg-muted lg:h-[400px]">
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
	);
}
