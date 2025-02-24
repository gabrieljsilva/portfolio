"use client";
import Navbar from "@/components/sections/navbar";
import { AboutSection } from "@/components/sections/about.section";
import ExperienceSection from "@/components/sections/experiences.section";
import Footer from "@/components/sections/footer.section";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects.section";
import SkillsSection from "@/components/sections/skill.section";

export default function Page() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ExperienceSection />
			<SkillsSection />
			<Footer />
		</>
	);
}
