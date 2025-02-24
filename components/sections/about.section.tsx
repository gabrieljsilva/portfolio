import { iconsMaps } from "@/constants/icons";
import { profile } from "@/constants/profile";

const { MapPin } = iconsMaps.misc;

export function AboutSection() {
  return (
	<section
		id="about"
		className="flex justify-center dark:bg-grid-small-white/[0.2]"
	>
		<div className="container dark:bg-grid-small-white/[0.2]">
			<div className="w-full relative overflow-hidden dark:bg-grid-small-white/[0.2] py-24">
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
									{profile.fullName}
								</h3>

								<div className="flex items-center text-muted-foreground">
									<MapPin className="mr-2 h-4 w-4" />
									{`${profile.location.city}, ${profile.location.state}, ${profile.location.country}`}
								</div>

								<div className="space-y-4 text-base/relaxed text-muted-foreground">
									{profile.resume.split('\n\n').map((paragraph) => (
										<p key={`p-${paragraph.slice(0, 20).replace(/\s+/g, '-')}`}>
											{paragraph}
										</p>
									))}
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
			</div>
		</div>
	</section>
  );
}
