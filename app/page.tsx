import { AboutMeSection } from "@/components/about-me-section";
import HeroSection from "@/components/hero-section";
import ProjectsShowcase from "@/components/projects.section";

export default function Page() {
	return (
		<div className="w-full">
			<HeroSection />
			<div className={"flex justify-center"}>
				<div className={"container"}>
					<AboutMeSection />
					<ProjectsShowcase />
				</div>
			</div>
		</div>
	);
}
