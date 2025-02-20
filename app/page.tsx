import { AboutMeSection } from "@/components/about-me-section";
import HeroSection from "@/components/hero-section";
import ProjectsShowcase from "@/components/projects.section";

export default function Page() {
	return (
		<div className="w-full">
			<HeroSection />
			<div className={"flex justify-center dark:bg-grid-small-white/[0.2]"}>
				<div className={"container dark:bg-grid-small-white/[0.2]"}>
					<AboutMeSection />
					<ProjectsShowcase />
				</div>
			</div>
		</div>
	);
}
