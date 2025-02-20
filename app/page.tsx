"use client";
import Navbar from "@/components/navbar";
import { AboutSection } from "@/components/sections/about.section";
import ExperienceSection from "@/components/sections/experiences.section";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects.section";
import SkillsSection from "@/components/sections/skill.section";
import { projects } from "@/components/types";

export default function Page() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ProjectsSection projects={projects} />
			<ExperienceSection />
			<SkillsSection />
		</>
	);
}
